import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { TESTIMONIALS } from '../../constants/testimonials';

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const total = TESTIMONIALS.length;

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((c) => (c + 1) % total);
    }, [total]);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((c) => (c - 1 + total) % total);
    }, [total]);

    // Auto-advance every 5s
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const testimonial = TESTIMONIALS[current];

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <section id="testimonios" style={{ paddingTop: '8rem', paddingBottom: '8rem', backgroundColor: '#F8FAFB' }}>
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center' }}>
                <SectionHeading
                    label="Testimonios & Referencias"
                    title="Cambiando vidas, una sonrisa a la vez"
                    subtitle="Historias reales de pacientes que confiaron en nosotros para transformar su sonrisa."
                />

                {/* Carousel container */}
                <div style={{ position: 'relative', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
                    {/* Arrows */}
                    <button
                        onClick={prev}
                        className="bg-white hover:bg-accent hover:text-white text-primary transition-all duration-300 shadow-md rounded-full cursor-pointer"
                        style={{
                            position: 'absolute', left: '-3.5rem', top: '50%', transform: 'translateY(-50%)',
                            width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            zIndex: 10, border: '1px solid #EDF1F3',
                        }}
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        className="bg-white hover:bg-accent hover:text-white text-primary transition-all duration-300 shadow-md rounded-full cursor-pointer"
                        style={{
                            position: 'absolute', right: '-3.5rem', top: '50%', transform: 'translateY(-50%)',
                            width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            zIndex: 10, border: '1px solid #EDF1F3',
                        }}
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Card */}
                    <div style={{ overflow: 'hidden', minHeight: '320px' }}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="bg-white rounded-2xl border border-surface-dark shadow-sm"
                                style={{ padding: '3rem', textAlign: 'left' }}
                            >
                                {/* Quote + Stars row */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                    <div className="rounded-xl bg-accent/10 flex items-center justify-center"
                                        style={{ width: '3.5rem', height: '3.5rem' }}>
                                        <Quote size={22} className="text-accent" />
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} size={18} className="fill-gold text-gold" />
                                        ))}
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-text-secondary" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="border-t border-surface-dark"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div className="bg-gradient-to-br from-accent to-accent-dark rounded-full
                      flex items-center justify-center text-white font-bold"
                                            style={{ width: '3rem', height: '3rem', fontSize: '1rem' }}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <p className="text-primary" style={{ fontWeight: 600 }}>{testimonial.name}</p>
                                    </div>
                                    <Badge>{testimonial.treatment}</Badge>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots indicator */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                className="transition-all duration-300 cursor-pointer"
                                style={{
                                    width: i === current ? '2rem' : '0.5rem',
                                    height: '0.5rem',
                                    borderRadius: '9999px',
                                    backgroundColor: i === current ? '#5EC4C6' : '#EDF1F3',
                                    border: 'none',
                                    padding: 0,
                                }}
                                aria-label={`Testimonio ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
