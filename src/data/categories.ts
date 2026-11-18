import { CategoryDetail } from '../types';

export const CATEGORIES: CategoryDetail[] = [
  {
    id: 'womens-health',
    name: "Women's Health",
    slug: 'womens-health',
    description: 'Everyday health knowledge, hormone balance, preventive care, and evidence-informed wellness guidance tailored to every stage of a woman’s life.',
    tagline: 'Empowering you with trusted bodily wisdom and proactive health insights.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    badge: 'Hormones & Vitality',
    pillarsCount: 4,
    takeaways: [
      'Normal menstrual cycles range between 24 and 38 days; consistency for your own rhythm is the key baseline.',
      'Ferritin and thyroid markers are the top under-tested reasons for chronic female daytime fatigue.',
      'A healthy pelvic floor requires both relaxation and eccentric lengthening, not just constant contraction.',
      'Always advocate for comprehensive lab panels (Ferritin, Free T3, T4, Vitamin D) with your physician.'
    ],
    pillars: [
      {
        id: 'cycle-harmony',
        title: 'Hormonal Literacy & Cycle Harmony',
        subtitle: 'Understanding the biological phases of your natural rhythm',
        badge: 'Endocrine Health',
        summary: 'Your menstrual cycle acts as a fifth vital sign. Learning how estrogen and progesterone naturally fluctuate across follicular and luteal phases allows you to optimize energy, nutrition, and exercise demands.',
        actionSteps: [
          'Track basal body temperature or cervical fluid indicators consistently.',
          'Increase complex carbohydrates and magnesium intake 5 to 7 days before menstruation.',
          'Schedule demanding strength workouts during the high-energy follicular phase.'
        ],
        scientificRationale: 'Progesterone elevated during the luteal phase increases basal metabolic rate by 100-300 kcal/day while raising resting body temperature.',
        proTip: 'Do not view premenstrual cravings as a weakness; your resting metabolic rate genuinely increases during the late luteal phase.'
      },
      {
        id: 'adrenal-health',
        title: 'Restoring Adrenal Resilience',
        subtitle: 'Calming the high-cortisol stress cycle',
        badge: 'Stress Physiology',
        summary: 'Chronic micro-stressors keep the hypothalamic-pituitary-adrenal (HPA) axis perpetually activated, diverting essential pregnenolone away from reproductive hormone synthesis toward emergency cortisol production.',
        actionSteps: [
          'Avoid intense fasted cardio workouts if you wake up feeling unrefreshed.',
          'Incorporate 5 minutes of physiological sigh breathing (two quick inhales through the nose, one long exhale).',
          'Ensure adequate dietary sodium and potassium electrolytes in morning fluids.'
        ],
        scientificRationale: 'Cortisol dysregulation blunts insulin sensitivity and alters serotonin transporter availability in the brain.',
        proTip: 'Wait 60 minutes after waking before your first caffeinated drink to prevent artificial cortisol amplification.'
      },
      {
        id: 'pelvic-stability',
        title: 'Pelvic Floor & Core Coordination',
        subtitle: 'True functional stability across every stage of womanhood',
        badge: 'Physical Wellness',
        summary: 'Your pelvic floor forms the base of a 360-degree cylinder working with your diaphragm, deep transverse abdominals, and spinal multifidus. Tightness and hypertonicity are just as common as weakness.',
        actionSteps: [
          'Practice 360-degree diaphragmatic rib cage breathing for 5 minutes daily.',
          'Avoid aggressive traditional spinal-flexion crunches that force pressure downward.',
          'Consult a pelvic floor physical therapist for postpartum or core recovery.'
        ],
        scientificRationale: 'The diaphragm and pelvic floor mirror each other biomechanically: on inhalation both descend and relax; on exhalation both recoil upward.',
        proTip: 'If you suffer from lower back tightness, release your pelvic floor with a supported child’s pose before doing any core exercises.'
      },
      {
        id: 'preventive-screening',
        title: 'Preventive Lab Work & Advocacy',
        subtitle: 'The essential blood biomarkers every woman should know',
        badge: 'Clinical Screening',
        summary: 'Standard blood work often overlooks key female benchmarks. Knowing which specific markers to request from your doctor ensures early detection of subclinical deficiencies.',
        actionSteps: [
          'Request Serum Ferritin alongside standard CBC (optimal levels are often above 50 ng/mL).',
          'Ask for a Full Thyroid Panel (TSH, Free T3, Free T4, and Thyroid Peroxidase Antibodies).',
          'Screen 25-Hydroxy Vitamin D levels annually.'
        ],
        scientificRationale: 'Standard reference ranges are calculated from general population averages, which include many individuals who are chronically fatigued or sub-clinically deficient.',
        proTip: 'Always request a physical or digital copy of your lab values so you can track your personal multi-year trends.'
      }
    ],
    dailyChecklist: [
      { id: 'wh-1', title: 'Cycle phase check-in', timing: 'morning', target: 'Track current day & sensations', benefit: 'Hormonal self-awareness' },
      { id: 'wh-2', title: 'Mineral hydration tonic', timing: 'morning', target: '16oz water + pinch sea salt', benefit: 'Adrenal support' },
      { id: 'wh-3', title: '5-Minute 360 diaphragmatic breath', timing: 'afternoon', target: 'Expand lower rib cage', benefit: 'Pelvic floor decompression' },
      { id: 'wh-4', title: 'Magnesium glycinate ritual', timing: 'evening', target: '200-300mg with warm water', benefit: 'Nervous system relaxation' }
    ],
    faq: [
      { question: 'What is the difference between normal PMS and PMDD?', answer: 'PMS involves mild to moderate physical bloating and moodiness that does not interfere with daily function. PMDD is a severe neurobiological reaction to normal hormonal shifts that produces intense depression, panic, or rage requiring specialized medical support.' },
      { question: 'Why am I exhausted even though I slept 8 hours?', answer: 'Common hidden culprits include low ferritin (iron reserves under 50 ng/mL), subclinical thyroid sluggishness, or elevated progesterone causing frequent micro-arousals during the luteal phase.' },
      { question: 'When should I consult an OB-GYN immediately?', answer: 'Seek immediate clinical care if you experience cycles shorter than 21 days or longer than 45 days, bleeding through more than one pad/tampon per hour, or severe pelvic pain.' }
    ]
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    slug: 'weight-loss',
    description: 'Sustainable weight management, metabolism support, healthy daily habits, and non-restrictive approaches that honor your body.',
    tagline: 'Realistic, habit-based approaches for lasting vitality and strength.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    badge: 'Metabolism & Habits',
    pillarsCount: 4,
    takeaways: [
      'Severe calorie deficits trigger adaptive thermogenesis and down-regulate active thyroid hormones.',
      'Aim for 25 to 35 grams of protein at breakfast to stimulate peptide YY and GLP-1 satiety pathways.',
      'A 10-minute light walk after your largest meal acts as a non-insulin peripheral glucose sink.',
      'Sustainable body composition improvements average 0.5 to 1.5 lbs weekly; rapid loss is mostly water and glycogen.'
    ],
    pillars: [
      {
        id: 'metabolic-preservation',
        title: 'Preserving Metabolic Rate',
        subtitle: 'Why extreme calorie restriction always backfires',
        badge: 'Metabolic Science',
        summary: 'When women drop calories drastically below basal metabolic needs, the evolutionary survival circuit slows resting expenditure, down-regulates thyroid conversion of T4 to active T3, and surges ghrelin.',
        actionSteps: [
          'Maintain a gentle, moderate deficit of 200 to 300 kcal maximum.',
          'Prioritize muscle mass through resistance training to sustain resting metabolic rate.',
          'Incorporate periodic diet breaks at maintenance calories to reset leptin.'
        ],
        scientificRationale: 'Adaptive thermogenesis can depress daily caloric expenditure by up to 15-20% when extreme deficits are enforced.',
        proTip: 'Never diet on fewer calories than your body requires just to keep your heart beating and organs functioning.'
      },
      {
        id: 'glucose-management',
        title: 'Blood Sugar & Insulin Stability',
        subtitle: 'The steady glucose secret to conquering cravings',
        badge: 'Insulin Literacy',
        summary: 'Sharp glucose spikes trigger reactive hypoglycemic valleys, causing uncontrollable cravings for high-sugar snacks two hours later. Keeping postprandial glucose curves gentle stabilizes mood and energy.',
        actionSteps: [
          'Eat foods in optimal order: fiber/vegetables first, protein second, starches/carbs last.',
          'Take a 10-minute brisk stroll within 30 minutes of eating.',
          'Pair any fruit or starch with healthy fats or bioavailable protein.'
        ],
        scientificRationale: 'Light muscular contraction in major muscle groups pulls glucose into skeletal cells via GLUT4 translocation independent of insulin.',
        proTip: 'A savory high-protein breakfast prevents the mid-morning sugar roller coaster for the rest of your day.'
      },
      {
        id: 'crowding-in',
        title: 'The "Crowding In" Philosophy',
        subtitle: 'Focusing on what to add rather than what to restrict',
        badge: 'Habit Architecture',
        summary: 'Psychological deprivation triggers subconscious binge urges. By prioritizing high-volume nutrient-dense whole foods first, satiety signals naturally dampen appetite without willpower battles.',
        actionSteps: [
          'Add two full cups of cruciferous or leafy greens to lunch and dinner.',
          'Reach for 30 grams of diverse dietary fiber every day.',
          'Enjoy your favorite treats mindfully without attaching guilt or punishment.'
        ],
        scientificRationale: 'Dietary fiber ferments in the colon to create short-chain fatty acids (acetate, propionate, butyrate) which signal brain fullness.',
        proTip: 'Do not tell yourself you can never have pizza; instead, eat a large colorful salad and grilled chicken skewer first.'
      },
      {
        id: 'cortisol-sleep-link',
        title: 'Cortisol & Sleep Debt Elimination',
        subtitle: 'The hormonal reason lack of sleep prevents fat loss',
        badge: 'Sleep Science',
        summary: 'Sleeping less than seven hours directly elevates circulating ghrelin (the hunger hormone) by 15% and dampens leptin (the fullness hormone) by 16%, while priming cortisol to store visceral abdominal fat.',
        actionSteps: [
          'Prioritize 7.5 to 8.5 hours in a cool, pitch-dark bedroom.',
          'Avoid punishing high-intensity workouts on days following poor sleep.',
          'Cease caloric intake at least 2.5 hours prior to bedtime.'
        ],
        scientificRationale: 'Sleep deprivation impairs whole-body insulin sensitivity by up to 30%, mimicking the physiology of pre-diabetes in acute tests.',
        proTip: 'If you have to choose between getting an extra hour of sleep and waking up at 5 AM for a grueling workout, choose sleep.'
      }
    ],
    dailyChecklist: [
      { id: 'wl-1', title: 'Savory 25g+ protein breakfast', timing: 'morning', target: 'Eggs, cottage cheese, or Greek yogurt', benefit: 'Satiety hormone activation' },
      { id: 'wl-2', title: '10-minute post-lunch walk', timing: 'afternoon', target: 'Brisk outdoor or indoor stroll', benefit: 'Blood glucose smoothing' },
      { id: 'wl-3', title: '30g dietary fiber accumulation', timing: 'daily', target: 'Chia, berries, leafy greens, legumes', benefit: 'Gut microbiome fullness' },
      { id: 'wl-4', title: 'No snacking after 8:00 PM', timing: 'evening', target: 'Gentle overnight digestive rest', benefit: 'Circadian insulin sensitivity' }
    ],
    faq: [
      { question: 'How much weight can I safely lose per week?', answer: 'A realistic, sustainable rate is 0.5 to 1.5 pounds per week. Regimens promising 10 pounds in 5 days are primarily flushing out water weight and glycogen reserves.' },
      { question: 'Will strength training make me gain weight on the scale?', answer: 'Initially, muscle repair can cause temporary water retention. Over time, lean muscle elevates your basal metabolic rate and changes your measurements and shape dramatically, even if scale weight moves slowly.' },
      { question: 'Should women follow prolonged fasting protocols?', answer: 'Extended fasts (over 16-18 hours) can spike female cortisol and down-regulate kisspeptin neurons that govern ovulation. A gentle 12-hour overnight fast (e.g. 7:30 PM to 7:30 AM) is optimal and safe for most women.' }
    ]
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Diet',
    slug: 'nutrition',
    description: 'Nourishing whole-food recipes, balanced macronutrient meal prep, mindful eating, and digestive health guides.',
    tagline: 'Wholesome fuel to energize your days without guilt or extreme rules.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    badge: 'Whole Foods & Energy',
    pillarsCount: 4,
    takeaways: [
      'Build your plate around the core quartet: Quality Protein, Fiber-rich Plants, Slow Carbs, and Healthy Fats.',
      'Women thrive when consuming 1.2 to 1.6 grams of protein per kilogram of body weight.',
      'Aim for 30 different plant species per week to maximize gut microbiome species diversity.',
      'Hydration requires electrolytes (sodium, potassium, magnesium), not just plain distilled water.'
    ],
    pillars: [
      {
        id: 'protein-anchoring',
        title: 'Protein Anchoring for Women',
        subtitle: 'Why complete amino acids are essential for hair, mood, and muscle',
        badge: 'Macronutrients',
        summary: 'Women consistently under-consume protein, particularly early in the day. Protein provides essential amino acids for neurotransmitter synthesis (serotonin and dopamine), immune immunoglobulins, and collagen synthesis.',
        actionSteps: [
          'Target 25 to 35 grams of protein at breakfast, lunch, and dinner.',
          'Select bioavailable sources: wild-caught salmon, pasture-raised eggs, organic poultry, Greek yogurt, or hemp seeds.',
          'Use a high-quality whey isolate or organic pea/pumpkin seed blend if time is short.'
        ],
        scientificRationale: 'The thermic effect of food (TEF) for protein is 20-30%, meaning nearly a quarter of its calories are burned simply digesting and processing it.',
        proTip: 'Adding two tablespoons of hemp hearts to oatmeal or salads effortlessly adds 6 grams of complete plant protein.'
      },
      {
        id: 'microbiome-diversity',
        title: 'Gut Microbiome & Estrobolome',
        subtitle: 'The digestive ecosystem that regulates your hormones',
        badge: 'Gut Health',
        summary: 'Your gut bacteria produce short-chain fatty acids, synthesize B-vitamins, and harbor the estrobolome—a specialized bacterial cluster that metabolizes and eliminates used estrogens.',
        actionSteps: [
          'Eat fermented foods daily: unpasteurized sauerkraut, kimchi, kefir, or coconut yogurt.',
          'Aim for the 30-plant weekly goal: count herbs, spices, nuts, seeds, and distinct colored vegetables.',
          'Incorporate resistant starch: cooled roasted sweet potatoes or overnight rolled oats.'
        ],
        scientificRationale: 'Bacterial beta-glucuronidase in an unhealthy gut can deconjugate estrogen, causing it to re-circulate and lead to estrogen dominance symptoms.',
        proTip: 'Sprinkle pumpkin seeds, chia seeds, and chopped walnuts over your breakfast bowl to count three plant species before 9 AM.'
      },
      {
        id: 'clean-fats',
        title: 'Essential Fatty Acids & Cell Health',
        subtitle: 'Why low-fat diets compromise female hormones',
        badge: 'Cellular Lipids',
        summary: 'Every steroid hormone in the female body is synthesized from cholesterol and lipids. Eliminating healthy fats compromises cell membrane fluidity, skin elasticity, and neurological function.',
        actionSteps: [
          'Incorporate cold-pressed extra virgin olive oil as your primary dressing oil.',
          'Consume wild cold-water fish (salmon, sardines, mackerel) 2 to 3 times weekly for EPA and DHA.',
          'Snack on raw walnuts and avocados for plant-based omega-3s and monounsaturated lipids.'
        ],
        scientificRationale: 'DHA constitutes over 30% of brain structural lipid content and directly dampens neuro-inflammatory cytokine cascades.',
        proTip: 'Never cook with delicate polyunsaturated seed oils at high heat; use avocado oil, grass-fed ghee, or coconut oil instead.'
      },
      {
        id: 'mineral-hydration',
        title: 'Cellular Hydration & Electrolytes',
        subtitle: 'Drinking water is not enough if your cells cannot hold it',
        badge: 'Cellular Hydration',
        summary: 'Gulping massive volumes of plain reverse-osmosis water flushes out sodium, magnesium, and potassium, leaving you paradoxically dehydrated at a cellular level.',
        actionSteps: [
          'Add a pinch of unrefined Celtic or Himalayan pink sea salt to your first morning glass of water.',
          'Eat mineral-dense hydration foods: cucumbers, celery, watermelon, and bone broth.',
          'Supplement with chelated magnesium glycinate or malate in the evening.'
        ],
        scientificRationale: 'The sodium-potassium pump on cell membranes requires both minerals in equilibrium to transport water across the phospholipid bilayer.',
        proTip: 'If you drink lots of water but still feel thirsty with dry lips and frequent urination, you are lacking mineral electrolytes.'
      }
    ],
    dailyChecklist: [
      { id: 'nu-1', title: 'Morning mineral lemon water', timing: 'morning', target: '20oz water + lemon + salt', benefit: 'Rehydrates cellular matrix' },
      { id: 'nu-2', title: 'The 3-color lunch plate', timing: 'afternoon', target: 'At least 3 distinct plant pigments', benefit: 'Phytonutrient diversity' },
      { id: 'nu-3', title: 'Afternoon handful of raw walnuts', timing: 'afternoon', target: '1 ounce raw nuts or seeds', benefit: 'Brain omega-3 fatty acids' },
      { id: 'nu-4', title: 'Herbal digestive tea post-dinner', timing: 'evening', target: 'Chamomile, ginger, or peppermint', benefit: 'Peristalsis and digestion' }
    ],
    faq: [
      { question: 'How much protein should a woman eat daily?', answer: 'Most active women benefit from 80 to 120 grams of protein daily, divided into 25-35g doses to stimulate muscle protein synthesis across the day.' },
      { question: 'Are carbohydrates bad for female hormones?', answer: 'No! Women need quality complex carbohydrates (sweet potatoes, squash, oats, fruit) to support thyroid hormone conversion and prevent cortisol elevations, especially in the luteal phase.' },
      { question: 'What is the best way to meal prep without spending hours cooking?', answer: 'Focus on ingredient prep rather than complete identical meals: roast two trays of assorted vegetables, bake 4-6 chicken breasts or tofu blocks, and boil a pot of quinoa on Sunday afternoon.' }
    ]
  },
  {
    id: 'fitness',
    name: 'Fitness & Exercise',
    slug: 'fitness',
    description: 'Effective home workouts, functional strength training, mobility routines, and low-impact exercise designed for real life.',
    tagline: 'Move with intention, build functional strength, and celebrate your power.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    badge: 'Strength & Mobility',
    pillarsCount: 4,
    takeaways: [
      'Resistance training is the most powerful tool women have for lifelong bone density, joint integrity, and metabolic health.',
      'Prioritize the 5 movement patterns: Squat, Hip Hinge, Push, Pull, and Anti-Rotation Core.',
      'Low-impact walking and zone-2 movement burn fat while keeping systemic cortisol low.',
      'Quality of form and eccentric muscle control always take precedence over speed.'
    ],
    pillars: [
      {
        id: 'strength-fundamentals',
        title: 'Functional Strength Over Endless Cardio',
        subtitle: 'Why building muscle is an investment in longevity',
        badge: 'Hypertrophy & Bone',
        summary: 'Starting in their 30s, women naturally lose 3-5% of muscle mass per decade without progressive overload. Resistance training stimulates osteoblast activity, increasing bone mineral density and insulin receptor density.',
        actionSteps: [
          'Perform resistance training 2 to 4 times weekly with progressive resistance.',
          'Focus on multi-joint compound lifts: goblet squats, Romanian deadlifts, push-ups, and rows.',
          'Leave 1-2 reps in reserve (RIR) to maximize gains without excessive nervous system fatigue.'
        ],
        scientificRationale: 'Mechanical tension on tendon insertions triggers signaling cascades that stimulate bone matrix mineralization, protecting against osteopenia.',
        proTip: 'Lifting weights will not make you bulky; female testosterone levels are 15-20 times lower than male levels.'
      },
      {
        id: 'the-20min-circuit',
        title: 'The Efficient 20-Minute Home Circuit',
        subtitle: 'Maximizing results when you have zero time for the gym',
        badge: 'Time-Efficient Training',
        summary: 'You do not need an hour-long gym session. A focused 20-minute circuit targeting opposing muscle groups provides potent cardiovascular conditioning and strength adaptation.',
        actionSteps: [
          'Exercise 1: Goblet Box Squat (glute and quad focus) – 10 reps.',
          'Exercise 2: Incline Push-Up on bench or sturdy counter – 10 reps.',
          'Exercise 3: Dumbbell Romanian Deadlift (hamstrings and back) – 10 reps.',
          'Exercise 4: Bent-Over Resistance Band Row – 12 reps.',
          'Exercise 5: Bird-Dog Core Stability – 8 reps per side. Repeat for 3-4 rounds.'
        ],
        scientificRationale: 'Circuit training with minimal intra-set rest maintains elevated heart rate, yielding concurrent aerobic and neuromuscular benefits.',
        proTip: 'Set a repeating timer for 45 seconds work and 15 seconds transition to keep your pace crisp and focused.'
      },
      {
        id: 'mobility-joint-health',
        title: 'Mobility & Spinal Alignment',
        subtitle: 'Restoring freedom of movement to stiff joints',
        badge: 'Mobility Rituals',
        summary: 'Sitting for extended periods causes hip flexors to shorten, glutes to become dormant, and thoracic spine to round forward. Daily mobility restores joint lubrication and protects your lower back.',
        actionSteps: [
          'Perform the World’s Greatest Stretch and Cat-Cow every morning.',
          'Do 90/90 hip switches to maintain internal and external femoral rotation.',
          'Foam roll upper back and gluteus medius for 3 minutes before training.'
        ],
        scientificRationale: 'Dynamic range-of-motion drills increase synovial fluid circulation, bathing cartilage in nutrients and reducing joint friction.',
        proTip: 'Never do aggressive static stretches on cold muscles; always prioritize dynamic, moving mobility drills.'
      },
      {
        id: 'daily-neat-walking',
        title: 'The Magic of Non-Exercise Activity (NEAT)',
        subtitle: 'Why walking 8,000 steps beats 45 minutes on the treadmill',
        badge: 'Daily Movement',
        summary: 'Non-Exercise Activity Thermogenesis (NEAT) accounts for up to 15-30% of daily caloric burn, compared to just 5% from a single workout session. Consistent gentle movement keeps lymphatic circulation active.',
        actionSteps: [
          'Aim for 7,500 to 10,000 steps daily distributed across your day.',
          'Take short 3-minute walking breaks every hour during desk work.',
          'Take phone calls while pacing or walking outdoors.'
        ],
        scientificRationale: 'Prolonged sitting down-regulates lipoprotein lipase (LPL) activity in leg muscles by over 90%, halting systemic triglyceride clearance.',
        proTip: 'Keep a comfortable pair of walking shoes right by your front door or under your office desk.'
      }
    ],
    dailyChecklist: [
      { id: 'fit-1', title: 'Morning cat-cow & hip stretch', timing: 'morning', target: '3 minutes dynamic flow', benefit: 'Spine and hip decompression' },
      { id: 'fit-2', title: 'Post-lunch 10-minute stroll', timing: 'afternoon', target: 'Step count baseline', benefit: 'NEAT & lymphatic pump' },
      { id: 'fit-3', title: '20-Minute resistance circuit', timing: 'afternoon', target: '3-4 rounds home strength', benefit: 'Lean muscle stimulation' },
      { id: 'fit-4', title: 'Legs-up-the-wall pose', timing: 'evening', target: '5 minutes passive elevation', benefit: 'Venous return & parasympathetic calm' }
    ],
    faq: [
      { question: 'Can I get strong using only dumbbells at home?', answer: 'Yes! A pair of moderate dumbbells (e.g., 10 to 20 lbs) and resistance bands are more than sufficient to build functional strength, sculpt posture, and boost metabolism.' },
      { question: 'How many days per week should a woman exercise?', answer: 'Aim for 3 days of resistance strength training, combined with daily gentle walking (7k-10k steps) and 1-2 days of gentle mobility or yoga.' },
      { question: 'What should I do if my knees hurt when squatting?', answer: 'Elevate your heels on thin plates or books to reduce ankle restriction, focus on sitting back into your hips (like sitting into a chair), and keep your chest upright.' }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty & Skincare',
    slug: 'beauty',
    description: 'Dermatologist-aligned skincare habits, barrier health, non-toxic beauty routines, and hair wellness tips.',
    tagline: 'Radiant skin and healthy beauty rituals rooted in self-care.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    badge: 'Radiance & Barrier Care',
    pillarsCount: 4,
    takeaways: [
      'Preserving your stratum corneum lipid barrier is the single most important rule of skincare.',
      'Broad-spectrum SPF 30+ is non-negotiable 365 days a year, even on cloudy days.',
      'Never wash your face with harsh sulfates that strip natural ceramides.',
      'Hydration works from both sides: topical humectants (glycerin, hyaluronic acid) and dietary water.'
    ],
    pillars: [
      {
        id: 'barrier-repair',
        title: 'Stratum Corneum Barrier Care',
        subtitle: 'Stopping the cycle of redness, flaking, and sensitivity',
        badge: 'Lipid Health',
        summary: 'Your skin barrier consists of corneocyte bricks bound together by a lipid mortar of ceramides, cholesterol, and free fatty acids. Over-exfoliating with acids and harsh cleansers dissolves this mortar.',
        actionSteps: [
          'Switch to a gentle milky or non-foaming hydrating cleanser.',
          'Look for moisturizers with a 3:1:1 physiological ratio of ceramides, cholesterol, and fatty acids.',
          'Pause all exfoliating acids, scrubs, and retinoids if your skin stings when applying moisturizer.'
        ],
        scientificRationale: 'A disrupted barrier accelerates trans-epidermal water loss (TEWL) and allows environmental pathogens to trigger dermal inflammation.',
        proTip: 'Apply your hydrating serums to slightly damp skin within 60 seconds of washing to trap moisture before it evaporates.'
      },
      {
        id: 'sun-defense',
        title: 'The 365-Day Sun Protection Rule',
        subtitle: 'The ultimate anti-aging serum is broad-spectrum SPF',
        badge: 'Photoprotection',
        summary: 'Up to 80% of visible facial skin aging is caused by ultraviolet radiation. UVA rays penetrate cloud cover and glass windows year-round, silently fragmenting collagen and elastin fibers.',
        actionSteps: [
          'Apply 1/4 teaspoon (two finger lengths) of broad-spectrum SPF 30+ or higher every morning.',
          'Choose zinc oxide or modern chemical filters that leave zero chalky white cast.',
          'Reapply before prolonged afternoon outdoor exposure or driving.'
        ],
        scientificRationale: 'UVA photons generate reactive oxygen species (ROS) that up-regulate matrix metalloproteinases (MMPs), enzymes that degrade dermal collagen.',
        proTip: 'Find an SPF that feels like a luxurious moisturizer so you genuinely look forward to applying it every morning.'
      },
      {
        id: 'gentle-evening-cleanse',
        title: 'The Gentle Double-Cleanse Ritual',
        subtitle: 'Effortlessly removing SPF and pollution without irritation',
        badge: 'Cleansing Rituals',
        summary: 'Throughout the day, oxidized sebum, sunscreen filters, and microscopic airborne pollutants adhere to facial skin. A gentle double-cleanse dissolves residue without stripping natural lipids.',
        actionSteps: [
          'Step 1: Massage an oil or balm cleanser over dry skin for 45 seconds to dissolve makeup and SPF.',
          'Step 2: Follow with a gentle hydrating water-based gel or cream cleanser.',
          'Rinse with lukewarm water—never hot water, which strips natural sebum.'
        ],
        scientificRationale: 'Lipophilic sunscreen agents and sebum dissolve effectively only in lipid-based cleansers via the chemical principle of like-dissolves-like.',
        proTip: 'Use a clean, ultra-soft microfiber cloth to pat—never drag or rub—your skin dry.'
      },
      {
        id: 'hair-scalp-wellness',
        title: 'Scalp Health & Hair Vitality',
        subtitle: 'Treating your scalp with the same care as facial skin',
        badge: 'Hair & Follicles',
        summary: 'Hair grows from living follicles embedded in your scalp skin. Micro-inflammation, product buildup, and tight hairstyles restrict follicular microcirculation, contributing to premature shedding.',
        actionSteps: [
          'Exfoliate your scalp gently once weekly with a salicylic acid or peptide scalp serum.',
          'Avoid tight ponytails or buns that cause traction alopecia along the hairline.',
          'Ensure adequate dietary iron (ferritin), zinc, and biotin intake.'
        ],
        scientificRationale: 'The dermal papilla at the base of each follicle requires abundant micro-capillary blood flow to sustain the anagen (growth) phase of the hair cycle.',
        proTip: 'Give yourself a 2-minute circular scalp massage with your fingertips in the shower to stimulate microcirculation.'
      }
    ],
    dailyChecklist: [
      { id: 'be-1', title: 'Morning vitamin C & antioxidant drop', timing: 'morning', target: 'Shield against daytime pollution', benefit: 'Photoprotection booster' },
      { id: 'be-2', title: 'Two-finger length broad-spectrum SPF', timing: 'morning', target: 'Face, neck, and back of hands', benefit: 'Collagen preservation' },
      { id: 'be-3', title: 'Evening gentle double-cleanse', timing: 'evening', target: 'Remove SPF and airborne grime', benefit: 'Clear pores without dryness' },
      { id: 'be-4', title: 'Barrier sealing ceramide cream', timing: 'evening', target: 'Seal in hydration before sleep', benefit: 'Overnight cellular renewal' }
    ],
    faq: [
      { question: 'How do I heal a damaged skin barrier quickly?', answer: 'Stop all active acids, retinoids, and facial brushes immediately. Cleanse only with water or a milky cleanser, apply hydrating glycerin serum to damp skin, and seal with a rich ceramide cream for 10-14 days.' },
      { question: 'Do I really need sunscreen if I work from home near a window?', answer: 'Yes. Standard window glass blocks UVB rays (which cause sunburn) but allows up to 75% of UVA rays (which penetrate deep into skin and break down collagen) to pass directly through.' },
      { question: 'Can what I eat cause hormonal acne breakouts?', answer: 'Yes. High-glycemic refined carbohydrates and dairy can spike insulin and IGF-1, which directly stimulates sebaceous glands to overproduce thick sebum, clogging pores.' }
    ]
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Wellness',
    slug: 'lifestyle',
    description: 'Restorative sleep protocols, stress resilience, mindfulness rituals, emotional balance, and everyday joyful living.',
    tagline: 'Cultivating balance, calm, and purpose in your daily rhythm.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    badge: 'Rest & Resilience',
    pillarsCount: 4,
    takeaways: [
      'Early morning outdoor sunlight into your eyes is the master anchor for your circadian biological clock.',
      'A cooler bedroom temperature (65-68°F / 18-20°C) is required for your body to enter deep delta-wave sleep.',
      'Active nervous system regulation (breathwork, vagal toning) prevents chronic burnout.',
      'True self-care is not indulgence; it is setting firm boundaries to preserve your physical and mental stamina.'
    ],
    pillars: [
      {
        id: 'circadian-sunlight',
        title: 'Morning Photobiology & Circadian Clocks',
        subtitle: 'Setting your 24-hour sleep-wake timer naturally',
        badge: 'Circadian Biology',
        summary: 'Your hypothalamic master clock depends on morning photon exposure. Step outside for 10 to 15 minutes within an hour of waking to stimulate intrinsically photosensitive retinal ganglion cells (ipRGCs).',
        actionSteps: [
          'Step outdoors without sunglasses for 10 minutes on clear mornings (20 mins on cloudy days).',
          'Avoid looking through glass windows, which filter out essential lux intensity.',
          'Dim overhead ambient lighting in your home as soon as the sun sets.'
        ],
        scientificRationale: 'Morning photon stimulation halts lingering melatonin secretion, triggers a healthy cortisol awakening response, and sets a 14-16 hour countdown for evening melatonin release.',
        proTip: 'Drink your morning mineral water or tea on your porch or balcony to stack your morning hydration with natural sunlight.'
      },
      {
        id: 'nervous-system-calm',
        title: 'Vagus Nerve & Nervous System Down-Regulation',
        subtitle: 'Switching out of chronic fight-or-flight into rest-and-digest',
        badge: 'Somatic Resilience',
        summary: 'Modern multitasking keeps women trapped in sympathetic overdrive. Deliberately stimulating the vagus nerve signals safety to your cardiovascular and gastrointestinal systems.',
        actionSteps: [
          'Practice the physiological sigh: inhale twice through the nose, long audible sigh out the mouth.',
          'Splash cold water on your face or rinse hands in cool water for 30 seconds.',
          'Hum or sing gently; vocal cord vibration directly stimulates the recurrent laryngeal nerve.'
        ],
        scientificRationale: 'Heart rate variability (HRV) increases when parasympathetic vagal tone is activated, reducing systemic inflammatory biomarkers.',
        proTip: 'Whenever you feel sudden overwhelm, place both hands flat over your chest, close your eyes, and take three extended exhalations.'
      },
      {
        id: 'deep-sleep-architecture',
        title: 'Restorative Delta Sleep Architecture',
        subtitle: 'Optimizing sleep quality so you wake up refreshed',
        badge: 'Sleep Protocol',
        summary: 'Deep stage 3 and 4 non-REM sleep is when your glymphatic system clears metabolic waste from your brain and growth hormone repairs cellular tissues. Quality always matters more than mere time in bed.',
        actionSteps: [
          'Keep your bedroom dark, quiet, and cool (between 65°F and 68°F).',
          'Power down screens and smartphones at least 45 minutes before sleep.',
          'Incorporate an evening magnesium foot soak or warm bath 90 minutes before bed.'
        ],
        scientificRationale: 'The vasodilation from a warm bath facilitates core body temperature drop, which is the primary physiological trigger for rapid sleep onset.',
        proTip: 'Charge your phone in your living room or kitchen instead of your nightstand to eliminate nighttime doomscrolling.'
      },
      {
        id: 'boundaries-mindfulness',
        title: 'Boundaries & Intentional Living',
        subtitle: 'Protecting your emotional energy from modern burnout',
        badge: 'Mindful Boundaries',
        summary: 'Women are often conditioned to say yes to everyone at the expense of their own well-being. Practicing conscious boundaries is essential for emotional health and physical vitality.',
        actionSteps: [
          'Establish a daily non-negotiable 15-minute buffer of quiet alone time.',
          'Practice saying "Let me check my calendar and get back to you" to avoid spontaneous yeses.',
          'Audit your digital notifications and mute non-essential alerts.'
        ],
        scientificRationale: 'Perceived lack of control and chronic boundary depletion elevate baseline sympathetic tone, triggering sustained micro-inflammatory states.',
        proTip: 'Saying no to something that drains your stamina is saying yes to your own health and longevity.'
      }
    ],
    dailyChecklist: [
      { id: 'ls-1', title: '10-minute outdoor morning sunlight', timing: 'morning', target: 'Step outside within 60 mins of waking', benefit: 'Sets evening melatonin timer' },
      { id: 'ls-2', title: 'Midday screen-free mental pause', timing: 'afternoon', target: '5 minutes quiet breathing', benefit: 'Vagus nerve reset' },
      { id: 'ls-3', title: 'No blue screens after 9:30 PM', timing: 'evening', target: 'Read physical book or stretch', benefit: 'Protects natural melatonin' },
      { id: 'ls-4', title: 'Gratitude & 3 calm moments', timing: 'evening', target: 'Reflect on 3 gentle moments of day', benefit: 'Calms amygdala activity' }
    ],
    faq: [
      { question: 'How do I quiet an overactive mind when trying to sleep?', answer: 'Keep a "brain-dump" notepad on your bedside table. Write down every pending task or worry before lying down so your working memory can release it.' },
      { question: 'Why does morning sunlight matter more than indoor lighting?', answer: 'Outdoor sunlight produces 3,000 to 100,000+ lux of light even on cloudy days, compared to only 200-500 lux from indoor bulbs. Your retinal ganglion cells require this intensity to synchronize your circadian clock.' },
      { question: 'How can busy moms or working professionals find time for self-care?', answer: 'Reframe self-care as micro-rituals: a 2-minute intentional breath before opening your car door, drinking a glass of water without checking your phone, or taking three conscious deep breaths between meetings.' }
    ]
  }
];

export const getCategoryBySlug = (slug: string): CategoryDetail | undefined => {
  return CATEGORIES.find(c => c.slug === slug);
};
