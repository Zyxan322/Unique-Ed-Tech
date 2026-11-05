import { memo } from "react";

/**
 * Opera-Inspired Premium Aurora — Soft Red & Blue Flowing Light Ribbons
 *
 * SVG-based flowing curved ribbon formations with Gaussian blur,
 * creating a continuous atmospheric light effect similar to Opera Browser's
 * live Aurora theme — adapted for a WHITE background website.
 *
 * Colors:
 *   Red  — Rose:    #E8A0AC  |  Muted: #D98698  |  Blush: #F1C2CC
 *   Blue — SkyBlue: #94BCEB  |  Muted: #789FD0  |  Ice:   #C0D9F5
 *
 * 6 independent SVG ribbon layers, each with its own animation duration,
 * direction, and movement pattern. GPU-accelerated CSS transform animations.
 * Respects prefers-reduced-motion.
 */
export const AuroraBackground = memo(function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden select-none"
    >
      {/* Pure white canvas */}
      <div className="absolute inset-0 bg-white" />

      {/* ── SVG Aurora Ribbon System ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ── Blur filters — large filter region to avoid clipping ── */}
          <filter id="af-b40" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
          <filter id="af-b55" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="42" />
          </filter>
          <filter id="af-b70" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="58" />
          </filter>

          {/* ── Red Gradients ── */}
          {/* Ribbon gradient: fades in from left, peaks in center, fades out */}
          <linearGradient id="lg-r1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%"   stopColor="#F1C2CC" stopOpacity="0" />
            <stop offset="18%"  stopColor="#E8A0AC" stopOpacity="0.9" />
            <stop offset="52%"  stopColor="#D98698" stopOpacity="1" />
            <stop offset="82%"  stopColor="#E8A0AC" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F1C2CC" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="lg-r2" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%"   stopColor="#E8A0AC" stopOpacity="0" />
            <stop offset="28%"  stopColor="#D98698" stopOpacity="0.95" />
            <stop offset="62%"  stopColor="#E8A0AC" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#F1C2CC" stopOpacity="0" />
          </linearGradient>

          {/* ── Blue Gradients ── */}
          <linearGradient id="lg-b1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%"   stopColor="#C0D9F5" stopOpacity="0" />
            <stop offset="22%"  stopColor="#94BCEB" stopOpacity="0.9" />
            <stop offset="58%"  stopColor="#789FD0" stopOpacity="1" />
            <stop offset="84%"  stopColor="#94BCEB" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C0D9F5" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="lg-b2" x1="100%" y1="30%" x2="0%" y2="70%">
            <stop offset="0%"   stopColor="#C0D9F5" stopOpacity="0" />
            <stop offset="30%"  stopColor="#94BCEB" stopOpacity="0.95" />
            <stop offset="68%"  stopColor="#789FD0" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#C0D9F5" stopOpacity="0" />
          </linearGradient>

          {/* ── Blended Red+Blue gradient (soft lavender-ish center) ── */}
          <linearGradient id="lg-blend" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%"   stopColor="#E8A0AC" stopOpacity="0" />
            <stop offset="32%"  stopColor="#C4A8C8" stopOpacity="0.9" />
            <stop offset="62%"  stopColor="#94BCEB" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C0D9F5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/*
         * ══════════════════════════════════════════════════════════════
         * RIBBON 1 — Main Red Ribbon
         * Wide curved band sweeping through upper-center area.
         * Animation: horizontal drift left→right, mild vertical undulation.
         * Cycle: 28s   Opacity: 0.14
         * ══════════════════════════════════════════════════════════════
         */}
        <g className="ar-r1" filter="url(#af-b40)" opacity="0.32">
          <path
            d="
              M -300 230
              C  180 110  560 320  900 215
              C 1080 165 1270 285 1740 195
              L 1740 390
              C 1270 460 1080 335  900 390
              C  560 490  180 265 -300 405
              Z
            "
            fill="url(#lg-r1)"
          />
        </g>

        {/*
         * ══════════════════════════════════════════════════════════════
         * RIBBON 2 — Main Blue Ribbon
         * Wide diagonal ribbon flowing from upper-right downward.
         * Animation: gentle counter-drift to red ribbon.
         * Cycle: 35s   Opacity: 0.15
         * ══════════════════════════════════════════════════════════════
         */}
        <g className="ar-b1" filter="url(#af-b55)" opacity="0.34">
          <path
            d="
              M  580  -90
              C  790   40 1000 185 1200 315
              C 1320  395 1480 425 1740 405
              L 1740  575
              C 1480  590 1320 550 1200 460
              C 1000  320  790 165  580  75
              Z
            "
            fill="url(#lg-b1)"
          />
        </g>

        {/*
         * ══════════════════════════════════════════════════════════════
         * RIBBON 3 — Secondary Red Ribbon (lower)
         * Softer, curving ribbon through the lower half of the page.
         * Animation: slow diagonal drift.
         * Cycle: 23s   Opacity: 0.10
         * ══════════════════════════════════════════════════════════════
         */}
        <g className="ar-r2" filter="url(#af-b55)" opacity="0.26">
          <path
            d="
              M -300 530
              C  140 435  510 585  860 505
              C 1055 462 1285 545 1740 490
              L 1740 668
              C 1285 712 1055 625  860 672
              C  510 740  140 582 -300 686
              Z
            "
            fill="url(#lg-r2)"
          />
        </g>

        {/*
         * ══════════════════════════════════════════════════════════════
         * RIBBON 4 — Secondary Blue Ribbon (upper right)
         * Lighter ribbon floating in the upper-right region.
         * Animation: drifts toward upper-left.
         * Cycle: 30s   Opacity: 0.11
         * ══════════════════════════════════════════════════════════════
         */}
        <g className="ar-b2" filter="url(#af-b40)" opacity="0.28">
          <path
            d="
              M  760 -155
              C  915  -55 1085  65 1265 135
              C 1385  175 1525 155 1740  90
              L 1740  272
              C 1525  328 1385 338 1265 294
              C 1085  216  915  85  760  10
              Z
            "
            fill="url(#lg-b2)"
          />
        </g>

        {/*
         * ══════════════════════════════════════════════════════════════
         * RIBBON 5 — Blended Center Ribbon
         * Where red and blue naturally overlap — soft warm-cool blend.
         * Animation: slow diagonal figure-eight pattern.
         * Cycle: 42s   Opacity: 0.08
         * ══════════════════════════════════════════════════════════════
         */}
        <g className="ar-blend" filter="url(#af-b70)" opacity="0.22">
          <path
            d="
              M  140 275
              C  440 175  745 385 1055 292
              C 1185 250 1345 326 1560 258
              L 1560 495
              C 1345 548 1185 460 1055 505
              C  745 588  440 362  140 482
              Z
            "
            fill="url(#lg-blend)"
          />
        </g>

        {/*
         * ══════════════════════════════════════════════════════════════
         * RIBBON 6 — Atmospheric Background Wash
         * Very wide, very subtle — adds ambient color depth.
         * Animation: extremely slow drift.
         * Cycle: 50s   Opacity: 0.06
         * ══════════════════════════════════════════════════════════════
         */}
        <g className="ar-atm" filter="url(#af-b70)" opacity="0.16">
          <path
            d="
              M -420 100
              C  245 285  660  80 1110 285
              C 1348 358 1558 262 1900 325
              L 1900 565
              C 1558 495 1348 590 1110 500
              C  660 300  245 495 -420 325
              Z
            "
            fill="url(#lg-r1)"
          />
        </g>
      </svg>

      {/*
       * Very light radial veil — just enough to keep white dominant
       * while letting the Aurora colors breathe through.
       * No backdrop-blur (would wash out colors).
       */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 130% 110% at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.10) 55%, rgba(255,255,255,0.22) 100%)",
        }}
      />
    </div>
  );
});
