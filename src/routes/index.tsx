import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AppLink } from "@/components/app-link";
import { HomepageSections } from "@/components/homepage-sections";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Unique EdTech | DM Chapter G, Magnolia" },
    { name: "description", content: "Unique EdTech provides a modern learning environment combining academic excellence, technology, creativity, STEM and future-ready education." },
    { property: "og:title", content: "Unique EdTech | DM Chapter G, Magnolia" },
    { property: "og:description", content: "A modern learning environment combining academic excellence, technology, creativity, STEM and future-ready education." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: "Unique EdTech — DM Chapter G, Magnolia", telephone: "+923004140855", email: "uniquedmchapter@gmail.com" }) }] }),
  component: HomePage,
});

function HomePage() {
  const [slide, setSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = heroRef.current; if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const p = Math.min(1, Math.max(0, window.scrollY / el.offsetHeight)); el.style.setProperty("--hero-p", p.toFixed(3)); }); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  useEffect(() => { const id = window.setInterval(() => setSlide((v) => (v + 1) % heroSlides.length), 6000); return () => window.clearInterval(id); }, []);
  const active = heroSlides[slide] ?? heroSlides[0];
  if (!active) return null;
  return <>
    <section ref={heroRef} className="hero-3d relative h-[100svh] min-h-[680px] overflow-hidden bg-primary text-hero-foreground">
      <div className="hero-layer-bg absolute inset-0">{heroSlides.map((item, index) => <img key={item.title} src={item.image} alt={index === slide ? item.eyebrow : ""} width={1536} height={1024} loading={index === 0 ? "eager" : "lazy"} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === slide ? "hero-zoom opacity-100" : "opacity-0"}`} />)}</div>
      <div aria-hidden className="hero-particles pointer-events-none absolute inset-0">{Array.from({ length: 14 }, (_, i) => <span key={i} style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, animationDelay: `${i * -1.3}s`, width: 4 + (i % 4) * 3, height: 4 + (i % 4) * 3 }} />)}</div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.2_0.06_285/.82)_0%,oklch(0.2_0.06_285/.48)_42%,transparent_76%)]" />
      <div className="hero-layer-fg relative mx-auto flex h-full max-w-7xl items-center px-6 pt-20"><div key={slide} className="reveal-up max-w-3xl"><p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-brand-gold">Unique EdTech · DM Chapter G, Magnolia</p><p className="mb-4 text-sm font-semibold uppercase tracking-[.18em] text-primary-foreground/80">{active.eyebrow}</p><h1 className="text-5xl font-extrabold leading-[1.04] md:text-7xl lg:text-[82px]">{active.title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/85 md:text-lg">{active.text}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="xl"><AppLink href="/academics">Explore academics <ArrowRight /></AppLink></Button><Button asChild variant="heroOutline" size="xl"><AppLink href="/admissions/apply">Apply now <ArrowRight /></AppLink></Button></div></div></div>
      <div role="group" aria-label="Hero image navigation" className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1">
        {heroSlides.map((item, index) => <button key={item.title} type="button" aria-label={`Show image ${index + 1}: ${item.title}`} aria-current={index === slide ? "true" : undefined} onClick={() => setSlide(index)} className="relative grid min-h-11 min-w-8 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
          {index === slide && <span aria-hidden="true" className="absolute size-4 rounded-full bg-brand-gold/50 motion-safe:animate-ping" />}
          <span aria-hidden="true" className={`relative rounded-full transition-all ${index === slide ? "size-2.5 bg-brand-gold" : "size-1.5 bg-primary-foreground/70"}`} />
        </button>)}
      </div>
      <div className="hero-layer-float absolute right-8 top-36 hidden gap-3 lg:flex"><span className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-xs font-semibold backdrop-blur-md">Future-Ready Learning</span><span className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-xs font-semibold backdrop-blur-md">STEM + Technology</span></div>
    </section>

    <HomepageSections />
  </>;
}