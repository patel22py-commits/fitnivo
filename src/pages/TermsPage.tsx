import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions – FITNIVO';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-16 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

          <div className="pt-4 space-y-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-brand-sage-600 dark:text-brand-darkMuted">
              Last Updated: November 18, 2026
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8 text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed text-sm md:text-base">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using fitnivo.com, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            2. Intellectual Property Rights
          </h2>
          <p>
            The content, branding, logo mark, editorial writing, and design elements published on FITNIVO are protected by copyright, trademark, and other intellectual property laws. You may save Pinterest pins or share article links with proper attribution, but commercial reproduction or redistribution without explicit written consent is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            3. Disclaimer of Warranties
          </h2>
          <p>
            The materials on FITNIVO are provided on an &apos;as is&apos; basis. FITNIVO makes no warranties, expressed or implied, and hereby disclaims all other warranties including fitness for a particular health outcome or non-infringement of intellectual property.
          </p>
        </section>
      </main>
    </div>
  );
};
