import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NewsletterBoxProps {
  className?: string;
  variant?: 'banner' | 'card' | 'inline';
}

export const NewsletterBox: React.FC<NewsletterBoxProps> = ({
  className = '',
  variant: _variant = 'banner'
}) => {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState<'weekly' | 'daily'>('weekly');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Backend-ready integration structure
      // Simulates real network submission with persistence in localStorage newsletter subscribers registry
      await new Promise((resolve) => setTimeout(resolve, 800));

      const subscribersKey = 'fitnivo-newsletter-subscribers';
      const existing: string[] = JSON.parse(localStorage.getItem(subscribersKey) || '[]');
      
      if (!existing.includes(email.toLowerCase())) {
        existing.push(email.toLowerCase());
        localStorage.setItem(subscribersKey, JSON.stringify(existing));
      }

      setStatus('success');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#244E42', '#8AA995', '#E9BFA9', '#91C5A7']
        });
      } catch {
        // silent fallback
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to complete subscription at this time. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className={`rounded-3xl p-8 md:p-12 text-center bg-white dark:bg-brand-darkCard border border-brand-sage-200 dark:border-brand-sage-800 shadow-soft ${className}`}
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-lightText dark:text-brand-darkText mb-2">
          Welcome to the FITNIVO Inner Circle!
        </h3>
        <p className="text-sm md:text-base text-brand-sage-600 dark:text-brand-darkMuted max-w-lg mx-auto mb-6">
          We&apos;ve sent a confirmation link to <span className="font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary">{email}</span>. Look out for your first curated wellness dispatch this Sunday morning.
        </p>
        <button
          onClick={() => {
            setEmail('');
            setStatus('idle');
          }}
          className="text-xs font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary underline hover:opacity-80 transition-opacity"
        >
          Subscribe with another email
        </button>
      </div>
    );
  }

  return (
    <section
      aria-label="Newsletter Signup"
      className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 md:p-14 bg-gradient-to-br from-brand-sage-50 via-white to-brand-blush-50 dark:from-brand-darkBgSecondary dark:via-brand-darkCard dark:to-brand-darkBg border border-brand-sage-200/70 dark:border-brand-sage-800/80 shadow-soft ${className}`}
    >
      {/* Decorative leaf watermarks */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-lightAccent/20 dark:bg-brand-sage-800/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-brand-sage-300/20 dark:bg-brand-darkPrimary/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/60 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Wellness Digest</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
          Your Weekly Dose of Wellness
        </h2>

        <p className="text-sm sm:text-base text-brand-lightText/75 dark:text-brand-darkMuted leading-relaxed max-w-xl mx-auto">
          Get helpful women&apos;s health tips, healthy recipes, fitness inspiration, and wellness ideas delivered straight to your inbox.
        </p>

        {/* Frequency selector */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="text-xs text-brand-sage-600 dark:text-brand-darkMuted">Delivery frequency:</span>
          <button
            type="button"
            onClick={() => setFrequency('weekly')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              frequency === 'weekly'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg font-semibold'
                : 'bg-brand-sage-100 dark:bg-brand-sage-900/40 text-brand-lightText dark:text-brand-darkText'
            }`}
          >
            Weekly Sunday Edition
          </button>
          <button
            type="button"
            onClick={() => setFrequency('daily')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              frequency === 'daily'
                ? 'bg-brand-lightPrimary text-white dark:bg-brand-darkPrimary dark:text-brand-darkBg font-semibold'
                : 'bg-brand-sage-100 dark:bg-brand-sage-900/40 text-brand-lightText dark:text-brand-darkText'
            }`}
          >
            Daily Morning Bite
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="pt-2 space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 max-w-lg mx-auto">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-sage-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address..."
                aria-label="Email address"
                disabled={status === 'loading'}
                className="w-full pl-11 pr-4 py-3.5 rounded-full text-sm bg-white dark:bg-brand-darkBg text-brand-lightText dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 focus:outline-none focus:ring-2 focus:ring-brand-lightPrimary dark:focus:ring-brand-darkPrimary shadow-sm transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto shrink-0 px-8 py-3.5 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary text-white dark:text-brand-darkBg font-semibold text-sm hover:bg-brand-sage-700 dark:hover:bg-brand-sage-300 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white dark:border-brand-darkBg border-t-transparent rounded-full animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div className="flex items-center justify-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 pt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Privacy Message */}
          <p className="text-xs text-brand-sage-500 dark:text-brand-darkMuted pt-2">
            We respect your privacy. No spam, ever. Unsubscribe at any time with a single click.
          </p>
        </form>
      </div>
    </section>
  );
};
