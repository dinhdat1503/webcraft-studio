import { type FC, type ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline' | 'outline-dark' | 'outline-white';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-catchie-blue text-white border-brand-catchie-blue/80 hover:bg-blue-400 hover:border-blue-300 hover:shadow-[0_0_26px_rgba(93,173,226,0.55)] hover:-translate-y-1',
  outline:
    'bg-white/5 text-white border-white/35 hover:border-brand-catchie-blue hover:text-brand-catchie-light hover:bg-brand-catchie-blue/15 hover:shadow-[0_0_18px_rgba(93,173,226,0.25)]',
  'outline-dark':
    'bg-brand-catchie-navy/20 text-slate-200 border-brand-catchie-blue/30 hover:border-brand-catchie-blue hover:text-white hover:bg-brand-catchie-blue/15 hover:shadow-[0_0_18px_rgba(93,173,226,0.25)]',
  'outline-white':
    'bg-transparent text-white border-white/80 hover:bg-white hover:text-brand-deep-space',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-10 py-4 text-base tracking-wide',
};

/** Reusable Button component hỗ trợ nhiều variant và size */
const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  children,
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-heading font-bold border-2 transition-all duration-300 cursor-pointer overflow-hidden relative';
  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
