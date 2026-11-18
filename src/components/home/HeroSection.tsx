import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 md:pt-14 md:pb-24">
      {/* Background romantic rose ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[400px] bg-brand-blush-300/35 dark:bg-brand-sage-900/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-8 right-6 w-48 sm:w-80 h-48 sm:h-80 bg-rose-200/40 dark:bg-brand-darkPrimary/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/60 border border-brand-sage-200 dark:border-brand-sage-700/60 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Feel Better. Live Healthier.</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight leading-[1.15]">
              Your Health. <br />
              <span className="italic font-normal text-brand-sage-500 dark:text-brand-darkPrimary">Your Journey.</span> <br />
              Your Best Self.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover practical wellness advice, healthy recipes, fitness inspiration, and everyday tips designed to help women feel confident and live healthier.
            </p>

            {/* Mobile-First Touch-Friendly CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <Link
                to="/womens-health"
                className="px-8 py-3.5 sm:py-4 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary text-white dark:text-brand-darkBg font-semibold text-sm sm:text-base shadow-soft hover:shadow-soft-lg hover:bg-brand-sage-700 dark:hover:bg-brand-sage-300 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Explore Wellness</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/lifestyle"
                className="px-8 py-3.5 sm:py-4 rounded-full bg-white dark:bg-brand-darkCard text-brand-lightPrimary dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 font-semibold text-sm sm:text-base hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary transition-all duration-200 flex items-center justify-center active:scale-95"
              >
                Discover Healthy Living
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 sm:pt-6 border-t border-brand-sage-200/60 dark:border-brand-sage-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
                <ShieldCheck className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Evidence-informed</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
                <Heart className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Zero crash diets</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-sage-600 dark:text-brand-darkMuted col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Curated for women</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with editorial lifestyle photograph (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Main portrait image */}
              <div className="relative aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-brand-darkCard bg-brand-sage-100 dark:bg-brand-sage-900">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85"
                  alt="Confident woman enjoying mindful morning wellness ritual"
                  className="w-full h-full object-cover object-top"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C0D1B]/50 via-transparent to-transparent" />
                
                {/* Embedded Quote / Stat Overlay */}
                <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 p-3.5 sm:p-4 rounded-2xl bg-white/90 dark:bg-brand-darkBg/90 backdrop-blur-md shadow-lg border border-white/30">
                  <p className="font-serif italic text-xs sm:text-sm text-brand-lightPrimary dark:text-brand-darkText">
                    &ldquo;Health is not an all-or-nothing contest. It is the steady accumulation of small daily kindnesses to yourself.&rdquo;
                  </p>
                  <span className="block mt-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-brand-sage-500 dark:text-brand-darkMuted">
                    FITNIVO Daily Philosophy
                  </span>
                </div>
              </div>

              {/* Floating pill badge 1 */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-white dark:bg-brand-darkCard shadow-soft-lg border border-brand-sage-200 dark:border-brand-sage-700 flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-blush-200 dark:bg-brand-sage-900 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-xs">
                  25g+
                </div>
                <div className="text-xs">
                  <span className="font-bold block text-brand-lightText dark:text-brand-darkText">High Protein</span>
                  <span className="text-brand-sage-500 text-[10px]">Morning Fuel</span>
                </div>
              </div>

              {/* Floating pill badge 2 */}
              <div className="absolute top-1/2 -right-2 sm:-right-4 translate-y-4 px-3.5 py-2 rounded-2xl bg-white dark:bg-brand-darkCard shadow-soft-lg border border-brand-sage-200 dark:border-brand-sage-700 flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                </span>
                <div className="text-xs">
                  <span className="font-bold block text-brand-lightText dark:text-brand-darkText">250K+ Women</span>
                  <span className="text-brand-sage-500 text-[10px]">Empowered Daily</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
