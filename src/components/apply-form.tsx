import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionReveal } from "@/components/section-reveal";
import { grades, programs } from "@/lib/site-data";

const WHATSAPP_NUMBER = "923004140855";

const titleCase = (value: string) => value.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
const courseOptions = [...grades.map(titleCase), ...programs.map(titleCase)];

const emptyForm = {
  studentName: "",
  dateOfBirth: "",
  course: "",
  previousSchool: "",
  parentName: "",
  relation: "",
  phone: "",
  email: "",
  address: "",
  notes: "",
};

type FormState = typeof emptyForm;

export function ApplyForm({ initialCourse, compact }: { initialCourse?: string; compact?: boolean } = {}) {
  const [form, setForm] = useState<FormState>({ ...emptyForm, course: initialCourse ?? "" });
  const [sent, setSent] = useState<string | null>(null);
  const set = (key: keyof FormState) => (event: { target: { value: string } }) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const buildMessage = () =>
    [
      "*New Admission Application — Unique EdTech, DM Chapter G, Magnolia*",
      "",
      `*Student name:* ${form.studentName}`,
      `*Date of birth:* ${form.dateOfBirth || "—"}`,
      `*Course / class applied for:* ${form.course}`,
      `*Previous school:* ${form.previousSchool || "—"}`,
      "",
      `*Parent / guardian:* ${form.parentName}`,
      `*Relation:* ${form.relation || "—"}`,
      `*Phone:* ${form.phone}`,
      `*Email:* ${form.email || "—"}`,
      `*Address:* ${form.address || "—"}`,
      "",
      `*Message:* ${form.notes || "—"}`,
    ].join("\n");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const message = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(url);
  };

  if (sent) {
    return (
      <section className={compact ? "py-2" : "py-24"}>
        <div className={compact ? "text-center" : "mx-auto max-w-3xl px-6 text-center"}>
          <CheckCircle2 className="mx-auto size-16 text-brand-red" />
          <h2 className="mt-6 text-4xl font-extrabold">Application ready to send.</h2>
          <p className="mt-4 text-muted-foreground">Your details have been turned into a WhatsApp message. If the chat did not open automatically, use the button below and press send.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="premium" size="xl"><a href={sent} target="_blank" rel="noreferrer"><MessageCircle /> Open WhatsApp</a></Button>
            <Button variant="premiumOutline" size="xl" onClick={() => { setForm(emptyForm); setSent(null); }}>Submit another application</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={compact ? "py-2" : "py-24"}>
      <div className={compact ? "" : "mx-auto max-w-3xl px-6"}>
        <SectionReveal>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-red">Admission form</p>
          <h2 className={compact ? "mt-3 text-3xl font-extrabold" : "mt-4 text-4xl font-extrabold md:text-5xl"}>{initialCourse ? `Apply for ${initialCourse}` : "Apply for admission."}</h2>
          <p className="mt-4 text-muted-foreground">Fill in the details, choose the course, and pressing submit will prepare a complete WhatsApp message for the school office.</p>
        </SectionReveal>

        <form onSubmit={submit} className="mt-8 space-y-10">
          <fieldset className="rounded-2xl border border-border p-6 md:p-8">
            <legend className="px-2 text-sm font-bold uppercase tracking-wider text-brand-gold">01 Student information</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="studentName" label="Student name" required value={form.studentName} onChange={set("studentName")} />
              <Field id="dateOfBirth" label="Date of birth" type="date" value={form.dateOfBirth} onChange={set("dateOfBirth")} />
              <div className="sm:col-span-2">
                <Label htmlFor="course" className="mb-2 block">Course / class <span className="text-brand-red">*</span></Label>
                <select id="course" required value={form.course} onChange={set("course")} className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus-visible:border-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold/30">
                  <option value="">Select a course</option>
                  <optgroup label="Academic levels">{grades.map((g) => <option key={g} value={titleCase(g)}>{titleCase(g)}</option>)}</optgroup>
                  <optgroup label="Technology programs">{programs.map((p) => <option key={p} value={titleCase(p)}>{titleCase(p)}</option>)}</optgroup>
                </select>
              </div>
              <Field id="previousSchool" label="Previous school (optional)" value={form.previousSchool} onChange={set("previousSchool")} className="sm:col-span-2" />
            </div>
          </fieldset>

          <fieldset className="rounded-2xl border border-border p-6 md:p-8">
            <legend className="px-2 text-sm font-bold uppercase tracking-wider text-brand-gold">02 Parent / guardian & contact</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="parentName" label="Parent / guardian name" required value={form.parentName} onChange={set("parentName")} />
              <Field id="relation" label="Relation" value={form.relation} onChange={set("relation")} />
              <Field id="phone" label="Phone number" type="tel" required value={form.phone} onChange={set("phone")} />
              <Field id="email" label="Email (optional)" type="email" value={form.email} onChange={set("email")} />
              <Field id="address" label="Address" value={form.address} onChange={set("address")} className="sm:col-span-2" />
            </div>
          </fieldset>

          <fieldset className="rounded-2xl border border-border p-6 md:p-8">
            <legend className="px-2 text-sm font-bold uppercase tracking-wider text-brand-gold">03 Anything else</legend>
            <Label htmlFor="notes" className="mb-2 block">Message (optional)</Label>
            <Textarea id="notes" rows={4} value={form.notes} onChange={set("notes")} placeholder="Questions or additional information for the admissions team" />
          </fieldset>

          <Button type="submit" variant="premium" size="xl" className="w-full sm:w-auto">Submit & send on WhatsApp <ArrowRight /></Button>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, value, onChange, type = "text", required, className }: { id: string; label: string; value: string; onChange: (e: { target: { value: string } }) => void; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block">{label}{required && <span className="text-brand-red"> *</span>}</Label>
      <Input id={id} type={type} required={required} value={value} onChange={onChange} className="transition focus-visible:border-brand-gold" />
    </div>
  );
}

export { courseOptions };
