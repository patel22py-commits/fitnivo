import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MedicalDisclaimerProps {
  className?: string;
  variant?: 'inline' | 'card' | 'compact';
}

export const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({
  className = '',
  variant = 'card'
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-start gap-2.5 text-xs text-brand-sage-600 dark:text-brand-darkMuted bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary/60 p-3 rounded-lg border border-brand-sage-200/60 dark:border-brand-sage-800/60 ${className}`}>
        <AlertCircle className="w-4 h-4 shrink-0 text-brand-lightSecondary dark:text-brand-darkPrimary mt-0.5" />
        <p>
          <strong>Medical Disclaimer:</strong> Content on FITNIVO is for educational and informational purposes only and does not constitute medical advice or diagnosis. Always seek the advice of your physician or qualified health provider.{' '}
          <Link to="/medical-disclaimer" className="underline hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary">
            Read full disclaimer.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <aside
      aria-label="Medical Disclaimer"
      className={`rounded-2xl p-5 md:p-6 bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary border border-brand-sage-200/70 dark:border-brand-sage-800/80 my-8 ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 text-sm leading-relaxed">
          <h4 className="font-semibold text-brand-lightPrimary dark:text-brand-darkText">
            Educational & Medical Disclaimer
          </h4>
          <p className="text-brand-lightText/80 dark:text-brand-darkMuted text-xs md:text-sm">
            The content, routines, recipes, and wellness recommendations presented on FITNIVO are for educational and informational purposes only. They are not intended as personal medical advice, clinical diagnosis, or treatment plans. Every woman&apos;s physiology is unique. Always consult a qualified physician, obstetrician-gynecologist, registered dietitian, or certified medical practitioner regarding any physical symptoms, hormonal concerns, or lifestyle changes.
          </p>
          <div className="pt-1">
            <Link
              to="/medical-disclaimer"
              className="text-xs font-medium text-brand-lightPrimary dark:text-brand-darkPrimary hover:underline inline-flex items-center gap-1"
            >
              Learn more about our editorial and medical review policies →
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};
