import React from 'react';

interface PinterestPinButtonProps {
  url: string;
  media: string;
  description: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const PinterestPinButton: React.FC<PinterestPinButtonProps> = ({
  url,
  media,
  description,
  className = '',
  size = 'md'
}) => {
  const handlePin = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
      url
    )}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(description)}`;

    window.open(pinUrl, 'pinterest-share-dialog', 'width=750,height=600,toolbar=0,menubar=0,location=0');
  };

  const sizeClasses = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-xs';

  return (
    <button
      onClick={handlePin}
      type="button"
      aria-label="Save to Pinterest"
      title="Save to Pinterest"
      className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-[#E60023] hover:bg-[#B6001C] text-white shadow-md hover:shadow-lg transition-all duration-200 pin-pulse select-none ${sizeClasses} ${className}`}
    >
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.48.03-3.55l1.04-4.4s-.26-.53-.26-1.32c0-1.24.72-2.16 1.62-2.16.76 0 1.13.57 1.13 1.26 0 .77-.49 1.92-.74 2.99-.21.9.45 1.63 1.34 1.63 1.6 0 2.84-1.69 2.84-4.13 0-2.16-1.55-3.67-3.77-3.67-2.57 0-4.08 1.93-4.08 3.92 0 .78.3 1.61.67 2.07.07.09.08.17.06.26l-.25 1.04c-.04.17-.14.21-.32.13-1.2-.56-1.95-2.31-1.95-3.72 0-3.03 2.2-5.81 6.35-5.81 3.33 0 5.92 2.37 5.92 5.55 0 3.31-2.09 5.98-4.99 5.98-.98 0-1.9-.51-2.21-1.11l-.6 2.29c-.22.84-.81 1.9-1.21 2.54A12 12 0 1 0 12 0Z" />
      </svg>
      <span>Pin It</span>
    </button>
  );
};
