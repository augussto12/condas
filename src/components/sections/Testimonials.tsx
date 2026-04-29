import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { TESTIMONIALS } from '../../constants/testimonials';

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [lastInteraction, setLastInteraction] = useState(Date.now());
    const total = TESTIMONIALS.length;
    const touchStart = useRef<number | null>(null);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((c) => (c + 1) % total);
        setLastInteraction(Date.now());
    }, [total]);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((c) => (c - 1 + total) % total);
        setLastInteraction(Date.now());
    }, [total]);

    // Auto-advance every 10s
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((c) => (c + 1) % total);
        }, 10000);
        return () => clearInterval(timer);
    }, [lastInteraction, total]);

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
        <section id="testimonios" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#F0FAFA' }}>
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center' }}>
                <SectionHeading
                    label="Testimonios & Referencias"
                    title="Cambiando vidas, una sonrisa a la vez"
                    subtitle="Historias reales de pacientes que confiaron en nosotros para transform su sonrisa."
                />

                {/* Carousel container */}
                <div className="testimonial-carousel" style={{ position: 'relative', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
                    {/* Arrows — repositioned on mobile */}
                    <button
                        onClick={prev}
                        className="bg-white hover:bg-accent hover:text-white text-primary transition-all duration-300 shadow-md rounded-full cursor-pointer testimonial-arrow testimonial-arrow-left"
                        style={{
                            position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                            width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            zIndex: 10, border: '1px solid #EDF1F3',
                        }}
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        className="bg-white hover:bg-accent hover:text-white text-primary transition-all duration-300 shadow-md rounded-full cursor-pointer testimonial-arrow testimonial-arrow-right"
                        style={{
                            position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                            width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            zIndex: 10, border: '1px solid #EDF1F3',
                        }}
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Card — with swipe support */}
                    <div
                        className="testimonial-card-wrapper"
                        style={{ overflow: 'hidden', touchAction: 'pan-y' }}
                        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
                        onTouchEnd={(e) => {
                            if (touchStart.current === null) return;
                            const diff = touchStart.current - e.changedTouches[0].clientX;
                            if (Math.abs(diff) > 50) {
                                if (diff > 0) next();
                                else prev();
                            }
                            touchStart.current = null;
                        }}
                    >
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="bg-white rounded-2xl border border-surface-dark shadow-sm testimonial-card"
                                style={{ textAlign: 'left' }}
                            >
                                {/* Quote + Stars row */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <div className="rounded-xl bg-accent/10 flex items-center justify-center"
                                        style={{ width: '3rem', height: '3rem' }}>
                                        <Quote size={20} className="text-accent" />
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} size={16} className="fill-gold text-gold" />
                                        ))}
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-text-secondary" style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="border-t border-surface-dark testimonial-author"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div className="bg-gradient-to-br from-accent to-accent-dark rounded-full
                      flex items-center justify-center text-white font-bold"
                                            style={{ width: '2.5rem', height: '2.5rem', fontSize: '0.9rem' }}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <p className="text-primary" style={{ fontWeight: 600, fontSize: '0.9rem' }}>{testimonial.name}</p>
                                    </div>
                                    <Badge>{testimonial.treatment}</Badge>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots indicator with mobile arrows */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                        {/* Mobile Prev Arrow */}
                        <button
                            onClick={prev}
                            className="bg-white hover:bg-accent hover:text-white text-primary transition-all duration-300 shadow-sm rounded-full cursor-pointer testimonial-mobile-arrow"
                            style={{
                                width: '2.25rem', height: '2.25rem',
                                display: 'none', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid #EDF1F3',
                            }}
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        {/* Dots */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { 
                                        setDirection(i > current ? 1 : -1); 
                                        setCurrent(i); 
                                        setLastInteraction(Date.now());
                                    }}
                                    className="transition-all duration-300 cursor-pointer"
                                    style={{
                                        width: i === current ? '2rem' : '0.5rem',
                                        height: '0.5rem',
                                        borderRadius: '9999px',
                                        backgroundColor: i === current ? '#5EC4C6' : '#D1E0E0',
                                        border: 'none',
                                        padding: 0,
                                    }}
                                    aria-label={`Testimonio ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Mobile Next Arrow */}
                        <button
                            onClick={next}
                            className="bg-white hover:bg-accent hover:text-white text-primary transition-all duration-300 shadow-sm rounded-full cursor-pointer testimonial-mobile-arrow"
                            style={{
                                width: '2.25rem', height: '2.25rem',
                                display: 'none', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid #EDF1F3',
                            }}
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive styles for testimonials */}
            <style>{`
                .testimonial-arrow-left { left: -3.5rem; }
                .testimonial-arrow-right { right: -3.5rem; }
                .testimonial-card { padding: 2.5rem; }
                .testimonial-card-wrapper { min-height: 320px; }

                @media (max-width: 860px) {
                    .testimonial-arrow-left { left: -0.5rem; }
                    .testimonial-arrow-right { right: -0.5rem; }
                    .testimonial-arrow {
                        width: 2.5rem !important;
                        height: 2.5rem !important;
                        background: rgba(255,255,255,0.9) !important;
                    }
                }

                @media (max-width: 645px) {
                    /* Hide absolute-positioned arrows, show inline mobile arrows */
                    .testimonial-arrow {
                        display: none !important;
                    }
                    .testimonial-mobile-arrow {
                        display: flex !important;
                    }
                    .testimonial-card { padding: 1.5rem !important; }
                    .testimonial-card-wrapper { min-height: auto; }
                    .testimonial-author {
                        flex-direction: column;
                        align-items: flex-start !important;
                        gap: 0.75rem;
                    }
                }

                @media (max-width: 380px) {
                    .testimonial-card { padding: 1.25rem !important; }
                }
            `}</style>
        </section>
    );
}
