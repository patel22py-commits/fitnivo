import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../../data/articles';
import { CATEGORIES } from '../../data/categories';
import { Article } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedCategory('all');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search logic
  const filteredArticles = ARTICLES.filter((article: Article) => {
    const matchesCategory =
      selectedCategory === 'all' || article.categorySlug === selectedCategory;

    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesTitle = article.title.toLowerCase().includes(q);
    const matchesExcerpt = article.excerpt.toLowerCase().includes(q);
    const matchesTags = article.tags.some((t) => t.toLowerCase().includes(q));
    const matchesContent = article.sections.some(
      (s) =>
        s.heading.toLowerCase().includes(q) ||
        s.paragraphs.some((p) => p.toLowerCase().includes(q))
    );

    return matchesCategory && (matchesTitle || matchesExcerpt || matchesTags || matchesContent);
  });

  const popularSearches = [
    'Morning routine',
    'High protein',
    'Home workout',
    'Metabolism',
    'Hormones',
    'Skincare barrier',
    'Pelvic floor'
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search FITNIVO"
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-brand-lightText/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-brand-darkCard rounded-3xl shadow-2xl border border-brand-sage-200/80 dark:border-brand-sage-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 sm:p-5 border-b border-brand-sage-100 dark:border-brand-sage-800">
          <Search className="w-5 h-5 text-brand-sage-400 dark:text-brand-darkMuted ml-2 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search health topics, recipes, workouts, skincare..."
            className="w-full pl-3 pr-10 py-2 text-base sm:text-lg bg-transparent text-brand-lightText dark:text-brand-darkText placeholder-brand-sage-400 dark:placeholder-brand-sage-600 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-2 rounded-full hover:bg-brand-sage-100 dark:hover:bg-brand-sage-800 text-brand-sage-500 hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters Pills */}
        <div className="p-3 sm:px-5 bg-brand-sage-50/50 dark:bg-brand-darkBgSecondary/60 border-b border-brand-sage-100 dark:border-brand-sage-800/60 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg'
                : 'bg-white dark:bg-brand-darkCard text-brand-sage-600 dark:text-brand-darkMuted hover:bg-brand-sage-100 dark:hover:bg-brand-sage-800'
            }`}
          >
            All Topics
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.slug
                  ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg'
                  : 'bg-white dark:bg-brand-darkCard text-brand-sage-600 dark:text-brand-darkMuted hover:bg-brand-sage-100 dark:hover:bg-brand-sage-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-4">
          {query.trim() === '' ? (
            <div className="py-4 space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-sage-500 dark:text-brand-darkMuted">
                <Tag className="w-3.5 h-3.5" />
                <span>Popular Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-full text-xs bg-brand-sage-100/70 dark:bg-brand-sage-900/40 text-brand-lightPrimary dark:text-brand-darkPrimary hover:bg-brand-sage-200 dark:hover:bg-brand-sage-800 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-sage-100 dark:border-brand-sage-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-sage-500 dark:text-brand-darkMuted block mb-3">
                  Trending Articles
                </span>
                <div className="space-y-2">
                  {ARTICLES.slice(0, 3).map((art) => (
                    <Link
                      key={art.id}
                      to={`/article/${art.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary transition-colors group"
                    >
                      <img
                        src={art.featuredImage}
                        alt={art.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs text-brand-sage-500 dark:text-brand-darkMuted block">
                          {art.category}
                        </span>
                        <h4 className="text-sm font-semibold text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary truncate">
                          {art.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-brand-sage-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="space-y-3">
              <div className="text-xs text-brand-sage-500 dark:text-brand-darkMuted flex items-center justify-between">
                <span>{filteredArticles.length} article{filteredArticles.length === 1 ? '' : 's'} found</span>
                <span>Press Escape to close</span>
              </div>
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  onClick={onClose}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary transition-colors group border border-transparent hover:border-brand-sage-200 dark:hover:border-brand-sage-800"
                >
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs text-brand-sage-500 dark:text-brand-darkMuted mb-1">
                      <span className="font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors line-clamp-1">
                      {article.title}
                    </h4>
                    <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted line-clamp-2 mt-0.5">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/50 flex items-center justify-center text-brand-sage-500">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-brand-lightText dark:text-brand-darkText">
                No matching articles found
              </h4>
              <p className="text-xs sm:text-sm text-brand-sage-500 dark:text-brand-darkMuted max-w-sm mx-auto">
                We couldn&apos;t find anything matching &quot;{query}&quot;. Try exploring our popular categories or searching for everyday wellness topics.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setQuery('')}
                  className="text-xs font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary underline"
                >
                  Clear search and view all articles
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 sm:px-5 bg-brand-sage-50 dark:bg-brand-darkBgSecondary text-center text-xs text-brand-sage-500 dark:text-brand-darkMuted border-t border-brand-sage-100 dark:border-brand-sage-800">
          Tip: Bookmark articles using the ribbon icon to read offline anytime.
        </div>
      </div>
    </div>
  );
};
