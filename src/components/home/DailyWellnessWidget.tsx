import React, { useState } from 'react';
import { Droplets, Dumbbell, CheckCircle, RotateCcw, Sparkles } from 'lucide-react';

export const DailyWellnessWidget: React.FC = () => {
  const [weightLbs, setWeightLbs] = useState<number>(140);
  const [activityLevel, setActivityLevel] = useState<'moderate' | 'active'>('moderate');
  const [checkedHabits, setCheckedHabits] = useState<number[]>([0, 1]);

  // Calculations:
  // Protein: 0.75 - 0.85 g per lb of body weight for active women
  const proteinTarget = Math.round(weightLbs * (activityLevel === 'active' ? 0.85 : 0.75));
  // Water: ~half body weight in oz + activity
  const waterTargetOz = Math.round(weightLbs * 0.55 + (activityLevel === 'active' ? 16 : 0));

  const habits = [
    { title: 'Morning Hydration', desc: '16oz water + pinch of pink salt before coffee' },
    { title: 'Circadian Light', desc: '10 mins outdoor natural morning sunlight' },
    { title: 'Protein Anchor', desc: '25-30g protein at your first meal' },
    { title: '10-Min Post-Meal Stroll', desc: 'Light walk to support steady blood sugar' },
    { title: 'Screens Off by 10 PM', desc: '45 mins screen-free evening wind-down' }
  ];

  const toggleHabit = (index: number) => {
    setCheckedHabits((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-8 sm:py-12 md:py-16" aria-labelledby="interactive-wellness-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-5 sm:p-8 md:p-12 bg-white dark:bg-brand-darkCard border border-brand-sage-200/80 dark:border-brand-sage-800 shadow-soft">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Interactive Calculator (6 cols) */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-lightPrimary dark:text-brand-darkPrimary">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Wellness Tool</span>
                </div>
                <h3 id="interactive-wellness-heading" className="font-serif text-2xl sm:text-3xl font-bold text-brand-lightText dark:text-brand-darkText">
                  Personalize Your Daily Nutrition Benchmarks
                </h3>
                <p className="text-xs sm:text-sm text-brand-lightText/70 dark:text-brand-darkMuted leading-relaxed">
                  Use our evidence-informed calculator to estimate your daily protein target and optimal fluid intake based on body weight.
                </p>
              </div>

              {/* Slider & Select */}
              <div className="space-y-4 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-brand-lightText dark:text-brand-darkText mb-1.5">
                    <span>Your Weight (lbs):</span>
                    <span className="text-brand-lightPrimary dark:text-brand-darkPrimary font-bold text-sm">
                      {weightLbs} lbs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="90"
                    max="260"
                    step="2"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(Number(e.target.value))}
                    className="w-full accent-brand-lightPrimary dark:accent-brand-darkPrimary cursor-pointer h-2 bg-brand-sage-200 dark:bg-brand-sage-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-brand-sage-500 pt-1">
                    <span>90 lbs</span>
                    <span>175 lbs</span>
                    <span>260 lbs</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-lightText dark:text-brand-darkText mb-1.5">
                    Activity Level:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setActivityLevel('moderate')}
                      className={`py-2.5 px-3 rounded-2xl text-xs font-medium border transition-colors text-left sm:text-center ${
                        activityLevel === 'moderate'
                          ? 'bg-brand-sage-100 dark:bg-brand-sage-900 border-brand-lightPrimary dark:border-brand-darkPrimary text-brand-lightPrimary dark:text-brand-darkPrimary font-semibold shadow-sm'
                          : 'border-brand-sage-200 dark:border-brand-sage-800 text-brand-sage-600 dark:text-brand-darkMuted'
                      }`}
                    >
                      Moderate (Daily walks + light yoga)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivityLevel('active')}
                      className={`py-2.5 px-3 rounded-2xl text-xs font-medium border transition-colors text-left sm:text-center ${
                        activityLevel === 'active'
                          ? 'bg-brand-sage-100 dark:bg-brand-sage-900 border-brand-lightPrimary dark:border-brand-darkPrimary text-brand-lightPrimary dark:text-brand-darkPrimary font-semibold shadow-sm'
                          : 'border-brand-sage-200 dark:border-brand-sage-800 text-brand-sage-600 dark:text-brand-darkMuted'
                      }`}
                    >
                      Active (Strength training 3-5x/wk)
                    </button>
                  </div>
                </div>

                {/* Benchmark Output Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-lightPrimary/10 dark:bg-brand-darkPrimary/15 text-brand-lightPrimary dark:text-brand-darkPrimary">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] text-brand-sage-600 dark:text-brand-darkMuted block font-medium">Daily Protein Target</span>
                      <span className="text-xl sm:text-2xl font-bold font-serif text-brand-lightPrimary dark:text-brand-darkPrimary">
                        ~{proteinTarget}g
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-sage-50 dark:bg-brand-darkBgSecondary border border-brand-sage-200/80 dark:border-brand-sage-800 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] text-brand-sage-600 dark:text-brand-darkMuted block font-medium">Optimal Fluid Target</span>
                      <span className="text-xl sm:text-2xl font-bold font-serif text-brand-lightPrimary dark:text-brand-darkPrimary">
                        ~{waterTargetOz} oz
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Daily Wellness Micro-Checklist (6 cols) */}
            <div className="lg:col-span-6 bg-brand-sage-50/70 dark:bg-brand-darkBgSecondary p-5 sm:p-7 rounded-3xl border border-brand-sage-200/80 dark:border-brand-sage-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-brand-lightText dark:text-brand-darkText">
                    Today&apos;s 5 Core Rituals
                  </h4>
                  <span className="text-xs text-brand-sage-600 dark:text-brand-darkMuted">
                    {checkedHabits.length} of 5 completed today
                  </span>
                </div>
                <button
                  onClick={() => setCheckedHabits([])}
                  title="Reset list"
                  className="p-2 rounded-xl hover:bg-brand-sage-200/60 dark:hover:bg-brand-sage-800 text-brand-sage-600 hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Habit checklist */}
              <div className="space-y-2">
                {habits.map((habit, idx) => {
                  const done = checkedHabits.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleHabit(idx)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none active:scale-[0.99] ${
                        done
                          ? 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200'
                          : 'bg-white dark:bg-brand-darkCard border-brand-sage-200/80 dark:border-brand-sage-800 text-brand-lightText dark:text-brand-darkText hover:border-brand-lightPrimary/50'
                      }`}
                    >
                      <div className="text-xs pr-2">
                        <span className={`font-semibold block ${done ? 'line-through opacity-70' : ''}`}>
                          {habit.title}
                        </span>
                        <span className="text-[11px] text-brand-sage-500 dark:text-brand-darkMuted">
                          {habit.desc}
                        </span>
                      </div>
                      <div className="shrink-0">
                        {done ? (
                          <CheckCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-brand-sage-300 dark:border-brand-sage-700" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-brand-sage-600 dark:text-brand-darkMuted text-center pt-1 italic">
                &ldquo;Do not aim for perfection. Aim for steady presence.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
