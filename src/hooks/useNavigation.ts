'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook quản lý trạng thái navigation menu (open/close)
 * Tự động lock scroll khi menu đang mở
 */
export function useNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) close();
    else open();
  }, [isOpen, open, close]);

  // Đóng menu khi nhấn Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [close]);

  // Cleanup khi unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return { isOpen, open, close, toggle };
}
