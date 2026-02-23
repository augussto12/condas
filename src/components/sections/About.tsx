import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const stats = [
    { icon: Clock, value: '20+', label: 'Años de experiencia', color: '#5EC4C6' },
    { icon: Users, value: '5000+', label: 'Pacientes atendidos', color: '#C8A96E' },
    { icon: Award, value: '5', label: 'Especialidades', color: '#5EC4C6' },
    { icon: Heart, value: '100%', label: 'Dedicación', color: '#C8A96E' },
];

const highlights = [
    'Tecnología de vanguardia en cada tratamiento',
    'Equipo de profesionales altamente capacitados',
    'Ambiente cálido y confortable para el paciente',
    'Más de dos décadas de trayectoria y confianza',
];

export default function About() {
    return (
        <section id="nosotros" style={{
            paddingTop: '8rem', paddingBottom: '8rem',
            background: 'linear-gradient(180deg, #F8FAFB 0%, #EEF6F6 40%, #F4F0E8 100%)',
        }}>
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center' }}>
                <SectionHeading
                    label="Sobre Nosotros"
                    title="Un enfoque personalizado para la sonrisa perfecta"
                    subtitle="Consultorios Condas es un centro odontológico de confianza con más de 20 años de trayectoria. Ofrecemos el mejor servicio con profesionales altamente capacitados y tecnología de vanguardia."
                />

                {/* Centered paragraph */}
                <AnimatedSection>
                    <p className="text-text-secondary"
                        style={{ fontSize: '1.125rem', lineHeight: 1.75, maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '4rem' }}>
                        Nuestra misión es que cada paciente se sienta seguro para dar su mejor sonrisa.
                        Combinamos experiencia, calidez humana e innovación para brindarte una experiencia
                        odontológica única y de primer nivel.
                    </p>
                </AnimatedSection>

                {/* Centered highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: '1.25rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '5rem' }}>
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="bg-white rounded-xl border border-surface-dark"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', textAlign: 'left',
                                borderLeft: `3px solid ${i % 2 === 0 ? '#5EC4C6' : '#C8A96E'}`,
                            }}
                        >
                            <CheckCircle size={18} style={{ color: i % 2 === 0 ? '#5EC4C6' : '#C8A96E', flexShrink: 0 }} />
                            <span className="text-text-primary" style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Centered stats */}
                <div className="grid grid-cols-2 md:grid-cols-4"
                    style={{ gap: '1.5rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="bg-white rounded-2xl border border-surface-dark
                shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                            style={{ padding: '2rem', textAlign: 'center' }}
                        >
                            <div className="rounded-2xl flex items-center justify-center"
                                style={{
                                    width: '3.5rem', height: '3.5rem',
                                    marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.25rem',
                                    backgroundColor: `${stat.color}18`,
                                }}>
                                <stat.icon size={24} style={{ color: stat.color }} />
                            </div>
                            <div className="text-primary" style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>{stat.value}</div>
                            <div className="text-text-light" style={{ fontSize: '0.875rem' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
