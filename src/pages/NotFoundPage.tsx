import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found – FITNIVO';
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="font-serif text-8xl font-black text-brand-sage-300 dark:text-brand-sage-800">
          404
        </span>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
            The wellness article or guide you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary text-white dark:text-brand-darkBg font-semibold text-xs shadow-soft hover:shadow-soft-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/search"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900 text-brand-lightPrimary dark:text-brand-darkPrimary font-semibold text-xs transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search Articles</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
