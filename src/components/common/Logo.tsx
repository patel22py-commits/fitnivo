import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showTagline = false }) => {
  const sizeClasses = {
    sm: 'text-lg tracking-widest',
    md: 'text-2xl tracking-widest',
    lg: 'text-3xl md:text-4xl tracking-widest'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7'
  };

  return (
    <Link to="/" className={`group inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2">
        {/* Elegant minimal botanical leaf mark */}
        <span className="relative flex items-center justify-center text-brand-lightPrimary dark:text-brand-darkPrimary transition-transform duration-300 group-hover:scale-110">
          <svg
            className={`${iconSizes[size]} transition-colors duration-200`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </span>

        {/* Wordmark */}
        <span className={`font-serif font-bold text-brand-lightPrimary dark:text-brand-darkText ${sizeClasses[size]}`}>
          FITNIVO
        </span>
      </div>

      {showTagline && (
        <span className="text-[10px] uppercase tracking-[0.25em] text-brand-sage-500 dark:text-brand-darkMuted font-sans mt-0.5">
          Feel Better. Live Healthier.
        </span>
      )}
    </Link>
  );
};
