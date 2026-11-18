import React, { createContext, useContext, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface BookmarkContextType {
  bookmarkedIds: string[];
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (id: string, e?: React.MouseEvent) => void;
  removeBookmark: (id: string) => void;
  clearBookmarks: () => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fitnivo-bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('fitnivo-bookmarks', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore localstorage quota errors
    }
  }, [bookmarkedIds]);

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setBookmarkedIds(prev => {
      const exists = prev.includes(id);
      if (!exists) {
        // Trigger subtle confetti burst
        try {
          confetti({
            particleCount: 28,
            spread: 50,
            origin: { y: 0.8 },
            colors: ['#244E42', '#8AA995', '#E9BFA9', '#91C5A7']
          });
        } catch {
          // fallback if canvas not available
        }
        return [...prev, id];
      } else {
        return prev.filter(itemId => itemId !== id);
      }
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarkedIds(prev => prev.filter(itemId => itemId !== id));
  };

  const clearBookmarks = () => {
    setBookmarkedIds([]);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedIds, isBookmarked, toggleBookmark, removeBookmark, clearBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
