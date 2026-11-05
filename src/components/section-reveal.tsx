import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

export function SectionReveal({ children, className, delay = 0, direction = "up" }: { children: ReactNode; className?: string; delay?: number; direction?: RevealDirection }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const hidden = {
    up: "translate-y-9 opacity-0 blur-[2px]",
    down: "-translate-y-9 opacity-0 blur-[2px]",
    left: "translate-x-10 opacity-0 blur-[2px]",
    right: "-translate-x-10 opacity-0 blur-[2px]",
    scale: "scale-[.96] opacity-0 blur-[2px]",
  }[direction];
  return <div ref={ref} style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }} className={cn("transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transform-none motion-reduce:blur-none", visible ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-none" : hidden, className)}>{children}</div>;
}