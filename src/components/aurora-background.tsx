import { memo } from "react";

/**
 * Opera-inspired Light Aurora Background
 *
 * Continuous, smooth flowing pastel ribbons on a predominantly pearl-white canvas.
 * - Soft Sky Blue: #C9E5FF
 * - Ice Blue: #D9EEFF
 * - Lavender: #E5DDFB
 * - Soft Lilac: #EEE7FF
 * - Blush Pink: #F9E5EF (subtle)
 * - Pearl White base: #FFFFFF
 *
 * Uses GPU-accelerated CSS keyframe transforms (translate3d, rotate, scale) with
 * high hardware efficiency, will-change, and reduced-motion graceful fallback.
 */
export const AuroraBackground = memo(function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-white select-none"
    >
      {/* Base warm/clean light gradient foundation */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAFBFD] to-[#F3F6FA]" />

      {/* Aurora Container with multiple overlapping, morphing ribbons */}
      <div className="aurora-container absolute inset-0">
        {/* Ribbon 1: Sky Blue primary wave — large, sweeping diagonal */}
        <div className="aurora-ribbon aurora-ribbon-1" />

        {/* Ribbon 2: Ice Blue & Lavender wave — flowing counter-diagonal */}
        <div className="aurora-ribbon aurora-ribbon-2" />

        {/* Ribbon 3: Lilac & Lavender soft veil — horizontal gentle drift */}
        <div className="aurora-ribbon aurora-ribbon-3" />

        {/* Ribbon 4: Very subtle Blush Pink whisper — occasional soft warmth */}
        <div className="aurora-ribbon aurora-ribbon-4" />

        {/* Ribbon 5: High-altitude Ice Blue crest — upper canvas illumination */}
        <div className="aurora-ribbon aurora-ribbon-5" />
      </div>

      {/* Soft atmospheric white overlay to guarantee dominant white identity & crisp text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.72)_70%,rgba(255,255,255,0.85)_100%)] backdrop-blur-[40px]" />
    </div>
  );
});

