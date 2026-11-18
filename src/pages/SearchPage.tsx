import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Heart, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    document.title = `Search Wellness Protocols – FITNIVO`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    const matches: {
      categoryName: string;
      categorySlug: string;
      categoryBadge: string;
      title: string;
      subtitle: string;
      summary: string;
      type: 'pillar' | 'faq';
    }[] = [];

    CATEGORIES.forEach((cat) => {
      if (categoryFilter !== 'all' && cat.slug !== categoryFilter) return;

      cat.pillars.forEach((p) => {
        if (
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.badge.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        ) {
          matches.push({
            categoryName: cat.name,
            categorySlug: cat.slug,
            categoryBadge: p.badge,
            title: p.title,
            subtitle: p.subtitle,
            summary: p.summary,
            type: 'pillar'
          });
        }
      });

      cat.faq.forEach((f) => {
        if (q && (f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))) {
          matches.push({
            categoryName: cat.name,
            categorySlug: cat.slug,
            categoryBadge: 'FAQ',
            title: f.question,
            subtitle: f.answer,
            summary: f.answer,
            type: 'faq'
          });
        }
      });
    });

    return matches;
  }, [query, categoryFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
  };

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-10 sm:py-16 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Search Protocols' }]} />

          <div className="max-w-2xl pt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
              <div className="w-4 h-4 rounded-full bg-white dark:bg-white/95 p-0.5 flex items-center justify-center shadow-xs">
                <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-full h-full object-contain" />
              </div>
              <span>FITNIVO Protocol Finder</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
              Search Wellness Protocols
            </h1>
            <p className="text-xs sm:text-base text-brand-lightText/75 dark:text-brand-darkMuted">
              Find evidence-informed guidelines, habit frameworks, and nutritional benchmarks.
            </p>

            <form onSubmit={handleSearchSubmit} className="relative pt-2">
              <Search className="w-5 h-5 text-brand-lightPrimary dark:text-brand-darkPrimary absolute left-4 top-1/2 -translate-y-1/2 mt-1" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by keywords (e.g. protein, hormones, workout, barrier)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full text-xs sm:text-sm bg-white dark:bg-brand-darkCard text-brand-lightText dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 focus:outline-none focus:ring-2 focus:ring-brand-lightPrimary dark:focus:ring-brand-darkPrimary shadow-sm"
              />
            </form>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Category Filter Chips */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-brand-sage-600 dark:text-brand-darkMuted mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by:</span>
          </div>
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              categoryFilter === 'all'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg shadow-sm'
                : 'bg-white dark:bg-brand-darkCard border border-brand-sage-200 dark:border-brand-sage-800 text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100'
            }`}
          >
            All Pillars (24)
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                categoryFilter === cat.slug
                  ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg shadow-sm'
                  : 'bg-white dark:bg-brand-darkCard border border-brand-sage-200 dark:border-brand-sage-800 text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="mb-6 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
          Showing {results.length} result{results.length === 1 ? '' : 's'}
          {query ? ` for "${query}"` : ''}
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {results.map((item, idx) => (
              <Link
                key={idx}
                to={`/${item.categorySlug}`}
                className="group p-5 sm:p-6 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft hover:shadow-soft-lg transition-all card-hover-effect flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                    <span>{item.categoryName}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/60">
                      {item.categoryBadge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-sage-100 dark:border-brand-sage-800/60 flex items-center justify-between text-xs font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary">
                  <span>View Protocol Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-3 bg-white dark:bg-brand-darkCard rounded-3xl border border-brand-sage-200/80 dark:border-brand-sage-800 p-8 max-w-lg mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/50 flex items-center justify-center text-brand-lightPrimary dark:text-brand-darkPrimary">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-lightText dark:text-brand-darkText">
              No matching wellness protocols
            </h3>
            <p className="text-xs sm:text-sm text-brand-sage-600 dark:text-brand-darkMuted">
              Try searching for &quot;protein&quot;, &quot;workout&quot;, &quot;barrier&quot;, &quot;sleep&quot;, or &quot;hormones&quot;.
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
