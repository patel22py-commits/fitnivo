import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SearchPage } from './pages/SearchPage';
import { EditorialPolicyPage } from './pages/EditorialPolicyPage';
import { MedicalDisclaimerPage } from './pages/MedicalDisclaimerPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SharkFlexStyleReviewPage } from './pages/SharkFlexStyleReviewPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-brand-lightBg text-brand-lightText dark:bg-brand-darkBg dark:text-brand-darkText transition-colors duration-200">
          {/* Sticky Navigation Header */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1">
            <Routes>
              {/* 1. Homepage */}
              <Route path="/" element={<HomePage />} />

              {/* 2. Dedicated Category Pages */}
              <Route
                path="/womens-health"
                element={<CategoryPage forcedSlug="womens-health" />}
              />
              <Route
                path="/weight-loss"
                element={<CategoryPage forcedSlug="weight-loss" />}
              />
              <Route
                path="/nutrition"
                element={<CategoryPage forcedSlug="nutrition" />}
              />
              <Route
                path="/fitness"
                element={<CategoryPage forcedSlug="fitness" />}
              />
              <Route
                path="/beauty"
                element={<CategoryPage forcedSlug="beauty" />}
              />
              <Route
                path="/hair-care"
                element={<CategoryPage forcedSlug="hair-care" />}
              />
              <Route
                path="/hair-care/shark-flexstyle-review-2026"
                element={<SharkFlexStyleReviewPage />}
              />
              <Route
                path="/shark-flexstyle-review-2026"
                element={<SharkFlexStyleReviewPage />}
              />
              <Route
                path="/lifestyle"
                element={<CategoryPage forcedSlug="lifestyle" />}
              />
              <Route path="/category/:slug" element={<CategoryPage />} />

              {/* 3. Search Page */}
              <Route path="/search" element={<SearchPage />} />

              {/* 4. Company & Editorial Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
              <Route path="/medical-disclaimer" element={<MedicalDisclaimerPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />

              {/* 5. 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Multi-Column Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
