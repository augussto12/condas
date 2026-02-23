import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: ReactNode;
    variant?: 'solid' | 'glass' | 'outline';
    hover?: boolean;
    className?: string;
}

const variantClasses: Record<string, string> = {
    solid: 'bg-white shadow-lg shadow-primary/5',
    glass: 'glass',
    outline: 'border border-surface-dark bg-white/50',
};

export default function Card({
    children,
    variant = 'solid',
    hover = true,
    className = '',
}: CardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -6, boxShadow: '0 20px 40px rgba(11, 29, 58, 0.12)' } : undefined}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`
        rounded-2xl overflow-hidden
        transition-all duration-300
        ${variantClasses[variant]}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
}
