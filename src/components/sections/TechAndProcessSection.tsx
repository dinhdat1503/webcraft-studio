import { type FC } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { techData, processSteps } from '@/data/tech.data';

export const TechStackSection: FC = () => (
  <section id="tech" className="section-pad bg-brand-catchie-navy/20 border-y border-brand-catchie-blue/15">
    <div className="page-container">
      <SectionHeader
        tag="Công Nghệ"
        title={<>Công cụ & công nghệ<br />chúng tôi sử dụng</>}
      />
      <div className="flex flex-wrap justify-center gap-3">
        {techData.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center gap-3 px-6 py-3.5 border border-brand-catchie-blue/25 rounded-full
              text-sm font-semibold text-slate-200 hover:border-brand-catchie-blue hover:text-brand-catchie-light hover:bg-brand-catchie-blue/10
              hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <span className="text-xl leading-none">{tech.emoji}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProcessSection: FC = () => (
  <section id="process" className="section-pad bg-brand-deep-space">
    <div className="page-container">
      <SectionHeader
        tag="Quy Trình"
        title={<>4 bước đơn giản để có<br />website <span className="text-brand-catchie-blue">mơ ước</span></>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {processSteps.map((step, idx) => (
          <div
            key={step.id}
            className="relative cosmic-surface rounded-2xl p-7 group hover:bg-brand-catchie-navy/35 hover:shadow-lg hover:z-10 transition-all duration-300"
          >
            <span className="block font-heading text-6xl font-black text-white/30
              group-hover:text-brand-catchie-blue transition-colors duration-300 leading-none mb-4">
              {step.number}
            </span>
            <h3 className="font-heading text-lg font-black text-white mb-3">{step.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
            {idx < processSteps.length - 1 && (
              <span className="hidden lg:block absolute top-1/3 right-[-8px] text-brand-catchie-blue font-black text-lg z-20">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
