import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, getCategoryBySlug } from '../data/categories';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MedicalDisclaimer } from '../components/common/MedicalDisclaimer';
import { NewsletterBox } from '../components/common/NewsletterBox';
import {
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Lightbulb,
  Heart,
  RotateCcw,
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface CategoryPageProps {
  forcedSlug?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ forcedSlug }) => {
  const params = useParams<{ slug?: string }>();
  const slug = forcedSlug || params.slug || 'womens-health';

  const category = getCategoryBySlug(slug) || CATEGORIES[0];
  const [checkedHabits, setCheckedHabits] = useState<string[]>([]);
  const [expandedPillar, setExpandedPillar] = useState<string>(category.pillars[0]?.id || '');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = `${category.name} – FITNIVO | Women's Wellness Platform`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setExpandedPillar(category.pillars[0]?.id || '');
    setCheckedHabits([]);
    setExpandedFaq(0);
  }, [category]);

  const toggleHabit = (id: string) => {
    setCheckedHabits((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const togglePillar = (id: string) => {
    setExpandedPillar((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Category Banner */}
      <section className="relative overflow-hidden bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary py-10 sm:py-16 md:py-20 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: category.name }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-3 sm:pt-6">
            <div className="lg:col-span-8 space-y-4 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>{category.badge}</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
                {category.name}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed max-w-2xl mx-auto sm:mx-0">
                {category.description}
              </p>

              <p className="font-serif italic text-xs sm:text-sm text-brand-sage-600 dark:text-brand-darkPrimary">
                &ldquo;{category.tagline}&rdquo;
              </p>
            </div>

            {/* Category Banner Visual Badge */}
            <div className="lg:col-span-4 relative mt-2 lg:mt-0">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white dark:border-brand-darkCard bg-brand-sage-100 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                {/* Brand Seal badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-white/95 dark:bg-brand-darkCard/95 backdrop-blur-sm shadow-sm flex items-center gap-1.5 border border-brand-sage-200/60">
                  <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-3.5 h-3.5 object-contain" />
                  <span className="text-[10px] font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
                    FITNIVO Guide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-12 sm:space-y-16">
        
        {/* Medical disclaimer note for health & weight management categories */}
        {(category.slug === 'womens-health' || category.slug === 'weight-loss') && (
          <MedicalDisclaimer variant="compact" />
        )}

        {/* Featured Skincare Tech Review for Beauty */}
        {category.slug === 'beauty' && (
          <section className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-sage-50 via-white to-brand-sage-100/70 dark:from-brand-darkBgSecondary dark:via-brand-darkCard dark:to-brand-darkBg border-2 border-brand-lightPrimary/20 dark:border-brand-darkPrimary/30 shadow-soft-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-md border border-brand-sage-200/80 dark:border-brand-sage-800 bg-brand-sage-100 max-h-80 flex items-center justify-center">
                  <img
                    src="/shark-cryoglow-review-2026.jpg"
                    alt="Shark CryoGlow LED Face Mask Review 2026"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-lightPrimary text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured Skincare Review</span>
                </span>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-lightPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold uppercase tracking-wider">
                    Beauty Tech Review 2026
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200/70 dark:border-amber-800/70">
                    <Star className="w-3 h-3 fill-current" />
                    <span>4.4 / 5 (1,188 Reviews)</span>
                  </div>
                  <span className="text-xs text-purple-700 dark:text-purple-300 font-bold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200/60">
                    FDA-Cleared • InstaChill
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-lightPrimary dark:text-brand-darkText leading-tight">
                  Shark CryoGlow LED Face Mask Review 2026: Is This $299 Skincare Device Worth It?
                </h3>

                <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
                  Transform your skincare routine with red, blue, and deep infrared LED light therapies paired with temperature-controlled under-eye cooling. We test all 4 treatment modes and clinical results.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/beauty/shark-cryoglow-review-2026"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs sm:text-sm font-bold tracking-wide transition-all shadow-soft hover:shadow-soft-lg"
                  >
                    <span>Read Full In-Depth Review &amp; Verdict</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://link.amazon/B090d15sp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 text-xs sm:text-sm font-semibold text-brand-lightText dark:text-brand-darkText hover:text-brand-lightPrimary transition-colors"
                  >
                    <span>Check on Amazon ($299)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Hair Tool Review for Hair Care */}
        {category.slug === 'hair-care' && (
          <section className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-sage-50 via-white to-brand-sage-100/70 dark:from-brand-darkBgSecondary dark:via-brand-darkCard dark:to-brand-darkBg border-2 border-brand-lightPrimary/20 dark:border-brand-darkPrimary/30 shadow-soft-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-md border border-brand-sage-200/80 dark:border-brand-sage-800 bg-brand-sage-100 max-h-80 flex items-center justify-center">
                  <img
                    src="/shark-flexstyle-review-2026.jpg"
                    alt="Shark FlexStyle Review 2026"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-lightPrimary text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured Review</span>
                </span>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-lightPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold uppercase tracking-wider">
                    Hair Tool Review 2026
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200/70 dark:border-amber-800/70">
                    <Star className="w-3 h-3 fill-current" />
                    <span>4.4 / 5 (2,283 Reviews)</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-lightPrimary dark:text-brand-darkText leading-tight">
                  Shark FlexStyle Review 2026: Is This Luxury Air Multi-Styler Worth Buying?
                </h3>

                <p className="text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
                  Beautiful salon-style hair without spending hours in front of the mirror. We test the Shark FlexStyle HD440BK with Coanda-inspired auto-wrap curling technology, interchangeable styling attachments, and intelligent heat control.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/hair-care/shark-flexstyle-review-2026"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs sm:text-sm font-bold tracking-wide transition-all shadow-soft hover:shadow-soft-lg"
                  >
                    <span>Read Full In-Depth Review &amp; Verdict</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://link.amazon/B04YpRTko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 text-xs sm:text-sm font-semibold text-brand-lightText dark:text-brand-darkText hover:text-brand-lightPrimary transition-colors"
                  >
                    <span>Check on Amazon</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 1. Key Takeaways Summary Card */}
        <section className="p-6 sm:p-8 rounded-3xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
            <Sparkles className="w-4 h-4" />
            <span>Core Takeaways for {category.name}</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {category.takeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 2. The 4 Guided Wellness Pillars */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary">
              Evidence-Informed Framework
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-lightText dark:text-brand-darkText">
              The 4 Pillars of {category.name}
            </h2>
            <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted max-w-xl">
              Tap any pillar below to explore the scientific rationale, recommended action steps, and daily tips.
            </p>
          </div>

          <div className="space-y-4">
            {category.pillars.map((pillar, idx) => {
              const isExpanded = expandedPillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  className="rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => togglePillar(pillar.id)}
                    className="w-full p-5 sm:p-7 flex items-center justify-between text-left gap-4 hover:bg-brand-sage-50/50 dark:hover:bg-brand-darkBgSecondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className="w-8 h-8 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-xs shrink-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary block">
                          {pillar.badge}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted mt-0.5 line-clamp-1">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-brand-sage-100/60 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-7 sm:pb-8 pt-2 space-y-5 border-t border-brand-sage-100 dark:border-brand-sage-800/60">
                      <p className="text-xs sm:text-sm text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                        {pillar.summary}
                      </p>

                      {/* Action Steps */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary block">
                          Recommended Action Protocol:
                        </span>
                        <div className="space-y-2">
                          {pillar.actionSteps.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkText">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary mt-2 shrink-0" />
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Scientific Rationale & Pro-tip */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary border border-brand-sage-200/60 dark:border-brand-sage-800/80 space-y-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-brand-sage-600 dark:text-brand-darkMuted block">
                            Scientific Rationale
                          </span>
                          <p className="text-xs text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
                            {pillar.scientificRationale}
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 space-y-1">
                          <div className="flex items-center gap-1.5 text-rose-800 dark:text-rose-300 font-bold text-[10px] uppercase tracking-wider">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>Editorial Pro-Tip</span>
                          </div>
                          <p className="text-xs text-rose-950/80 dark:text-rose-200/80 leading-relaxed">
                            {pillar.proTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Interactive Daily Habit Tracker for this Category */}
        <section className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary block">
                Interactive Checklist
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
                Daily {category.name} Habits
              </h3>
              <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted mt-0.5">
                {checkedHabits.length} of {category.dailyChecklist.length} habits completed today
              </p>
            </div>
            {checkedHabits.length > 0 && (
              <button
                onClick={() => setCheckedHabits([])}
                className="inline-flex items-center gap-1 text-xs text-brand-sage-600 hover:text-brand-lightPrimary transition-colors p-2"
                title="Reset checklist"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {category.dailyChecklist.map((habit) => {
              const done = checkedHabits.includes(habit.id);

              return (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none active:scale-[0.99] ${
                    done
                      ? 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200'
                      : 'bg-brand-sage-50/50 dark:bg-brand-darkBgSecondary/60 border-brand-sage-200/80 dark:border-brand-sage-800 text-brand-lightText dark:text-brand-darkText hover:border-brand-lightPrimary/50'
                  }`}
                >
                  <div className="text-xs pr-2">
                    <span className={`font-semibold block ${done ? 'line-through opacity-70' : ''}`}>
                      {habit.title}
                    </span>
                    <span className="text-[11px] text-brand-sage-600 dark:text-brand-darkMuted">
                      {habit.target}
                    </span>
                  </div>
                  <div className="shrink-0">
                    {done ? (
                      <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-brand-sage-300 dark:border-brand-sage-700" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Evidence-Informed Answers</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Common Questions About {category.name}
            </h2>
          </div>

          <div className="space-y-3">
            {category.faq.map((item, idx) => {
              const isOpen = expandedFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 font-semibold text-sm sm:text-base text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-50/50 dark:hover:bg-brand-darkBgSecondary/50 transition-colors"
                  >
                    <span>{item.question}</span>
                    <div className="p-1 rounded-lg text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed border-t border-brand-sage-100 dark:border-brand-sage-800/60 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Explore Other Departments */}
        <section className="pt-8 border-t border-brand-sage-200/60 dark:border-brand-sage-800">
          <div className="mb-6 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-sage-500 dark:text-brand-darkMuted">
              Continue Your Wellness Journey
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
              Other Wellness Pillars
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((other) => (
              <Link
                key={other.id}
                to={`/${other.slug}`}
                className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/70 dark:border-brand-sage-800 hover:border-brand-lightPrimary/50 dark:hover:border-brand-darkPrimary/50 hover:shadow-soft transition-all group"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2.5 bg-brand-sage-100">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors truncate">
                  {other.name}
                </h4>
                <span className="text-[10px] text-brand-sage-500 dark:text-brand-darkMuted block">
                  4 Guided Pillars
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Box */}
        <NewsletterBox variant="card" />

      </div>
    </div>
  );
};
