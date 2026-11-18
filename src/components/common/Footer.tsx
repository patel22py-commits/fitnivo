import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 sm:mt-20 border-t border-brand-sage-200/80 dark:border-brand-sage-800 bg-[#FDF0F3] dark:bg-brand-darkBgSecondary text-brand-lightText dark:text-brand-darkText transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-brand-sage-200/70 dark:border-brand-sage-800/80">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" showTagline={true} variant="badge" />
            <p className="text-xs sm:text-sm text-brand-lightText/75 dark:text-brand-darkMuted leading-relaxed max-w-sm">
              FITNIVO is an American women&apos;s wellness and lifestyle platform dedicated to evidence-informed health knowledge, sustainable fitness, nourishing recipes, and mindful daily self-care.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
              <span>Designed with love for women worldwide</span>
              <Heart className="w-3.5 h-3.5 text-brand-lightPrimary dark:text-brand-darkPrimary fill-current" />
            </div>
          </div>

          {/* Column 2: Explore (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-brand-lightPrimary dark:text-brand-darkText">
              Wellness Focus
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/womens-health" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Women&apos;s Health
                </Link>
              </li>
              <li>
                <Link to="/weight-loss" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link to="/nutrition" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Nutrition &amp; Diet
                </Link>
              </li>
              <li>
                <Link to="/fitness" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Fitness &amp; Exercise
                </Link>
              </li>
              <li>
                <Link to="/beauty" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Beauty &amp; Skincare
                </Link>
              </li>
              <li>
                <Link to="/lifestyle" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Lifestyle &amp; Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-brand-lightPrimary dark:text-brand-darkText">
              Company &amp; Policies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  About FITNIVO
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Contact &amp; Press
                </Link>
              </li>
              <li>
                <Link to="/editorial-policy" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link to="/medical-disclaimer" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-brand-lightPrimary dark:text-brand-darkText">
              Follow Us
            </h4>
            <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted">
              Join our daily Pinterest &amp; Instagram wellness community for guides and mindful routines.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/fitnivo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#E60023] hover:underline font-semibold"
              >
                <span className="w-6 h-6 rounded-full bg-[#E60023]/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-[#E60023]" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.48.03-3.55l1.04-4.4s-.26-.53-.26-1.32c0-1.24.72-2.16 1.62-2.16.76 0 1.13.57 1.13 1.26 0 .77-.49 1.92-.74 2.99-.21.9.45 1.63 1.34 1.63 1.6 0 2.84-1.69 2.84-4.13 0-2.16-1.55-3.67-3.77-3.67-2.57 0-4.08 1.93-4.08 3.92 0 .78.3 1.61.67 2.07.07.09.08.17.06.26l-.25 1.04c-.04.17-.14.21-.32.13-1.2-.56-1.95-2.31-1.95-3.72 0-3.03 2.2-5.81 6.35-5.81 3.33 0 5.92 2.37 5.92 5.55 0 3.31-2.09 5.98-4.99 5.98-.98 0-1.9-.51-2.21-1.11l-.6 2.29c-.22.84-.81 1.9-1.21 2.54A12 12 0 1 0 12 0Z" />
                  </svg>
                </span>
                <span>Pinterest</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/fitnivo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#E4405F] hover:underline font-semibold"
              >
                <span className="w-6 h-6 rounded-full bg-[#E4405F]/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-[#E4405F]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
          <div className="text-center md:text-left">
            <p>© 2026 FITNIVO. All Rights Reserved. Feel Better. Live Healthier.</p>
            <p className="mt-1 text-[11px] text-brand-sage-500">
              Content is reviewed for educational accuracy and does not substitute for personalized medical diagnosis or treatment.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 p-2 rounded-full border border-brand-sage-300 dark:border-brand-sage-700 hover:bg-white dark:hover:bg-brand-darkCard text-brand-lightPrimary dark:text-brand-darkPrimary transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
