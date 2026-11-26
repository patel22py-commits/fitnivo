import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  Sparkles,
  Clock,
  Calendar,
  CheckCircle2,
  Heart,
  Activity,
  Moon,
  Scale,
  Apple,
  Dumbbell,
  Pill,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Watch,
  Smartphone,
  ExternalLink
} from 'lucide-react';

export const WhyGainingWeightEatingLessPage: React.FC = () => {
  useEffect(() => {
    document.title = "Why Am I Gaining Weight Even When I Eat Less? 7 Reasons – FITNIVO";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const reasons = [
    {
      num: '01',
      title: 'Your Body May Be Retaining Water',
      icon: Droplets,
      color: 'from-blue-500/10 to-cyan-500/10 text-cyan-600 dark:text-cyan-400',
      description:
        "Sometimes, weight gain isn't body fat at all. Your body can temporarily hold extra water because of hormonal fluctuations, high sodium intake, menstrual cycles, or certain medications. This can cause the scale to jump 2–5 pounds overnight even when your eating habits haven't changed.",
      actionTitle: 'What may help?',
      tips: [
        'Drink enough water throughout the day to support kidney filtration.',
        'Reduce excessive sodium from ultra-processed or restaurant foods.',
        'Stay physically active to encourage lymphatic circulation.',
        'Track weekly weight trends rather than stressing over day-to-day spikes.'
      ]
    },
    {
      num: '02',
      title: 'Hormonal Changes May Affect Your Weight',
      icon: Heart,
      color: 'from-rose-500/10 to-pink-500/10 text-brand-lightPrimary dark:text-brand-darkPrimary',
      description:
        'Hormones play an important role in appetite, resting metabolic rate, and how your body partitions energy. Conditions such as hypothyroidism and polycystic ovary syndrome (PCOS) can contribute to weight changes in some women. In addition, perimenopause and menopause can significantly alter estrogen levels, muscle retention, and visceral fat distribution.',
      callout:
        'If you are experiencing unexplained weight gain along with chronic fatigue, irregular periods, hair thinning, or temperature sensitivity, consider speaking with a physician or endocrinologist.'
    },
    {
      num: '03',
      title: "You're Not Getting Enough Quality Sleep",
      icon: Moon,
      color: 'from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400',
      description:
        'Did you know that poor sleep directly alters the hunger hormones ghrelin and leptin? Insufficient rest triggers higher ghrelin (which signals hunger) and blunts leptin (which signals fullness), causing intense cravings for calorie-dense, sugary snacks the following day.',
      actionTitle: 'Practical sleep routine:',
      tips: [
        'Maintain a consistent bedtime and wake time 7 days a week.',
        'Aim for 7–9 hours of uninterrupted restful sleep every night.',
        'Turn off screens 45 minutes before bed to protect natural melatonin production.'
      ]
    },
    {
      num: '04',
      title: 'Stress May Be Affecting Your Eating Habits & Cortisol',
      icon: Activity,
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400',
      description:
        'Chronic psychological and physical stress keeps the adrenal hormone cortisol elevated. High cortisol encourages the body to conserve energy and promotes abdominal fat storage while increasing emotional cravings for comfort foods.',
      callout:
        'Instead of following an extremely restrictive crash diet that further raises physiological stress, focus on sustainable calming habits such as daily outdoor walking, deep breathing, enjoyable movement, and nourishing meals.'
    },
    {
      num: '05',
      title: "You're Eating Less but Moving Less Too (The NEAT Trap)",
      icon: Dumbbell,
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400',
      description:
        'When you drastically reduce calories, your subconscious survival mechanism kicks in: you feel lethargic, sit down more, and unconsciously reduce Non-Exercise Activity Thermogenesis (NEAT)—the calories burned by standing, fidgeting, cleaning, and walking.',
      actionTitle: 'How to overcome this:',
      tips: [
        'Incorporate steady, enjoyable daily walks (aim for 7,000–9,000 steps).',
        'Prioritize 2–3 weekly resistance training sessions to preserve metabolically active muscle.',
        'Avoid severely low calorie targets that drain your everyday vitality.'
      ]
    },
    {
      num: '06',
      title: "You're Not Eating Enough Protein",
      icon: Apple,
      color: 'from-brand-lightPrimary/10 to-brand-lightSecondary/10 text-brand-lightPrimary dark:text-brand-darkPrimary',
      description:
        'Protein has the highest thermic effect of food (TEF) and provides superior satiety signals to the brain. If your meals are low in protein and rely predominantly on refined carbohydrates, insulin spikes and drops rapidly, leaving you hungry shortly after eating.',
      actionTitle: 'Prioritize these nutrient-dense protein sources:',
      tips: [
        'Pasture-raised eggs & egg whites',
        'Plain unsweetened Greek yogurt or skyr',
        'Lean chicken breast or turkey',
        'Wild-caught fish (salmon, tuna, cod)',
        'Tofu, tempeh & organic edamame',
        'Lentils, chickpeas & black beans'
      ]
    },
    {
      num: '07',
      title: 'Your Medication or Medical Condition May Be Contributing',
      icon: Pill,
      color: 'from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400',
      description:
        'Certain prescription medications—including some antidepressants, corticosteroids, blood pressure drugs, antihistamines, and insulin-sensitizing diabetes medications—can influence appetite, water retention, and metabolic rate.',
      callout:
        'If your weight is increasing unexpectedly, never discontinue prescribed medication without medical guidance. Schedule an appointment with your healthcare professional to discuss dosage adjustments or well-tolerated alternatives.'
    }
  ];

  return (
    <article className="min-h-screen pb-16 sm:pb-24">
      {/* 1. Header Banner & Breadcrumbs */}
      <section className="bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary py-8 sm:py-12 border-b border-brand-sage-200/80 dark:border-brand-sage-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: "Women's Health", path: '/womens-health' },
              { label: 'Why Am I Gaining Weight Eating Less?' }
            ]}
          />

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightPrimary/15 dark:bg-brand-darkPrimary/15 text-brand-lightPrimary dark:text-brand-darkPrimary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hormonal &amp; Metabolic Health</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200/80 dark:border-emerald-800/80">
              <ShieldCheck className="w-3 h-3" />
              <span>Evidence-Informed Guide</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
              <Clock className="w-3.5 h-3.5" />
              <span>7 min read</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-brand-sage-600 dark:text-brand-darkMuted">
              <Calendar className="w-3.5 h-3.5" />
              <span>Published 2026</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-lightPrimary dark:text-brand-darkText leading-tight tracking-tight">
            Why Am I Gaining Weight Even When I Eat Less? 7 Possible Reasons
          </h1>

          <p className="text-base sm:text-lg text-brand-lightText/85 dark:text-brand-darkMuted font-sans leading-relaxed">
            <strong>Eating less but still gaining weight? You&apos;re not alone!</strong> Have you reduced your portion sizes, skipped unhealthy snacks, and started eating healthier, yet the number on your weighing scale keeps creeping up? It can feel deeply frustrating, but biology is far more complex than a simple &ldquo;calories in vs calories out&rdquo; equation.
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs text-brand-sage-700 dark:text-brand-darkMuted">
            <div className="w-8 h-8 rounded-full bg-brand-lightPrimary text-white flex items-center justify-center font-bold text-xs shadow-sm">
              FN
            </div>
            <div>
              <p className="font-bold text-brand-lightText dark:text-brand-darkText">FITNIVO Women&apos;s Health Desk</p>
              <p className="text-[11px] text-brand-sage-600 dark:text-brand-darkMuted">Clinical Research &amp; Female Physiology Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top Infographic Poster (Instruction: "aur image ko blog ke top me rakhna") */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="rounded-3xl overflow-hidden bg-white dark:bg-brand-darkCard border-2 border-brand-lightSecondary/30 dark:border-brand-sage-800 shadow-soft-lg group">
          <div className="p-3 sm:p-4 bg-brand-lightSecondary/10 dark:bg-brand-sage-900/40 border-b border-brand-sage-200/80 dark:border-brand-sage-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-4 h-4 object-contain" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                Why Am I Gaining Weight Even When I Eat Less? — Visual Summary Poster
              </span>
            </div>
            <span className="text-[11px] font-semibold text-brand-lightPrimary dark:text-brand-darkPrimary bg-brand-lightPrimary/10 px-2.5 py-0.5 rounded-full">
              Infographic Guide
            </span>
          </div>

          {/* Full Top Image Display */}
          <div className="relative bg-brand-sage-50/50 dark:bg-brand-darkBgSecondary flex items-center justify-center p-3 sm:p-6">
            <img
              src="/why-am-i-gaining-weight-eating-less.jpg"
              alt="Why Am I Gaining Weight Even When I Eat Less? 7 Reasons - Complete Infographic by FITNIVO"
              className="w-full max-w-xl mx-auto rounded-2xl shadow-md object-contain hover:scale-[1.01] transition-transform duration-300"
              loading="eager"
            />
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-brand-darkCard text-center sm:flex sm:items-center sm:justify-between gap-4 border-t border-brand-sage-200/80 dark:border-brand-sage-800">
            <p className="text-xs text-brand-lightText/70 dark:text-brand-darkMuted italic text-left">
              Visual roadmap: Hormonal shifts, muscle preservation, metabolism, cortisol, sleep disruption, and actionable weight management habits.
            </p>
            <Link
              to="/womens-health"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs font-bold tracking-wide transition-all shadow-sm shrink-0 mt-3 sm:mt-0"
            >
              <span>Explore Women&apos;s Health</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Blog Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-10 sm:space-y-14">
        
        {/* Intro Highlight */}
        <section className="space-y-4 text-sm sm:text-base text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
          <p>
            Have you ever cut back on your meals, diligently avoided sweets, and watched your portion sizes—only to step on the bathroom scale and see the digits tick upward?
          </p>
          <p>
            It can feel defeating when your sincere effort isn&apos;t rewarded with the progress you expect. However, weight changes aren&apos;t always as simple as eating less and exercising more. Multiple physiological factors—including <strong>hormones, sleep deprivation, stress hormones, medications, and fluid retention</strong>—play an immense role in what your body weighs on any given day.
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border-l-4 border-brand-lightPrimary dark:border-brand-darkPrimary my-4">
            <p className="font-serif italic text-base sm:text-lg text-brand-lightPrimary dark:text-brand-darkPrimary font-bold">
              &ldquo;Your weight is a dynamic measurement of water, glycogen, muscle, organs, waste, and fat—not a report card on your worth or discipline.&rdquo;
            </p>
          </div>

          <p>
            Let&apos;s explore the <strong>seven most common reasons</strong> why you may be gaining weight even when you eat less, along with scientifically grounded strategies to restore your energy and balance.
          </p>
        </section>

        {/* The 7 Reasons Detailed Cards */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Root Cause Analysis
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              7 Reasons You&apos;re Gaining Weight While Eating Less
            </h2>
          </div>

          <div className="space-y-6">
            {reasons.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/10 text-brand-lightPrimary dark:text-brand-darkPrimary flex items-center justify-center font-bold text-sm shrink-0">
                      {item.num}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText flex items-center gap-2">
                      <span>{item.title}</span>
                      <IconComp className="w-4 h-4 text-brand-lightSecondary shrink-0" />
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
                    {item.description}
                  </p>

                  {item.tips && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                        {item.actionTitle}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-brand-lightText/90 dark:text-brand-darkText">
                        {item.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-lightPrimary dark:text-brand-darkPrimary shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.callout && (
                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-300">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{item.callout}</p>
                    </div>
                  )}

                  {/* Affiliate Link 1: Strategic placement under Water Retention vs Body Fat */}
                  {item.num === '01' && (
                    <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-lightSecondary/15 via-brand-sage-50/70 to-brand-lightPrimary/10 dark:from-brand-sage-900/30 dark:to-brand-darkBgSecondary border border-brand-lightSecondary/30 dark:border-brand-sage-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-lightPrimary dark:text-brand-darkPrimary">
                          <Scale className="w-4 h-4 shrink-0" />
                          <span>Confused Whether It&apos;s Water Retention or Body Fat?</span>
                        </div>
                        <p className="text-xs text-brand-lightText/80 dark:text-brand-darkMuted">
                          Standard scales cannot differentiate between fluid shifts and fat gain.
                        </p>
                      </div>
                      <a
                        href="https://link.amazon/B0aL0aj9k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs font-bold transition-all shadow-sm hover:shadow shrink-0 text-center"
                      >
                        <span>Stop Guessing About Your Body Composition – Start Tracking It!</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Best Way to Understand Your Weight Changes */}
        <section className="p-6 sm:p-8 rounded-3xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
            <Scale className="w-4 h-4" />
            <span>Holistic Mindset</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-brand-lightText dark:text-brand-darkText">
            The Best Way to Understand Your Weight Changes
          </h3>

          <p className="text-xs sm:text-sm text-brand-lightText/85 dark:text-brand-darkMuted leading-relaxed">
            Instead of focusing solely on the fluctuating number on the scale, pay attention to the broader markers of your overall health and well-being.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'Weekly Trend', desc: 'Average 7 days rather than fixating on daily spikes.' },
              { label: 'Sleep Quality', desc: 'Waking refreshed is a sign of hormonal harmony.' },
              { label: 'Daily Activity', desc: 'Consistent movement, walking, and stamina.' },
              { label: 'Food Habits', desc: 'Color, fiber, and protein over extreme restriction.' },
              { label: 'Menstrual Cycle', desc: 'Tracking phase-related water retention and luteal shifts.' },
              { label: 'Energy Levels', desc: 'Sustained daytime focus without afternoon crashes.' }
            ].map((metric, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs sm:text-sm"
              >
                <p className="font-bold text-brand-lightPrimary dark:text-brand-darkPrimary mb-0.5">{metric.label}</p>
                <p className="text-brand-lightText/75 dark:text-brand-darkMuted text-[11px] sm:text-xs">{metric.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/40 text-xs sm:text-sm text-rose-950 dark:text-rose-200 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong>When to Seek Prompt Medical Attention:</strong> If weight gain is sudden, severe, unexplained, or accompanied by edema (swelling in the lower legs or abdomen), shortness of breath, or chest pain, consult a healthcare provider immediately.
            </div>
          </div>
        </section>

        {/* Helpful Tools Section */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
              Supportive Tech
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
              Helpful Tools That Can Support Your Weight Management Journey
            </h2>
            <p className="text-xs sm:text-sm text-brand-lightText/75 dark:text-brand-darkMuted">
              If you want to understand your daily habits better, a few practical tools can provide objective perspective:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Affiliate Link 2: Smart Body Composition Scale tool recommendation card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-brand-lightText dark:text-brand-darkText">
                  1. Smart Body Composition Scale
                </h4>
                <p className="text-xs text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
                  Helps track long-term trends in estimated muscle mass and body water percentages rather than pure weight. <em>(Remember: these readings are bioimpedance estimates, not medical diagnoses.)</em>
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://link.amazon/B0aL0aj9k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-[11px] sm:text-xs font-bold transition-all shadow-sm text-center leading-snug group"
                >
                  <span>Stop Guessing About Your Body Composition – Start Tracking It!</span>
                  <ExternalLink className="w-3 h-3 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Watch className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-brand-lightText dark:text-brand-darkText">
                2. Fitness Smartwatch
              </h4>
              <p className="text-xs text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
                Tracks daily steps, non-exercise movement (NEAT), heart-rate variability, and sleep architecture to reveal hidden patterns of fatigue.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-brand-lightText dark:text-brand-darkText">
                3. Nutrition Tracking App
              </h4>
              <p className="text-xs text-brand-lightText/80 dark:text-brand-darkMuted leading-relaxed">
                Helps you become aware of hidden sodium, sufficient protein intake, and dietary fiber without obsessive calorie counting.
              </p>
            </div>
          </div>

          <p className="text-xs text-brand-sage-600 dark:text-brand-darkMuted italic text-center">
            These tools won&apos;t automatically cause weight loss on their own, but they help you make mindful, informed lifestyle decisions.
          </p>
        </section>

        {/* Final Thoughts & Empowering Quote */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-sage-100/90 via-white to-brand-sage-50/80 dark:from-brand-darkBgSecondary dark:via-brand-darkCard dark:to-brand-darkBg border-2 border-brand-lightPrimary/20 dark:border-brand-darkPrimary/30 shadow-soft-lg space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-lightPrimary text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Final Thoughts</span>
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightPrimary dark:text-brand-darkText leading-tight">
            Nourish Your Body Instead of Starving It
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-brand-lightText/90 dark:text-brand-darkText leading-relaxed">
            <p>
              Gaining weight even when you&apos;re eating less can feel disheartening, but it does not mean you lack discipline or are doing something wrong.
            </p>
            <p>
              Water retention, shifting reproductive hormones, elevated cortisol, disrupted sleep, reduced daily NEAT movement, and underlying health factors all influence the scale.
            </p>
            <p>
              Instead of eating even less or jumping into another extreme restriction cycle, focus on <strong>balanced nutrition, consistent daily movement, restorative sleep, and tuning into your body&apos;s unique hormonal signals</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 dark:bg-brand-darkCard/90 border border-brand-sage-200/80 dark:border-brand-sage-800 text-center space-y-2">
            <p className="font-serif italic text-base sm:text-lg text-brand-lightPrimary dark:text-brand-darkPrimary font-bold">
              &ldquo;Your health journey should be about feeling healthier, stronger, and more energized—not just seeing a smaller number on the scale.&rdquo;
            </p>
          </div>

          {/* Affiliate Link 3: High-converting closing recommendation banner */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-brand-lightPrimary to-brand-lightSecondary text-white text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-soft">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full text-white inline-block">
                Smart Habit Recommendation
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white pt-1">
                Stop Letting a Bathroom Scale Deceive You
              </h4>
              <p className="text-xs sm:text-sm text-white/90 max-w-xl">
                Get clarity on your body water, lean muscle mass, and body fat percentage so you never have to guess why the numbers fluctuate.
              </p>
            </div>
            <a
              href="https://link.amazon/B0aL0aj9k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-brand-lightPrimary hover:bg-brand-sage-100 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 text-center"
            >
              <span>Stop Guessing About Your Body Composition – Start Tracking It!</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </section>

        {/* Disclosures & Note */}
        <section className="space-y-4 pt-4 border-t border-brand-sage-200/80 dark:border-brand-sage-800">
          <div className="p-5 rounded-2xl bg-brand-sage-50/60 dark:bg-brand-darkBgSecondary/60 border border-brand-sage-200/60 dark:border-brand-sage-800 text-xs text-brand-sage-700 dark:text-brand-darkMuted leading-relaxed space-y-2">
            <p>
              <strong>Affiliate Disclosure:</strong> This article may contain affiliate links. As an Amazon Associate, we earn from qualifying purchases at no additional cost to you.
            </p>
            <p>
              <strong>Health Disclaimer:</strong> This article is for educational purposes only and is not a substitute for professional medical advice, clinical diagnosis, or individualized treatment. Always consult your physician or registered dietitian before making significant changes to your diet, medication, or workout routine.
            </p>
          </div>
        </section>

        {/* Explore More in Women's Health */}
        <section className="pt-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-sage-50/80 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                Evidence-Informed Pillar
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-lightText dark:text-brand-darkText">
                Explore More in Women&apos;s Health
              </h4>
              <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted">
                Discover hormonal synchronization, bone density nutrition, cycle tracking, and stress resilience.
              </p>
            </div>
            <Link
              to="/womens-health"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-lightPrimary text-white hover:bg-brand-lightSecondary text-xs sm:text-sm font-bold tracking-wide transition-colors shrink-0 shadow-sm"
            >
              <span>Back to Women&apos;s Health</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
};

export default WhyGainingWeightEatingLessPage;
