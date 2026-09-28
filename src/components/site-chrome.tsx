import { useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronUp, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/app-link";
import { SectionReveal } from "@/components/section-reveal";
import logo from "@/assets/logo.jpg";

const nav = [
  ["Home", "/"], ["About", "/about"], ["Academics", "/academics"], ["Programs", "/programs"],
  ["Campus", "/campus-life"], ["Admissions", "/admissions"], ["Activities", "/activities"],
  ["Faculty", "/faculty"], ["Gallery", "/gallery"], ["Resources", "/resources"], ["Contact", "/contact"],
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
    };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  return <div className="min-h-dvh bg-background text-foreground">
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || pathname !== "/" ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-xl" : "bg-background/80 backdrop-blur-md"}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className={`mx-auto grid max-w-[1480px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 transition-all md:px-6 ${scrolled ? "h-[70px]" : "h-[82px]"}`}>
        <AppLink href="/" aria-label="Unique EdTech home" className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-border bg-background p-1 shadow-sm transition-transform hover:scale-105">
          <img src={logo} alt="Unique EdTech School System crest" width={58} height={58} className="h-full w-full object-contain" />
        </AppLink>
        <nav aria-label="Primary navigation" className="hidden min-w-0 items-center justify-center gap-4 xl:flex 2xl:gap-6">
          {nav.map(([label, to]) => <AppLink key={to} href={to} activeOptions={{ exact: to === "/" }} className="whitespace-nowrap text-[12px] font-semibold text-foreground/75 transition-colors hover:text-brand-red data-[status=active]:text-brand-red">{label}</AppLink>)}
        </nav>
        <div className="flex shrink-0 items-center justify-end gap-2">
          <Button asChild variant="premiumOutline" className="hidden h-10 lg:inline-flex"><AppLink href="/contact">Contact us</AppLink></Button>
          <Button asChild variant="premium" className="h-10"><AppLink href="/admissions/apply">Apply <ArrowRight /></AppLink></Button>
          <Button variant="ghost" size="icon" aria-label="Open navigation" onClick={() => setOpen(true)} className="min-h-11 min-w-11 xl:hidden"><Menu /></Button>
        </div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-[60] bg-primary p-6 text-primary-foreground xl:hidden">
      <div className="flex items-center justify-between"><img src={logo} alt="" width={64} height={64} className="h-16 w-16 rounded-2xl bg-background object-contain p-1" /><Button variant="ghost" size="icon" aria-label="Close navigation" onClick={() => setOpen(false)} className="min-h-11 min-w-11 text-primary-foreground hover:bg-primary-foreground/10"><X /></Button></div>
      <nav aria-label="Mobile navigation" className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6">{nav.map(([label, to]) => <AppLink key={to} href={to} className="font-display text-2xl font-bold">{label}</AppLink>)}</nav>
      <div className="mt-10 flex gap-3"><Button asChild variant="hero"><AppLink href="/admissions/apply">Apply now</AppLink></Button><Button asChild variant="heroOutline"><AppLink href="/contact">Contact us</AppLink></Button></div>
    </div>}
    <main className="overflow-x-clip">{children}</main>
    <footer className="premium-footer text-primary-foreground">
      <div className="footer-cloud" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionReveal><div className="footer-cta grid gap-8 px-7 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-10"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-brand-gold">Admissions · 2026</p><h2 className="max-w-3xl text-4xl font-extrabold md:text-6xl">Let's build a brighter future together.</h2><p className="mt-5 max-w-2xl text-sm leading-6 text-primary-foreground/65">Begin a learning journey shaped by academic purpose, technology, creativity and confidence.</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="hero" size="xl"><AppLink href="/admissions/apply">Apply now <ArrowRight /></AppLink></Button><Button asChild variant="heroOutline" size="xl"><AppLink href="/contact">Contact us <ArrowRight /></AppLink></Button></div></div></SectionReveal>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,1fr)]">
          <SectionReveal direction="scale"><div><div className="footer-logo-shell"><img src={logo} alt="Unique EdTech crest" width={82} height={82} className="h-20 w-20 object-contain"/></div><h3 className="mt-6 font-display text-xl font-bold">Unique EdTech</h3><p className="mt-2 max-w-xs text-sm leading-6 text-primary-foreground/55">School System · DM Chapter G, Magnolia<br/>Learning with purpose. Creating with confidence.</p></div></SectionReveal>
          {[["Academics",[["Play Group","/academics/play-group"],["Nursery","/academics/nursery"],["Prep","/academics/prep"],["Grades 1–5","/academics"],["Grades 6–9","/academics"]]],["Programs",[["Information Technology","/programs/information-technology"],["Coding","/programs/coding"],["Robotics","/programs/robotics"],["STEM","/programs/stem"],["Artificial Intelligence","/programs/artificial-intelligence"]]],["Explore",[["About","/about"],["Campus","/campus-life"],["Activities","/activities"],["Gallery","/gallery"],["News & Events","/news"],["Contact","/contact"]]]].map(([heading, items], index) => <SectionReveal key={heading as string} delay={(index + 1) * 90}><div><h3 className="mb-6 text-xs font-bold uppercase tracking-[.18em] text-brand-gold">{heading as string}</h3><ul className="space-y-3 text-sm text-primary-foreground/55">{(items as string[][]).map((item)=>{const label=item[0] ?? ""; const to=item[1] ?? "/"; return <li key={`${label}-${to}`}><AppLink href={to} className="footer-link">{label}<ArrowRight className="size-3"/></AppLink></li>})}</ul></div></SectionReveal>)}
        </div>
        <SectionReveal><div className="footer-contact-grid"><div><span className="footer-contact-icon"><MapPin/></span><div><p className="footer-contact-label">Visit</p><p>DM Chapter G, Magnolia</p></div></div><a href="tel:+923004140855"><span className="footer-contact-icon"><Phone/></span><div><p className="footer-contact-label">Call</p><p>0300 4140855</p></div></a><a href="mailto:uniquedmchapter@gmail.com"><span className="footer-contact-icon"><Mail/></span><div><p className="footer-contact-label">Email</p><p className="break-all">uniquedmchapter@gmail.com</p></div></a></div></SectionReveal>
        <div className="flex flex-col justify-between gap-6 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/45 md:flex-row md:items-center"><p>© 2026 Unique EdTech — DM Chapter G, Magnolia</p></div>
      </div>
    </footer>
    <a href="https://wa.me/923004140855" target="_blank" rel="noreferrer" aria-label="Chat with Unique EdTech on WhatsApp" className="group fixed bottom-5 right-5 z-40 flex min-h-12 items-center gap-2 rounded-full bg-primary px-4 text-primary-foreground shadow-xl transition-transform hover:-translate-y-1"><MessageCircle className="size-5"/><span className="hidden text-sm font-semibold sm:inline">Chat with us</span></a>
    {scrolled && <Button size="icon" variant="premiumOutline" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-20 right-5 z-40 min-h-11 min-w-11 rounded-full"><ChevronUp /></Button>}
  </div>;
}