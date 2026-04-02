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
    'bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700 hover:shadow-[0_8px_24px_rgba(220,38,38,0.35)]',
  outline:
    'bg-transparent text-white border-white/50 hover:border-white hover:bg-white/10',
  'outline-dark':
    'bg-transparent text-black border-black hover:bg-black hover:text-white',
  'outline-white':
    'bg-transparent text-white border-white hover:bg-white hover:text-black',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-base',
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
    'inline-flex items-center justify-center gap-2 rounded font-outfit font-bold border-2 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer';
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
