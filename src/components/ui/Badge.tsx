interface BadgeProps {
    children: React.ReactNode;
    variant?: 'accent' | 'gold' | 'primary';
    className?: string;
}

const variantClasses: Record<string, string> = {
    accent: 'bg-accent/10 text-accent',
    gold: 'bg-gold/10 text-gold-dark',
    primary: 'bg-primary/10 text-primary',
};

export default function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
    return (
        <span
            className={`
        inline-flex items-center px-3 py-1
        text-xs font-semibold rounded-full uppercase tracking-wider
        ${variantClasses[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}
