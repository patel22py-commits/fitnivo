import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Bookmark, ArrowUpRight } from 'lucide-react';
import { Article } from '../../types';
import { useBookmarks } from '../../context/BookmarkContext';
import { PinterestPinButton } from './PinterestPinButton';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  featured = false,
  className = ''
}) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(article.id);
  const articleUrl = `https://fitnivo.com/article/${article.slug}`;

  if (featured) {
    return (
      <article
        className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border border-brand-sage-200/60 dark:border-brand-sage-800/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 card-hover-effect ${className}`}
      >
        {/* Image column */}
        <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-auto overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />

          {/* Pinterest Pin Button Overlay */}
          <div className="absolute top-4 left-4 z-10 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
            <PinterestPinButton
              url={articleUrl}
              media={article.pinterestImage || article.featuredImage}
              description={`${article.title} – Read more on FITNIVO`}
              size="sm"
            />
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => toggleBookmark(article.id, e)}
            aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
            title={bookmarked ? 'Saved to reading list' : 'Save for later'}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 dark:bg-brand-darkCard/90 backdrop-blur-sm shadow-md text-brand-lightPrimary dark:text-brand-darkPrimary hover:scale-110 transition-all duration-200"
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current text-brand-lightPrimary dark:text-brand-darkPrimary' : ''}`} />
          </button>
        </div>

        {/* Content column */}
        <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Link
                to={`/${article.categorySlug}`}
                className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary hover:bg-brand-sage-200 transition-colors"
              >
                {article.category}
              </Link>
              <div className="flex items-center gap-1.5 text-xs text-brand-sage-500 dark:text-brand-darkMuted">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readingTime}</span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors leading-snug">
              <Link to={`/article/${article.slug}`}>
                {article.title}
              </Link>
            </h3>

            <p className="text-sm md:text-base text-brand-lightText/75 dark:text-brand-darkMuted leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-brand-sage-100 dark:border-brand-sage-800/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-9 h-9 rounded-full object-cover border border-brand-sage-200 dark:border-brand-sage-700"
              />
              <div className="text-xs">
                <span className="font-semibold block text-brand-lightText dark:text-brand-darkText">
                  {article.author.name}
                </span>
                <span className="text-brand-sage-500 dark:text-brand-darkMuted">
                  {article.publishedDate}
                </span>
              </div>
            </div>

            <Link
              to={`/article/${article.slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary hover:underline group-hover:translate-x-1 transition-transform"
            >
              <span>Read Article</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`group relative rounded-2xl md:rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border border-brand-sage-200/60 dark:border-brand-sage-800/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between card-hover-effect ${className}`}
    >
      <div>
        {/* Image Container with 16:10 ratio and zoom */}
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-sage-100 dark:bg-brand-sage-950">
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Pinterest Pin Button Overlay (visible on card hover or touch) */}
          <div className="absolute top-3 left-3 z-10 transition-opacity duration-200 opacity-0 group-hover:opacity-100 focus-within:opacity-100">
            <PinterestPinButton
              url={articleUrl}
              media={article.pinterestImage || article.featuredImage}
              description={`${article.title} – Read more on FITNIVO`}
              size="sm"
            />
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => toggleBookmark(article.id, e)}
            aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
            title={bookmarked ? 'Saved to reading list' : 'Save for later'}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/85 dark:bg-brand-darkCard/90 backdrop-blur-sm shadow-md text-brand-lightPrimary dark:text-brand-darkPrimary hover:scale-110 transition-all duration-200"
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current text-brand-lightPrimary dark:text-brand-darkPrimary' : ''}`} />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5 md:p-6 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <Link
              to={`/${article.categorySlug}`}
              className="font-semibold uppercase tracking-wider text-[11px] px-2.5 py-0.5 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary hover:bg-brand-sage-200 transition-colors"
            >
              {article.category}
            </Link>
            <div className="flex items-center gap-1 text-brand-sage-500 dark:text-brand-darkMuted">
              <Clock className="w-3 h-3" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          <h3 className="font-serif text-lg md:text-xl font-bold text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors leading-snug line-clamp-2">
            <Link to={`/article/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-xs md:text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-2 flex items-center justify-between text-xs border-t border-brand-sage-100 dark:border-brand-sage-800/40">
        <span className="text-brand-sage-500 dark:text-brand-darkMuted">
          By {article.author.name}
        </span>
        <Link
          to={`/article/${article.slug}`}
          className="inline-flex items-center gap-0.5 font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary hover:underline group-hover:translate-x-0.5 transition-transform"
        >
          <span>Read More</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
