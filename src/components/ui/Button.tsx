'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        variant = 'primary',
        size = 'md',
        children,
        className,
        disabled,
        type = 'button',
        onClick,
        ...props
    }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-500',
            secondary: 'bg-white hover:bg-gray-100 text-purple-600 focus:ring-gray-300',
            outline: 'border border-white/20 hover:bg-white/10 text-white focus:ring-white/50',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-xs',
            md: 'px-5 py-2 text-sm',
            lg: 'px-6 py-3 text-base',
        };

        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                onClick={onClick}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;