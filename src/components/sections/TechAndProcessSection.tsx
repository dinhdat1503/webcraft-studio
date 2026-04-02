import { type FC } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { techData, processSteps } from '@/data/tech.data';

export const TechStackSection: FC = () => (
  <section id="tech" className="py-20 bg-brand-catchie-navy/40 border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Công Nghệ"
        title={<>Công cụ & công nghệ<br />chúng tôi sử dụng</>}
      />
      <div className="flex flex-wrap justify-center gap-3">
        {techData.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center gap-3 px-6 py-3.5 border-[1.5px] border-brand-catchie-blue/20 rounded-full
              text-sm font-semibold text-gray-700 hover:border-brand-catchie-blue hover:text-brand-catchie-blue
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
  <section id="process" className="py-24 bg-brand-deep-space">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Quy Trình"
        title={<>4 bước đơn giản để có<br />website <span className="text-brand-catchie-blue">mơ ước</span></>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {processSteps.map((step, idx) => (
          <div
            key={step.id}
            className="relative p-8 group hover:bg-brand-catchie-navy/40 hover:shadow-lg hover:rounded-xl hover:z-10
              transition-all duration-300"
          >
            <span className="block font-heading text-6xl font-black text-gray-100
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
