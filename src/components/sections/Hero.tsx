import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

// Animated counter hook
function useCounter(target: number, duration = 2000) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const steps = 60;
        const increment = target / steps;
        const stepTime = duration / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepTime);
        return () => clearInterval(timer);
    }, [started, target, duration]);

    return { count, ref };
}

const stats = [
    { target: 20, suffix: '+', label: 'Años' },
    { target: 5000, suffix: '+', label: 'Pacientes' },
    { target: 5, suffix: '', label: 'Profesionales' },
];

function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
    const { count, ref } = useCounter(target, target > 100 ? 2500 : 1500);
    return (
        <div ref={ref} style={{ textAlign: 'center' }}>
            <div className="font-bold text-accent" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                {count}{suffix}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{label}</div>
        </div>
    );
}

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    // Parallax: background moves slower than content
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const scrollTo = (id: string) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={sectionRef}
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Parallax background layer */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0"
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />

                {/* Decorative orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
                </div>

                {/* Grid pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        opacity: 0.03,
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </motion.div>

            {/* Content with slight parallax */}
            <motion.div
                style={{ y: contentY, opacity }}
                className="relative z-10"
            >
                <div style={{ maxWidth: '896px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-accent" style={{
                            display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px',
                            backgroundColor: 'rgba(94,196,198,0.15)', fontSize: '0.875rem', fontWeight: 500,
                            marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase',
                        }}>
                            Centro Odontológico de Excelencia
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-serif font-bold text-white"
                        style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}
                    >
                        Tu Sonrisa
                        <br />
                        <span className="gradient-text">Habla de Vos</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2.5rem', lineHeight: 1.7 }}
                    >
                        Servicios especializados en ortodoncia, endodoncia, periodoncia,
                        estética dental, cirugía bucal, implantes y prótesis.
                        Más de 20 años transformando sonrisas.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
                    >
                        <Button
                            size="lg"
                            onClick={() => scrollTo('#turnos')}
                        >
                            Pedir Turno
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollTo('#servicios')}
                        >
                            Nuestros Servicios
                        </Button>
                    </motion.div>

                    {/* Animated Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-3"
                        style={{ marginTop: '5rem', gap: '2rem', maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto' }}
                    >
                        {stats.map((stat) => (
                            <AnimatedStat key={stat.label} {...stat} />
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute"
                style={{ bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
            >
                <motion.button
                    onClick={() => scrollTo('#servicios')}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="cursor-pointer"
                    style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s', border: 'none', background: 'none' }}
                    aria-label="Scroll down"
                >
                    <ChevronDown size={28} />
                </motion.button>
            </motion.div>
        </section>
    );
}
