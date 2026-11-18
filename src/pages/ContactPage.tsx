import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    topic: 'general',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.title = 'Contact FITNIVO | Women’s Wellness Platform';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) return 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      return 'Please write a message with at least 15 characters.';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus('error');
      setErrorMessage(error);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Backend-ready integration structure
      await new Promise((resolve) => setTimeout(resolve, 900));

      const submissionsKey = 'fitnivo-contact-submissions';
      const existing = JSON.parse(localStorage.getItem(submissionsKey) || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem(submissionsKey, JSON.stringify(existing));

      setStatus('success');
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#244E42', '#8AA995', '#E9BFA9', '#91C5A7']
        });
      } catch {
        // fallback
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong while delivering your message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-12 md:py-20 border-b border-brand-sage-200/60 dark:border-brand-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          <div className="max-w-3xl pt-4 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>We&apos;d Love to Hear from You</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-lightPrimary dark:text-brand-darkText tracking-tight">
              Contact FITNIVO
            </h1>

            <p className="text-lg sm:text-xl text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
              Have an editorial suggestion, partnership inquiry, or reader feedback? Our team is here to assist.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-brand-darkCard p-8 sm:p-10 rounded-3xl border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Message Delivered!
                </h3>
                <p className="text-sm md:text-base text-brand-lightText/70 dark:text-brand-darkMuted max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary">{formData.name}</span>. A member of the FITNIVO editorial team will respond to <span className="font-semibold">{formData.email}</span> within 24 to 48 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        topic: 'general',
                        message: ''
                      });
                      setStatus('idle');
                    }}
                    className="px-6 py-2.5 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900 text-brand-lightPrimary dark:text-brand-darkPrimary font-semibold text-xs"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-brand-sage-500 dark:text-brand-darkMuted">
                    Please fill out the form below. All fields are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-lightText dark:text-brand-darkText mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jessica Miller"
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-2xl text-sm bg-brand-sage-50/50 dark:bg-brand-darkBg text-brand-lightText dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 focus:outline-none focus:ring-2 focus:ring-brand-lightPrimary dark:focus:ring-brand-darkPrimary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-lightText dark:text-brand-darkText mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jessica@example.com"
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-2xl text-sm bg-brand-sage-50/50 dark:bg-brand-darkBg text-brand-lightText dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 focus:outline-none focus:ring-2 focus:ring-brand-lightPrimary dark:focus:ring-brand-darkPrimary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-lightText dark:text-brand-darkText mb-1.5">
                      Topic / Inquiry Type
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-2xl text-sm bg-brand-sage-50/50 dark:bg-brand-darkBg text-brand-lightText dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 focus:outline-none focus:ring-2 focus:ring-brand-lightPrimary dark:focus:ring-brand-darkPrimary"
                    >
                      <option value="general">General Reader Feedback</option>
                      <option value="editorial">Editorial Suggestion</option>
                      <option value="press">Press &amp; Media Inquiries</option>
                      <option value="corrections">Article Correction Request</option>
                      <option value="partnerships">Brand Partnership &amp; Collab</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-lightText dark:text-brand-darkText mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief topic summary..."
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-2xl text-sm bg-brand-sage-50/50 dark:bg-brand-darkBg text-brand-lightText dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 focus:outline-none focus:ring-2 focus:ring-brand-lightPrimary dark:focus:ring-brand-darkPrimary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-lightText dark:text-brand-darkText mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we assist you today? Please share any relevant details..."
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-2xl text-sm bg-brand-sage-50/50 dark:bg-brand-darkBg text-brand-lightText dark:text-brand-darkText border border-brand-sage-300 dark:border-brand-sage-700 focus:outline-none focus:ring-2 focus:ring-brand-lightPrimary dark:focus:ring-brand-darkPrimary resize-y"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs border border-rose-200 dark:border-rose-800">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-full bg-brand-lightPrimary dark:bg-brand-darkPrimary text-white dark:text-brand-darkBg font-semibold text-sm hover:bg-brand-sage-700 dark:hover:bg-brand-sage-300 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white dark:border-brand-darkBg border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Social Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Editorial Headquarters
                </h3>
                <p className="text-xs text-brand-sage-500 dark:text-brand-darkMuted">
                  FITNIVO Media Group – New York &amp; Austin
                </p>
              </div>

              <div className="space-y-4 text-sm text-brand-lightText/80 dark:text-brand-darkMuted">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-brand-lightText dark:text-brand-darkText">
                      Editorial &amp; Reader Inquiries:
                    </span>
                    <a href="mailto:hello@fitnivo.com" className="text-brand-lightPrimary dark:text-brand-darkPrimary underline">
                      hello@fitnivo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-brand-lightText dark:text-brand-darkText">
                      Press &amp; Syndication:
                    </span>
                    <a href="mailto:press@fitnivo.com" className="text-brand-lightPrimary dark:text-brand-darkPrimary underline">
                      press@fitnivo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-brand-lightText dark:text-brand-darkText">
                      Location:
                    </span>
                    <span>Austin, TX &amp; New York, NY, USA</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-brand-sage-200/60 dark:border-brand-sage-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary block">
                  Follow Our Communities
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.pinterest.com/fitnivo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-700/80 hover:border-brand-lightPrimary flex items-center justify-between text-xs font-semibold text-brand-lightText dark:text-brand-darkText transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E60023]" />
                      <span>Pinterest Community (@fitnivo)</span>
                    </span>
                    <span className="text-brand-sage-500">Pins &amp; Meal Plans →</span>
                  </a>

                  <a
                    href="https://www.instagram.com/fitnivo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-700/80 hover:border-brand-lightPrimary flex items-center justify-between text-xs font-semibold text-brand-lightText dark:text-brand-darkText transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E4405F]" />
                      <span>Instagram (@fitnivo)</span>
                    </span>
                    <span className="text-brand-sage-500">Daily Tips →</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Note on Medical Emergencies */}
            <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
              <strong>Please Note:</strong> FITNIVO cannot answer personal medical inquiries, interpret clinical lab results, or provide personal treatment advice. If you are experiencing a medical emergency, please contact local emergency medical services (such as 911 in the USA/Canada, 999 in the UK, or 000 in Australia) immediately.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
