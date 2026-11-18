import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag, Heart, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedCategory('all');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search across category pillars, FAQs, and action steps
  const matchingPillars: { categoryName: string; categorySlug: string; pillarTitle: string; pillarSummary: string; badge: string }[] = [];
  const matchingFaqs: { categoryName: string; categorySlug: string; question: string; answer: string }[] = [];

  const q = query.toLowerCase().trim();

  CATEGORIES.forEach((cat) => {
    if (selectedCategory !== 'all' && cat.slug !== selectedCategory) return;

    cat.pillars.forEach((pillar) => {
      if (
        !q ||
        pillar.title.toLowerCase().includes(q) ||
        pillar.summary.toLowerCase().includes(q) ||
        pillar.badge.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
      ) {
        matchingPillars.push({
          categoryName: cat.name,
          categorySlug: cat.slug,
          pillarTitle: pillar.title,
          pillarSummary: pillar.summary,
          badge: pillar.badge
        });
      }
    });

    cat.faq.forEach((faqItem) => {
      if (
        q &&
        (faqItem.question.toLowerCase().includes(q) || faqItem.answer.toLowerCase().includes(q))
      ) {
        matchingFaqs.push({
          categoryName: cat.name,
          categorySlug: cat.slug,
          question: faqItem.question,
          answer: faqItem.answer
        });
      }
    });
  });

  const popularSearches = [
    'Hormones',
    'High protein',
    'Home workout',
    'Skin barrier',
    'Cortisol',
    'Circadian light',
    'Hydration'
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search FITNIVO Wellness Hub"
      className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 px-4 bg-brand-lightText/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-brand-darkCard rounded-3xl shadow-2xl border border-brand-sage-200/80 dark:border-brand-sage-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Fitnivo Logo */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary/60 border-b border-brand-sage-100 dark:border-brand-sage-800">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white dark:bg-white/95 p-0.5 flex items-center justify-center shadow-xs">
              <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-full h-full object-contain" />
            </div>
            <span className="text-xs font-serif font-bold text-brand-lightPrimary dark:text-brand-darkPrimary tracking-wider">
              FITNIVO Wellness Hub Search
            </span>
          </div>
          <span className="text-[10px] text-brand-sage-500 font-medium uppercase tracking-wider hidden sm:inline">
            Press ESC to exit
          </span>
        </div>

        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 sm:p-5 border-b border-brand-sage-100 dark:border-brand-sage-800">
          <Search className="w-5 h-5 text-brand-lightPrimary dark:text-brand-darkPrimary ml-2 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search health protocols, nutrition, workouts, skincare..."
            className="w-full pl-3 pr-10 py-2 text-sm sm:text-base bg-transparent text-brand-lightText dark:text-brand-darkText placeholder-brand-sage-400 dark:placeholder-brand-sage-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-2 rounded-full hover:bg-brand-sage-100 dark:hover:bg-brand-sage-800 text-brand-sage-500 hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters Pills */}
        <div className="p-3 sm:px-5 bg-brand-sage-50/60 dark:bg-brand-darkBgSecondary/60 border-b border-brand-sage-100 dark:border-brand-sage-800/60 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg shadow-sm'
                : 'bg-white dark:bg-brand-darkCard text-brand-sage-600 dark:text-brand-darkMuted hover:bg-brand-sage-100'
            }`}
          >
            All Pillars
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.slug
                  ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg shadow-sm'
                  : 'bg-white dark:bg-brand-darkCard text-brand-sage-600 dark:text-brand-darkMuted hover:bg-brand-sage-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-4">
          {query.trim() === '' ? (
            <div className="py-2 space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-sage-600 dark:text-brand-darkMuted">
                <Tag className="w-3.5 h-3.5" />
                <span>Popular Wellness Topics</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-brand-sage-100 dark:bg-brand-sage-900/40 text-brand-lightPrimary dark:text-brand-darkPrimary hover:bg-brand-sage-200 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-sage-100 dark:border-brand-sage-800">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-sage-600 dark:text-brand-darkMuted block mb-3">
                  Core Wellness Pillars
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/${cat.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-2xl bg-brand-sage-50/60 dark:bg-brand-darkBgSecondary/60 hover:bg-brand-sage-100 dark:hover:bg-brand-sage-900/60 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Heart className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary" />
                        <span className="text-xs font-bold text-brand-lightText dark:text-brand-darkText">
                          {cat.name}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-sage-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : matchingPillars.length > 0 || matchingFaqs.length > 0 ? (
            <div className="space-y-4">
              <div className="text-xs text-brand-sage-600 dark:text-brand-darkMuted flex items-center justify-between">
                <span>{matchingPillars.length + matchingFaqs.length} protocol results found</span>
                <span>Press Escape to close</span>
              </div>

              {/* Pillars */}
              {matchingPillars.map((p, idx) => (
                <Link
                  key={idx}
                  to={`/${p.categorySlug}`}
                  onClick={onClose}
                  className="block p-4 rounded-2xl hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 transition-all group"
                >
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary mb-1">
                    <span>{p.categoryName}</span>
                    <span>•</span>
                    <span>{p.badge}</span>
                  </div>
                  <h4 className="text-sm font-bold text-brand-lightText dark:text-brand-darkText group-hover:text-brand-lightPrimary dark:group-hover:text-brand-darkPrimary transition-colors">
                    {p.pillarTitle}
                  </h4>
                  <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted line-clamp-2 mt-1">
                    {p.pillarSummary}
                  </p>
                </Link>
              ))}

              {/* FAQs */}
              {matchingFaqs.map((faq, idx) => (
                <Link
                  key={`faq-${idx}`}
                  to={`/${faq.categorySlug}`}
                  onClick={onClose}
                  className="block p-4 rounded-2xl bg-brand-sage-50/40 dark:bg-brand-darkBgSecondary/40 border border-brand-sage-200/60 dark:border-brand-sage-800 transition-all group"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-sage-600 dark:text-brand-darkMuted mb-1">
                    <HelpCircle className="w-3 h-3 text-brand-lightPrimary dark:text-brand-darkPrimary" />
                    <span>FAQ: {faq.categoryName}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-lightText dark:text-brand-darkText">
                    {faq.question}
                  </h4>
                  <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted line-clamp-2 mt-1">
                    {faq.answer}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/50 flex items-center justify-center text-brand-lightPrimary dark:text-brand-darkPrimary">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-brand-lightText dark:text-brand-darkText">
                No matching wellness protocols
              </h4>
              <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted max-w-sm mx-auto">
                Try searching for &quot;protein&quot;, &quot;hormones&quot;, &quot;workout&quot;, &quot;sunlight&quot;, or &quot;barrier&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
