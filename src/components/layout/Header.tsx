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
  const isScrolled = scrollY > 80;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
          ${isScrolled
            ? 'bg-white shadow-md py-2.5 border-b-[3px] border-red-600'
            : 'py-4 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center
              text-white font-heading font-black text-lg">
              W
            </span>
            <span className={`font-heading font-black text-xl transition-colors
              ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              WebCraft<span className="text-red-600">Studio</span>
            </span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggle}
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            className={`relative z-[110] w-12 h-12 rounded-full flex flex-col items-center justify-center gap-[5px]
              transition-all duration-300 hover:bg-red-600/10`}
          >
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 origin-center
              ${isOpen ? 'translate-y-[7.5px] rotate-45 bg-white' : isScrolled ? 'bg-gray-900' : 'bg-white'}`}
            />
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300
              ${isOpen ? 'opacity-0 scale-x-0 bg-white' : isScrolled ? 'bg-gray-900' : 'bg-white'}`}
            />
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 origin-center
              ${isOpen ? '-translate-y-[7.5px] -rotate-45 bg-white' : isScrolled ? 'bg-gray-900' : 'bg-white'}`}
            />
          </button>
        </div>
      </header>

      <NavigationOverlay isOpen={isOpen} onClose={toggle} />
    </>
  );
};

export default Header;
