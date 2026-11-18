import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Bookmark, Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { SearchModal } from './SearchModal';
import { useBookmarks } from '../../context/BookmarkContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lifestyleDropdownOpen, setLifestyleDropdownOpen] = useState(false);
  const { bookmarkedIds } = useBookmarks();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLifestyleDropdownOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: "Women's Health", path: '/womens-health' },
    { name: 'Weight Loss', path: '/weight-loss' },
    { name: 'Nutrition', path: '/nutrition' },
    { name: 'Fitness', path: '/fitness' },
    { name: 'Beauty', path: '/beauty' },
    { name: 'Lifestyle', path: '/lifestyle' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-brand-darkBg/95 backdrop-blur-md shadow-sm border-b border-brand-sage-200/50 dark:border-brand-sage-800/60 py-3'
            : 'bg-brand-lightBg/90 dark:bg-brand-darkBg/90 backdrop-blur-sm border-b border-brand-sage-200/40 dark:border-brand-sage-800/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo */}
            <div className="shrink-0">
              <Logo size="md" showTagline={!isScrolled} />
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100/70 dark:bg-brand-sage-900/40 font-semibold'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/womens-health"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100/70 dark:bg-brand-sage-900/40 font-semibold'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Women&apos;s Health
              </NavLink>

              <NavLink
                to="/weight-loss"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100/70 dark:bg-brand-sage-900/40 font-semibold'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Weight Loss
              </NavLink>

              <NavLink
                to="/nutrition"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100/70 dark:bg-brand-sage-900/40 font-semibold'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Nutrition
              </NavLink>

              <NavLink
                to="/fitness"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100/70 dark:bg-brand-sage-900/40 font-semibold'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Fitness
              </NavLink>

              {/* Beauty & Lifestyle Dropdown or Links */}
              <div
                className="relative"
                onMouseEnter={() => setLifestyleDropdownOpen(true)}
                onMouseLeave={() => setLifestyleDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={lifestyleDropdownOpen}
                  className="px-3 py-2 rounded-full text-sm font-medium text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary transition-colors inline-flex items-center gap-1"
                >
                  <span>Beauty &amp; Lifestyle</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                {lifestyleDropdownOpen && (
                  <div className="absolute top-full right-0 w-48 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="rounded-2xl bg-white dark:bg-brand-darkCard shadow-lg border border-brand-sage-200/80 dark:border-brand-sage-800 p-2 space-y-1">
                      <Link
                        to="/beauty"
                        className="block px-3 py-2 text-sm rounded-xl text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-sage-900/50 hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors"
                      >
                        Beauty &amp; Skincare
                      </Link>
                      <Link
                        to="/lifestyle"
                        className="block px-3 py-2 text-sm rounded-xl text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-sage-900/50 hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors"
                      >
                        Lifestyle &amp; Wellness
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search articles"
                title="Search articles"
                className="p-2.5 rounded-full text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-darkCard transition-colors border border-brand-sage-200/60 dark:border-brand-sage-800"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Bookmarks Link */}
              <Link
                to="/bookmarks"
                aria-label="Saved Articles"
                title="View saved articles"
                className="relative p-2.5 rounded-full text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-darkCard transition-colors border border-brand-sage-200/60 dark:border-brand-sage-800"
              >
                <Bookmark className="w-4 h-4" />
                {bookmarkedIds.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary text-white dark:text-brand-darkBg text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {bookmarkedIds.length}
                  </span>
                )}
              </Link>

              {/* Dark / Light Mode Toggle */}
              <ThemeToggle />

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="lg:hidden p-2.5 rounded-full text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-darkCard border border-brand-sage-200/60 dark:border-brand-sage-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-30 bg-white/98 dark:bg-brand-darkBg/98 backdrop-blur-xl border-t border-brand-sage-200/70 dark:border-brand-sage-800 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-sage-500 dark:text-brand-darkMuted px-3">
                Explore FITNIVO
              </span>
              <div className="space-y-1 pt-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg font-semibold'
                          : 'text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-darkCard'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-sage-200/60 dark:border-brand-sage-800 space-y-4">
              <Link
                to="/bookmarks"
                className="flex items-center justify-between px-4 py-3 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkCard text-brand-lightPrimary dark:text-brand-darkPrimary font-medium text-sm"
              >
                <span className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  <span>Saved Reading List</span>
                </span>
                <span className="font-bold">{bookmarkedIds.length} articles</span>
              </Link>

              <div className="text-center text-xs text-brand-sage-500 dark:text-brand-darkMuted space-y-1">
                <p className="font-serif italic text-brand-lightPrimary dark:text-brand-darkPrimary">
                  Feel Better. Live Healthier.
                </p>
                <p>© 2026 FITNIVO. Dedicated to women&apos;s holistic wellness.</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
