import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const variantClasses: Record<string, string> = {
    primary:
        'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25 hover:shadow-accent/40',
    secondary:
        'bg-gold text-white hover:bg-gold-dark shadow-lg shadow-gold/25 hover:shadow-gold/40',
    outline:
        'border-2 border-white text-white hover:bg-white hover:text-primary',
    ghost:
        'text-accent hover:bg-accent/10',
};

const sizeStyles: Record<string, CSSProperties> = {
    sm: { padding: '0.625rem 1.5rem', fontSize: '0.875rem' },
    md: { padding: '0.875rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '0.75rem 1.5rem', fontSize: '1.125rem' },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', children, style, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`
          inline-flex items-center justify-center gap-2
          font-semibold rounded-full
          transition-all duration-300 cursor-pointer
          ${variantClasses[variant]}
          ${className}
        `}
                style={{ ...sizeStyles[size], ...style }}
                {...(props as any)}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
export default Button;

