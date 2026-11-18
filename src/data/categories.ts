import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'womens-health',
    name: "Women's Health",
    slug: 'womens-health',
    description: 'Everyday health knowledge, hormone balance, preventive care, and evidence-informed wellness guidance tailored to every stage of a woman’s life.',
    tagline: 'Empowering you with trusted bodily wisdom and proactive health insights.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    count: 14
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    slug: 'weight-loss',
    description: 'Sustainable weight management, metabolism support, healthy daily habits, and non-restrictive approaches that honor your body.',
    tagline: 'Realistic, habit-based approaches for lasting vitality and strength.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    count: 12
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Diet',
    slug: 'nutrition',
    description: 'Nourishing whole-food recipes, balanced macronutrient meal prep, mindful eating, and digestive health guides.',
    tagline: 'Wholesome fuel to energize your days without guilt or extreme rules.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    count: 16
  },
  {
    id: 'fitness',
    name: 'Fitness & Exercise',
    slug: 'fitness',
    description: 'Effective home workouts, functional strength training, mobility routines, and low-impact exercise designed for real life.',
    tagline: 'Move with intention, build functional strength, and celebrate your power.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    count: 11
  },
  {
    id: 'beauty',
    name: 'Beauty & Skincare',
    slug: 'beauty',
    description: 'Dermatologist-aligned skincare habits, barrier health, non-toxic beauty routines, and hair wellness tips.',
    tagline: 'Radiant skin and healthy beauty rituals rooted in self-care.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    count: 9
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Wellness',
    slug: 'lifestyle',
    description: 'Restorative sleep protocols, stress resilience, mindfulness rituals, emotional balance, and everyday joyful living.',
    tagline: 'Cultivating balance, calm, and purpose in your daily rhythm.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    count: 15
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return CATEGORIES.find(c => c.slug === slug);
};
