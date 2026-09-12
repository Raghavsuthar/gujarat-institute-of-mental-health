import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Language } from '../../types';

interface PortalHeroVisualProps {
  currentLang: Language;
  className?: string;
}

/**
 * PortalHeroVisual: The central vivid visual moment for the HomeView.
 * Blends Nilgiri Teal (#115E59), Marigold Gold (#B86B26), and Twilight Jamun Plum (#5E4A72)
 * into a calm, dignified dawn motif representing mental clarity, compassion, and scientific care.
 * Orchestrated with a gentle, dignified motion entrance respecting prefers-reduced-motion.
 */
export const PortalHeroVisual: React.FC<PortalHeroVisualProps> = ({
  currentLang,
  className = 'w-full h-44 sm:h-56 md:h-64',
}) => {
  const prefersReducedMotion = useReducedMotion();

  const ariaLabel =
    currentLang === 'en'
      ? 'Architectural and natural dawn illustration symbolizing psychiatric healing, dawn light, and balanced mental health in India'
      : currentLang === 'hi'
      ? 'मानसिक स्वास्थ्य और संतुलन को दर्शाने वाला शैक्षिक चित्रण'
      : 'માનસિક સ્વાસ્થ્ય, નવી આશા અને વૈજ્ઞાનિક સારવાર દર્શાવતું શૈક્ષણિક ચિત્ર';

  // Animation variants respecting reduced motion
  const transitionBase = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: 'easeOut' as const };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-xl border border-stone-200/80 bg-white shadow-xs ${className}`}
    >
      <svg
        viewBox="0 0 800 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          {/* Dawn Sky Gradient blending teal, marigold, and plum */}
          <linearGradient id="heroSkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F3F8" />
            <stop offset="40%" stopColor="#FDF8F0" />
            <stop offset="80%" stopColor="#EFF9F7" />
            <stop offset="100%" stopColor="#E6F5F2" />
          </linearGradient>

          {/* Marigold Sun Gradient */}
          <linearGradient id="marigoldSun" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8BA54" />
            <stop offset="70%" stopColor="#DE862B" />
            <stop offset="100%" stopColor="#B86B26" />
          </linearGradient>

          {/* Nilgiri Forest & Hills */}
          <linearGradient id="nilgiriGradFar" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="nilgiriGradMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient id="nilgiriGradNear" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#115E59" />
            <stop offset="100%" stopColor="#0F4F4A" />
          </linearGradient>

          {/* Twilight Plum Arch Motif */}
          <linearGradient id="plumArchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87689A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#5E4A72" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Backdrop Sky */}
        <rect width="800" height="280" fill="url(#heroSkyGrad)" />

        {/* Subtle Geometric Sanctuary Arch (representing clinical safety & structure) */}
        <motion.path
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transitionBase, delay: prefersReducedMotion ? 0 : 0.15 }}
          d="M260 280 V130 Q260 60 400 60 Q540 60 540 130 V280"
          fill="url(#plumArchGrad)"
          stroke="#E2D9E8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Concentric Dawn Auroras */}
        <motion.g
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transitionBase, delay: prefersReducedMotion ? 0 : 0.2 }}
        >
          <circle cx="400" cy="140" r="110" stroke="#F5DCB7" strokeWidth="1.2" opacity="0.6" />
          <circle cx="400" cy="140" r="145" stroke="#F5DCB7" strokeWidth="1" strokeDasharray="6 8" opacity="0.4" />
          <circle cx="400" cy="140" r="185" stroke="#E6D4EB" strokeWidth="0.8" opacity="0.3" />
        </motion.g>

        {/* Golden Rising Marigold Sun */}
        <motion.g
          initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionBase, delay: prefersReducedMotion ? 0 : 0.25, duration: 0.9 }}
        >
          <circle cx="400" cy="135" r="46" fill="url(#marigoldSun)" />
          <circle cx="400" cy="135" r="54" stroke="#FBD38D" strokeWidth="2" strokeDasharray="3 6" opacity="0.7" />
        </motion.g>

        {/* Subtle Constellation / Synaptic Node Sparks */}
        <motion.g
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.35 }}
        >
          <line x1="330" y1="90" x2="355" y2="105" stroke="#B86B26" strokeWidth="1.2" strokeDasharray="2 3" />
          <circle cx="330" cy="90" r="3.5" fill="#B86B26" />
          <circle cx="355" cy="105" r="2.5" fill="#DE862B" />

          <line x1="445" y1="105" x2="475" y2="92" stroke="#5E4A72" strokeWidth="1.2" strokeDasharray="2 3" />
          <circle cx="445" cy="105" r="2.5" fill="#5E4A72" />
          <circle cx="475" cy="92" r="3.5" fill="#785184" />
        </motion.g>

        {/* Distant Rolling Nilgiri Ridges */}
        <motion.path
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionBase, delay: prefersReducedMotion ? 0 : 0.3 }}
          d="M-40 280 L-40 200 Q100 160 250 185 T550 170 Q680 155 840 210 L840 280 Z"
          fill="url(#nilgiriGradFar)"
        />

        {/* Mid-ground Hills & Flora */}
        <motion.path
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ ...transitionBase, delay: prefersReducedMotion ? 0 : 0.35 }}
          d="M-20 280 L-20 225 Q140 180 320 205 Q500 230 660 190 Q740 180 820 215 L820 280 Z"
          fill="url(#nilgiriGradMid)"
        />

        {/* Foreground Dignified Ground & Plant Silhouettes */}
        <motion.path
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionBase, delay: prefersReducedMotion ? 0 : 0.4 }}
          d="M0 280 L0 240 Q180 215 380 235 Q580 255 800 230 L800 280 Z"
          fill="url(#nilgiriGradNear)"
        />

        {/* Left Stylized Resilience Botanical Leaves (Nilgiri Flora / Lotus motif) */}
        <motion.g
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ ...transitionBase, delay: prefersReducedMotion ? 0 : 0.45 }}
          transform="translate(60, 185) scale(0.85)"
        >
          {/* Stem & Leaves */}
          <path d="M40 95 Q38 45 40 5" stroke="#0F4F4A" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M40 60 Q15 45 10 25 Q30 35 40 52" fill="#14B8A6" />
          <path d="M40 40 Q65 25 70 5 Q50 15 40 32" fill="#2DD4BF" />
          <circle cx="40" cy="5" r="7" fill="#B86B26" />
        </motion.g>

        {/* Right Stylized Balanced Flora Motif */}
        <motion.g
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ ...transitionBase, delay: prefersReducedMotion ? 0 : 0.45 }}
          transform="translate(670, 185) scale(0.85)"
        >
          <path d="M40 95 Q42 45 40 5" stroke="#0F4F4A" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M40 60 Q65 45 70 25 Q50 35 40 52" fill="#14B8A6" />
          <path d="M40 40 Q15 25 10 5 Q30 15 40 32" fill="#5E4A72" />
          <circle cx="40" cy="5" r="7" fill="#B86B26" />
        </motion.g>

        {/* Bottom Horizon Accent Line: Teal to Marigold to Plum */}
        <line x1="0" y1="278" x2="270" y2="278" stroke="#115E59" strokeWidth="3" />
        <line x1="270" y1="278" x2="530" y2="278" stroke="#B86B26" strokeWidth="3" />
        <line x1="530" y1="278" x2="800" y2="278" stroke="#5E4A72" strokeWidth="3" />
      </svg>
    </motion.div>
  );
};
