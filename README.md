# FITNIVO – Premium Women's Health & Wellness Website

> **Feel Better. Live Healthier.**  
> *Your Everyday Guide to Women's Wellness.*

---

## 🌸 Overview

**FITNIVO** is a complete, modern, fully responsive women's health and wellness publication engineered to feel like a high-end American wellness magazine (inspired by modern editorial standards like *Well+Good*, *Mindbodygreen*, and *Women's Health*). 

Crafted with React 18, TypeScript, Vite, Tailwind CSS, Lucide icons, and React Router, FITNIVO provides an evidence-informed, responsible, and empowering destination for women across the USA, Canada, the UK, Australia, and worldwide.

---

## ✨ Key Features & Architecture

### 1. Brand Identity & Design System
- **Minimal Wordmark & Leaf Emblem**: Bespoke botanical leaf mark paired with high-contrast serif typography.
- **Light Theme**:
  - Background: `#FAFAF7`
  - Primary: `#244E42` (Deep Forest Sage)
  - Secondary: `#8AA995` (Soft Sage)
  - Accent: `#E9BFA9` (Warm Blush / Terracotta)
  - Text: `#202A26`
  - Cards: `#FFFFFF` with soft drop shadows
- **Dark Theme**:
  - Background: `#101714` (Deep Night Botanical)
  - Secondary Background: `#19231E`
  - Cards: `#202C25`
  - Primary Accent: `#91C5A7` (Luminescent Sage)
  - Text: `#F5F7F4`
  - Muted Text: `#AAB8AF`
- **Typography Hierarchy**:
  - Headings: `Playfair Display` (Classic American Editorial Serif)
  - Body: `Inter` (Legible, modern sans-serif)

### 2. Mandatory Dark Mode Functionality
- Sun and moon icons with animated toggle in the navigation header.
- Automatically detects user's system OS preference (`prefers-color-scheme`).
- Persists user selection in `localStorage` (`fitnivo-theme`).
- Zero unreadable text or raw white cards in dark mode.

### 3. Multi-Page Structure & Dedicated Routes
- **`/` (Homepage)**:
  - Hero with Playfair typography, CTA buttons ("Explore Wellness", "Discover Healthy Living"), and confident lifestyle visual.
  - 6 Featured Category Cards with zoom effects.
  - Trending Articles Editorial Grid with reading times and category pills.
  - Interactive Daily Wellness Tool (Protein Target & Optimal Hydration calculator + 5-step daily ritual checklist).
  - "Small Steps. Healthier You." Inspiration Section (Move Your Body, Nourish Yourself, Prioritize Self-Care).
  - "Popular This Week" numbered magazine rankings.
  - Working Newsletter signup with frequency choice (Weekly Sunday Edition vs. Daily Morning Bite).
- **Dedicated Category Pages**:
  - `/womens-health` – Hormonal balance, preventive care, and cycle knowledge.
  - `/weight-loss` – Sustainable weight management without crash diets.
  - `/nutrition` – High-protein breakfasts, balanced meal prep, and whole foods.
  - `/fitness` – Home workouts, functional strength, and mobility routines.
  - `/beauty` – Dermatologist-aligned barrier repair and sun protection.
  - `/lifestyle` – Circadian light exposure, restorative sleep, and nervous system calm.
  - Includes real-time keyword search inside category, tag filtering, and sorting.
- **`/article/:slug` (Editorial Reading Experience)**:
  - Reading time, publish/update dates, author credentials & avatar.
  - Interactive jump-link Table of Contents.
  - Pull quotes, callouts, and key takeaway summary cards.
  - 2:3 vertical Pinterest Pin graphics with hover "Pin It" buttons.
  - Social sharing (Pinterest, Facebook, X, and native Copy Link).
  - Private bookmark / save article toggle with micro-confetti feedback.
  - Visible medical disclaimer block on health and weight loss articles.
- **`/search`**:
  - Live query filtering by title, excerpt, content, and tags.
  - Category pill filters and popular suggested search queries.
  - Helpful empty state with reset suggestions.
- **`/bookmarks`**:
  - Dedicated personal reading list stored in browser `localStorage`.
- **`/about`**:
  - "Welcome to FITNIVO" – Brand mission, 6 core pillars, editorial values, and contributor team.
- **`/contact`**:
  - Validated contact form with topic selection, loading spinner, success feedback, and media headquarters information.
- **Editorial & Compliance**:
  - `/editorial-policy` – Sourcing standards (PubMed, NIH, ACOG) and author transparency.
  - `/medical-disclaimer` – Formal clinical and emergency notice.
  - `/privacy-policy` & `/terms` – Full legal policies.
  - `404` NotFound fallback page.

### 4. Pinterest Traffic Optimization
- Built specifically for Pinterest discovery (the primary organic traffic driver for women's wellness).
- 2:3 vertical Pin graphics (`800x1200` ratio) embedded in article reading templates.
- One-click "Pin It" button integrated via Pinterest Web API.
- OpenGraph and Twitter card meta tags in `index.html`.

### 5. SEO & Structured Data
- Schema.org JSON-LD `Organization` markup in `index.html`.
- Schema.org JSON-LD `BreadcrumbList` markup rendered dynamically in `Breadcrumbs.tsx`.
- Schema.org JSON-LD `Article` structured data in `ArticlePage.tsx`.
- `public/robots.txt` and `public/sitemap.xml` included.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚢 Deploying to Vercel

The repository is 100% turnkey for Vercel deployment:
1. Push your repository to GitHub/GitLab.
2. In Vercel, click **"Add New Project"** and import the repository.
3. Framework Preset: **Vite**.
4. Root Directory: `./` (or leave default).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. SPA routing rewrites are already configured via `vercel.json`.

---

© 2026 FITNIVO. Feel Better. Live Healthier.
