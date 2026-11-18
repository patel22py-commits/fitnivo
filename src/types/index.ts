export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  tagline: string;
  image: string;
  count?: number;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  reviewedBy?: string;
  reviewerRole?: string;
}

export interface ArticleSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  tips?: string[];
  quote?: string;
  callout?: {
    title: string;
    text: string;
    type?: 'note' | 'tip' | 'warning';
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  featuredImage: string;
  pinterestImage: string; // 2:3 vertical aspect ratio image optimized for Pinterest Pinning
  author: Author;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  tags: string[];
  trending?: boolean;
  popularWeekly?: boolean;
  featuredHero?: boolean;
  medicalDisclaimerRequired?: boolean;
  sections: ArticleSection[];
  keyTakeaways: string[];
}

export interface NewsletterSubmission {
  email: string;
  frequency: 'weekly' | 'daily';
  interests: string[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  topic: string;
}
