import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { DailyWellnessWidget } from '../components/home/DailyWellnessWidget';
import { WomenDailyBlueprint } from '../components/home/WomenBlueprint';
import { InspirationSection } from '../components/home/InspirationSection';
import { NewsletterBox } from '../components/common/NewsletterBox';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "FITNIVO – Feel Better. Live Healthier. | Women's Wellness Platform";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="space-y-6 sm:space-y-10">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The 6 Guided Wellness Pillars */}
      <CategorySection />

      {/* 3. Interactive Daily Nutrition & Rituals Calculator */}
      <DailyWellnessWidget />

      {/* 4. The Women's Daily Wellness Blueprint */}
      <WomenDailyBlueprint />

      {/* 5. Inspiration Section: "Small Steps. Healthier You." */}
      <InspirationSection />

      {/* 6. Working Newsletter Community Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <NewsletterBox variant="banner" />
      </div>
    </div>
  );
};
