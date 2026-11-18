import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy – FITNIVO';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-16 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <div className="pt-4 space-y-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
              Privacy Policy
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
            1. Overview
          </h2>
          <p>
            FITNIVO (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to safeguarding the privacy of our visitors across the United States, Canada, the United Kingdom, Australia, and internationally. This Privacy Policy describes how we collect, use, and protect information when you visit fitnivo.com.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            2. Information We Collect
          </h2>
          <p>
            We collect information only when voluntarily submitted by you:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Newsletter Subscriptions:</strong> When you subscribe to our wellness dispatch, we collect your email address.
            </li>
            <li>
              <strong>Contact Inquiries:</strong> When you send a message through our contact form, we collect your name, email address, topic, and message content.
            </li>
            <li>
              <strong>Local Browser Storage:</strong> We use browser localStorage solely to save your dark/light theme preference and your personal article reading bookmarks. This data remains on your personal device.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            3. Pinterest and Social Sharing
          </h2>
          <p>
            When you use our social sharing buttons (such as Pinterest Pin It, Facebook, or X), you are interacting directly with third-party social networks whose data practices are governed by their respective privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            4. No Sale of Personal Data
          </h2>
          <p>
            We do not sell, rent, or trade your personal email address or personal information to third-party data brokers or marketing lists under any circumstances, compliant with CCPA/CPRA, GDPR, and international data standards.
          </p>
        </section>
      </main>
    </div>
  );
};
