import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../../data/articles';

export const PopularWeekly: React.FC = () => {
  const popularArticles = ARTICLES.filter((a) => a.popularWeekly).slice(0, 4);

  return (
    <section className="py-12 md:py-20" aria-labelledby="popular-weekly-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Reader Favorites</span>
          </div>
          <h2 id="popular-weekly-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightText dark:text-brand-darkText tracking-tight">
            Popular This Week
          </h2>
          <p className="text-sm md:text-base text-brand-lightText/75 dark:text-brand-darkMuted max-w-xl">
            The most saved and shared guides across our Pinterest and reading community over the past seven days.
          </p>
        </div>

        {/* Magazine-style 4-column ranking cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularArticles.map((article, index) => {
            const rank = `0${index + 1}`;

            return (
              <div
                key={article.id}
                className="group relative rounded-3xl p-6 bg-white dark:bg-brand-darkCard border border-brand-sage-200/60 dark:border-brand-sage-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  {/* Top ranking badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-extrabold text-brand-sage-300 dark:text-brand-sage-700/80 group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors">
                      {rank}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary">
                      {article.category}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-brand-sage-100">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors leading-snug line-clamp-2">
                    <Link to={`/article/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                </div>

                {/* Footer */}
                <div className="pt-4 mt-4 border-t border-brand-sage-100 dark:border-brand-sage-800/40 flex items-center justify-between text-xs text-brand-sage-500 dark:text-brand-darkMuted">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readingTime}</span>
                  </div>
                  <Link
                    to={`/article/${article.slug}`}
                    className="inline-flex items-center gap-0.5 font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="w-3 h-3" />
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
