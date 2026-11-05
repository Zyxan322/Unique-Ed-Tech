import { memo } from "react";

/**
 * Opera-Inspired Soft Red & Blue Aurora Background
 *
 * A continuously animated, layered Aurora using ONLY two primary colors:
 *   - Soft Red:  #E88A98
 *   - Soft Blue: #78A9E8
 *
 * White background remains dominant. Four independent gradient layers
 * move at different speeds, directions, and opacities to create a
 * natural multidimensional Aurora effect — like Opera Browser's live theme.
 *
 * GPU-accelerated via CSS transform/opacity keyframes.
 * Respects prefers-reduced-motion.
 */
export const AuroraBackground = memo(function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden select-none"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Pure white base */}
      <div className="absolute inset-0 bg-white" />

      {/* ── Layer 1: Soft Red — large blob, left → right drift, 25s ── */}
      <div className="aurora-layer aurora-red" />

      {/* ── Layer 2: Soft Blue — large blob, right → left + diagonal, 32s ── */}
      <div className="aurora-layer aurora-blue" />

      {/* ── Layer 3: Blended Red+Blue — diagonal overlap, 20s ── */}
      <div className="aurora-layer aurora-blend" />

      {/* ── Layer 4: Atmospheric depth — very slow drift, 38s ── */}
      <div className="aurora-layer aurora-depth" />

      {/* Minimal white veil — just enough to keep text crisp without washing out Aurora */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.32) 60%, rgba(255,255,255,0.50) 100%)",
        }}
      />
    </div>
  );
});
