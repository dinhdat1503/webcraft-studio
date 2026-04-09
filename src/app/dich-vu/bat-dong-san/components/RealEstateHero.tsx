'use client';

import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RealEstateHero: FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-space via-emerald-950/20 to-brand-deep-space" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-catchie-blue/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-blue bg-grid opacity-20" />
      </div>

      <div className="page-container relative z-10 pt-32 pb-20">
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-10 animate-fade-in-down">
          <Link href="/" className="hover:text-brand-catchie-blue transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link href="/#portfolio" className="hover:text-brand-catchie-blue transition-colors">Dịch vụ</Link>
          <span>/</span>
          <span className="text-brand-catchie-blue font-medium">Bất Động Sản</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-6
              before:content-[''] before:inline-block before:w-8 before:h-px before:bg-brand-catchie-blue">
              Real Estate Solutions
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-white">Website</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-catchie-blue">
                Bất Động Sản
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg mb-10">
              Nền tảng bất động sản số toàn diện với hệ thống tìm kiếm thông minh,
              tour tham quan 3D trực tuyến và quản lý listing chuyên nghiệp.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://zalo.me/0971692675" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-white
                  bg-brand-catchie-blue border-2 border-brand-catchie-blue/80
                  hover:bg-blue-400 hover:border-blue-300 hover:shadow-[0_0_30px_rgba(93,173,226,0.5)] hover:-translate-y-1
                  transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13.6 19.79 19.79 0 011.62 5a2 2 0 011.995-2H6.5a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Liên hệ ngay hôm nay
              </Link>
              <Link
                href="#overview"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-white
                  bg-white/5 border-2 border-white/25
                  hover:border-brand-catchie-blue hover:bg-brand-catchie-blue/15 hover:shadow-[0_0_18px_rgba(93,173,226,0.25)]
                  transition-all duration-300"
              >
                Khám phá chi tiết
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden cosmic-surface">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-transparent to-brand-catchie-blue/20 rounded-2xl blur-sm" />
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/portfolio/portfolio_realestate.png"
                  alt="Website bất động sản cao cấp preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 cosmic-surface rounded-xl px-5 py-3 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Tour 3D trực tuyến</p>
                  <p className="text-white/50 text-xs">Virtual Property Tour</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 cosmic-surface rounded-xl px-5 py-3 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-xs font-bold">2,500+ listings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHero;
