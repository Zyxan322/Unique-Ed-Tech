import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionReveal } from "@/components/section-reveal";

const WHATSAPP_NUMBER = "923004140855";
const empty = { name: "", phone: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState<string | null>(null);
  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      "*New Contact Message — Unique EdTech, DM Chapter G, Magnolia*",
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Email:* ${form.email || "—"}`,
      `*Subject:* ${form.subject || "—"}`,
      "",
      `*Message:* ${form.message}`,
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(url);
  };

  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <SectionReveal>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-red">Get in touch</p>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">We'd love to hear from you.</h2>
          <p className="mt-4 text-muted-foreground">Fill in the form and pressing send will open WhatsApp with your message ready for the school office.</p>
          <div className="mt-8 space-y-4">
            <a href="tel:+923004140855" className="flex items-center gap-3 font-semibold"><Phone className="text-brand-red" /> 0300 4140855</a>
            <a href="mailto:uniquedmchapter@gmail.com" className="flex items-center gap-3 font-semibold"><Mail className="text-brand-red" /> uniquedmchapter@gmail.com</a>
          </div>
        </SectionReveal>
        {sent ? (
          <div className="rounded-2xl border border-border p-8 text-center">
            <CheckCircle2 className="mx-auto size-14 text-brand-red" />
            <h3 className="mt-5 text-3xl font-extrabold">Message ready to send.</h3>
            <p className="mt-3 text-muted-foreground">If WhatsApp did not open automatically, use the button below.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="premium" size="xl"><a href={sent} target="_blank" rel="noreferrer"><MessageCircle /> Open WhatsApp</a></Button>
              <Button variant="premiumOutline" size="xl" onClick={() => { setForm(empty); setSent(null); }}>Send another message</Button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-5 rounded-2xl border border-border p-6 sm:grid-cols-2 md:p-8">
            <F id="c-name" label="Full name" required value={form.name} onChange={set("name")} />
            <F id="c-phone" label="Phone number" type="tel" required value={form.phone} onChange={set("phone")} />
            <F id="c-email" label="Email (optional)" type="email" value={form.email} onChange={set("email")} />
            <F id="c-subject" label="Subject" value={form.subject} onChange={set("subject")} />
            <div className="sm:col-span-2">
              <Label htmlFor="c-message" className="mb-2 block">Message <span className="text-brand-red">*</span></Label>
              <Textarea id="c-message" rows={5} required value={form.message} onChange={set("message")} placeholder="How can we help you?" />
            </div>
            <Button type="submit" variant="premium" size="xl" className="sm:col-span-2 sm:w-auto sm:justify-self-start">Send on WhatsApp <ArrowRight /></Button>
          </form>
        )}
      </div>
    </section>
  );
}

function F({ id, label, value, onChange, type = "text", required }: { id: string; label: string; value: string; onChange: (e: { target: { value: string } }) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block">{label}{required && <span className="text-brand-red"> *</span>}</Label>
      <Input id={id} type={type} required={required} value={value} onChange={onChange} />
    </div>
  );
}
