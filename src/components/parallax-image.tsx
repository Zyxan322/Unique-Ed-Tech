import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const image = ref.current;
    if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = image.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      image.style.setProperty("--parallax-y", `${Math.max(-36, Math.min(36, progress * -44))}px`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <img ref={ref} src={src} alt={alt} width={1536} height={1024} loading="lazy" className={cn("parallax-media", className)} />;
}