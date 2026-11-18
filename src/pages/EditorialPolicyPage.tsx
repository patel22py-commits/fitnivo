import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EditorialPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Editorial & Medical Integrity Policy – FITNIVO';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-16 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Editorial Policy' }]} />

          <div className="pt-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Trust &amp; Transparency</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
              Editorial Policy &amp; Medical Integrity
            </h1>

            <p className="text-base sm:text-lg text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              How FITNIVO researches, crafts, and maintains trustworthy, evidence-informed wellness guidance for women.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10 text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed text-sm md:text-base">
        
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            1. Our Commitment to Honest Sourcing
          </h2>
          <p>
            At FITNIVO, we believe that health journalism must be rooted in truth and biological reality. We explicitly reject clickbait headlines, fearmongering trends, and fabricated scientific claims. Every article is written by experienced health, movement, and wellness journalists.
          </p>
          <div className="p-5 rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200 dark:border-brand-sage-800 shadow-soft space-y-2">
            <h4 className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary text-sm">
              Our Primary Research Sources Include:
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Peer-reviewed clinical trials indexed on PubMed and the National Institutes of Health (NIH).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Major American and international health bodies (CDC, WHO, ACOG, ACSM).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0" />
                <span>Academic medical institutions and sports physiology laboratories.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            2. Responsible Weight Management Guidelines
          </h2>
          <p>
            We adhere to strict editorial guardrails when discussing body composition, metabolism, and weight loss:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>No guaranteed results:</strong> We never promise rapid pound-shedding, overnight fat burning, or &quot;effortless&quot; changes.
            </li>
            <li>
              <strong>No extreme caloric restriction:</strong> We will never recommend crash diets under basal metabolic limits, dry fasts, or dangerous cleanses.
            </li>
            <li>
              <strong>Hormone and health preservation:</strong> All nutritional guidance emphasizes sufficient dietary protein, fiber, essential fatty acids, and micronutrients necessary for menstrual and thyroid health.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            3. Genuine Author &amp; Contributor Transparency
          </h2>
          <p>
            We believe in authentic credentials. We never fabricate fictitious doctor bios, false hospital affiliations, or misleading medical degrees. Our contributors are genuine health coaches, certified personal trainers, and experienced lifestyle journalists whose bios and areas of expertise are openly displayed on every article.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            4. Routine Review &amp; Updates
          </h2>
          <p>
            Nutritional science and exercise physiology evolve continuously. We regularly review our published guides to incorporate new peer-reviewed findings, update product recommendations, and remove outdated advice. Every updated article clearly displays its latest revision date.
          </p>
        </section>

        <section className="p-6 rounded-3xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary border border-brand-sage-200 dark:border-brand-sage-800 space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-lightText dark:text-brand-darkText">
            Spot an Error or Have an Editorial Concern?
          </h3>
          <p className="text-xs sm:text-sm">
            We welcome feedback from readers and clinical professionals. If you identify a factual discrepancy or misleading phrasing in any FITNIVO article, please reach out to our editorial team directly.
          </p>
          <div>
            <Link
              to="/contact"
              className="text-xs font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary underline"
            >
              Contact the Editorial Desk →
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
