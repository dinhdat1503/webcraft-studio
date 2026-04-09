'use client';

import { type FC } from 'react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Trang Chủ',     href: '/' },
  { label: 'Giới Thiệu',    href: '/gioi-thieu' },
  { label: 'Dịch Vụ',       href: '/dich-vu' },
  { label: 'Dự Án',         href: '/du-an' },
  { label: 'Bảng Giá',      href: '/bang-gia' },
  { label: 'Blog',          href: '/blog' },
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
      <div className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-brand-deep-space/80 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-grid-blue opacity-15" />
      </div>

      {/* Nav links */}
      <nav
        className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-300
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      >
        <div className="w-full max-w-2xl cosmic-surface rounded-3xl p-6 md:p-8">
          <p className="text-xs tracking-[0.18em] uppercase text-brand-catchie-blue/90 mb-4">Navigation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-2xl border border-brand-catchie-blue/20 px-4 py-3 text-white font-heading text-2xl md:text-3xl font-semibold hover:bg-brand-catchie-blue/15 hover:border-brand-catchie-blue/45 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/lien-he"
              onClick={onClose}
              className="w-full sm:w-auto text-center font-heading text-base font-bold text-white
                px-6 py-3 rounded-xl bg-brand-catchie-blue shadow-[0_0_15px_rgba(93,173,226,0.4)]
                hover:shadow-[0_0_25px_rgba(93,173,226,0.6)] hover:bg-blue-400 transition-all duration-300"
            >
              Liên hệ tư vấn
            </Link>
            <button
              onClick={onClose}
              className="w-full sm:w-auto rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 transition-all"
            >
              Đóng menu
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationOverlay;
