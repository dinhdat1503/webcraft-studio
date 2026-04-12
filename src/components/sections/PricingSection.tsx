import { type FC } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import type { PricingPlan } from '@/types';

type PricingSectionProps = {
  tag?: string;
  title: React.ReactNode;
  description?: string;
  data: PricingPlan[];
};

const PricingSection: FC<PricingSectionProps> = ({ 
  tag = "Bảng Giá", 
  title, 
  description, 
  data 
}) => {
  return (
    <section id="pricing" className="section-pad bg-brand-deep-space">
      <div className="page-container">
        <SectionHeader
          tag={tag}
          title={title}
          description={description}
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 md:p-8 border transition-all duration-300 hover:-translate-y-1.5
                ${plan.isFeatured
                  ? 'bg-brand-catchie-blue/20 border-brand-catchie-blue/70 ring-2 ring-brand-catchie-blue/30 md:scale-[1.02]'
                  : 'cosmic-surface surface-hover hover:bg-brand-catchie-navy/35 hover:border-white/20'
                }`}
            >
              {plan.badgeText && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-yellow-400 text-black text-xs font-black uppercase tracking-widest
                  px-4 py-1 rounded-b-lg">
                  {plan.badgeText}
                </span>
              )}

              {/* Header */}
              <div className="pb-6 mb-6 border-b border-white/15">
                <h3 className="font-heading text-xl font-black text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-white/70 text-xl">₫</span>
                      <span className="font-heading font-black text-4xl text-white leading-none">
                        {plan.price.toLocaleString('vi-VN')}
                      </span>
                    </>
                  ) : (
                    <span className="font-heading font-black text-3xl text-white leading-none">
                      {plan.price}
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm mt-1">{plan.priceNote}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text}
                    className={`text-sm flex items-center gap-2
                      ${f.included ? 'text-white/80' : 'text-white/25 line-through'}`}>
                    <span>{f.included ? '✓' : '✗'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <Button
                href="/lien-he"
                variant={plan.isFeatured ? 'outline-white' : 'outline-dark'}
                fullWidth
                className={plan.isFeatured ? '' : '!border-white/30 !text-white hover:!bg-brand-catchie-blue/25 hover:!text-white'}
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
