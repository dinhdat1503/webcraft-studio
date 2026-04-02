'use client';

import { type FC } from 'react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Trang Chủ',     href: '#hero' },
  { label: 'Giới Thiệu',    href: '#about' },
  { label: 'Dịch Vụ',       href: '#services' },
  { label: 'Dự Án',         href: '#portfolio' },
  { label: 'Bảng Giá',      href: '#pricing' },
  { label: 'Quy Trình',     href: '#process' },
  { label: 'Blog',           href: '#blog' },
];

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Full-screen deep space navigation overlay với circle expand animation */
const NavigationOverlay: FC<NavigationOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[105] overflow-hidden transition-all duration-300
        ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* Navy circle expanding from top-right */}
      <div
        className={`absolute top-0 right-0 w-20 h-20 bg-brand-catchie-navy rounded-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_100px_rgba(93,173,226,0.2)]
          ${isOpen ? 'scale-[45]' : 'scale-0'}`}
        style={{ transformOrigin: 'top right' }}
      />

      {/* Nav links */}
      <nav
        className={`absolute inset-0 flex flex-col items-start justify-center px-16 gap-2
          transition-opacity duration-300 ${isOpen ? 'opacity-100 delay-200' : 'opacity-0'}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-heading text-4xl md:text-6xl font-black text-white
              relative group transition-all duration-300 hover:pl-4
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:w-0 after:h-0.5 after:bg-white/50 after:transition-all after:duration-300
              hover:after:w-full"
          >
            {link.label}
          </Link>
        ))}

        {/* Contact button */}
        <Link
          href="#contact"
          onClick={onClose}
          className="mt-4 font-heading text-lg font-black text-white
            px-6 py-2.5 rounded-full bg-brand-catchie-blue shadow-[0_0_15px_rgba(93,173,226,0.4)]
            hover:shadow-[0_0_25px_rgba(93,173,226,0.6)] hover:bg-blue-400 transition-all duration-300"
        >
          Liên Hệ
        </Link>

        {/* Social icons */}
        <div className="flex gap-4 mt-6">
          <a href="#" aria-label="Facebook"
            className="w-11 h-11 rounded-full border-2 border-white/30 flex items-center justify-center
              text-white hover:bg-white/20 hover:border-white transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube"
            className="w-11 h-11 rounded-full border-2 border-white/30 flex items-center justify-center
              text-white hover:bg-white/20 hover:border-white transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.965C5.12 20 12 20 12 20s6.88 0 8.59-.455a2.78 2.78 0 001.95-1.965A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavigationOverlay;
