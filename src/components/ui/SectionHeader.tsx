import { type FC } from 'react';

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}

/** Reusable section header với tag, tiêu đề và mô tả */
const SectionHeader: FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  light = false,
  center = true,
  className = '',
}) => {
  return (
    <div className={`${center ? 'text-center' : ''} mb-14 md:mb-16 ${className}`}>
      <span
        className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase mb-5
          before:content-[''] before:inline-block before:w-6 before:h-px
          ${light
            ? 'text-white/70 before:bg-white/50'
            : 'text-brand-catchie-blue before:bg-brand-catchie-blue'
          }`}
      >
        {tag}
      </span>
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight mb-5
          ${light ? 'text-white' : 'text-white'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg max-w-2xl mx-auto ${light ? 'text-white/70' : 'text-slate-300'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
