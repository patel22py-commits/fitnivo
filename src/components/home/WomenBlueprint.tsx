import React, { useState } from 'react';
import { Sun, Sunset, Moon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WomenDailyBlueprint: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'morning' | 'midday' | 'evening'>('morning');

  const routines = {
    morning: {
      time: '7:00 AM – 9:00 AM',
      title: 'Morning Radiance & Cellular Awakening',
      subtitle: 'Anchor your hormonal rhythm before caffeine and demands begin',
      icon: Sun,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60',
      items: [
        {
          title: 'Cellular Mineral Hydration',
          desc: '16-20oz room-temp water with a pinch of pink Himalayan sea salt and lemon before your coffee.',
          why: 'Replenishes cellular fluid loss from 8 hours of sleep and gently activates morning peristalsis.'
        },
        {
          title: '10 Minutes Outdoor Photons',
          desc: 'Step onto your porch or take a brisk walk in natural daylight without sunglasses.',
          why: 'Calibrates the suprachiasmatic nucleus to spike natural morning cortisol and set the evening melatonin timer.'
        },
        {
          title: '25-30g Savory Protein Anchor',
          desc: 'Eggs with avocado, cottage cheese power bowl, or a clean Greek yogurt parfait.',
          why: 'Stimulates satiety hormones (peptide YY and GLP-1), preventing the 10:30 AM glucose roller coaster.'
        }
      ],
      link: '/nutrition',
      linkText: 'Explore Nutrition Protocols'
    },
    midday: {
      time: '12:00 PM – 2:00 PM',
      title: 'Midday Sustenance & Metabolic Balance',
      subtitle: 'Sustain mental clarity and conquer the mid-afternoon energy crash',
      icon: Sunset,
      color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/60',
      items: [
        {
          title: 'The 3-Color Plate Formula',
          desc: 'Ensure your lunch features at least 3 distinct plant pigments alongside quality protein and healthy fats.',
          why: 'Provides broad-spectrum polyphenols and fiber to nourish diverse gut microbiome strains.'
        },
        {
          title: '10-Minute Post-Meal Stroll',
          desc: 'A light 10-minute walk immediately following lunch before sitting down.',
          why: 'Acts as an insulin-independent glucose sink, pulling carbohydrates directly into working leg muscles.'
        },
        {
          title: '3-Minute Somatic Vagus Reset',
          desc: 'Sit quietly and perform three physiological sighs (two quick inhales, one prolonged exhale).',
          why: 'Switches the autonomic nervous system out of work fight-or-flight into restorative parasympathetic tone.'
        }
      ],
      link: '/weight-loss',
      linkText: 'Explore Metabolic Guidelines'
    },
    evening: {
      time: '8:30 PM – 10:30 PM',
      title: 'Evening Restoration & Delta Sleep Prep',
      subtitle: 'Protect your nervous system and invite deep restorative cellular repair',
      icon: Moon,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/60',
      items: [
        {
          title: 'Digital Horizon Wind-Down',
          desc: 'Power down bright smartphones, tablets, and stimulating work emails 45 minutes before sleep.',
          why: 'Blue-spectrum lux suppresses natural pineal melatonin secretion and elevates core body temperature.'
        },
        {
          title: 'Warm Magnesium Foot Soak or Bath',
          desc: 'A 10-minute warm foot soak or bath with magnesium flakes and lavender oil.',
          why: 'Induces rapid peripheral vasodilation, prompting the core body temperature drop required for delta-wave sleep.'
        },
        {
          title: 'Cool Bedroom Sanctuary Reset',
          desc: 'Set thermostat to 65–68°F (18–20°C) with pitch-dark blackout curtains.',
          why: 'Mimics natural biological circadian temperature drops to maximize nighttime growth hormone release.'
        }
      ],
      link: '/lifestyle',
      linkText: 'Explore Sleep & Lifestyle Rituals'
    }
  };

  const current = routines[activeTab];
  const Icon = current.icon;

  return (
    <section className="py-6 sm:py-8 md:py-10" aria-labelledby="blueprint-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Circadian Rhythm Optimization</span>
          </div>
          <h2 id="blueprint-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightText dark:text-brand-darkText tracking-tight">
            The Women&apos;s Daily Wellness Blueprint
          </h2>
          <p className="text-sm sm:text-base text-brand-lightText/75 dark:text-brand-darkMuted leading-relaxed">
            A harmonious 24-hour routine designed to align with female endocrine rhythms and cellular vitality.
          </p>
        </div>

        {/* Tab Buttons (Thumb friendly on mobile) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('morning')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 py-3 px-4 sm:px-6 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'morning'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg shadow-soft scale-105'
                : 'bg-white dark:bg-brand-darkCard text-brand-lightText dark:text-brand-darkMuted border border-brand-sage-200/80 dark:border-brand-sage-800 hover:bg-brand-sage-50'
            }`}
          >
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Morning</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('midday')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 py-3 px-4 sm:px-6 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'midday'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg shadow-soft scale-105'
                : 'bg-white dark:bg-brand-darkCard text-brand-lightText dark:text-brand-darkMuted border border-brand-sage-200/80 dark:border-brand-sage-800 hover:bg-brand-sage-50'
            }`}
          >
            <Sunset className="w-4 h-4 text-rose-400" />
            <span>Midday</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('evening')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 py-3 px-4 sm:px-6 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'evening'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg shadow-soft scale-105'
                : 'bg-white dark:bg-brand-darkCard text-brand-lightText dark:text-brand-darkMuted border border-brand-sage-200/80 dark:border-brand-sage-800 hover:bg-brand-sage-50'
            }`}
          >
            <Moon className="w-4 h-4 text-purple-400" />
            <span>Evening</span>
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-brand-sage-100 dark:border-brand-sage-800/80 gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary block">
                  {current.time}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
                  {current.title}
                </h3>
              </div>
            </div>
            <Link
              to={current.link}
              className="text-xs font-bold text-brand-lightPrimary dark:text-brand-darkPrimary hover:underline self-start sm:self-auto"
            >
              {current.linkText} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {current.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-brand-sage-50/60 dark:bg-brand-darkBgSecondary/60 border border-brand-sage-200/70 dark:border-brand-sage-800 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary text-white dark:text-brand-darkBg flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-brand-lightText dark:text-brand-darkText">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-sage-200/50 dark:border-brand-sage-800/60">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-sage-600 dark:text-brand-darkMuted block">
                    Why it works:
                  </span>
                  <p className="text-[11px] text-brand-sage-700 dark:text-brand-darkMuted italic leading-snug mt-0.5">
                    {item.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
