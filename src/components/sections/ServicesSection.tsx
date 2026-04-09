import { type FC } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { servicesData } from '@/data/services.data';

const ServiceIcon: FC<{ icon: string }> = ({ icon }) => {
  const icons: Record<string, React.ReactNode> = {
    layout: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    shield: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    edit: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  };
  return <>{icons[icon] ?? null}</>;
};

/** Services section – 3 cols on dark background */
const ServicesSection: FC = () => {
  return (
    <section id="services" className="section-pad bg-brand-deep-space">
      <div className="page-container">
        <SectionHeader
          tag="Dịch Vụ Của Chúng Tôi"
          title={<>Ba trụ cột tạo nên <span className="text-brand-catchie-blue">thành công</span> cho bạn</>}
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className={`relative cosmic-surface surface-hover rounded-2xl p-7 md:p-9 group
                ${svc.isFeatured ? 'ring-2 ring-brand-catchie-blue/60 bg-brand-catchie-blue/20' : 'hover:bg-brand-catchie-navy/35'}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-catchie-blue/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {svc.badgeText && (
                <span className="inline-block bg-brand-catchie-blue text-white text-xs font-bold
                  uppercase tracking-widest px-3 py-1 rounded mb-6">
                  {svc.badgeText}
                </span>
              )}

              <div className="relative w-16 h-16 border-2 border-white/15 rounded-xl flex items-center justify-center mb-6
                group-hover:border-white/40 group-hover:-translate-y-1 transition-all duration-300">
                <ServiceIcon icon={svc.icon} />
              </div>

              <h3 className="font-heading text-2xl font-semibold text-white mb-4">{svc.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6">{svc.description}</p>

              <ul className="space-y-2 mb-8">
                {svc.features.map((f) => (
                  <li key={f} className="text-sm text-white/75">✓ {f}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold text-sm text-white
                  border-b-2 border-white/40 pb-0.5 hover:border-white hover:gap-3 transition-all duration-300"
              >
                Tìm hiểu thêm
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
