import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, ShieldCheck, Heart, Award, Users } from 'lucide-react';
import { AUTHORS } from '../data/team';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us – FITNIVO | Women’s Wellness Platform';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const pillars = [
    {
      title: "Women's Health",
      desc: 'Demystifying hormonal fluctuations, cycle literacy, perimenopause, and preventive health across every decade of womanhood.'
    },
    {
      title: 'Fitness & Strength',
      desc: 'Empowering women with joint-friendly strength training, postural alignment, and functional movement that builds lifelong resilience.'
    },
    {
      title: 'Nutrition & Diet',
      desc: 'Celebrating whole, unprocessed foods, balanced macronutrients, and satisfying recipes that fuel metabolic energy without guilt.'
    },
    {
      title: 'Weight Management',
      desc: 'Rejecting crash diets and punitive restriction. Prioritizing sustainable daily habits, sleep architecture, and metabolic support.'
    },
    {
      title: 'Beauty & Skincare',
      desc: 'Science-backed skincare barrier preservation, sun protection, non-toxic formulations, and self-honoring beauty rituals.'
    },
    {
      title: 'Healthy Lifestyle',
      desc: 'Nurturing restorative sleep, circadian light exposure, stress regulation, and emotional balance in a hectic modern world.'
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-20 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div className="max-w-3xl pt-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Brand Philosophy</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
              Welcome to FITNIVO
            </h1>

            <p className="text-lg sm:text-xl text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              We are an American women&apos;s wellness and lifestyle platform sharing evidence-informed educational content designed to help women feel confident, informed, and truly healthy.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 space-y-16">
        
        {/* Brand Mission & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-lightText dark:text-brand-darkText tracking-tight">
              Feel Better. Live Healthier.
            </h2>
            <p className="text-base text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              For too long, women’s health publications have swung between extreme deprivation diets on one end and confusing pseudoscience on the other. FITNIVO was created to be your trusted sanctuary: a modern, calm, and grounded editorial publication where medical nuance meets practical everyday living.
            </p>
            <p className="text-base text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              Our goal is never to tell you how to look, but rather to give you the biological knowledge, nourishing recipes, and movement tools to live your most vibrant life in the United States, Canada, the UK, Australia, and worldwide.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white dark:border-brand-darkCard bg-brand-sage-100">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80"
                alt="Women practicing mindful wellness and yoga"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6 Pillars */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary">
              What We Cover
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              The Six Pillars of FITNIVO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-xs">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Values */}
        <section className="p-8 md:p-12 rounded-3xl bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary">
              Standards We Live By
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Our Editorial Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-lightPrimary dark:text-brand-darkPrimary font-bold text-base">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Evidence-Informed</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
                We synthesize peer-reviewed physiological research, verified nutritional science, and sports medicine guidelines into plain, actionable language.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-lightPrimary dark:text-brand-darkPrimary font-bold text-base">
                <Heart className="w-5 h-5 shrink-0" />
                <span>No Harmful Diets</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
                We never promote dangerous cleanses, unregulated stimulant diet pills, or extreme calorie deficits that disrupt thyroid and reproductive function.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-lightPrimary dark:text-brand-darkPrimary font-bold text-base">
                <Award className="w-5 h-5 shrink-0" />
                <span>Transparent Medical Boundaries</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
                We do not diagnose or prescribe. We empower women with the right questions to discuss openly with their personal healthcare providers.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-brand-sage-200/60 dark:border-brand-sage-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-brand-sage-600 dark:text-brand-darkMuted">
              Want to review our clinical and sourcing standards in full?
            </span>
            <Link
              to="/editorial-policy"
              className="text-xs font-bold text-brand-lightPrimary dark:text-brand-darkPrimary underline hover:opacity-80"
            >
              Read our complete Editorial Policy →
            </Link>
          </div>
        </section>

        {/* Editorial Team */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary">
              <Users className="w-3.5 h-3.5" />
              <span>The Voices Behind FITNIVO</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Editorial Team &amp; Contributors
            </h2>
            <p className="text-sm text-brand-lightText/75 dark:text-brand-darkMuted">
              Passionate health coaches, movement specialists, wellness writers, and editors bringing you thoughtful daily guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(AUTHORS).map((author, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft text-center space-y-3"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-brand-sage-200 dark:border-brand-sage-700"
                />
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-lightText dark:text-brand-darkText">
                    {author.name}
                  </h3>
                  <span className="text-xs font-medium text-brand-lightPrimary dark:text-brand-darkPrimary block">
                    {author.role}
                  </span>
                </div>
                <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
                  {author.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
