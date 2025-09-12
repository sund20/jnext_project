'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const TopScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const isInitialMount = useRef(true);

  // Show/hide button based on scroll position
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top on route change, but skip initial mount
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return (
    <>
      {isVisible && (
  <div
    id="top"
    onClick={scrollToTop}
    className="fixed bottom-4 right-4 z-[9999] w-12 h-12 bg-stone-700 dark:bg-stone-50 text-white dark:text-black p-2 rounded-full cursor-pointer flex items-center justify-center shadow-md"
  >
    <span className="text-2xl">↑</span>
  </div>
)}

    </>
  );
};

export default TopScroll;
