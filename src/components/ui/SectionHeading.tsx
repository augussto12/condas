import { motion } from 'framer-motion';

interface SectionHeadingProps {
    label?: string;
    title: string;
    subtitle?: string;
    light?: boolean;
}

export default function SectionHeading({
    label,
    title,
    subtitle,
    light = false,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '768px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '5rem' }}
        >
            {label && (
                <span
                    style={{ display: 'inline-block', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}
                    className={light ? 'text-accent-light' : 'text-accent'}
                >
                    {label}
                </span>
            )}
            <h2
                style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
                className={`font-serif ${light ? 'text-white' : 'text-primary'}`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    style={{ marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: 1.75, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}
                    className={light ? 'text-white/70' : 'text-text-secondary'}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
