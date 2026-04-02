'use client';

import { type FC } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  target: number;
  suffix: string;
  label: string;
}

/** Animated counter component - đếm số từ 0 đến target khi xuất hiện trong viewport */
const StatCounter: FC<StatCounterProps> = ({ target, suffix, label }) => {
  const { count, ref } = useCountUp(target);

  return (
    <div className="text-center px-4 flex flex-col items-center">
      <div className="flex items-baseline gap-0.5">
        <span
          ref={ref}
          className="font-outfit text-4xl font-black text-white leading-none"
        >
          {count}
        </span>
        <span className="font-outfit text-2xl font-black text-red-500">
          {suffix}
        </span>
      </div>
      <span className="text-xs text-white/50 mt-1 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

export default StatCounter;
