import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
import { PinterestPinButton } from './PinterestPinButton';

interface ShareButtonsProps {
  url: string;
  title: string;
  media: string;
  description: string;
  className?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  url,
  title,
  media,
  description,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      'fb-share',
      'width=600,height=500'
    );
  };

  const handleTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      'tw-share',
      'width=600,height=450'
    );
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-sage-600 dark:text-brand-darkMuted mr-1 flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5" />
        <span>Share:</span>
      </span>

      {/* Pinterest Pin Button */}
      <PinterestPinButton
        url={url}
        media={media}
        description={description}
        size="sm"
      />

      {/* Facebook */}
      <button
        onClick={handleFacebook}
        type="button"
        title="Share on Facebook"
        aria-label="Share on Facebook"
        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-colors duration-200"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span>Facebook</span>
      </button>

      {/* X / Twitter */}
      <button
        onClick={handleTwitter}
        type="button"
        title="Share on X"
        aria-label="Share on X"
        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-brand-lightText dark:text-brand-darkText hover:text-white dark:hover:text-black transition-colors duration-200"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>X</span>
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        type="button"
        title="Copy link to clipboard"
        aria-label="Copy link to clipboard"
        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/40 text-brand-lightPrimary dark:text-brand-darkPrimary hover:bg-brand-sage-200 dark:hover:bg-brand-sage-800 transition-colors duration-200"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
};
