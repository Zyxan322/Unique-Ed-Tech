import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { AppLink } from "@/components/app-link";
import { HomepageSections } from "@/components/homepage-sections";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Unique EdTech | DM Chapter G, Magnolia" },
    { name: "description", content: "Unique EdTech provides a modern learning environment combining academic excellence, technology, creativity, STEM and future-ready education." },
    { property: "og:title", content: "Unique EdTech | DM Chapter G, Magnolia" },
    { property: "og:description", content: "A modern learning environment combining academic excellence, technology, creativity, STEM and future-ready education." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [
    { rel: "canonical", href: "/" },
    { rel: "preload", href: "/hero-video.mp4", as: "video", type: "video/mp4" },
  ], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: "Unique EdTech — DM Chapter G, Magnolia", telephone: "+923004140855", email: "uniquedmchapter@gmail.com" }) }] }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = heroRef.current; if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const p = Math.min(1, Math.max(0, window.scrollY / el.offsetHeight));
        el.style.setProperty("--hero-p", p.toFixed(3));
      });
    };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  // Ensure video plays promptly across all browsers and power-saving modes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback handled gracefully
      });
    }
  }, []);

  return <>
    <section ref={heroRef} className="hero-3d relative h-[100svh] min-h-[680px] overflow-hidden bg-primary text-hero-foreground">
      {/* Background Video Layer */}
      <div className="hero-layer-bg absolute inset-0">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div aria-hidden className="hero-particles pointer-events-none absolute inset-0">{Array.from({ length: 14 }, (_, i) => <span key={i} style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, animationDelay: `${i * -1.3}s`, width: 4 + (i % 4) * 3, height: 4 + (i % 4) * 3 }} />)}</div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.2_0.06_285/.85)_0%,oklch(0.2_0.06_285/.52)_45%,oklch(0.2_0.06_285/.35)_100%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="hero-layer-fg relative mx-auto flex h-full max-w-7xl items-center px-6 pt-20">
        <div className="reveal-up max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-brand-gold">Unique EdTech · DM Chapter G, Magnolia</p>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[.18em] text-primary-foreground/80">Where Learning Becomes Limitless</p>
          <h1 className="text-5xl font-extrabold leading-[1.04] md:text-7xl lg:text-[82px]">Welcome to Unique EdTech.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/90 md:text-lg">
            A premier campus where academic excellence, future-ready technology, STEM, and character development flourish together.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl"><AppLink href="/academics">Explore academics <ArrowRight /></AppLink></Button>
            <Button asChild variant="heroOutline" size="xl"><AppLink href="/admissions/apply">Apply now <ArrowRight /></AppLink></Button>
          </div>
        </div>
      </div>

      <div className="hero-layer-float absolute right-8 top-36 hidden gap-3 lg:flex">
        <span className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-xs font-semibold backdrop-blur-md">Future-Ready Learning</span>
        <span className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-xs font-semibold backdrop-blur-md">STEM + Technology</span>
      </div>
    </section>

    <HomepageSections />
  </>;
}