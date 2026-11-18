import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useBookmarks } from '../context/BookmarkContext';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/common/ArticleCard';
import { Bookmark, Trash2, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BookmarksPage: React.FC = () => {
  const { bookmarkedIds, clearBookmarks } = useBookmarks();

  useEffect(() => {
    document.title = 'Saved Articles & Reading List – FITNIVO';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const savedArticles = ARTICLES.filter((a) => bookmarkedIds.includes(a.id));

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-16 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Saved Reading List' }]} />

          <div className="pt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                <span>Your Private Collection</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
                Saved Articles
              </h1>

              <p className="text-sm sm:text-base text-brand-lightText/75 dark:text-brand-darkMuted max-w-xl">
                Revisit your favorite nutrition guides, home workouts, and wellness protocols anytime. Saved locally in your browser.
              </p>
            </div>

            {savedArticles.length > 0 && (
              <button
                onClick={clearBookmarks}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors self-start md:self-auto"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Saved</span>
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {savedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {savedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/50 flex items-center justify-center text-brand-sage-500">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
              No Saved Articles Yet
            </h3>
            <p className="text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
              When browsing any FITNIVO article, tap the bookmark ribbon icon to pin it to your private reading list for easy reference.
            </p>
            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary text-white dark:text-brand-darkBg font-semibold text-xs shadow-soft hover:shadow-soft-lg transition-all"
              >
                <span>Browse Trending Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
