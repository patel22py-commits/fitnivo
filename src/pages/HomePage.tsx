import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { TrendingArticles } from '../components/home/TrendingArticles';
import { PopularWeekly } from '../components/home/PopularWeekly';
import { InspirationSection } from '../components/home/InspirationSection';
import { DailyWellnessWidget } from '../components/home/DailyWellnessWidget';
import { NewsletterBox } from '../components/common/NewsletterBox';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "FITNIVO – Feel Better. Live Healthier. | Women's Wellness & Health";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured 6 Categories */}
      <CategorySection />

      {/* 3. Trending Articles Editorial Grid */}
      <TrendingArticles />

      {/* 4. Interactive Daily Wellness Widget */}
      <DailyWellnessWidget />

      {/* 5. Inspiration Section: "Small Steps. Healthier You." */}
      <InspirationSection />

      {/* 6. Popular This Week */}
      <PopularWeekly />

      {/* 7. Working Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <NewsletterBox variant="banner" />
      </div>
    </div>
  );
};
