import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles, ARTICLES } from '../data/articles';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShareButtons } from '../components/common/ShareButtons';
import { PinterestPinButton } from '../components/common/PinterestPinButton';
import { MedicalDisclaimer } from '../components/common/MedicalDisclaimer';
import { ArticleCard } from '../components/common/ArticleCard';
import { NewsletterBox } from '../components/common/NewsletterBox';
import { useBookmarks } from '../context/BookmarkContext';
import {
  Clock,
  Calendar,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  ListOrdered,
  Sparkles,
  Quote
} from 'lucide-react';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = getArticleBySlug(slug || '') || ARTICLES[0];
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(article.id);

  const [activeSection, setActiveSection] = useState<string>('');

  const currentUrl = `https://fitnivo.com/article/${article.slug}`;
  const relatedArticles = getRelatedArticles(article.id, article.categorySlug, 3);

  useEffect(() => {
    document.title = `${article.title} – FITNIVO`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article]);

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: [article.featuredImage, article.pinterestImage],
    datePublished: '2026-11-10T08:00:00+00:00',
    dateModified: '2026-11-16T10:00:00+00:00',
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'FITNIVO',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fitnivo.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    }
  };

  const scrollToHeading = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="min-h-screen pb-20">
        {/* Article Header Container */}
        <header className="bg-brand-sage-50/60 dark:bg-brand-darkBgSecondary/50 border-b border-brand-sage-200/50 dark:border-brand-sage-800/60 pt-6 pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: article.category, path: `/${article.categorySlug}` },
                { label: article.title }
              ]}
            />

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2">
                <Link
                  to={`/${article.categorySlug}`}
                  className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg hover:opacity-90 transition-opacity"
                >
                  {article.category}
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readingTime}</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight leading-[1.18]">
                {article.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed font-sans">
                {article.subtitle}
              </p>

              {/* Author & Publication Metadata Bar */}
              <div className="pt-6 border-t border-brand-sage-200/60 dark:border-brand-sage-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-sage-200 dark:border-brand-sage-700"
                  />
                  <div>
                    <div className="font-bold text-sm text-brand-lightText dark:text-brand-darkText">
                      {article.author.name}
                    </div>
                    <div className="text-xs text-brand-sage-500 dark:text-brand-darkMuted">
                      {article.author.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>Updated: {article.updatedDate}</span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => toggleBookmark(article.id, e)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                      bookmarked
                        ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg border-brand-lightPrimary'
                        : 'bg-white dark:bg-brand-darkCard text-brand-lightText dark:text-brand-darkText border-brand-sage-300 dark:border-brand-sage-700 hover:border-brand-lightPrimary'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                    <span>{bookmarked ? 'Saved' : 'Save Article'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image + Pinterest Save Overlay */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-10">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white dark:border-brand-darkCard bg-brand-sage-100">
            <img
              src={article.featuredImage}
              alt={article.title}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            {/* Pinterest Pin Button Overlay */}
            <div className="absolute top-4 right-4 z-10">
              <PinterestPinButton
                url={currentUrl}
                media={article.pinterestImage || article.featuredImage}
                description={`${article.title} – ${article.excerpt}`}
                size="md"
              />
            </div>
          </div>
        </div>

        {/* Article Body + Sticky Sidebar Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left/Sidebar: Table of Contents & Social Share (4 cols) */}
            <aside className="lg:col-span-4 order-2 lg:order-1 space-y-6">
              {/* Sticky Container */}
              <div className="lg:sticky lg:top-28 space-y-6">
                
                {/* Table of Contents */}
                <div className="p-6 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary mb-4">
                    <ListOrdered className="w-4 h-4" />
                    <span>In This Article</span>
                  </div>
                  <nav className="space-y-2 text-sm">
                    {article.sections.map((sec, idx) => {
                      const id = `section-${idx}`;
                      return (
                        <button
                          key={idx}
                          onClick={() => scrollToHeading(id)}
                          className={`w-full text-left py-1 px-2 rounded-lg text-xs leading-relaxed transition-colors flex items-center justify-between ${
                            activeSection === id
                              ? 'bg-brand-sage-100 dark:bg-brand-sage-900/60 font-bold text-brand-lightPrimary dark:text-brand-darkPrimary'
                              : 'text-brand-lightText/70 dark:text-brand-darkMuted hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-darkBgSecondary'
                          }`}
                        >
                          <span className="truncate">{sec.heading}</span>
                          <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Social Share Box */}
                <div className="p-6 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft">
                  <ShareButtons
                    url={currentUrl}
                    title={article.title}
                    media={article.pinterestImage}
                    description={article.excerpt}
                  />
                </div>

                {/* Vertical 2:3 Pinterest Graphic Card */}
                <div className="p-6 rounded-3xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft text-center space-y-3">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E60023]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.48.03-3.55l1.04-4.4s-.26-.53-.26-1.32c0-1.24.72-2.16 1.62-2.16.76 0 1.13.57 1.13 1.26 0 .77-.49 1.92-.74 2.99-.21.9.45 1.63 1.34 1.63 1.6 0 2.84-1.69 2.84-4.13 0-2.16-1.55-3.67-3.77-3.67-2.57 0-4.08 1.93-4.08 3.92 0 .78.3 1.61.67 2.07.07.09.08.17.06.26l-.25 1.04c-.04.17-.14.21-.32.13-1.2-.56-1.95-2.31-1.95-3.72 0-3.03 2.2-5.81 6.35-5.81 3.33 0 5.92 2.37 5.92 5.55 0 3.31-2.09 5.98-4.99 5.98-.98 0-1.9-.51-2.21-1.11l-.6 2.29c-.22.84-.81 1.9-1.21 2.54A12 12 0 1 0 12 0Z" />
                    </svg>
                    <span>Save to Pinterest Board</span>
                  </div>
                  <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted">
                    Pin this guide to revisit these steps whenever you need a boost.
                  </p>
                  <div className="relative aspect-[2/3] max-w-[200px] mx-auto rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={article.pinterestImage}
                      alt={`${article.title} vertical pin graphic`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <PinterestPinButton
                        url={currentUrl}
                        media={article.pinterestImage}
                        description={article.title}
                        size="md"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </aside>

            {/* Right/Main Content (8 cols) */}
            <main className="lg:col-span-8 order-1 lg:order-2 space-y-8">
              
              {/* Key Takeaways Card */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div className="p-6 md:p-8 rounded-3xl bg-brand-sage-50/90 dark:bg-brand-darkBgSecondary border-2 border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                    <Sparkles className="w-4 h-4" />
                    <span>Key Takeaways at a Glance</span>
                  </div>
                  <ul className="space-y-2.5">
                    {article.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-lightText dark:text-brand-darkText">
                        <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Medical Disclaimer on relevant health articles */}
              {article.medicalDisclaimerRequired && (
                <MedicalDisclaimer variant="card" />
              )}

              {/* Main Article Sections */}
              <div className="space-y-10 text-base md:text-lg leading-relaxed text-brand-lightText/85 dark:text-brand-darkText/90">
                {article.sections.map((section, idx) => (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    className="space-y-4 scroll-mt-28"
                  >
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight pt-2">
                      {section.heading}
                    </h2>

                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed whitespace-pre-line text-brand-lightText/80 dark:text-brand-darkMuted">
                        {p}
                      </p>
                    ))}

                    {/* Pull Quote Box */}
                    {section.quote && (
                      <div className="my-6 p-6 md:p-8 rounded-3xl bg-brand-blush-50/60 dark:bg-brand-darkCard border-l-4 border-brand-lightAccent dark:border-brand-darkPrimary space-y-2">
                        <Quote className="w-6 h-6 text-brand-lightAccent dark:text-brand-darkPrimary opacity-80" />
                        <p className="font-serif italic text-lg sm:text-xl text-brand-lightPrimary dark:text-brand-darkText leading-snug">
                          &ldquo;{section.quote}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* Callout Box */}
                    {section.callout && (
                      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200 dark:border-brand-sage-800 shadow-sm space-y-1">
                        <h4 className="font-bold text-sm text-brand-lightPrimary dark:text-brand-darkPrimary uppercase tracking-wide">
                          {section.callout.title}
                        </h4>
                        <p className="text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                          {section.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Tips Bullet Points */}
                    {section.tips && (
                      <div className="p-5 rounded-2xl bg-brand-sage-50/50 dark:bg-brand-darkBgSecondary/60 border border-brand-sage-200/50 dark:border-brand-sage-800/60 space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-sage-600 dark:text-brand-darkMuted block">
                          Practical Tips:
                        </span>
                        <ul className="space-y-1.5">
                          {section.tips.map((tip, tIdx) => (
                            <li key={tIdx} className="text-sm flex items-start gap-2 text-brand-lightText/80 dark:text-brand-darkMuted">
                              <span className="text-brand-lightPrimary dark:text-brand-darkPrimary font-bold">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-brand-sage-200/60 dark:border-brand-sage-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-sage-500 mr-2">
                  Tags:
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio Box */}
              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-brand-sage-200 dark:border-brand-sage-700"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900 text-brand-lightPrimary dark:text-brand-darkPrimary">
                    Written by {article.author.name}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                    {article.author.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
                    {article.author.bio}
                  </p>
                </div>
              </div>

              {/* In-Article Newsletter */}
              <NewsletterBox variant="card" />

            </main>
          </div>
        </div>

        {/* Related Articles Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-brand-sage-200/60 dark:border-brand-sage-800">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-lightPrimary dark:text-brand-darkPrimary">
                Keep Reading
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
                Related Articles You May Enjoy
              </h3>
            </div>
            <Link
              to={`/${article.categorySlug}`}
              className="text-xs font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary underline hover:opacity-80"
            >
              View all in {article.category} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
};
