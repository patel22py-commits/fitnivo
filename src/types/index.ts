export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  tagline: string;
  image: string;
  badge?: string;
  pillarsCount?: number;
}

export interface WellnessPillar {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  summary: string;
  actionSteps: string[];
  scientificRationale: string;
  proTip: string;
}

export interface WellnessHabit {
  id: string;
  title: string;
  timing: 'morning' | 'afternoon' | 'evening' | 'daily';
  target: string;
  benefit: string;
}

export interface CategoryDetail extends Category {
  pillars: WellnessPillar[];
  dailyChecklist: WellnessHabit[];
  faq: { question: string; answer: string }[];
  takeaways: string[];
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface NewsletterSubmission {
  email: string;
  frequency: 'weekly' | 'daily';
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  topic: string;
}
