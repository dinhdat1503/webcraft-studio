'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { useNavigation } from '@/hooks/useNavigation';
import { useScrollY } from '@/hooks/useScrollY';
import NavigationOverlay from './NavigationOverlay';

/** Sticky header với logo, hamburger và navigation overlay */
const Header: FC = () => {
  const { isOpen, toggle } = useNavigation();
  const scrollY = useScrollY();
  const isScrolled = scrollY > 50;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
          ${isScrolled
            ? 'bg-brand-deep-space/80 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(93,173,226,0.1)] border-b border-brand-catchie-blue/20'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative">
            <div className={`absolute -inset-2 bg-brand-catchie-blue/20 rounded-full blur-xl transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100 group-hover:opacity-100'}`}></div>
            <img 
               src="/assets/catchie-logo.png" 
               alt="CATCHIE" 
               className="h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggle}
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            className={`relative z-[110] w-12 h-12 rounded-full flex flex-col items-center justify-center gap-[5px]
              transition-all duration-300 hover:bg-brand-catchie-blue/20 hover:shadow-[0_0_15px_rgba(93,173,226,0.3)]`}
          >
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 origin-center bg-white
              ${isOpen ? 'translate-y-[7.5px] rotate-45' : ''}`}
            />
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 bg-white
              ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 origin-center bg-white
              ${isOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>

      <NavigationOverlay isOpen={isOpen} onClose={toggle} />
    </>
  );
};

export default Header;
