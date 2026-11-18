import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  variant?: 'horizontal' | 'badge' | 'icon-only' | 'image-full';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'horizontal'
}) => {
  const sizeClasses = {
    sm: 'text-lg tracking-wider',
    md: 'text-2xl tracking-wider',
    lg: 'text-3xl tracking-wider',
    xl: 'text-4xl tracking-wider'
  };

  const iconSizes = {
    sm: 'h-6 w-auto',
    md: 'h-8 sm:h-9 w-auto',
    lg: 'h-11 w-auto',
    xl: 'h-16 w-auto'
  };

  if (variant === 'image-full') {
    return (
      <Link to="/" className={`group inline-flex flex-col items-center select-none ${className}`}>
        <div className="p-2.5 rounded-2xl bg-white dark:bg-white/95 shadow-sm border border-brand-sage-200/60 transition-transform duration-300 group-hover:scale-105">
          <img
            src="/fitnivo-logo.png"
            alt="FITNIVO Logo"
            className={`${iconSizes[size]} object-contain`}
          />
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-sage-600 dark:text-brand-darkMuted font-sans mt-2 font-medium">
            Feel Better. Live Healthier.
          </span>
        )}
      </Link>
    );
  }

  if (variant === 'badge') {
    return (
      <Link to="/" className={`group inline-flex items-center gap-3 select-none ${className}`}>
        <div className="p-1.5 sm:p-2 rounded-2xl bg-white dark:bg-white/95 shadow-sm border border-brand-sage-200/80 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
          <img
            src="/fitnivo-icon.png"
            alt="FITNIVO Icon"
            className={`${iconSizes[size]} object-contain`}
          />
        </div>
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-brand-lightPrimary dark:text-brand-darkText ${sizeClasses[size]} transition-colors`}>
            FITNIVO
          </span>
          {showTagline && (
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-sage-600 dark:text-brand-darkMuted font-sans font-medium -mt-0.5">
              Feel Better. Live Healthier.
            </span>
          )}
        </div>
      </Link>
    );
  }

  if (variant === 'icon-only') {
    return (
      <Link to="/" className={`group inline-flex items-center justify-center select-none ${className}`}>
        <div className="p-1.5 rounded-xl bg-white dark:bg-white/95 shadow-sm border border-brand-sage-200/60 transition-transform duration-300 group-hover:scale-110">
          <img
            src="/fitnivo-icon.png"
            alt="FITNIVO Icon"
            className={`${iconSizes[size]} object-contain`}
          />
        </div>
      </Link>
    );
  }

  // Default: Horizontal with icon and wordmark
  return (
    <Link to="/" className={`group inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* Official Fitnivo Emblem in a crisp pill badge */}
        <div className="relative flex items-center justify-center p-1 sm:p-1.5 rounded-xl bg-white dark:bg-white/95 shadow-sm border border-brand-sage-200/80 transition-transform duration-300 group-hover:scale-105">
          <img
            src="/fitnivo-icon.png"
            alt="FITNIVO Emblem"
            className={`${iconSizes[size]} object-contain`}
          />
        </div>

        {/* Wordmark */}
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-brand-lightPrimary dark:text-brand-darkText ${sizeClasses[size]} transition-colors leading-tight`}>
            FITNIVO
          </span>
          {showTagline && (
            <span className="text-[9.5px] uppercase tracking-[0.24em] text-brand-sage-600 dark:text-brand-darkMuted font-sans font-semibold -mt-0.5">
              Feel Better. Live Healthier.
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
