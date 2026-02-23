import { motion } from 'framer-motion';
import {
    GitBranch,
    Zap,
    Shield,
    Sparkles,
    Crosshair,
    Gem,
    type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { SERVICES } from '../../constants/services';

const iconMap: Record<string, LucideIcon> = {
    GitBranch,
    Zap,
    Shield,
    Sparkles,
    Crosshair,
    Gem,
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
    return (
        <section id="servicios" style={{
            paddingTop: '8rem', paddingBottom: '8rem',
            background: 'linear-gradient(180deg, #ffffff 0%, #F0F9F9 50%, #F8FAFB 100%)',
        }}>
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <SectionHeading
                    label="Nuestros Servicios"
                    title="Servicios especializados para tu sonrisa"
                    subtitle="Contamos con profesionales altamente capacitados en cada área de la odontología moderna."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    style={{ gap: '2rem' }}
                >
                    {SERVICES.map((service, index) => {
                        const Icon = iconMap[service.icon];
                        // Alternate subtle top border colors
                        const borderColors = ['#5EC4C6', '#C8A96E', '#5EC4C6', '#C8A96E', '#5EC4C6', '#C8A96E'];
                        return (
                            <motion.div key={service.id} variants={itemVariants}>
                                <div className="group bg-white rounded-2xl border border-surface-dark h-full
                  shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    style={{
                                        padding: '2.5rem', textAlign: 'left',
                                        borderTop: `3px solid ${borderColors[index % borderColors.length]}`,
                                    }}>
                                    <div className="rounded-2xl flex items-center justify-center
                    group-hover:scale-110 transition-all duration-300"
                                        style={{
                                            width: '4rem', height: '4rem', marginBottom: '2rem',
                                            backgroundColor: index % 2 === 0 ? 'rgba(94,196,198,0.12)' : 'rgba(200,169,110,0.12)',
                                        }}>
                                        <Icon
                                            size={28}
                                            className="transition-colors duration-300"
                                            style={{ color: index % 2 === 0 ? '#5EC4C6' : '#C8A96E' }}
                                        />
                                    </div>
                                    <h3 className="font-serif font-bold text-primary"
                                        style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-text-secondary"
                                        style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                                        {service.description}
                                    </p>
                                    <span className="font-semibold inline-flex items-center
                    group-hover:gap-3 transition-all duration-300 cursor-pointer"
                                        style={{ fontSize: '0.875rem', gap: '0.375rem', color: index % 2 === 0 ? '#5EC4C6' : '#C8A96E' }}>
                                        Conocer más
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            className="transition-transform duration-300 group-hover:translate-x-1">
                                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
