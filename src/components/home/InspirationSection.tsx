import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Apple, Moon, ArrowRight } from 'lucide-react';

export const InspirationSection: React.FC = () => {
  const cards = [
    {
      title: 'Move Your Body',
      subtitle: 'Functional Movement & Strength',
      description: 'Ditch punitive cardio. Embrace intentional strength training, joint mobility, and joyful daily walks that preserve metabolic health and posture.',
      icon: Activity,
      link: '/fitness',
      actionText: 'Explore Fitness Guides',
      badge: 'Strength & Mobility',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Nourish Yourself',
      subtitle: 'Nutrient-Dense Wholesome Food',
      description: 'Fuel your cells with complete morning protein, gut-loving dietary fiber, and vibrant rainbow plants that keep energy steady from sunrise to sunset.',
      icon: Apple,
      link: '/nutrition',
      actionText: 'Discover Nourishing Guides',
      badge: 'Whole Foods & Energy',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Prioritize Self-Care',
      subtitle: 'Restorative Sleep & Nervous System',
      description: 'Honor your circadian rhythm with early morning sunlight, low-stress evening routines, and restorative boundaries that calm chronic cortisol spikes.',
      icon: Moon,
      link: '/lifestyle',
      actionText: 'Cultivate Calm Living',
      badge: 'Rest & Resilience',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-transparent via-brand-sage-50/50 to-transparent dark:via-brand-darkBgSecondary/30" aria-labelledby="inspiration-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 sm:mb-12 md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary">
            Daily Foundations
          </span>
          <h2 id="inspiration-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightText dark:text-brand-darkText tracking-tight">
            Small Steps. Healthier You.
          </h2>
          <p className="text-sm sm:text-base text-brand-lightText/75 dark:text-brand-darkMuted leading-relaxed">
            Elevate your day-to-day vitality through the three timeless pillars of sustainable women&apos;s wellness.
          </p>
        </div>

        {/* 3 Attractive Feature Cards - Mobile Friendly Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  {/* Visual Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C0D1B]/80 via-black/25 to-transparent" />
                    
                    <span className="absolute top-4 left-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 dark:bg-brand-darkCard/95 text-brand-lightPrimary dark:text-brand-darkPrimary backdrop-blur-sm shadow-sm">
                      {card.badge}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-xs text-white/80 font-medium">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-5 sm:p-7">
                    <p className="text-xs sm:text-sm text-brand-lightText/75 dark:text-brand-darkMuted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                  <Link
                    to={card.link}
                    className="w-full py-3 px-4 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary hover:bg-brand-lightPrimary hover:text-white dark:hover:bg-brand-darkPrimary dark:hover:text-brand-darkBg text-brand-lightPrimary dark:text-brand-darkPrimary font-semibold text-xs tracking-wide uppercase transition-colors duration-200 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
