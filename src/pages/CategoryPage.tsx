import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, getCategoryBySlug } from '../data/categories';
import { ARTICLES, getArticlesByCategory } from '../data/articles';
import { ArticleCard } from '../components/common/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MedicalDisclaimer } from '../components/common/MedicalDisclaimer';
import { Search, Filter, Sparkles, BookOpen } from 'lucide-react';
import { NewsletterBox } from '../components/common/NewsletterBox';

interface CategoryPageProps {
  forcedSlug?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ forcedSlug }) => {
  const params = useParams<{ slug?: string }>();
  const slug = forcedSlug || params.slug || 'womens-health';

  const category = getCategoryBySlug(slug) || CATEGORIES[0];
  const allCategoryArticles = useMemo(() => getArticlesByCategory(category.slug), [category.slug]);

  // Fallback if category has few articles: pull related articles from other categories to ensure a full grid
  const displayArticlesList = useMemo(() => {
    if (allCategoryArticles.length >= 4) return allCategoryArticles;
    const additional = ARTICLES.filter((a) => a.categorySlug !== category.slug);
    return [...allCategoryArticles, ...additional].slice(0, 6);
  }, [allCategoryArticles, category.slug]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  useEffect(() => {
    document.title = `${category.name} – FITNIVO | Women's Wellness & Health`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setSearchQuery('');
    setSelectedTag('all');
    setVisibleCount(6);
  }, [category]);

  // Collect all unique tags for this category
  const allTags = useMemo(() => {
    const set = new Set<string>();
    displayArticlesList.forEach((a) => a.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [displayArticlesList]);

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    return displayArticlesList
      .filter((art) => {
        const matchesTag = selectedTag === 'all' || art.tags.includes(selectedTag);
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
          !q ||
          art.title.toLowerCase().includes(q) ||
          art.excerpt.toLowerCase().includes(q) ||
          art.tags.some((t) => t.toLowerCase().includes(q));

        return matchesTag && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          return (b.popularWeekly || b.trending ? 1 : 0) - (a.popularWeekly || a.trending ? 1 : 0);
        }
        return 0; // default order
      });
  }, [displayArticlesList, selectedTag, searchQuery, sortBy]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const featuredArticle = displayArticlesList[0];
  const remainingArticles = visibleArticles.filter((a) => a.id !== featuredArticle?.id);

  return (
    <div className="min-h-screen pb-16">
      {/* Category Banner */}
      <section className="relative overflow-hidden bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-20 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: category.name }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Wellness Department</span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
                {category.name}
              </h1>

              <p className="text-base sm:text-lg text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed max-w-2xl">
                {category.description}
              </p>

              <p className="font-serif italic text-sm text-brand-sage-600 dark:text-brand-darkPrimary">
                &ldquo;{category.tagline}&rdquo;
              </p>
            </div>

            {/* Category Banner Visual Badge */}
            <div className="lg:col-span-4 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft-lg border-2 border-white dark:border-brand-darkCard">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Medical disclaimer note for health & weight management categories */}
        {(category.slug === 'womens-health' || category.slug === 'weight-loss') && (
          <MedicalDisclaimer variant="compact" className="mb-8" />
        )}

        {/* Featured Lead Article for this Category */}
        {featuredArticle && searchQuery === '' && selectedTag === 'all' && (
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-sage-500 dark:text-brand-darkMuted mb-3">
              Featured in {category.name}
            </div>
            <ArticleCard article={featuredArticle} featured={true} />
          </div>
        )}

        {/* Filtering & Search Bar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Inner Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-brand-sage-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search articles in ${category.name}...`}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-brand-sage-50 dark:bg-brand-darkBg text-brand-lightText dark:text-brand-darkText border border-brand-sage-200 dark:border-brand-sage-700 focus:outline-none focus:ring-1 focus:ring-brand-lightPrimary"
            />
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-brand-sage-500 dark:text-brand-darkMuted mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Tag:</span>
            </div>
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedTag === 'all'
                  ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg'
                  : 'bg-brand-sage-100 dark:bg-brand-sage-900/50 text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-200'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg'
                    : 'bg-brand-sage-100 dark:bg-brand-sage-900/50 text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-brand-sage-500 dark:text-brand-darkMuted">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'popular')}
              className="py-1.5 px-3 text-xs rounded-xl bg-brand-sage-50 dark:bg-brand-darkBg text-brand-lightText dark:text-brand-darkText border border-brand-sage-200 dark:border-brand-sage-700 focus:outline-none"
            >
              <option value="newest">Latest Articles</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {(searchQuery !== '' || selectedTag !== 'all' ? visibleArticles : remainingArticles).map(
                (article) => (
                  <ArticleCard key={article.id} article={article} />
                )
              )}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredArticles.length && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="px-8 py-3.5 rounded-full bg-white dark:bg-brand-darkCard text-brand-lightPrimary dark:text-brand-darkPrimary border border-brand-sage-300 dark:border-brand-sage-700 font-semibold text-sm hover:bg-brand-sage-50 dark:hover:bg-brand-sage-900/50 transition-colors shadow-sm"
                >
                  Load More Articles ({filteredArticles.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty Search Filter State */
          <div className="py-16 text-center space-y-3 bg-white dark:bg-brand-darkCard rounded-3xl border border-brand-sage-200/80 dark:border-brand-sage-800 p-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/50 flex items-center justify-center text-brand-sage-500">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-lightText dark:text-brand-darkText">
              No matching articles found in {category.name}
            </h3>
            <p className="text-xs sm:text-sm text-brand-sage-500 dark:text-brand-darkMuted max-w-sm mx-auto">
              Try adjusting your search terms or clearing your selected tag filter.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag('all');
                }}
                className="text-xs font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary underline"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Explore Other Departments / Related Categories */}
        <section className="mt-20 pt-12 border-t border-brand-sage-200/60 dark:border-brand-sage-800">
          <div className="mb-6 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-sage-500 dark:text-brand-darkMuted">
              Explore Other Wellness Pillars
            </span>
            <h3 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
              Related Categories
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((other) => (
              <Link
                key={other.id}
                to={`/${other.slug}`}
                className="p-4 rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/70 dark:border-brand-sage-800 hover:border-brand-lightPrimary/50 dark:hover:border-brand-darkPrimary/50 hover:shadow-soft transition-all group"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-brand-sage-100">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-serif font-bold text-sm text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors truncate">
                  {other.name}
                </h4>
                <span className="text-[11px] text-brand-sage-500 dark:text-brand-darkMuted">
                  {other.count} articles
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Box */}
        <div className="mt-16">
          <NewsletterBox variant="card" />
        </div>
      </div>
    </div>
  );
};
