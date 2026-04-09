'use client';

import { useEffect, useRef } from 'react';
import { AnimationService } from '@/lib/services/AnimationService';

/**
 * Hook tự động thêm class 'visible' khi element xuất hiện trong viewport
 * Dùng AnimationService (Singleton) để quản lý IntersectionObserver
 */
export function useScrollAnimation(key: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const service = AnimationService.getInstance();
    const children = Array.from(el.querySelectorAll('[data-reveal]'));

    if (children.length > 0) {
      service.observe(
        key,
        children,
        (element) => element.classList.add('visible'),
      );
    } else {
      // Nếu không có children, observe chính element cha
      service.observe(key, [el], (element) =>
        element.classList.add('visible'),
      );
    }

    return () => {
      service.unobserve(key);
    };
  }, [key]);

  return ref;
}
