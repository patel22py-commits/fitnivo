import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-1 pb-3 sm:pt-3 sm:pb-5 md:pt-5 md:pb-7">
      {/* Background romantic rose ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] h-[280px] sm:h-[400px] bg-brand-blush-300/35 dark:bg-brand-sage-900/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-8 right-6 w-40 sm:w-80 h-40 sm:h-80 bg-rose-200/40 dark:bg-brand-darkPrimary/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/60 border border-brand-sage-200 dark:border-brand-sage-700/60 text-brand-lightPrimary dark:text-brand-darkPrimary text-[11px] sm:text-xs font-semibold uppercase tracking-widest shadow-sm">
              <div className="w-4 h-4 rounded-full bg-white dark:bg-white/95 p-0.5 flex items-center justify-center shadow-xs">
                <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-full h-full object-contain" />
              </div>
              <span>FITNIVO • Feel Better. Live Healthier.</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight leading-[1.15]">
              Your Health. <br />
              <span className="italic font-normal text-brand-sage-500 dark:text-brand-darkPrimary">Your Journey.</span> <br />
              Your Best Self.
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover practical wellness advice, healthy recipes, fitness inspiration, and everyday tips designed to help women feel confident and live healthier.
            </p>

            {/* Mobile-First Touch-Friendly CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <Link
                to="/womens-health"
                className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary text-white dark:text-brand-darkBg font-semibold text-xs sm:text-sm shadow-soft hover:shadow-soft-lg hover:bg-brand-sage-700 dark:hover:bg-brand-sage-300 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Explore Wellness</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/lifestyle"
                className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full bg-white dark:bg-brand-darkCard text-brand-lightPrimary dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 font-semibold text-xs sm:text-sm hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary transition-all duration-200 flex items-center justify-center active:scale-95"
              >
                Discover Healthy Living
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-2.5 sm:pt-4 border-t border-brand-sage-200/60 dark:border-brand-sage-800/80 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-brand-sage-600 dark:text-brand-darkMuted">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Evidence-informed</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-brand-sage-600 dark:text-brand-darkMuted">
                <Heart className="w-3.5 h-3.5 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Zero crash diets</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-brand-sage-600 dark:text-brand-darkMuted col-span-2 sm:col-span-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Curated for women</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with editorial lifestyle photograph (5 cols) */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              {/* Main portrait image - Mobile-optimized aspect ratio */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl sm:rounded-[2.2rem] overflow-hidden shadow-xl border-3 sm:border-4 border-white dark:border-brand-darkCard bg-brand-sage-100 dark:bg-brand-sage-900">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85"
                  alt="Confident woman enjoying mindful morning wellness ritual"
                  className="w-full h-full object-cover object-top"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C0D1B]/55 via-transparent to-transparent" />
                
                {/* Embedded Quote / Stat Overlay */}
                <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-5 sm:inset-x-5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-brand-darkBg/90 backdrop-blur-md shadow-md border border-white/30">
                  <p className="font-serif italic text-[11px] sm:text-xs text-brand-lightPrimary dark:text-brand-darkText line-clamp-2">
                    &ldquo;Health is not an all-or-nothing contest. It is the steady accumulation of small daily kindnesses to yourself.&rdquo;
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-3 h-3 object-contain" />
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-brand-sage-500 dark:text-brand-darkMuted">
                      FITNIVO Daily Philosophy
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Official Brand Seal */}
              <div className="absolute -bottom-2 right-1 sm:-bottom-3 sm:-right-3 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl bg-white dark:bg-brand-darkCard shadow-soft border border-brand-sage-200 dark:border-brand-sage-700 flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-white dark:bg-white/95 p-0.5 flex items-center justify-center shadow-xs border border-brand-sage-100">
                  <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-full h-full object-contain" />
                </div>
                <div className="text-[10px] sm:text-xs">
                  <span className="font-bold block text-brand-lightPrimary dark:text-brand-darkPrimary">FITNIVO™</span>
                  <span className="text-brand-sage-500 text-[9px]">Women's Wellness</span>
                </div>
              </div>

              {/* Floating pill badge 1 */}
              <div className="absolute -top-2 left-1 sm:-top-3 sm:-left-3 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-2xl bg-white dark:bg-brand-darkCard shadow-soft border border-brand-sage-200 dark:border-brand-sage-700 flex items-center gap-1.5">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-blush-200 dark:bg-brand-sage-900 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-[10px]">
                  25g+
                </div>
                <div className="text-[10px] sm:text-xs">
                  <span className="font-bold block text-brand-lightText dark:text-brand-darkText">High Protein</span>
                  <span className="text-brand-sage-500 text-[9px]">Morning Fuel</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
