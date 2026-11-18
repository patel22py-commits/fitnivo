import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { SearchModal } from './SearchModal';
import { MobileBottomBar } from './MobileBottomBar';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lifestyleDropdownOpen, setLifestyleDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLifestyleDropdownOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
            ? 'bg-white/95 dark:bg-brand-darkBg/95 backdrop-blur-md shadow-sm border-b border-brand-sage-200/80 dark:border-brand-sage-800/80 py-2.5 sm:py-3'
            : 'bg-brand-lightBg/95 dark:bg-brand-darkBg/95 backdrop-blur-sm border-b border-brand-sage-200/60 dark:border-brand-sage-800/60 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Left: Brand Logo */}
            <div className="shrink-0">
              <Logo size="md" showTagline={!isScrolled} />
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100 dark:bg-brand-sage-900/60'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/womens-health"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100 dark:bg-brand-sage-900/60'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Women&apos;s Health
              </NavLink>

              <NavLink
                to="/weight-loss"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100 dark:bg-brand-sage-900/60'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Weight Loss
              </NavLink>

              <NavLink
                to="/nutrition"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100 dark:bg-brand-sage-900/60'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Nutrition
              </NavLink>

              <NavLink
                to="/fitness"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-sage-100 dark:bg-brand-sage-900/60'
                      : 'text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                  }`
                }
              >
                Fitness
              </NavLink>

              {/* Beauty & Lifestyle Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLifestyleDropdownOpen(true)}
                onMouseLeave={() => setLifestyleDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={lifestyleDropdownOpen}
                  className="px-3 py-2 rounded-full text-xs xl:text-sm font-semibold text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary transition-colors inline-flex items-center gap-1"
                >
                  <span>Beauty &amp; Lifestyle</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                {lifestyleDropdownOpen && (
                  <div className="absolute top-full right-0 w-52 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="rounded-2xl bg-white dark:bg-brand-darkCard shadow-lg border border-brand-sage-200/80 dark:border-brand-sage-800 p-2 space-y-1">
                      <Link
                        to="/beauty"
                        className="block px-3 py-2 text-xs sm:text-sm rounded-xl text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-sage-900/50 hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors"
                      >
                        Beauty &amp; Skincare
                      </Link>
                      <Link
                        to="/lifestyle"
                        className="block px-3 py-2 text-xs sm:text-sm rounded-xl text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-sage-900/50 hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors"
                      >
                        Lifestyle &amp; Wellness
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search wellness protocols"
                title="Search wellness protocols"
                className="p-2 sm:p-2.5 rounded-full text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-darkCard transition-colors border border-brand-sage-200/80 dark:border-brand-sage-800"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Dark / Light Mode Toggle */}
              <ThemeToggle />

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="lg:hidden p-2 sm:p-2.5 rounded-full text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[65px] bottom-0 z-30 bg-white/98 dark:bg-brand-darkBg/98 backdrop-blur-xl border-t border-brand-sage-200/80 dark:border-brand-sage-800 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-sage-600 dark:text-brand-darkMuted px-2 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-brand-lightPrimary" />
                <span>Wellness Focus Areas</span>
              </span>
              <div className="space-y-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg shadow-sm'
                          : 'text-brand-lightText dark:text-brand-darkText hover:bg-brand-sage-100 dark:hover:bg-brand-darkCard'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                  </NavLink>
                ))}
              </div>

              <div className="pt-2 border-t border-brand-sage-100 dark:border-brand-sage-800 space-y-1.5">
                <Link
                  to="/about"
                  className="block px-4 py-2.5 text-xs font-semibold text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary"
                >
                  About FITNIVO &amp; Philosophy
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2.5 text-xs font-semibold text-brand-lightText/80 dark:text-brand-darkMuted hover:text-brand-lightPrimary"
                >
                  Contact &amp; Press
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-sage-200/60 dark:border-brand-sage-800 text-center text-xs text-brand-sage-600 dark:text-brand-darkMuted space-y-1 pb-16">
              <p className="font-serif italic text-brand-lightPrimary dark:text-brand-darkPrimary font-bold">
                Feel Better. Live Healthier.
              </p>
              <p>© 2026 FITNIVO. Dedicated to women&apos;s holistic wellness.</p>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Sticky Mobile Bottom Navigation Bar for easy thumb navigation */}
      <MobileBottomBar onOpenSearch={() => setSearchOpen(true)} />
    </>
  );
};
