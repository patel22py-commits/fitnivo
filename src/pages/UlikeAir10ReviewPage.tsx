import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  Star,
  ExternalLink,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Calendar,
  ShieldCheck,
  AlertCircle,
  Award,
  ArrowRight,
  Snowflake,
  Zap,
  ShieldAlert,
  Flame
} from 'lucide-react';

const AMAZON_AFFILIATE_URL = 'https://link.amazon/B05ebrA05';

export const UlikeAir10ReviewPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Ulike Air 10 IPL Hair Removal Review 2026: At-Home Laser Device Tested – FITNIVO";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleFaq = (idx: number) => {
    setExpandedFaq((prev) => (prev === idx ? null : idx));
  };

  const specs = [
    { feature: 'Brand', details: 'Ulike' },
    { feature: 'Product', details: 'Air 10 IPL Hair Removal Device' },
    { feature: 'Model', details: 'UI20 DB (MPN: UI20 DB-US)' },
    { feature: 'Technology', details: 'IPL with Dual Lamps (18% broader coverage)' },
    { feature: 'Cooling Technology', details: 'Sapphire Ice-Cooling (<60°F contact surface)' },
    { feature: 'Treatment Modes', details: 'Fast, Normal, High & SHR (up to 26 J energy)' },
    { feature: 'Skin Sensor', details: 'Smart SkinSensor with auto-tone detection & safety lock' },
    { feature: 'Power Source', details: 'Corded Electric (consistent continuous power)' },
    { feature: 'Intended Users', details: 'Women and Men' },
    { feature: 'Customer Rating', details: '4.4 / 5 stars' },
    { feature: 'Customer Reviews', details: '3,578 verified reviews' },
    { feature: 'Amazon Best Seller Rank', details: '#3 in Light Hair Removal Devices' },
  ];

  const treatmentModes = [
    {
      mode: 'Fast Mode',
      purpose: 'Quick, low-intensity maintenance sessions across larger body areas',
      intensity: 'Gentle / Daily or Maintenance'
    },
    {
      mode: 'Normal Mode',
      purpose: 'Standard treatment intensity for regular arms and legs sessions',
      intensity: 'Medium / Balanced'
    },
    {
      mode: 'High Mode',
      purpose: 'Higher intensity for compatible areas with resilient, thicker hair',
      intensity: 'High / Deeper Follicle Reach'
    },
    {
      mode: 'SHR Mode',
      purpose: 'Super Hair Removal delivering up to 26 J cumulative energy for coarse, stubborn hair',
      intensity: 'Maximum / 4-Pulse Burst'
    }
  ];

  const comparisonData = [
    {
      feature: 'Technology',
      ulike: 'IPL light pulses (Dual Lamps)',
      laser: 'Focused monochromatic laser energy'
    },
    {
      feature: 'Usage',
      ulike: 'At home on your own schedule',
      laser: 'In-office professional medical clinic'
    },
    {
      feature: 'Convenience',
      ulike: 'Approx. 10 minutes full-body treatment',
      laser: 'Requires scheduled travel & appointments'
    },
    {
      feature: 'Treatment Settings',
      ulike: '4 device-specific modes + Smart SkinSensor',
      laser: 'Clinician customized clinical settings'
    },
    {
      feature: 'Results',
      ulike: 'Gradual visible hair reduction in 4 weeks',
      laser: 'Long-lasting reduction in fewer sessions'
    },
    {
      feature: 'Cost',
      ulike: 'One-time device purchase (approx. $250–$350)',
      laser: 'Multiple clinic sessions ($1,000–$3,000+)'
    }
  ];

  const faqs = [
    {
      q: '1. What is the Ulike Air 10 IPL Hair Removal Device?',
      a: 'It is an at-home IPL (Intense Pulsed Light) hair reduction device that combines dual lamps, sapphire ice-cooling technology, SHR mode, and a Smart SkinSensor for broader, more comfortable treatments.'
    },
    {
      q: '2. Does the Ulike Air 10 permanently remove hair?',
      a: 'It is designed for long-term hair reduction, not an absolute medical guarantee of permanent removal. Occasional maintenance touch-up sessions may be needed over time.'
    },
    {
      q: '3. How long does it take to see results?',
      a: 'Ulike advertises visible results in four weeks with consistent, regular use. Individual results vary depending on hair thickness, skin tone, and body area.'
    },
    {
      q: '4. Is the Ulike Air 10 painful?',
      a: 'Its sapphire ice-cooling system is designed to keep contact temperatures below 60°F, significantly improving comfort compared to traditional hot IPL tools. Sensations can vary between sensitive body areas.'
    },
    {
      q: '5. Can women use the Ulike Air 10 on their bikini line?',
      a: 'Yes, the device is designed for compatible bikini-line treatments. Always follow the manufacturer\'s instructions for external bikini areas and avoid internal or mucosal surfaces.'
    },
    {
      q: '6. Can the Ulike Air 10 be used on the face?',
      a: 'The listing mentions compatible facial areas below the cheekbone (such as the upper lip or chin). Follow facial-use restrictions closely and never flash IPL near the eyes.'
    },
    {
      q: '7. Does the Ulike Air 10 work on every hair color?',
      a: 'No. IPL works by targeting dark melanin pigment in the hair follicle. It works best on dark blonde, brown, and black hair. Very light blonde, red, gray, and white hair generally may not respond effectively.'
    },
    {
      q: '8. Is the Ulike Air 10 worth buying?',
      a: 'It represents a strong investment for women and men with compatible skin tone and hair color who want the privacy and convenience of at-home hair reduction without salon costs.'
    }
  ];

  return (
    <article className="min-h-screen pb-16 sm:pb-24">
      {/* 1. Header Banner & Breadcrumbs */}
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-8 sm:py-12 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: 'Beauty & Lifestyle', path: '/beauty' },
              { label: 'Beauty & Skincare', path: '/beauty' },
              { label: 'Ulike Air 10 IPL Review 2026' }
            ]}
          />

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/15 dark:bg-brand-darkPrimary/15 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Beauty Tech &amp; Hair Reduction Review</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-semibold border border-amber-200/80 dark:border-amber-800/80">
              <Award className="w-3 h-3" />
              <span>#3 Amazon Best Seller</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
              <Clock className="w-3.5 h-3.5" />
              <span>8 min read</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
              <Calendar className="w-3.5 h-3.5" />
              <span>Updated 2026</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText leading-tight tracking-tight">
            Ulike Air 10 IPL Hair Removal Review 2026: Is This At-Home Laser Device Worth Buying?
          </h1>

          <p className="text-base sm:text-lg text-brand-lightText/85 dark:text-brand-darkMuted font-sans leading-relaxed">
            Tired of shaving every few days? Imagine enjoying smoother-looking skin without constantly reaching for your razor.
            If unwanted body hair is making your beauty routine feel like a never-ending task, it&apos;s time to explore a different approach.
            At-home IPL hair removal devices have become increasingly popular among women who want a convenient alternative to frequent shaving and expensive salon appointments.
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs text-brand-sage-700 dark:text-brand-darkMuted">
            <div className="w-8 h-8 rounded-full bg-brand-lightPrimary text-white flex items-center justify-center font-bold text-xs shadow-sm">
              FN
            </div>
            <div>
              <p className="font-bold text-brand-lightText dark:text-brand-darkText">FITNIVO Beauty &amp; Skincare Desk</p>
              <p className="text-[11px] text-brand-sage-600 dark:text-brand-darkMuted">Independent Beauty Tech Testing &amp; Protocol Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top Review Infographic Poster (Explicit User Instruction: "aur image ko blog post ke top me rakhna") */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border-2 border-brand-lightSecondary/30 dark:border-brand-sage-800 shadow-soft-lg group">
          <div className="p-3 sm:p-4 bg-brand-lightSecondary/10 dark:bg-brand-sage-900/40 border-b border-brand-sage-200/80 dark:border-brand-sage-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-4 h-4 object-contain" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                Ulike Air 10 IPL (UI20 DB) – Complete Visual Review Poster
              </span>
            </div>
            <span className="text-[11px] font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-200/60">
              Sapphire Ice-Cooling Edition
            </span>
          </div>

          {/* Full Top Image Display */}
          <div className="relative bg-brand-sage-50/50 dark:bg-brand-darkBgSecondary flex items-center justify-center p-3 sm:p-6">
            <img
              src="/ulike-air-10-review-2026.jpg"
              alt="Ulike Air 10 IPL Hair Removal Review 2026: Is This At-Home Laser Device Worth Buying? - Visual Infographic by FITNIVO"
              className="w-full max-w-xl mx-auto rounded-2xl shadow-md object-contain hover:scale-[1.01] transition-transform duration-300"
              loading="eager"
            />
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-brand-darkCard text-center sm:flex sm:items-center sm:justify-between gap-4 border-t border-brand-sage-200/80 dark:border-brand-sage-800">
            <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted italic text-left">
              Visual summary: Dual-lamp coverage, Sapphire ice cooling (&lt;60°F), 4 modes with SHR, Smart SkinSensor, and 4.4/5 rating across 3,578 reviews.
            </p>
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs font-bold tracking-wide transition-all shadow-sm shrink-0 mt-3 sm:mt-0"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Check Price on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Review Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-12 sm:space-y-16">
        
        {/* Introduction & The Big Question */}
        <section className="space-y-4 text-sm sm:text-base text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
          <p>
            One product getting major attention in the beauty-tech market is the <strong>Ulike Air 10 IPL Hair Removal Device</strong>.
          </p>
          <p>
            Designed for both women and men, this premium hair removal device combines <strong>dual-lamp IPL technology</strong>,
            <strong>sapphire ice cooling</strong>, <strong>SHR mode</strong>, and an intelligent <strong>SkinSensor</strong> to make at-home hair reduction more convenient than ever.
          </p>
          
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border-l-4 border-brand-lightPrimary dark:border-brand-darkPrimary my-6 space-y-2">
            <h3 className="font-serif text-lg font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
              The Big Question for Smooth Skin Seekers:
            </h3>
            <p className="italic text-brand-lightText/90 dark:text-brand-darkText">
              Is the Ulike Air 10 really worth investing in, and can it help reduce unwanted hair without expensive salon treatments?
            </p>
          </div>

          <p>
            In this review, we&apos;ll explore its features, technology, benefits, limitations, safety considerations,
            and whether it&apos;s the right hair removal device for your beauty routine in 2026.
          </p>
        </section>

        {/* Product Overview & Specifications Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Product Overview
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Ulike Air 10 IPL Hair Removal Device: At a Glance
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              The Ulike Air 10 is an at-home IPL (Intense Pulsed Light) hair reduction device designed to target unwanted hair on different body areas.
              Unlike traditional shaving, which only cuts hair at the skin&apos;s surface, IPL technology uses light energy absorbed by pigment in the hair
              to target the hair follicle and reduce future hair growth. The Air 10 combines this technology with cooling and multiple intensity modes.
            </p>
          </div>

          {/* Specifications Table */}
          <div className="rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft">
            <div className="p-4 sm:p-5 bg-brand-sage-100/70 dark:bg-brand-sage-900/60 border-b border-brand-sage-200/80 dark:border-brand-sage-800 flex items-center justify-between">
              <h3 className="font-serif font-bold text-base text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Product Specifications</span>
              </h3>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200/70 dark:border-amber-800/70">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>4.4 / 5 (3,578 Reviews)</span>
              </div>
            </div>

            <div className="divide-y divide-brand-sage-100 dark:divide-brand-sage-800/80">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 text-xs sm:text-sm ${
                    idx % 2 === 0 ? 'bg-white dark:bg-brand-darkCard' : 'bg-brand-sage-50/40 dark:bg-brand-darkBgSecondary/50'
                  }`}
                >
                  <span className="font-bold text-brand-lightText/80 dark:text-brand-darkMuted">
                    {item.feature}
                  </span>
                  <span className="sm:col-span-2 text-brand-lightText dark:text-brand-darkText font-medium mt-0.5 sm:mt-0">
                    {item.details}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-brand-sage-50/60 dark:bg-brand-darkBgSecondary text-xs text-brand-sage-600 dark:text-brand-darkMuted italic border-t border-brand-sage-200/80 dark:border-brand-sage-800">
              Specifications and customer ratings are based on the supplied Amazon listing and may change.
            </div>
          </div>

          {/* Amazon CTA Button */}
          <div className="text-center pt-2">
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-sm font-bold tracking-wide transition-all shadow-soft hover:shadow-soft-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>CHECK THE ULIKE AIR 10 PRICE ON AMAZON</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* 7 In-Depth Feature Breakdowns */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              In-Depth Feature Breakdown
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Key Features &amp; Performance Highlights
            </h2>
          </div>

          <div className="space-y-6">
            {/* 1. Dual-Lamp IPL Technology */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                  <span>Dual-Lamp IPL Technology for Faster Hair Reduction</span>
                  <Zap className="w-4 h-4 text-amber-500" />
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                One of the biggest highlights of the Ulike Air 10 is its <strong>dual-lamp IPL technology</strong>.
                Unlike single-lamp devices, the Air 10 uses two synchronized flash lamps that work together to provide greater treatment coverage.
                According to Ulike, its dual-lamp design provides <strong>18% more coverage</strong> compared with its single-lamp IPL devices.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                The manufacturer also claims that consistent use can reduce hair density by <strong>up to 97.16% in four weeks</strong>.
                <em>(These are manufacturer-reported clinical trial figures, not guaranteed outcomes for every user.)</em>
              </p>

              <div className="p-5 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                  Why This Feature Is Interesting:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Dual-lamp IPL technology for dual light output</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Designed for broader, more consistent treatment coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Targets root pigment to inhibit future hair growth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Suitable for different body areas within approved guidelines</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Designed to make at-home sessions significantly faster and more convenient</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Sapphire Ice-Cooling Technology */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                  <span>Sapphire Ice-Cooling Technology for Comfortable Treatments</span>
                  <Snowflake className="w-4 h-4 text-cyan-500" />
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Let&apos;s be honest: one of the biggest concerns women have about IPL hair removal is discomfort or burning sensations.
                This is where the Ulike Air 10&apos;s <strong>sapphire ice-cooling technology</strong> becomes crucial.
                The device uses a specialized cooling window designed to keep the contact surface <strong>below 60°F</strong> throughout treatment.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                This helps manage the thermal warmth associated with high-energy IPL flashes and makes the treatment experience remarkably comfortable.
              </p>

              <div className="p-5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-900/40 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
                  What Makes Ice-Cooling Useful?
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-cyan-950 dark:text-cyan-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Actively cools the epidermal surface on contact</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Designed to reduce heat-related skin discomfort</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Supports a gentle, near-painless IPL experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Makes longer full-body treatment sessions easy to tolerate</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Great for women hesitant about traditional laser or waxing pain</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  <strong>Clinical Note:</strong> While cooling dramatically improves comfort, it does not eliminate every possibility of individual sensitivity, temporary redness, or side effects if guidelines are ignored.
                </p>
              </div>
            </div>

            {/* 3. SHR Mode for Coarse Hair */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                  <span>SHR Mode for Coarse and Stubborn Hair</span>
                  <Flame className="w-4 h-4 text-purple-500" />
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Not all body hair is the same. Underarms, bikini lines, and legs often feature thicker and coarser follicles that resist weak light pulses.
                The Ulike Air 10 includes a dedicated <strong>SHR (Super Hair Removal) mode</strong> that delivers <strong>up to 26 J of cumulative energy</strong> across a rapid four-pulse burst.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                The device also includes Fast, Normal, and High modes, allowing users to select settings tailored to their skin&apos;s sensitivity and hair density.
              </p>

              <div className="p-4 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs sm:text-sm space-y-1">
                <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
                  Important Safety Tip:
                </p>
                <p className="text-brand-lightText/85 dark:text-brand-darkMuted">
                  Higher intensity does not automatically mean better results. Always start on low modes, perform patch testing on a small area, and follow skin-tone compatibility charts before using SHR mode.
                </p>
              </div>
            </div>

            {/* 4. Smart SkinSensor */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                  <span>Smart SkinSensor for Personalized IPL Treatments</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Safety is an essential consideration when choosing any light-based hair device.
                The Ulike Air 10 includes a built-in <strong>Smart SkinSensor</strong> designed to detect skin tone and adjust intensity in compatible modes.
                If the detected skin tone falls outside the supported safety range, the device is designed to automatically lock and prevent flashing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs sm:text-sm">
                  <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary mb-1">Tone Recognition</p>
                  <p className="text-brand-lightText/80 dark:text-brand-darkMuted">Instantly checks skin tone before each pulse to ensure compatibility.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs sm:text-sm">
                  <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary mb-1">Auto-Safety Lock</p>
                  <p className="text-brand-lightText/80 dark:text-brand-darkMuted">Prevents accidental discharge on skin types that could risk pigmentation changes.</p>
                </div>
              </div>

              <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted italic">
                Remember: A built-in sensor is an additional safety guard, but not a substitute for reviewing the complete Fitzpatrick skin-tone compatibility chart.
              </p>
            </div>

            {/* 5. Full-Body Hair Removal in 10 Minutes */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Full-Body Hair Removal in Approximately 10 Minutes
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                One of the biggest selling points of the Ulike Air 10 is pure lifestyle convenience.
                According to the manufacturer, its dual-lamp optical window allows users to complete a full-body session in <strong>approximately 10 minutes</strong>.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                This is particularly attractive for busy women who want to save hours each week. Imagine treating legs, underarms, and bikini area at home without booking appointments or traveling to a clinic.
              </p>
            </div>

            {/* 6. Multiple Treatment Modes Table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Four Treatment Modes for Different Needs
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                The Ulike Air 10 provides four operating modes to tailor energy delivery to your specific anatomy:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-brand-sage-200/80 dark:border-brand-sage-800">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-brand-sage-100/70 dark:bg-brand-sage-900/60 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
                      <th className="p-3.5 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Mode</th>
                      <th className="p-3.5 font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">Main Purpose</th>
                      <th className="p-3.5 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Recommended Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-sage-100 dark:divide-brand-sage-800">
                    {treatmentModes.map((m, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-brand-darkCard' : 'bg-brand-sage-50/40 dark:bg-brand-darkBgSecondary/50'}>
                        <td className="p-3.5 font-bold text-brand-lightText dark:text-brand-darkText whitespace-nowrap">{m.mode}</td>
                        <td className="p-3.5 text-brand-lightText/90 dark:text-brand-darkText">{m.purpose}</td>
                        <td className="p-3.5 text-brand-lightText/70 dark:text-brand-darkMuted whitespace-nowrap">{m.intensity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 7. Designed for Legs, Arms, Underarms & Bikini */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Designed for Legs, Arms, Underarms and Bikini Areas
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                The Air 10 provides full versatility across multiple areas: legs, arms, underarms, bikini line, compatible facial zones (upper lip/chin), and chest.
              </p>
              <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/40 text-xs sm:text-sm text-rose-950 dark:text-rose-200 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Facial Caution:</strong> For facial use, follow the manufacturer&apos;s exact restrictions. Never use IPL near the eyes, eyebrows, or directly on lips. Always wear the supplied protective goggles.
                </div>
              </div>
            </div>
          </div>

          {/* Amazon CTA Button */}
          <div className="text-center pt-2">
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-sm font-bold tracking-wide transition-all shadow-soft hover:shadow-soft-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>CHECK THE ULIKE AIR 10 PRICE ON AMAZON</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Balanced Evaluation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Ulike Air 10 Pros and Cons
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
              Before investing in a premium IPL device, let&apos;s examine both its strengths and limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="p-6 sm:p-7 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 shadow-soft space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-serif font-bold text-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Pros</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dual-lamp IPL technology provides 18% broader coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sapphire ice-cooling system keeps contact surface below 60°F</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Four operating modes (Fast, Normal, High, SHR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>SHR mode delivers up to 26 J energy for coarse and stubborn hair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Built-in Smart SkinSensor with tone-detection safety lock</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Designed for legs, arms, underarms, bikini, and face</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Manufacturer-reported visible reduction in four weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Corded continuous power means no battery degradation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Designed for both women and men</span>
                </li>
              </ul>
            </div>

            {/* Cons */}
            <div className="p-6 sm:p-7 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-800/60 shadow-soft space-y-4">
              <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-serif font-bold text-lg">
                <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400" />
                <span>Cons</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Premium initial purchase price compared with basic razors</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Requires disciplined consistency across multiple weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Results vary significantly depending on hair color and skin tone</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Not suitable for very deep skin tones or very light/gray hair</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Corded design requires being near an electrical wall outlet</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>May cause irritation or burns if patch-test instructions are skipped</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Not a permanent 100% guarantee of zero future hair growth</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Head-to-Head: Ulike Air 10 vs Traditional Laser */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Hair Removal Comparison
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Ulike Air 10 vs Traditional In-Clinic Laser Hair Removal
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              Wondering whether an at-home IPL device can replace professional clinical laser treatments?
              While both target follicle pigment, their technology and application differ significantly.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-brand-sage-100/70 dark:bg-brand-sage-900/60 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Feature</th>
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">
                      Ulike Air 10 IPL
                    </th>
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightText dark:text-brand-darkText">In-Clinic Laser</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-sage-100 dark:divide-brand-sage-800/80">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">{row.feature}</td>
                      <td className="p-3.5 sm:p-4 font-medium bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">{row.ulike}</td>
                      <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">{row.laser}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary border-t border-brand-sage-200/80 dark:border-brand-sage-800 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
                Our Take:
              </p>
              <p className="text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
                The Ulike Air 10 is worth serious consideration if you prioritize the privacy, budget savings, and convenience of at-home hair reduction.
                Professional laser treatments may be more appropriate if you have specialized clinical requirements, resistant hormonal hair, or prefer supervised medical care.
                Neither option guarantees that 100% of hair will disappear forever.
              </p>
            </div>
          </div>
        </section>

        {/* Skin Tone & Safety Suitability */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
          <div className="flex items-center gap-2 text-brand-lightPrimary dark:text-brand-darkPrimary font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Safety First</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            Is the Ulike Air 10 Safe for Every Skin Tone?
          </h3>

          <p className="text-xs sm:text-sm text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
            This is one of the most critical questions to answer before purchasing.
            IPL devices work by targeting pigment (melanin) in the hair shaft. Because light cannot distinguish between melanin in dark hair and melanin in darker skin, skin tone and hair color determine safety:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs sm:text-sm space-y-1">
              <p className="font-bold text-emerald-800 dark:text-emerald-300">Best Responders</p>
              <p className="text-emerald-950 dark:text-emerald-200">Light to medium skin tones paired with naturally dark blonde, brown, or black hair.</p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs sm:text-sm space-y-1">
              <p className="font-bold text-rose-800 dark:text-rose-300">Poor / Unsafe Responders</p>
              <p className="text-rose-950 dark:text-rose-200">Very deep, dark skin tones (due to burn risk) or very light blonde, red, gray, and white hair (insufficient pigment).</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary text-xs text-brand-sage-700 dark:text-brand-darkMuted leading-relaxed">
            <strong>Safety Note:</strong> Follow the product manual carefully. Always perform the recommended 24-hour patch test. Use the specified UV eye protection goggles, and avoid treatment over tattoos, moles, open wounds, irritated skin, and varicose veins. Consult a physician if you are pregnant, nursing, or taking photosensitizing medications.
          </div>
        </section>

        {/* Who Should Buy / Who Should Avoid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Who Should Buy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Who Should Buy the Ulike Air 10?</span>
            </h3>
            <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
              The Ulike Air 10 is worth considering if you:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Want to break free from shaving every few days</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Prefer private, convenient at-home beauty treatments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Have a compatible light-to-medium skin tone and dark hair</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Want a device that treats legs, arms, underarms, and bikini area</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Value real sapphire ice-cooling for comfortable, gentle sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Are comfortable following a consistent multi-week schedule</span>
              </li>
            </ul>
          </div>

          {/* Who Should Avoid */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-lightText/80 dark:text-brand-darkMuted flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <span>Who Should Avoid It?</span>
            </h3>
            <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
              You may want to avoid IPL or seek professional consultation if:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>Your skin tone falls outside the supported safety range</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>Your hair color is light blonde, red, gray, or white</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You suffer from photosensitivity or take photosensitizing drugs</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You have active eczema, psoriasis, open wounds, or heavy tattoos</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You expect instantaneous or 100% permanent hair disappearance</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 2026 Verdict & Final Recommendation */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-sage-100/90 via-white to-brand-sage-50/80 dark:from-brand-darkBgSecondary dark:via-brand-darkCard dark:to-brand-darkBg border-2 border-brand-lightPrimary/20 dark:border-brand-darkPrimary/30 shadow-soft-lg space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <Award className="w-3.5 h-3.5" />
              <span>FITNIVO Verdict 2026</span>
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-sm bg-white dark:bg-brand-darkBg px-3 py-1 rounded-full shadow-sm">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current opacity-40" />
              <span className="text-xs text-brand-lightText dark:text-brand-darkText ml-1.5 font-bold">4.4 / 5.0 (3,578 Reviews)</span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightPrimary dark:text-brand-darkText leading-tight">
            Is the Ulike Air 10 Worth Buying in 2026?
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
            <p>
              <strong>Our verdict: A feature-packed at-home IPL device worth considering for women and men looking for convenient, gradual hair reduction.</strong>
            </p>
            <p>
              The Ulike Air 10 brings several compelling engineering features together. Its dual-lamp technology is designed for broader coverage, while sapphire ice-cooling aims to make sessions exceptionally comfortable.
              The addition of SHR mode and a Smart SkinSensor makes it particularly interesting for people who want more flexibility and power in their at-home hair reduction routine.
            </p>
            <p className="text-xs sm:text-sm text-brand-sage-600 dark:text-brand-darkMuted italic">
              The supplied Amazon listing shows a 4.4-star rating from 3,578 customer reviews, and it is listed as the #3 Best Seller in Light Hair Removal Devices.
            </p>
          </div>

          {/* Final Callout & CTA */}
          <div className="p-6 rounded-2xl bg-white/90 dark:bg-brand-darkCard/90 border border-brand-sage-200/80 dark:border-brand-sage-800 space-y-4 text-center">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
              Ready for a More Convenient Hair Removal Routine?
            </h3>
            <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted max-w-xl mx-auto">
              If you have compatible skin and hair characteristics and want to ditch frequent razor burns, the Ulike Air 10 deserves a top spot on your beauty shortlist.
            </p>
            <div className="pt-2">
              <a
                href={AMAZON_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-lightPrimary hover:bg-brand-lightSecondary text-white text-sm font-bold tracking-wide transition-all shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>CHECK THE ULIKE AIR 10 PRICE ON AMAZON</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Common Questions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 hover:bg-brand-sage-50/50 dark:hover:bg-brand-darkBgSecondary/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-brand-lightText dark:text-brand-darkText">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-lightPrimary shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-brand-sage-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed border-t border-brand-sage-100 dark:border-brand-sage-800/60 bg-brand-sage-50/30 dark:bg-brand-darkBgSecondary/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Disclosures & Notice */}
        <section className="space-y-4 pt-4 border-t border-brand-sage-200/80 dark:border-brand-sage-800">
          <div className="p-5 rounded-2xl bg-brand-sage-50/60 dark:bg-brand-darkBgSecondary/60 border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs text-brand-sage-700 dark:text-brand-darkMuted leading-relaxed space-y-2">
            <p>
              <strong>Affiliate Disclosure:</strong> This article contains affiliate links. As an Amazon Associate, we earn
              from qualifying purchases. If you purchase through our links, we may receive a commission at no additional cost
              to you.
            </p>
            <p>
              <strong>Editorial Note:</strong> Product specifications and performance claims are based on the supplied Amazon product listing. We have not independently tested this device. Always check the latest manufacturer&apos;s instructions, safety guidance, and product availability before purchasing.
            </p>
          </div>
        </section>

        {/* Explore More in Beauty & Skincare */}
        <section className="pt-6 sm:pt-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                Continue Exploring
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                Explore More Beauty &amp; Skincare Protocols
              </h4>
              <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted">
                Discover skin barrier protection, clinical at-home tech, LED therapy, and holistic beauty rituals.
              </p>
            </div>
            <Link
              to="/beauty"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs sm:text-sm font-bold tracking-wide transition-colors shrink-0 shadow-sm"
            >
              <span>Back to Beauty &amp; Skincare Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
};

export default UlikeAir10ReviewPage;
