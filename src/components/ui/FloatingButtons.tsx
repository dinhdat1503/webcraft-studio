'use client';

import { type FC } from 'react';
import { useScrollY } from '@/hooks/useScrollY';

/** Floating action buttons: scroll-to-top, gọi điện, Zalo */
const FloatingButtons: FC = () => {
  const scrollY = useScrollY();
  const isVisible = scrollY > 400;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Cuộn lên đầu trang"
        className={`w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center
          shadow-lg hover:bg-red-700 hover:-translate-y-1 transition-all duration-300
          ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      {/* Gọi điện */}
      <a
        href="tel:0901234567"
        aria-label="Gọi điện"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center
          shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center
          shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300
          font-heading font-extrabold text-xs tracking-tight"
      >
        Zalo
      </a>
    </div>
  );
};

export default FloatingButtons;
