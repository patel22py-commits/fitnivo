import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AlertCircle, ShieldAlert } from 'lucide-react';

export const MedicalDisclaimerPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Medical Disclaimer – FITNIVO';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-16 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Medical Disclaimer' }]} />

          <div className="pt-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Important Medical Notice</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
              Medical Disclaimer
            </h1>

            <p className="text-base sm:text-lg text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              Please read this disclaimer carefully before relying on any health, fitness, or nutritional content provided on FITNIVO.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8 text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed text-sm md:text-base">
        
        <div className="p-6 md:p-8 rounded-3xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 space-y-3">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-lg font-serif">
            <ShieldAlert className="w-6 h-6 shrink-0" />
            <span>Not a Substitute for Professional Medical Advice</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950/80 dark:text-amber-200/80 leading-relaxed">
            The content provided on FITNIVO (including text, graphics, images, workout routines, recipes, and other materials) is for informational and educational purposes only. None of the content on this website is intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            Always Consult Your Physician
          </h2>
          <p>
            Always seek the guidance of your physician, obstetrician-gynecologist, registered dietitian, or other qualified healthcare provider with any questions you may have regarding a medical condition, symptoms, hormonal imbalance, pregnancy, or post-partum recovery. Never disregard professional medical advice or delay seeking it because of something you have read on FITNIVO.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            Physical Exercise &amp; Workout Routines
          </h2>
          <p>
            Engaging in exercise routines involves inherent risks of physical injury. You should consult your physician before starting any new fitness program, especially if you have a history of cardiovascular disease, joint issues, lower back instability, pelvic organ prolapse, or if you are pregnant or nursing. By performing any exercises described on this website, you do so entirely at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            Nutritional Advice &amp; Dietary Supplements
          </h2>
          <p>
            Dietary recommendations and macronutrient ratios are broad estimates based on generalized nutritional physiology. Statements regarding dietary supplements (such as magnesium, omega-3s, or herbal infusions) have not been evaluated by the Food and Drug Administration (FDA) or European Medicines Agency (EMA). These products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            Emergency Situations
          </h2>
          <p>
            If you think you may have a medical emergency, call your doctor, go to the nearest emergency department, or call emergency services immediately (911 in the United States and Canada; 999 in the United Kingdom; 000 in Australia). FITNIVO does not recommend or endorse any specific tests, physicians, products, or procedures.
          </p>
        </section>

      </main>
    </div>
  );
};
