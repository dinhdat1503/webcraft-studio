'use client';

import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNavigation } from '@/hooks/useNavigation';
import { useScrollY } from '@/hooks/useScrollY';
import NavigationOverlay from './NavigationOverlay';

const navItems = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Dự án', href: '#portfolio' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Liên hệ', href: '/lien-he' },
];

/** Sticky header với logo, hamburger và navigation overlay */
const Header: FC = () => {
  const { isOpen, toggle } = useNavigation();
  const scrollY = useScrollY();
  const isScrolled = scrollY > 24;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
          ${isScrolled
            ? 'py-3 bg-brand-deep-space/55 backdrop-blur-xl border-b border-brand-catchie-blue/25'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="cosmic-surface rounded-2xl px-4 py-3 md:px-6 md:py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <span className="absolute -inset-1 rounded-xl bg-brand-catchie-blue/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative h-14 w-[152px] overflow-hidden">
              <Image
                src="/assets/catchie-fullmark-transparent.png"
                alt="CATCHIE"
                fill
                sizes="152px"
                quality={100}
                className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-[0_0_12px_rgba(93,173,226,0.45)]"
                priority
              />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-slate-200 rounded-xl hover:bg-brand-catchie-blue/15 hover:text-white transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/lien-he"
              className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-bold text-white bg-brand-catchie-blue hover:bg-blue-400 transition-all shadow-[0_0_22px_rgba(93,173,226,0.35)]"
            >
              Bắt đầu dự án
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggle}
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            className={`relative z-[110] lg:hidden w-12 h-12 rounded-full flex flex-col items-center justify-center gap-[5px]
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
        </div>
      </header>

      <NavigationOverlay isOpen={isOpen} onClose={toggle} />
    </>
  );
};

export default Header;
