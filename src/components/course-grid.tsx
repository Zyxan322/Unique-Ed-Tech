import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ApplyForm } from "@/components/apply-form";
import { TiltCard } from "@/components/tilt-card";
import { SectionReveal } from "@/components/section-reveal";
import { grades, images, programs } from "@/lib/site-data";

const titleCase = (v: string) => v.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
const gradeImgs = [images.creative, images.mentoring, images.classroom, images.library, images.campus, images.sports];
const progImgs: Record<string, string> = { "information-technology": images.classroom, "computer-science": images.coding, coding: images.coding, robotics: images.robotics, "artificial-intelligence": images.classroom, stem: images.robotics, "digital-literacy": images.library, "creative-design": images.creative };

const groups = [
  { label: "Academic levels", items: grades.map((g, i) => ({ name: titleCase(g), image: gradeImgs[i % gradeImgs.length]!, text: i < 3 ? "Early years foundations through play, language and discovery." : "Core subjects, reading, reasoning and confident expression." })) },
  { label: "Technology & STEM programs", items: programs.map((p) => ({ name: titleCase(p), image: progImgs[p] ?? images.coding, text: "Hands-on projects that build digital skills, problem-solving and creativity." })) },
];

export function CourseGrid() {
  const [course, setCourse] = useState<string | null>(null);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal><p className="eyebrow">All courses</p><h2 className="section-title">Choose a course and apply.</h2></SectionReveal>
        {groups.map((g) => (
          <div key={g.label} className="mt-14">
            <h3 className="text-sm font-bold uppercase tracking-[.2em] text-brand-gold">{g.label}</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((c) => (
                <TiltCard key={c.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background">
                  <div className="aspect-[4/3] overflow-hidden"><img src={c.image} alt={c.name} loading="lazy" className="card-media h-full w-full object-cover" /></div>
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="text-lg font-bold">{c.name}</h4>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{c.text}</p>
                    <button type="button" onClick={() => setCourse(c.name)} className="card-cta mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red">Explore course <ArrowRight className="card-arrow size-4" /></button>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Dialog open={!!course} onOpenChange={(o) => !o && setCourse(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          <DialogTitle className="sr-only">Apply for {course}</DialogTitle>
          {course && <ApplyForm key={course} initialCourse={course} compact />}
        </DialogContent>
      </Dialog>
    </section>
  );
}
