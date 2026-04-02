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
    <div className={`${center ? 'text-center' : ''} mb-16 ${className}`}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase mb-4
          before:content-[''] before:inline-block before:w-5 before:h-0.5
          ${light
            ? 'text-white/70 before:bg-white/50'
            : 'text-red-600 before:bg-red-600'
          }`}
      >
        {tag}
      </span>
      <h2
        className={`font-outfit text-4xl md:text-5xl font-black leading-tight mb-6
          ${light ? 'text-white' : 'text-gray-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-xl mx-auto ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
