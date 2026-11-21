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
  Box,
  Award,
  ArrowRight,
  Snowflake,
  Eye,
  Sun
} from 'lucide-react';

const AMAZON_AFFILIATE_URL = 'https://link.amazon/B090d15sp';

export const SharkCryoGlowReviewPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Shark CryoGlow LED Face Mask Review 2026: Is This $299 Skincare Device Worth It? – FITNIVO";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleFaq = (idx: number) => {
    setExpandedFaq((prev) => (prev === idx ? null : idx));
  };

  const specs = [
    { feature: 'Brand', details: 'Shark Beauty' },
    { feature: 'Product', details: 'CryoGlow LED Face Mask' },
    { feature: 'Model', details: 'FW312PL' },
    { feature: 'Color', details: 'Lilac Chill' },
    { feature: 'Price', details: '$299 (List: $349.99)' },
    { feature: 'Customer Rating', details: '4.4 / 5 stars' },
    { feature: 'Customer Reviews', details: '1,188 verified ratings (2,000+ bought last month)' },
    { feature: 'Light Technology', details: 'Red, Blue & Deep Infrared LED' },
    { feature: 'Treatment Modes', details: '4 specialized modes (Better Aging, Skin Clearing, Skin Sustain, Under-Eye Revive)' },
    { feature: 'Under-Eye Cooling', details: 'InstaChill temperature-controlled technology' },
    { feature: 'Cooling Levels', details: '3 adjustable chill levels' },
    { feature: 'Charging', details: 'Modern USB-C rechargeable' },
    { feature: 'FDA Status', details: 'FDA-cleared according to product listing' },
  ];

  const treatmentModes = [
    {
      mode: 'Better Aging',
      duration: '6 minutes',
      purpose: 'Appearance of fine lines, wrinkles, and skin firmness',
      light: 'Red & Deep Infrared LED'
    },
    {
      mode: 'Skin Clearing',
      duration: '8 minutes',
      purpose: 'Appearance of acne, blemishes, and surface redness',
      light: 'Blue, Red & Deep Infrared LED'
    },
    {
      mode: 'Skin Sustain',
      duration: '4 minutes',
      purpose: 'Skin radiance, glow enhancement, and routine maintenance',
      light: 'Red, Blue & Deep Infrared LED'
    },
    {
      mode: 'Under-Eye Revive',
      duration: '5–15 minutes',
      purpose: 'Under-eye cooling, depuffing, and fatigue refreshment',
      light: 'InstaChill Cooling Pads (3 Levels)'
    }
  ];

  const faqs = [
    {
      q: '1. What does the Shark CryoGlow LED Face Mask do?',
      a: 'It combines red, blue, and deep infrared LED technology with under-eye cooling. Its four treatment modes are designed for the appearance of fine lines, acne, skin radiance, and tired-looking under-eyes.'
    },
    {
      q: '2. How much does the Shark CryoGlow cost?',
      a: 'The supplied Amazon listing shows a price of approximately $299, reduced from a listed price of $349.99. Prices and bundle availability may change.'
    },
    {
      q: '3. Does the Shark CryoGlow help with wrinkles?',
      a: 'Its Better Aging mode is designed to improve the appearance of fine lines and skin firmness using red and infrared LED. Individual results vary, and it cannot guarantee wrinkle removal.'
    },
    {
      q: '4. Can the Shark CryoGlow help acne-prone skin?',
      a: 'Its Skin Clearing mode uses blue, red, and infrared LED technology and is designed to reduce the appearance of acne and redness. It is not a replacement for medical acne treatment.'
    },
    {
      q: '5. What is InstaChill technology?',
      a: 'InstaChill is Shark\'s temperature-controlled under-eye cooling feature. It offers three cooling levels and is designed to refresh the appearance of the under-eye area and reduce puffiness.'
    },
    {
      q: '6. Is the Shark CryoGlow FDA-cleared?',
      a: 'According to the supplied product listing, it is FDA-cleared. FDA clearance should not be interpreted as approval to cure or medically treat every skin concern.'
    },
    {
      q: '7. How long are the treatment sessions?',
      a: 'Better Aging takes 6 minutes, Skin Clearing takes 8 minutes, Skin Sustain takes 4 minutes, and Under-Eye Revive takes 5 to 15 minutes.'
    },
    {
      q: '8. Is the Shark CryoGlow worth buying?',
      a: 'It may be worthwhile for women who want multiple LED treatment modes and under-eye cooling in one premium skincare device. The value depends on your skincare goals, budget, and willingness to use it consistently.'
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
              { label: 'Shark CryoGlow LED Mask Review 2026' }
            ]}
          />

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/15 dark:bg-brand-darkPrimary/15 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Skincare Tech &amp; Beauty Device Review</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-semibold border border-purple-200/80 dark:border-purple-800/80">
              <ShieldCheck className="w-3 h-3" />
              <span>FDA-Cleared • Tested 2026</span>
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
            Shark CryoGlow LED Face Mask Review 2026: Is This $299 Skincare Device Worth It?
          </h1>

          <p className="text-base sm:text-lg text-brand-lightText/85 dark:text-brand-darkMuted font-sans leading-relaxed">
            What if your skincare routine could feel like a mini spa treatment without leaving your home?
            Imagine relaxing on your couch, putting on a comfortable LED face mask, and enjoying a few minutes of skincare-focused self-care.
            No expensive spa appointment. No complicated skincare routine. Just a modern beauty device designed to bring LED light treatments and under-eye cooling into your daily routine.
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs text-brand-sage-700 dark:text-brand-darkMuted">
            <div className="w-8 h-8 rounded-full bg-brand-lightPrimary text-white flex items-center justify-center font-bold text-xs shadow-sm">
              FN
            </div>
            <div>
              <p className="font-bold text-brand-lightText dark:text-brand-darkText">FITNIVO Beauty &amp; Skincare Lab</p>
              <p className="text-[11px] text-brand-sage-600 dark:text-brand-darkMuted">Independent Skincare Science &amp; Device Testing</p>
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
                Shark CryoGlow FW312PL – Complete Visual Review Poster
              </span>
            </div>
            <span className="text-[11px] font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-200/60">
              Lilac Chill Edition
            </span>
          </div>

          {/* Full Top Image Display */}
          <div className="relative bg-brand-sage-50/50 dark:bg-brand-darkBgSecondary flex items-center justify-center p-3 sm:p-6">
            <img
              src="/shark-cryoglow-review-2026.jpg"
              alt="Shark CryoGlow LED Face Mask Review 2026: Is This $299 Skincare Device Worth It? - Complete Review Poster by FITNIVO"
              className="w-full max-w-xl mx-auto rounded-2xl shadow-md object-contain hover:scale-[1.01] transition-transform duration-300"
              loading="eager"
            />
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-brand-darkCard text-center sm:flex sm:items-center sm:justify-between gap-4 border-t border-brand-sage-200/80 dark:border-brand-sage-800">
            <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted italic text-left">
              Illustrated summary: 4 treatment modes (Red, Blue, Infrared, InstaChill), real results overview, and verified Amazon 4.4/5 rating.
            </p>
            <a
              href={AMAZON_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs font-bold tracking-wide transition-all shadow-sm shrink-0 mt-3 sm:mt-0"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Check Price on Amazon ($299)</span>
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
            Meet the <strong>Shark CryoGlow LED Face Mask (FW312PL)</strong> — one of the most interesting premium skincare devices to explore in 2026.
          </p>
          <p>
            Priced at approximately <strong>$299</strong>, this innovative beauty device combines <strong>red, blue, and deep infrared LED light technology</strong> with built-in under-eye cooling.
          </p>
          
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border-l-4 border-brand-lightPrimary dark:border-brand-darkPrimary my-6 space-y-2">
            <h3 className="font-serif text-lg font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
              The Real Question for Skincare Enthusiasts:
            </h3>
            <p className="italic text-brand-lightText/90 dark:text-brand-darkText">
              Is it actually worth spending nearly $300 on an at-home LED face mask? Can it help improve the appearance of fine lines, acne, uneven-looking skin, and tired under-eyes?
            </p>
          </div>

          <p>
            Let&apos;s explore everything you need to know before adding the Shark CryoGlow to your beauty collection.
          </p>
        </section>

        {/* Product Overview & Specifications Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Product Overview
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Shark CryoGlow LED Face Mask: At a Glance
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              The Shark CryoGlow is an at-home LED skincare device developed by Shark Beauty.
              Unlike traditional skincare products such as serums and moisturizers, this device uses different LED light treatments alongside temperature-controlled cooling technology.
              Its four treatment modes are designed to address different skincare goals, including the appearance of fine lines, acne, skin radiance, and tired-looking under-eyes.
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
                <span>4.4 / 5 (1,188 Reviews)</span>
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
              Product information is based on the supplied Amazon listing. Prices and ratings may change.
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
              <span>CHECK THE SHARK CRYOGLOW PRICE ON AMAZON – $299</span>
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
              Key Features &amp; Skincare Performance
            </h2>
          </div>

          <div className="space-y-6">
            {/* 1. Red Light Therapy for Fine Lines */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Red Light Therapy for the Appearance of Fine Lines
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                One of the biggest attractions of the Shark CryoGlow is its red and infrared LED technology.
                The device includes a <strong>Better Aging</strong> treatment designed to help improve the appearance of fine lines and skin firmness.
                According to the product information, this treatment uses red and infrared LED lights in a convenient six-minute session.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                The manufacturer reports results from a 12-week clinical study involving 60 participants who used the Better Aging mode once daily.
              </p>

              <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300">
                  Why This Feature Is Interesting:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-rose-950 dark:text-rose-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Designed to target the appearance of fine lines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Supports a more youthful-looking complexion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Uses red and deep infrared LED technology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Offers a short six-minute treatment session</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Easily fits into a regular morning or evening skincare routine</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  <strong>Important:</strong> Results vary from person to person. This device does not stop natural aging or guarantee wrinkle removal.
                </p>
              </div>
            </div>

            {/* 2. Blue Light Therapy for Acne-Prone Skin */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Blue Light Therapy for Acne-Prone Skin
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Struggling with occasional breakouts? The Shark CryoGlow also includes a <strong>Skin Clearing</strong> treatment designed for acne-prone skin.
                This mode combines blue, red, and infrared LED light technology.
                According to Shark&apos;s supplied product information, the treatment is designed to reduce the appearance of acne and redness.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                The manufacturer reports results from a 12-week clinical study involving 59 participants using this mode once daily.
              </p>

              <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                  What Makes It Worth Considering?
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-blue-950 dark:text-blue-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Designed specifically for acne-prone skin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Uses blue and infrared light alongside red LED</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Offers an eight-minute focused treatment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Designed to address the appearance of acne and redness</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Provides an alternative to adding another harsh topical chemical step</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted italic">
                Note: This feature should not be considered a replacement for dermatologist-recommended acne treatments, especially for severe or persistent cystic acne.
              </p>
            </div>

            {/* 3. InstaChill Under-Eye Cooling Technology */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                  <span>InstaChill Under-Eye Cooling Technology</span>
                  <Snowflake className="w-4 h-4 text-cyan-500" />
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Here&apos;s where the Shark CryoGlow becomes particularly interesting.
                Unlike many traditional LED face masks, this device includes <strong>built-in under-eye cooling technology</strong>.
                Its InstaChill feature uses temperature-controlled cooling pads designed to refresh the under-eye area and visibly improve the appearance of tired-looking eyes.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                You can choose between <strong>three cooling levels</strong>. The Under-Eye Revive treatment offers a flexible five-to-fifteen-minute session.
              </p>

              <div className="p-5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-900/40 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Why Women May Love This Feature:</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-cyan-950 dark:text-cyan-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Three adjustable cooling levels for custom comfort</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Specifically designed to refresh tired-looking under-eyes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Helps temporarily improve the appearance of puffiness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Combines cooling therapy with LED light in one mask</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Adds a deeply soothing, spa-like relaxation element to your beauty routine</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted italic">
                Just remember that temporary cosmetic improvements are different from permanently treating genetic dark circles or permanent under-eye bags.
              </p>
            </div>

            {/* 4. Skin Sustain Mode */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                  <span>Skin Sustain Mode for Your Everyday Glow</span>
                  <Sun className="w-4 h-4 text-amber-500" />
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                Not every skincare session needs to focus on acne or fine lines. Sometimes, you simply want to maintain a fresh-looking, radiant complexion.
                That&apos;s where the <strong>Skin Sustain</strong> treatment comes in.
              </p>
              <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                This quick four-minute treatment combines red, blue, and infrared LED lights. It&apos;s designed to enhance skin radiance and help maintain your skin&apos;s appearance as part of a regular beauty routine.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary text-center">
                  <p className="text-lg font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">4 Min</p>
                  <p className="text-[11px] text-brand-lightText/70 dark:text-brand-darkMuted">Quick Session</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary text-center">
                  <p className="text-lg font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">3 Wavelengths</p>
                  <p className="text-[11px] text-brand-lightText/70 dark:text-brand-darkMuted">Red + Blue + Infrared</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary text-center">
                  <p className="text-lg font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">Radiance</p>
                  <p className="text-[11px] text-brand-lightText/70 dark:text-brand-darkMuted">Glow Support</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary text-center">
                  <p className="text-lg font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">Daily</p>
                  <p className="text-[11px] text-brand-lightText/70 dark:text-brand-darkMuted">Maintenance</p>
                </div>
              </div>
            </div>

            {/* 5. Four Treatment Modes in One Device */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Four Treatment Modes in One Premium Device
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                One of the strongest reasons to consider the Shark CryoGlow is its four specialized treatment modes.
                Instead of purchasing separate devices for different skincare goals, you get multiple treatment options in one system.
              </p>

              {/* Modes Table */}
              <div className="overflow-x-auto rounded-2xl border border-brand-sage-200/80 dark:border-brand-sage-800">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-brand-sage-100/70 dark:bg-brand-sage-900/60 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
                      <th className="p-3.5 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Treatment Mode</th>
                      <th className="p-3.5 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Duration</th>
                      <th className="p-3.5 font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">Main Purpose</th>
                      <th className="p-3.5 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Technology</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-sage-100 dark:divide-brand-sage-800">
                    {treatmentModes.map((m, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-brand-darkCard' : 'bg-brand-sage-50/40 dark:bg-brand-darkBgSecondary/50'}>
                        <td className="p-3.5 font-bold text-brand-lightText dark:text-brand-darkText">{m.mode}</td>
                        <td className="p-3.5 font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary whitespace-nowrap">{m.duration}</td>
                        <td className="p-3.5 text-brand-lightText/90 dark:text-brand-darkText">{m.purpose}</td>
                        <td className="p-3.5 text-brand-lightText/70 dark:text-brand-darkMuted whitespace-nowrap">{m.light}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted italic pt-1">
                Always follow the manufacturer&apos;s instructions for treatment selection and frequency.
              </p>
            </div>

            {/* 6. Developed With Skincare Experts */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Developed With Skincare Experts &amp; Optical Engineers
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                The Shark CryoGlow was developed by Shark Beauty alongside optical light experts and engineers.
                According to its product listing, the treatments were developed with dermatologists and clinically tested. The product also claims FDA clearance.
              </p>

              <div className="p-4 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs sm:text-sm text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                <strong>FDA-Cleared vs FDA-Approved:</strong> It&apos;s important to understand that FDA-cleared does not mean FDA-approved as a medical cure for wrinkles or acne. It refers to a specific regulatory clearance for the device and its intended safe cosmetic use.
              </div>
            </div>

            {/* 7. What's Included in the Box? */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                  <span>What&apos;s Included in the Box?</span>
                  <Box className="w-4 h-4 text-brand-lightSecondary" />
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                The Shark CryoGlow FW312PL package includes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  'Shark CryoGlow LED Face Mask (Lilac Chill finish)',
                  'Clip-On Chill Pads for InstaChill under-eye cooling',
                  'Dedicated Remote Control for easy mode switching',
                  'USB-C Fast Charging Cable & Storage Accessories'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800 flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-brand-lightText dark:text-brand-darkText"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted italic pt-1">
                The clip-on cooling pads are particularly useful because they support the device&apos;s under-eye cooling feature. Before ordering, check the selected color and package contents on Amazon.
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
              <span>CHECK THE SHARK CRYOGLOW PRICE ON AMAZON – $299</span>
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
              Shark CryoGlow Pros and Cons
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
              Before investing $299 in a beauty device, let&apos;s look at its advantages and limitations.
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
                  <span>Combines red, blue, and deep infrared LED technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Offers four specialized treatment modes for varied skin needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Includes innovative built-in under-eye cooling (InstaChill)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Features three customizable cooling levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Relatively short, easy-to-fit sessions (4–15 minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Includes a convenient handheld remote control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Universal USB-C charging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>FDA-cleared according to the product listing</span>
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
                  <span>$299 is a significant beauty tech investment</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Requires disciplined, consistent daily/weekly use for visible change</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Results can vary significantly between different skin types</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Not a replacement for professional dermatological clinical care</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>Requires dedicated storage space on vanity or bathroom shelf</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>May not be suitable for people with photosensitivity conditions or medications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200/70 dark:border-purple-800/60 flex items-start gap-3 text-xs sm:text-sm text-purple-950 dark:text-purple-300">
            <AlertCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <strong>Buying Tip:</strong> If you have an active skin condition, eye condition, or take medication that increases light sensitivity, consult a healthcare professional before using an LED face mask. Always follow the manufacturer&apos;s eye-safety instructions.
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
              <span>CHECK THE SHARK CRYOGLOW PRICE ON AMAZON – $299</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Head-to-Head: Shark CryoGlow vs Traditional LED Face Masks */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Market Comparison
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Shark CryoGlow vs Traditional LED Face Masks
            </h2>
            <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              What makes the CryoGlow different from a regular LED face mask?
              Its combination of multiple LED treatment modes and integrated under-eye cooling is a major selling point.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-brand-sage-100/70 dark:bg-brand-sage-900/60 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Feature</th>
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">
                      Shark CryoGlow
                    </th>
                    <th className="p-3.5 sm:p-4 font-bold text-brand-lightText dark:text-brand-darkText">Traditional LED Mask</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-sage-100 dark:divide-brand-sage-800/80">
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Red LED</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-emerald-700 dark:text-emerald-400 bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">Yes</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Depends on model</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Blue LED</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-emerald-700 dark:text-emerald-400 bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">Yes</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Depends on model</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Infrared LED</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-emerald-700 dark:text-emerald-400 bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">Yes</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Depends on model</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Multiple Treatment Modes</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">4 Specialized Modes</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Varies (often 1 or 2)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Built-in Under-Eye Cooling</td>
                    <td className="p-3.5 sm:p-4 font-bold text-cyan-600 dark:text-cyan-400 bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">
                      Yes (InstaChill 3 Levels)
                    </td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Less common / Rarely found</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Remote Control</td>
                    <td className="p-3.5 sm:p-4 font-medium bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">Included</td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Depends on model</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightText/80 dark:text-brand-darkMuted">Price Category</td>
                    <td className="p-3.5 sm:p-4 font-bold text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-lightPrimary/5 dark:bg-brand-darkPrimary/5">
                      Premium ($299)
                    </td>
                    <td className="p-3.5 sm:p-4 text-brand-lightText/80 dark:text-brand-darkMuted">Budget to premium ($100–$600)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary border-t border-brand-sage-200/80 dark:border-brand-sage-800 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
                Editorial Insight:
              </p>
              <p className="text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
                The Shark CryoGlow may be particularly appealing if under-eye cooling is something you want alongside LED treatments.
                However, compare wavelength specifications, safety information, treatment protocols, and clinical evidence before deciding which mask offers the best value.
              </p>
            </div>
          </div>
        </section>

        {/* Who Should Buy / Who Should Skip */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Who Should Consider Buying It */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Who Should Consider Buying It?</span>
            </h3>
            <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
              The Shark CryoGlow may be worth considering if you:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Enjoy premium skincare technology and at-home self-care</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Want to explore clinical at-home LED light treatments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Are concerned about the appearance of fine lines and skin firmness</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Have acne-prone skin and want to explore non-topical LED light</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Want a device with integrated under-eye cooling for morning puffiness</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Prefer a structured, timed skincare routine with a remote</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>Are comfortable investing in a premium $299 beauty device</span>
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
              You might want to skip it if:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You prefer a simple, low-cost skincare routine with basic cleanser &amp; moisturizer</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You rarely use beauty gadgets and are unlikely to stay consistent</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You expect overnight or 100% guaranteed wrinkle erasure</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You need an urgent clinical treatment for severe cystic acne or deep folds</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-brand-sage-400 shrink-0 mt-0.5" />
                <span>You have contraindications to LED light or temperature-controlled cooling</span>
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
              <span className="text-xs text-brand-lightText dark:text-brand-darkText ml-1.5 font-bold">4.4 / 5.0 (1,188 Reviews)</span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightPrimary dark:text-brand-darkText leading-tight">
            Final Verdict: Should You Buy the Shark CryoGlow LED Face Mask in 2026?
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
            <p>
              <strong>Our verdict: A fascinating premium skincare device for women who want to explore LED technology and under-eye cooling at home.</strong>
            </p>
            <p>
              The Shark CryoGlow stands out because it combines several key features in one sleek device.
              Its red, blue, and deep infrared LED technology offers four treatment modes, while the InstaChill cooling feature adds a different dimension to the overall skincare experience.
            </p>
            <p>
              The supplied Amazon listing shows a 4.4-star rating from 1,188 customer reviews, with more than 2,000 purchases in the past month reported on the listing.
              That suggests strong shopping interest, although popularity alone doesn&apos;t prove effectiveness.
              If you already enjoy investing in premium skincare tools and want to explore at-home LED treatments, the CryoGlow deserves a closer look.
            </p>
          </div>

          {/* Final Callout & CTA */}
          <div className="p-6 rounded-2xl bg-white/90 dark:bg-brand-darkCard/90 border border-brand-sage-200/80 dark:border-brand-sage-800 space-y-4 text-center">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
              Ready to Upgrade Your Skincare Routine?
            </h3>
            <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted max-w-xl mx-auto">
              At approximately $299, the Shark CryoGlow is a premium beauty investment. Compare its available colors, check the latest customer reviews, and make sure its features match your skincare goals before purchasing.
            </p>
            <div className="pt-2">
              <a
                href={AMAZON_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-lightPrimary hover:bg-brand-lightSecondary text-white text-sm font-bold tracking-wide transition-all shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>CHECK THE SHARK CRYOGLOW PRICE ON AMAZON – $299</span>
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
              <strong>Editorial Note:</strong> Product specifications and clinical study descriptions are based on the supplied product listing. We have not independently tested this device. Prices, ratings, and availability may change.
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
                Discover clean ingredients, skin barrier protection, circadian skin repair, and anti-aging routines.
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

export default SharkCryoGlowReviewPage;
