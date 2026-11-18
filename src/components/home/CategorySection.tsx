import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-12 md:py-20" aria-labelledby="featured-categories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Focus Areas</span>
            </span>
            <h2 id="featured-categories-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightText dark:text-brand-darkText tracking-tight">
              Explore by Wellness Category
            </h2>
          </div>
          <p className="text-sm md:text-base text-brand-lightText/75 dark:text-brand-darkMuted max-w-md">
            Holistic, evidence-informed resources organized to support your physical strength, hormonal rhythm, and emotional tranquility.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/${category.slug}`}
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg border border-brand-sage-200/60 dark:border-brand-sage-800 transition-all duration-300 card-hover-effect flex flex-col justify-end min-h-[320px] sm:min-h-[360px] p-6 sm:p-8"
            >
              {/* Background Image with smooth zoom */}
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:via-black/50 transition-colors duration-300" />

              {/* Content overlay */}
              <div className="relative z-10 space-y-2 text-white">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {category.count} Articles
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-lightAccent transition-colors">
                  {category.name}
                </h3>

                <p className="text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-brand-lightAccent group-hover:translate-x-1 transition-transform">
                  <span>Explore Topic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
