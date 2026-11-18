import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import { ARTICLES } from '../../data/articles';
import { ArticleCard } from '../common/ArticleCard';

export const TrendingArticles: React.FC = () => {
  // Primary featured article
  const leadArticle = ARTICLES[0];
  const supportingArticles = ARTICLES.slice(1, 7);

  return (
    <section className="py-12 md:py-20 bg-brand-sage-50/40 dark:bg-brand-darkBgSecondary/40 border-y border-brand-sage-200/50 dark:border-brand-sage-800/60" aria-labelledby="trending-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Trending on FITNIVO</span>
            </span>
            <h2 id="trending-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightText dark:text-brand-darkText tracking-tight">
              Trending Wellness Articles
            </h2>
          </div>
          <Link
            to="/womens-health"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary hover:underline group self-start sm:self-auto"
          >
            <span>Browse All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Lead Big Editorial Card */}
        <div className="mb-10">
          <ArticleCard article={leadArticle} featured={true} />
        </div>

        {/* Supporting Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {supportingArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
};
