import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { ArticleCard } from '../components/common/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    document.title = `Search Wellness Articles – FITNIVO`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const results = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesCategory =
        categoryFilter === 'all' || art.categorySlug === categoryFilter;

      const q = query.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesTitle = art.title.toLowerCase().includes(q);
      const matchesExcerpt = art.excerpt.toLowerCase().includes(q);
      const matchesTags = art.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && (matchesTitle || matchesExcerpt || matchesTags);
    });
  }, [query, categoryFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
  };

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-16 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Search' }]} />

          <div className="max-w-2xl pt-4 space-y-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
              Search FITNIVO
            </h1>
            <p className="text-sm sm:text-base text-brand-lightText/75 dark:text-brand-darkMuted">
              Find evidence-informed articles on women&apos;s wellness, nutrition, routines, and healthy living.
            </p>

            <form onSubmit={handleSearchSubmit} className="relative pt-2">
              <Search className="w-5 h-5 text-brand-sage-400 absolute left-4 top-1/2 -translate-y-1/2 mt-1" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by keywords, tags, or topics..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full text-sm sm:text-base bg-white dark:bg-brand-darkCard text-brand-lightText dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 focus:outline-none focus:ring-2 focus:ring-brand-lightPrimary dark:focus:ring-brand-darkPrimary shadow-sm"
              />
            </form>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Category Filter Chips */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-brand-sage-500 dark:text-brand-darkMuted mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by:</span>
          </div>
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              categoryFilter === 'all'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg'
                : 'bg-white dark:bg-brand-darkCard border border-brand-sage-200 dark:border-brand-sage-800 text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100'
            }`}
          >
            All Departments ({ARTICLES.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                categoryFilter === cat.slug
                  ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg'
                  : 'bg-white dark:bg-brand-darkCard border border-brand-sage-200 dark:border-brand-sage-800 text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="mb-6 text-xs text-brand-sage-500 dark:text-brand-darkMuted">
          Showing {results.length} result{results.length === 1 ? '' : 's'}
          {query ? ` for "${query}"` : ''}
        </div>

        {/* Grid or Empty State */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {results.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-3 bg-white dark:bg-brand-darkCard rounded-3xl border border-brand-sage-200/80 dark:border-brand-sage-800 p-8 max-w-lg mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/50 flex items-center justify-center text-brand-sage-500">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-lightText dark:text-brand-darkText">
              No matching wellness articles
            </h3>
            <p className="text-xs sm:text-sm text-brand-sage-500 dark:text-brand-darkMuted">
              Try searching for &quot;protein&quot;, &quot;workout&quot;, &quot;habits&quot;, &quot;skincare&quot;, or &quot;hormones&quot;.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setQuery('');
                  setCategoryFilter('all');
                }}
                className="text-xs font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary underline"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
