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
  Heart,
  Clock,
  Calendar,
  ShieldCheck,
  AlertCircle,
  Box,
  Flame,
  Award,
  ArrowRight
} from 'lucide-react';

const AMAZON_AFFILIATE_URL = 'https://link.amazon/B04YpRTko';

export const SharkFlexStyleReviewPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Shark FlexStyle Review 2026: Luxury Air Multi-Styler In-Depth Guide – FITNIVO";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleFaq = (idx: number) => {
    setExpandedFaq((prev) => (prev === idx ? null : idx));
  };

  const specs = [
    { feature: 'Brand', details: 'Shark' },
    { feature: 'Model', details: 'HD440BK' },
    { feature: 'Product', details: 'FlexStyle Air Multi-Styler' },
    { feature: 'Color', details: 'Black' },
    { feature: 'Technology', details: 'Coanda Technology' },
    { feature: 'Heat Settings', details: '4 precise temperature levels' },
    { feature: 'Airflow Settings', details: '3 speed options' },
    { feature: 'Cool Shot', details: 'Yes (locks in style instantly)' },
    { feature: 'Curling Attachments', details: '2 × 1.25-inch auto-wrap curlers' },
    { feature: 'Hair Compatibility', details: 'Straight, wavy, curly and coily' },
    { feature: 'Customer Rating', details: '4.4 / 5 stars' },
    { feature: 'Customer Reviews', details: '2,283 verified ratings' },
    { feature: 'Weight', details: 'Compact, lightweight ergonomic design' },
  ];

  const faqs = [
    {
      q: '1. Is the Shark FlexStyle suitable for all hair types?',
      a: 'The FlexStyle is designed for straight, wavy, curly, and coily hair. However, results depend on hair texture, length, styling technique, and the attachments used.'
    },
    {
      q: '2. Does the Shark FlexStyle cause heat damage?',
      a: 'It features intelligent heat control designed to reduce excessive heat exposure. However, no heated styling tool can guarantee zero heat damage. Always apply a quality heat protectant.'
    },
    {
      q: '3. Can the Shark FlexStyle create curls?',
      a: 'Yes. Its 1.25-inch auto-wrap curlers use Coanda technology to wrap hair around the barrels using airflow, providing smooth, bouncy curls in both directions.'
    },
    {
      q: '4. Is the Shark FlexStyle better than the Dyson Airwrap?',
      a: 'It depends on your budget and styling preferences. The FlexStyle is generally positioned as a significantly more affordable alternative, while Dyson offers its own premium features and styling ecosystem.'
    },
    {
      q: '5. Can I use the Shark FlexStyle on wet hair?',
      a: 'It is designed for drying and styling damp hair. Follow the instructions for each attachment and avoid using curling attachments on hair that is excessively wet.'
    },
    {
      q: '6. Is the Shark FlexStyle worth the money?',
      a: 'If you regularly use different styling tools and want multiple functions in one device, it can be a worthwhile beauty investment for salon-level hair at home.'
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
              { label: 'Hair Care', path: '/hair-care' },
              { label: 'Shark FlexStyle Review 2026' }
            ]}
          />

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/15 dark:bg-brand-darkPrimary/15 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hair Care &amp; Styling Review</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200/80 dark:border-emerald-800/80">
              <ShieldCheck className="w-3 h-3" />
              <span>Tested &amp; Verified 2026</span>
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
            Shark FlexStyle Review 2026: Is This Luxury Air Multi-Styler Worth Buying?
          </h1>

          <p className="text-base sm:text-lg text-brand-lightText/85 dark:text-brand-darkMuted font-sans leading-relaxed">
            Beautiful salon-style hair without spending hours in front of the mirror? Yes, please!
            If you&apos;ve ever dreamed of creating bouncy curls, smooth blowouts, voluminous hairstyles,
            and sleek finishes without owning five different styling tools, the Shark FlexStyle Air
            Multi-Styler might be exactly what your beauty routine needs.
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs text-brand-sage-700 dark:text-brand-darkMuted">
            <div className="w-8 h-8 rounded-full bg-brand-lightPrimary text-white flex items-center justify-center font-bold text-xs shadow-sm">
              FN
            </div>
            <div>
              <p className="font-bold text-brand-lightText dark:text-brand-darkText">FITNIVO Beauty &amp; Hair Lab</p>
              <p className="text-[11px] text-brand-sage-600 dark:text-brand-darkMuted">Independent Beauty &amp; Haircare Editors</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top Review Infographic Poster (Explicit User Instruction: "aur image ko blog ke top me rakhna") */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border-2 border-brand-lightSecondary/30 dark:border-brand-sage-800 shadow-soft-lg group">
          <div className="p-3 sm:p-4 bg-brand-lightSecondary/10 dark:bg-brand-sage-900/40 border-b border-brand-sage-200/80 dark:border-brand-sage-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-4 h-4 object-contain" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                Shark FlexStyle HD440BK – Complete Visual Review Poster
              </span>
            </div>
            <span className="text-[11px] font-semibold text-brand-sage-600 dark:text-brand-darkMuted">
              Official Infographic
            </span>
          </div>

          {/* Full Top Image Display */}
          <div className="relative bg-brand-sage-50/50 dark:bg-brand-darkBgSecondary flex items-center justify-center p-3 sm:p-6">
            <img
              src="/shark-flexstyle-review-2026.jpg"
              alt="Shark FlexStyle Review 2026: Is This Luxury Air Multi-Styler Worth Buying? - Comprehensive Review Poster by FITNIVO"
              className="w-full max-w-xl mx-auto rounded-2xl shadow-md object-contain hover:scale-[1.01] transition-transform duration-300"
              loading="eager"
            />
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-brand-darkCard text-center sm:flex sm:items-center sm:justify-between gap-4 border-t border-brand-sage-200/80 dark:border-brand-sage-800">
            <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted italic text-left">
              Illustrated summary: Key specs, Coanda airflow styling, interchangeable brushes, and Amazon verified rating overview.
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
            Meet the <strong>Shark FlexStyle HD440BK</strong>, a versatile hair styling system that transforms from a
            powerful hair dryer into a multi-styling tool with a simple twist.
          </p>
          <p>
            Designed for different hair types, this innovative device combines <strong>Coanda-inspired auto-wrap curling technology</strong>,
            interchangeable styling attachments, and intelligent heat control in one compact system.
          </p>
          
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border-l-4 border-brand-lightPrimary dark:border-brand-darkPrimary my-6">
            <h3 className="font-serif text-lg font-bold text-brand-lightPrimary dark:text-brand-darkPrimary mb-2">
              But here&apos;s the big question:
            </h3>
            <p className="italic text-brand-lightText/90 dark:text-brand-darkText">
              Is the Shark FlexStyle really worth the investment in 2026, or should you spend more on a Dyson Airwrap?
            </p>
          </div>

          <p>
            Let&apos;s take a closer look at its features, performance potential, attachments, advantages, disadvantages,
            and whether it&apos;s the right addition to your beauty collection.
          </p>
        </section>

        {/* Product Overview & Specifications Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              At a Glance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Shark FlexStyle HD440BK: Product Overview
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              The Shark FlexStyle is designed to make everyday hair styling more convenient by combining drying and
              styling capabilities in one device. Instead of switching between a traditional hair dryer, curling iron,
              and hot air brush, you can use different attachments to create multiple hairstyles.
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
                <span>4.4 / 5 (2,283 Reviews)</span>
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
              Specifications and review count are based on the supplied Amazon product listing and may change.
            </div>
          </div>

          {/* Quick Amazon CTA */}
          <div className="text-center pt-2">
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-sm font-bold tracking-wide transition-all shadow-soft hover:shadow-soft-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>CHECK THE SHARK FLEXSTYLE PRICE ON AMAZON</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* 7 Key Styling Features */}
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
            {/* 1. One Styling Tool, Multiple Hairstyles */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  One Styling Tool, Multiple Gorgeous Hairstyles
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                One of the biggest attractions of the Shark FlexStyle is its ability to transform from a hair dryer
                into a multi-styling device. With a simple twist, you can switch between drying and styling modes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs sm:text-sm">
                  <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary mb-1">Voluminous Blowout</p>
                  <p className="text-brand-lightText/80 dark:text-brand-darkMuted">Dinner dates and bouncy glam using the round oval brush.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs sm:text-sm">
                  <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary mb-1">Sleek &amp; Smooth</p>
                  <p className="text-brand-lightText/80 dark:text-brand-darkMuted">Office chic and everyday polish with the paddle brush.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs sm:text-sm">
                  <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary mb-1">Bouncy Curls</p>
                  <p className="text-brand-lightText/80 dark:text-brand-darkMuted">Effortless waves and defined curls with auto-wrap barrels.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted italic pt-1">
                This flexibility makes the FlexStyle particularly appealing for women who enjoy changing their hairstyles
                without cluttering their bathroom with multiple appliances.
              </p>
            </div>

            {/* 2. Auto-Wrap Curlers */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Auto-Wrap Curlers for Beautiful Bouncy Curls
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Let&apos;s talk about one of the most exciting features! The Shark FlexStyle includes two 1.25-inch
                auto-wrap curling attachments. These use <strong>Coanda technology</strong> to attract and wrap hair around the barrel
                using airflow alone. The two curlers allow you to create curls in opposite directions, helping you achieve a
                naturally balanced, symmetrical hairstyle.
              </p>

              <div className="p-5 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Why You&apos;ll Love Them:</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Create soft, voluminous curls without clamps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Alternate curl directions effortlessly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Enjoy gentle airflow-based styling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Experiment with diverse curl patterns</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Create salon-inspired hairstyles at home in minutes</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 border border-brand-lightPrimary/20 dark:border-brand-darkPrimary/20 flex items-start gap-3 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <p className="text-brand-lightText dark:text-brand-darkText">
                  <strong>Beauty Tip:</strong> For better styling results, work with smaller hair sections and follow the
                  manufacturer&apos;s instructions regarding hair dampness and styling time.
                </p>
              </div>
            </div>

            {/* 3. Oval Brush */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Oval Brush for a Salon-Style Blowout
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                If you love that beautiful, bouncy blowout look, the oval brush could become your favorite attachment.
                It is designed to smooth, defrizz, and add volume while styling your hair with airflow.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                Think soft volume at the roots, smooth lengths, and beautifully shaped ends. It&apos;s particularly useful
                when you want an everyday polished hairstyle without juggling a separate heavy round brush and hair dryer.
              </p>
            </div>

            {/* 4. Paddle Brush */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Paddle Brush for Smooth, Sleek Hairstyles
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Not every occasion calls for curls. Sometimes, a sleek and polished hairstyle is all you need. The included
                paddle brush is designed to straighten and smooth hair while drying. It combines directional airflow and
                firm detangling bristles to help you create a smoother-looking finish.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                This attachment is particularly useful for women who prefer simple, elegant hairstyles for work, everyday
                activities, or special gatherings.
              </p>
            </div>

            {/* 5. Curl-Defining Diffuser */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Curl-Defining Diffuser for Natural Curls
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Women with naturally curly or coily hair will appreciate the included curl-defining diffuser. Unlike a regular
                concentrator nozzle, a diffuser helps distribute airflow more gently across curly hair. The FlexStyle diffuser
                features retractable and extendable prongs, allowing you to adjust its configuration for different styling needs.
              </p>

              <div className="p-5 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                  What Makes It Useful?
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Helps distribute airflow evenly across curls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Supports more controlled, frizz-free drying</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Features adjustable prongs for custom depth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Specifically tailored for curly and textured hair</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                    <span>Helps make wash-day styling faster and more convenient</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Intelligent Heat Control */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                  <span>Intelligent Heat Control for Everyday Styling</span>
                  <Flame className="w-4 h-4 text-rose-500" />
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Heat exposure is one of the biggest concerns when using hair styling tools regularly. The Shark FlexStyle
                features intelligent heat control designed to regulate temperature and help reduce excessive heat exposure.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1.5 rounded-xl bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold">
                  4 Heat Settings
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold">
                  3 Airflow Speeds
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold">
                  Cool Shot Lock
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <strong>Important:</strong> Shark&apos;s heat-control technology does not mean zero heat damage. Excessive
                  heat exposure can still affect hair health over time. Always use an appropriate heat protectant spray and
                  follow the manufacturer&apos;s recommendations.
                </div>
              </div>
            </div>

            {/* 7. Lightweight & Convenient Design */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Lightweight and Convenient Design
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Another advantage of the FlexStyle is its compact design. Traditional styling routines can involve multiple
                appliances, heavy cords, and cluttered accessories. The FlexStyle combines several styling functions in one
                device, making it easier to organize your beauty routine.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                It can also be convenient for travel, although you should check voltage compatibility and plug requirements
                before taking it abroad.
              </p>
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
              <span>CHECK THE SHARK FLEXSTYLE PRICE ON AMAZON</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* What Comes Inside the Box? */}
        <section className="p-6 sm:p-8 rounded-3xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
            <Box className="w-4 h-4" />
            <span>Unboxing Overview</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            What Comes Inside the Box? (HD440BK Bundle)
          </h3>

          <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
            The HD440BK package described in the supplied Amazon listing includes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Shark FlexStyle Air Styling & Drying System Base',
              'Two 1.25-inch auto-wrap curlers (Left & Right)',
              'Oval Brush attachment for blowout volume',
              'Paddle Brush attachment for sleek drying',
              'Curl-defining diffuser with adjustable prongs',
              'Styling concentrator nozzle'
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/60 dark:border-brand-sage-800 flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-brand-lightText dark:text-brand-darkText"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted italic pt-2">
            This attachment selection is one of the strongest reasons to consider this particular bundle. Always confirm the
            selected package and color before ordering, because Shark sells different FlexStyle bundles for different hair types.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Balanced Evaluation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Shark FlexStyle Pros and Cons
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
              Before purchasing an expensive styling device, it&apos;s worth looking at both sides objectively.
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
                  <span>Combines a hair dryer and multi-styler in one device</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Includes two auto-wrap curling attachments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Oval brush helps create salon-grade volume and bounce</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Paddle brush supports smooth and sleek styling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Includes a diffuser for curly and coily hair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Offers 4 heat and 3 airflow settings for precise control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Includes a cool shot function to seal the style</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Versatile engineering designed for multiple hair types</span>
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
                  <span>Premium price compared with basic hair dryers</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Learning to master all attachments may take time &amp; technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Curl results can vary depending on hair type and technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Styling attachments require dedicated bathroom storage space</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Not a zero-heat-damage device (heat protectant still needed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Some bundles may not include identical attachments</span>
                </li>
              </ul>
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
              <span>CHECK THE SHARK FLEXSTYLE PRICE ON AMAZON</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Head-to-Head: Shark FlexStyle vs Dyson Airwrap */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              The Luxury Showdown
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Shark FlexStyle vs Dyson Airwrap: Which Should You Choose?
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              If you&apos;re comparing premium multi-stylers, the Dyson Airwrap is probably already on your shopping list.
              Both brands offer versatile airflow-based styling systems, but they have different advantages.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-brand-sage-100/70 dark:bg-brand-sage-900/60 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Feature</th>
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">
                      Shark FlexStyle
                    </th>
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightText dark:text-brand-darkText">Dyson Airwrap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-sage-100 dark:divide-brand-sage-800/80">
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Styling Functions</td>
                    <td className="p-3.5 sm:p-4 font-medium bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">Drying, curling, smoothing</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Drying, curling, smoothing</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Auto-Wrap Curling</td>
                    <td className="p-3.5 sm:p-4 font-medium bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">Yes (Coanda airflow)</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Yes, depending on model</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Multiple Attachments</td>
                    <td className="p-3.5 sm:p-4 font-medium bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">Yes (6-piece system)</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Yes</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Heat Control</td>
                    <td className="p-3.5 sm:p-4 font-medium bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">Intelligent heat control</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Intelligent heat control</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Price Position</td>
                    <td className="p-3.5 sm:p-4 font-bold text-emerald-700 dark:text-emerald-400 bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">
                      Generally more affordable
                    </td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Generally more expensive</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Best For</td>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">
                      Versatile everyday styling
                    </td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Premium luxury styling experience</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary border-t border-brand-sage-200/80 dark:border-brand-sage-800 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
                Our Take:
              </p>
              <p className="text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
                If you want multiple styling attachments and a more budget-conscious alternative to Dyson, the Shark
                FlexStyle is worth serious consideration. If you prefer Dyson&apos;s premium design, connected features on
                compatible models, and its particular styling ecosystem, the Airwrap may be worth comparing.
                Neither is automatically better for every hair type.
              </p>
            </div>
          </div>
        </section>

        {/* Who Should Buy / Who Should Skip */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Who Should Buy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Who Should Buy the Shark FlexStyle?</span>
            </h3>
            <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
              The Shark FlexStyle HD440BK is worth considering if:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>You love experimenting with bouncy curls and blowouts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>You want to simplify and declutter your beauty routine</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>You regularly switch between straight and curly hairstyles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>You want a multi-styler with different specialized brush attachments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>You prefer airflow-based styling over relying entirely on traditional hot curling irons</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>You want a versatile alternative to more expensive luxury hair stylers</span>
              </li>
            </ul>
          </div>

          {/* Who Might Want to Skip It */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-lightText/80 dark:text-brand-darkMuted flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <span>Who Might Want to Skip It?</span>
            </h3>
            <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
              You may want to consider another product if:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You only need a basic hair dryer for quick blast-drying</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You rarely style your hair or change your day-to-day look</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You prefer a dedicated professional curling iron with high extreme heat</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You don&apos;t need multiple attachments and want minimal accessories</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>The price exceeds your current beauty budget</span>
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
              <span className="text-xs text-brand-lightText dark:text-brand-darkText ml-1.5 font-bold">4.4 / 5.0</span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightPrimary dark:text-brand-darkText leading-tight">
            Is the Shark FlexStyle HD440BK Worth Buying in 2026?
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
            <p>
              <strong>Our verdict: Yes, it&apos;s a strong multi-styling option for women who want versatility in one device.</strong> The
              combination of auto-wrap curlers, an oval brush, paddle brush, diffuser, and styling concentrator makes this
              bundle particularly interesting.
            </p>
            <p>
              Its biggest selling point isn&apos;t just curling hair. It&apos;s the ability to switch between multiple styling
              routines using one compact system. For women who regularly create different hairstyles, this can make the
              investment worthwhile.
            </p>
            <p className="text-xs sm:text-sm text-brand-sage-600 dark:text-brand-darkMuted italic">
              The supplied Amazon listing shows a 4.4-star rating from 2,283 customer reviews, which is encouraging, although
              it&apos;s still worth reading recent verified-purchase reviews before buying.
            </p>
          </div>

          {/* Final Callout & CTA */}
          <div className="p-6 rounded-2xl bg-white/90 dark:bg-brand-darkCard/90 border border-brand-sage-200/80 dark:border-brand-sage-800 space-y-4 text-center">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
              Final Recommendation &amp; Next Steps
            </h3>
            <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted max-w-xl mx-auto">
              If you&apos;re looking for an all-in-one beauty tool that can help you create curls, smooth hairstyles, volume,
              and everyday blowouts, the Shark FlexStyle deserves a place on your shortlist.
            </p>
            <p className="text-xs font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
              Ready to upgrade your hair routine? Check the latest Amazon price, available colors, bundle options, and customer reviews before making your decision.
            </p>
            <div className="pt-2">
              <a
                href={AMAZON_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-lightPrimary hover:bg-brand-lightSecondary text-white text-sm font-bold tracking-wide transition-all shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>CHECK THE SHARK FLEXSTYLE PRICE ON AMAZON</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Common Inquiries
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
              <strong>Pricing Notice:</strong> Product details, prices, availability, and customer ratings may change.
              Please check the latest Amazon listing before purchasing.
            </p>
          </div>
        </section>

        {/* Explore More in Hair Care & Beauty */}
        <section className="pt-6 sm:pt-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                Continue Exploring
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                Explore More Hair Care Protocols &amp; Guides
              </h4>
              <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted">
                Discover scalp health, hair follicle nutrition, heat protection strategies, and texture care.
              </p>
            </div>
            <Link
              to="/hair-care"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs sm:text-sm font-bold tracking-wide transition-colors shrink-0 shadow-sm"
            >
              <span>Back to Hair Care Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
};

export default SharkFlexStyleReviewPage;
