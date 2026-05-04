import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const stats = [
    { icon: Clock, value: '20+', label: 'Años de experiencia', color: '#5EC4C6' },
    { icon: Users, value: '5000+', label: 'Pacientes atendidos', color: '#C8A96E' },
    { icon: Award, value: '8', label: 'Especialidades', color: '#5EC4C6' },
    { icon: Heart, value: '100%', label: 'Dedicación', color: '#C8A96E' },
];

const highlights = [
    'Sin derivaciones externas: todo en un solo lugar',
    'Un solo equipo con visión global de tu tratamiento',
    'Sinergia real entre especialistas',
    'Más de dos décadas de trayectoria y confianza',
];

export default function About() {
    return (
        <section id="nosotros" style={{
            paddingTop: '6rem', paddingBottom: '6rem',
            background: 'linear-gradient(180deg, #10224A 0%, #1A4A6E 100%)',
            position: 'relative',
        }}>
            {/* Subtle decorative elements */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '15%', right: '-5%',
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(94,196,198,0.06) 0%, rgba(94,196,198,0) 70%)',
                    borderRadius: '50%',
                }} />
                <div style={{
                    position: 'absolute', bottom: '15%', left: '-5%',
                    width: '300px', height: '300px',
                    background: 'radial-gradient(circle, rgba(200,169,110,0.05) 0%, rgba(200,169,110,0) 70%)',
                    borderRadius: '50%',
                }} />
            </div>

            <div style={{
                maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto',
                paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center',
                position: 'relative', zIndex: 1,
            }}>
                <SectionHeading
                    label="Sobre Nosotros"
                    title="Tu tratamiento comienza y termina acá"
                    subtitle="En CONDAS entendemos que tu salud bucal no puede esperar. Con más de dos décadas de trayectoria, nos hemos consolidado como un centro de referencia donde la experiencia y la tecnología se unen para cuidar de vos y de tu familia."
                    light
                />

                {/* Centered paragraph */}
                <AnimatedSection>
                    <p style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1.125rem', lineHeight: 1.75,
                        maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3.5rem',
                    }}>
                        Creemos que la Rehabilitación Oral de alta complejidad solo es posible cuando existe una sinergia real entre especialistas.
                        Nuestro mayor diferencial es tu tranquilidad: acá no existen las derivaciones externas. Desde la primera consulta hasta la rehabilitación más compleja o la atención dedicada de los más pequeños, todo sucede en nuestras instalaciones.
                    </p>
                </AnimatedSection>

                {/* Centered highlights — dark theme */}
                <div className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: '1rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '4rem' }}>
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="rounded-xl"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                padding: '1rem',
                                textAlign: 'left',
                                backgroundColor: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderLeft: `3px solid ${i % 2 === 0 ? '#5EC4C6' : '#C8A96E'}`,
                            }}
                        >
                            <CheckCircle size={18} style={{ color: i % 2 === 0 ? '#5EC4C6' : '#C8A96E', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Centered stats — dark theme */}
                <div className="grid grid-cols-2 md:grid-cols-4"
                    style={{ gap: '0.75rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="about-stat-card rounded-2xl hover:-translate-y-1 transition-all duration-300"
                            style={{
                                padding: '1.5rem 1rem', textAlign: 'center',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <div className="rounded-2xl flex items-center justify-center about-stat-icon"
                                style={{
                                    width: '3rem', height: '3rem',
                                    marginLeft: 'auto', marginRight: 'auto', marginBottom: '0.75rem',
                                    backgroundColor: `${stat.color}20`,
                                }}>
                                <stat.icon size={20} style={{ color: stat.color }} />
                            </div>
                            <div className="about-stat-value" style={{ fontWeight: 700, marginBottom: '0.25rem', color: '#ffffff' }}>{stat.value}</div>
                            <div className="about-stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Responsive styles for About stats */}
            <style>{`
                .about-stat-value {
                    font-size: clamp(1.1rem, 4vw, 1.5rem);
                }
                .about-stat-label {
                    font-size: clamp(0.7rem, 2vw, 0.85rem);
                }
                @media (max-width: 480px) {
                    .about-stat-card {
                        padding: 1rem 0.75rem !important;
                    }
                    .about-stat-icon {
                        width: 2.5rem !important;
                        height: 2.5rem !important;
                        margin-bottom: 0.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
