import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  // Generate BreadcrumbList JSON-LD Schema
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://fitnivo.com/'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.path ? { item: `https://fitnivo.com${item.path}` } : {})
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className={`text-xs text-brand-sage-500 dark:text-brand-darkMuted py-3 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1 hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="inline-flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                {item.path && !isLast ? (
                  <Link
                    to={item.path}
                    className="hover:text-brand-lightPrimary dark:hover:text-brand-darkPrimary transition-colors font-medium truncate max-w-[180px] md:max-w-none"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    className="text-brand-lightText dark:text-brand-darkText font-medium truncate max-w-[200px] md:max-w-none"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
