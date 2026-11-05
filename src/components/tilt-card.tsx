import { useRef, type HTMLAttributes, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  const move = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    node.style.setProperty("--tilt-x", `${(0.5 - y) * 8}deg`);
    node.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
    node.style.setProperty("--shine-x", `${x * 100}%`);
    node.style.setProperty("--shine-y", `${y * 100}%`);
    node.style.setProperty("--media-x", `${(0.5 - x) * 10}px`);
    node.style.setProperty("--media-y", `${(0.5 - y) * 8}px`);
  };

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.removeProperty("--tilt-x");
    node.style.removeProperty("--tilt-y");
    node.style.removeProperty("--media-x");
    node.style.removeProperty("--media-y");
  };

  return <article ref={ref} onPointerMove={move} onPointerLeave={reset} className={cn("premium-card group", className)} {...props}>{children}<span aria-hidden className="card-shine" /></article>;
}