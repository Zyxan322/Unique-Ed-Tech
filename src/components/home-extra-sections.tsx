import { useState } from "react";
import { ArrowRight, BookOpenCheck, Clock3, HeartHandshake, MessageCircle, Play, Youtube, MapPin, Navigation } from "lucide-react";
import { AppLink } from "@/components/app-link";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/section-reveal";
import { TiltCard } from "@/components/tilt-card";

const CHANNEL = "https://www.youtube.com/@DMChapter/videos";
const videos = ["_d0Dh5rIRAk", "HFeELMDvsGI", "96rhzLAIooo", "ip7wsClCAYY", "A9iYlDOtkoA", "hPaniDPQ9vQ"];
const dark = { background: "var(--footer)" };

export function YouTubeSection() {
  const [active, setActive] = useState(videos[0]!);
  return (
    <section id="youtube" style={dark} className="fog-section relative overflow-hidden py-24 text-primary-foreground md:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 size-[28rem] rounded-full bg-brand-red/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 size-[28rem] rounded-full bg-primary/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-brand-gold">On YouTube · @DMChapter</p>
              <h2 className="section-title text-primary-foreground">Watch Life at Unique EdTech</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/70">Celebrations, classroom moments, events and student achievements — straight from our official channel.</p>
            </div>
            <Button asChild variant="hero" size="xl"><a href={`${CHANNEL}?sub_confirmation=1`} target="_blank" rel="noopener noreferrer"><Youtube /> Subscribe</a></Button>
          </div>
        </SectionReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <SectionReveal direction="scale">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-2xl">
              <iframe key={active} className="aspect-video w-full" src={`https://www.youtube-nocookie.com/embed/${active}?rel=0`} title="Unique EdTech video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 gap-4 content-start">
            {videos.map((id, i) => (
              <SectionReveal key={id} delay={i * 80}>
                <TiltCard className={`overflow-hidden rounded-xl border bg-primary-foreground/5 ${id === active ? "border-brand-gold" : "border-primary-foreground/15"}`}>
                  <button type="button" onClick={() => setActive(id)} aria-label={`Play video ${i + 1}`} className="card-media relative block w-full">
                    <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={`Unique EdTech video ${i + 1}`} loading="lazy" width={480} height={360} className="aspect-video w-full object-cover" />
                    <span className="absolute inset-0 grid place-items-center bg-foreground/25"><span className="grid size-10 place-items-center rounded-full bg-brand-red text-primary-foreground shadow-lg"><Play className="size-4 fill-current" /></span></span>
                  </button>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
        <a href={CHANNEL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 font-bold text-brand-gold hover:underline">View all videos on YouTube <ArrowRight className="size-4" /></a>
      </div>
    </section>
  );
}

export function ParentPartnershipSection() {
  const items = [
    [HeartHandshake, "Parent partnership", "Regular communication keeps families involved in every stage of learning."],
    [BookOpenCheck, "Progress you can see", "Clear feedback on academic growth, skills and personal development."],
    [Clock3, "A structured day", "Balanced routines of lessons, activities, technology and reflection."],
    [MessageCircle, "Always reachable", "Talk to us on WhatsApp at 0300 4140855 or email uniquedmchapter@gmail.com."],
  ] as const;
  return (
    <section style={dark} className="fog-section relative overflow-hidden py-24 text-primary-foreground md:py-32">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 size-[32rem] rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionReveal>
          <p className="eyebrow text-brand-gold">For families</p>
          <h2 className="section-title text-primary-foreground">Parents' Dream Is Our Responsibility</h2>
        </SectionReveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, text], i) => (
            <SectionReveal key={title} delay={i * 100}>
              <TiltCard className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm">
                <div className="card-icon mb-10 grid size-12 place-items-center rounded-xl bg-brand-red text-primary-foreground"><Icon /></div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/65">{text}</p>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={200}><Button asChild variant="heroOutline" size="xl" className="mt-12"><AppLink href="/contact">Contact us <ArrowRight /></AppLink></Button></SectionReveal>
      </div>
    </section>
  );
}

const MAP_QUERY = "Unique School System DM Chapter G Magnolia Gujranwala";
export function LocationSection() {
  const q = encodeURIComponent(MAP_QUERY);
  return (
    <section className="fog-section py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[.9fr_1.1fr]">
        <SectionReveal direction="right">
          <p className="eyebrow">Find us</p>
          <h2 className="section-title">In the Heart of Gujranwala</h2>
          <p className="section-copy">Visit Unique School System & Science Academy, DM Chapter G, Magnolia — easy to reach and ready to welcome your family.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="premium" size="xl"><a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noreferrer"><Navigation /> Get directions</a></Button>
            <Button asChild variant="premiumOutline" size="xl"><a href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noreferrer"><MapPin /> Open in Maps</a></Button>
          </div>
        </SectionReveal>
        <SectionReveal direction="scale">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <iframe title="Unique EdTech DM Chapter G, Magnolia location map" src={`https://www.google.com/maps?q=${q}&output=embed`} className="aspect-[4/3] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
