import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterContactForm from './FooterContactForm';
import {
  footerServiceLinks,
  footerPricingLinks,
  footerCompanyLinks,
  footerContactInfo,
  footerSocials,
  footerPolicyLinks,
  type FooterColumn,
} from '@/data/footer.data';

/* ── SVG Icon helpers ────────────────────────────── */

const ContactIcon: FC<{ icon: string }> = ({ icon }) => {
  const base = 'w-4 h-4 shrink-0 text-brand-catchie-blue';
  switch (icon) {
    case 'map-pin':
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'phone':
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13.6 19.79 19.79 0 011.62 5a2 2 0 011.995-2H6.5a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case 'clock':
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    default:
      return null;
  }
};

const SocialIcon: FC<{ icon: string }> = ({ icon }) => {
  const base = 'w-5 h-5';
  switch (icon) {
    case 'facebook':
      return (
        <svg className={base} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'zalo':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="currentColor">
          <path d="M12.5 6C8.91 6 6 8.91 6 12.5v23C6 39.09 8.91 42 12.5 42h23c3.59 0 6.5-2.91 6.5-6.5v-23C42 8.91 39.09 6 35.5 6h-23zm2.05 8h18.9c.28 0 .55.09.55.52 0 .93-1.12 3.03-1.68 3.81-.15.21-.27.28-.56.28H18.1c-.63 0-1.1.47-1.1 1.07 0 .6.47 1.07 1.1 1.07h12.75c1.39 0 1.88 1.02 1.88 1.64 0 4.28-5.7 10.22-13.45 10.22-5.13 0-8.75-3.23-8.75-7.58 0-6.3 5.27-11.03 11.92-11.03h-7.9c-.3 0-.55-.25-.55-.55V14.55c0-.3.25-.55.55-.55z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={base} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.97a8.21 8.21 0 004.77 1.52V7.04a4.85 4.85 0 01-1-.35z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={base} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
};

/* ── Reusable link column ──────────────────────── */

const FooterLinkColumn: FC<{ column: FooterColumn }> = ({ column }) => (
  <div>
    <h4 className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
      <span className="w-5 h-px bg-brand-catchie-blue" />
      {column.title}
    </h4>
    <ul className="space-y-3 text-sm">
      {column.links.map(link => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-white/50 hover:text-brand-catchie-blue hover:pl-1.5 transition-all duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ── Main Footer ───────────────────────────────── */

/** Footer chuẩn doanh nghiệp – Server Component, form tách riêng Client */
const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep-space text-white/70 relative overflow-hidden" id="contact">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-blue opacity-10" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-catchie-blue/[0.03] blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-brand-catchie-blue/[0.04] blur-3xl" />

      {/* ── Top CTA strip ─────────────────────────── */}
      <div className="relative z-10 border-b border-white/[0.06]">
        <div className="page-container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
              Sẵn sàng nâng tầm website của bạn?
            </h3>
            <p className="text-white/45 text-sm mt-1">
              Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia CATCHIE.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white
              bg-brand-catchie-blue hover:bg-blue-400 shadow-[0_0_20px_rgba(93,173,226,0.35)]
              hover:shadow-[0_0_30px_rgba(93,173,226,0.5)] transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13.6 19.79 19.79 0 011.62 5a2 2 0 011.995-2H6.5a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Liên hệ ngay
          </Link>
        </div>
      </div>

      {/* ── Main Footer Grid ──────────────────────── */}
      <div className="page-container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand + Social */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group relative">
              <span className="absolute -inset-1 rounded-xl bg-brand-catchie-blue/12 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative h-14 w-[152px] overflow-hidden">
                <Image
                  src="/assets/catchie-fullmark-transparent.png"
                  alt="CATCHIE"
                  fill
                  sizes="152px"
                  quality={100}
                  className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-[0_0_10px_rgba(93,173,226,0.4)]"
                />
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50 max-w-sm mb-6">
              Đội ngũ thiết kế website chuyên nghiệp tại Việt Nam. Chúng tôi đồng hành cùng doanh nghiệp phát triển mạnh mẽ trong kỷ nguyên số.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              {footerContactInfo.map(item => (
                <div key={item.icon} className="flex gap-3 items-start text-sm text-white/50">
                  <span className="mt-0.5"><ContactIcon icon={item.icon} /></span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-brand-catchie-blue transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {footerSocials.map(social => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center
                    text-white/40 hover:text-white hover:border-brand-catchie-blue/50 hover:bg-brand-catchie-blue/15
                    hover:shadow-[0_0_12px_rgba(93,173,226,0.2)] transition-all duration-300"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-2">
            <FooterLinkColumn column={footerServiceLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterLinkColumn column={footerPricingLinks} />
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-brand-catchie-blue" />
              Nhận Tư Vấn Miễn Phí
            </h4>
            <p className="text-white/40 text-sm mb-4">
              Để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ bạn trong vòng 24h.
            </p>
            <FooterContactForm />
          </div>
        </div>
      </div>

      {/* ── Footer Bottom ─────────────────────────── */}
      <div className="border-t border-white/[0.07] relative z-10">
        <div className="page-container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© {currentYear} CATCHIE. Bảo lưu mọi quyền.</p>
          <div className="flex items-center gap-1 text-white/25">
            <span>Thiết kế & phát triển bởi</span>
            <Link href="/" className="text-brand-catchie-blue/70 hover:text-brand-catchie-blue font-semibold transition-colors">
              CATCHIE
            </Link>
          </div>
          <div className="flex gap-6">
            {footerPolicyLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-brand-catchie-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
