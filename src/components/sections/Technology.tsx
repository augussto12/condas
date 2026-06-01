import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MonitorCog, ScanLine, Sparkles, X, ZoomIn } from 'lucide-react';
import type { CSSProperties, KeyboardEvent } from 'react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import scannerTreatment from '../../assets/maquinas/DSC_1437.jpg';
import digitalRadiography from '../../assets/maquinas/DSC_1490.jpg';
import scannerStation from '../../assets/maquinas/DSC_1527.jpg';

const technologies = [
    {
        title: 'Escáner intraoral 3D',
        caption: 'Captura digital de alta precisión para diagnósticos, restauraciones y planificación de tratamientos.',
        image: scannerTreatment,
        icon: ScanLine,
        accent: '#5EC4C6',
    },
    {
        title: 'Radiografía digital',
        caption: 'Imágenes nítidas al instante para evaluar cada caso con mayor detalle y seguridad clínica.',
        image: digitalRadiography,
        icon: MonitorCog,
        accent: '#C8A96E',
    },
    {
        title: 'Flujo digital odontológico',
        caption: 'Tecnología de última generación integrada al consultorio para tratamientos más precisos y confortables.',
        image: scannerStation,
        icon: Sparkles,
        accent: '#5EC4C6',
    },
];

export default function Technology() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const goNext = () => {
        setLightboxIndex((current) => current === null ? current : (current + 1) % technologies.length);
    };
    const goPrev = () => {
        setLightboxIndex((current) => current === null ? current : (current - 1 + technologies.length) % technologies.length);
    };

    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (event: globalThis.KeyboardEvent) => {
            if (event.key === 'Escape') closeLightbox();
            if (event.key === 'ArrowRight') goNext();
            if (event.key === 'ArrowLeft') goPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openLightbox(index);
        }
    };

    return (
        <>
            <section id="tecnologia" style={{
                paddingTop: '6rem', paddingBottom: '6rem',
                background: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto',
                    paddingLeft: '1.5rem', paddingRight: '1.5rem',
                    position: 'relative', zIndex: 1,
                }}>
                    <SectionHeading
                        label="Tecnología"
                        title="Equipamiento digital de última generación"
                        subtitle="Incorporamos tecnología avanzada para lograr diagnósticos más precisos, tratamientos planificados y una experiencia más cómoda en cada visita."
                    />

                    <div className="technology-grid">
                        {technologies.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <AnimatedSection key={item.title} delay={index * 0.08}>
                                    <motion.article
                                        className="technology-card"
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                        style={{ '--accent': item.accent } as CSSProperties}
                                        onClick={() => openLightbox(index)}
                                        onKeyDown={(event) => handleCardKeyDown(event, index)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Ver imagen de ${item.title}`}
                                    >
                                        <div className="technology-image-wrap">
                                            <motion.img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                className="technology-image"
                                                whileHover={{ scale: 1.06 }}
                                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                            />
                                            <div className="technology-image-overlay" />
                                            <div className="technology-icon">
                                                <Icon size={20} />
                                            </div>
                                            <div className="technology-zoom">
                                                <ZoomIn size={18} />
                                            </div>
                                            <span className="technology-kicker">Precision digital</span>
                                        </div>

                                        <div className="technology-caption">
                                            <h3>{item.title}</h3>
                                            <p>{item.caption}</p>
                                        </div>
                                    </motion.article>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>

                <style>{`
                .technology-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 1.25rem;
                }

                .technology-card {
                    height: 100%;
                    overflow: hidden;
                    border-radius: 0.75rem;
                    background: #ffffff;
                    border: 1px solid #edf1f3;
                    box-shadow: 0 18px 45px rgba(11, 29, 58, 0.09);
                    position: relative;
                    cursor: pointer;
                    outline: none;
                }

                .technology-card::after {
                    content: '';
                    position: absolute;
                    inset: auto 1rem 0;
                    height: 3px;
                    border-radius: 999px 999px 0 0;
                    background: var(--accent);
                    transform: scaleX(0.35);
                    transform-origin: center;
                    transition: transform 0.3s ease;
                }

                .technology-card:hover::after {
                    transform: scaleX(1);
                }

                .technology-card:focus-visible {
                    box-shadow: 0 0 0 3px rgba(94,196,198,0.3), 0 18px 45px rgba(11, 29, 58, 0.09);
                }

                .technology-image-wrap {
                    position: relative;
                    aspect-ratio: 4 / 5;
                    overflow: hidden;
                    background: #10224A;
                }

                .technology-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .technology-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(11,29,58,0.02) 35%, rgba(11,29,58,0.68) 100%);
                    pointer-events: none;
                }

                .technology-icon {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    width: 2.75rem;
                    height: 2.75rem;
                    border-radius: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    background: color-mix(in srgb, var(--accent) 82%, #10224A);
                    box-shadow: 0 12px 28px rgba(11,29,58,0.22);
                }

                .technology-zoom {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    width: 2.75rem;
                    height: 2.75rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    background: rgba(255,255,255,0.16);
                    border: 1px solid rgba(255,255,255,0.22);
                    backdrop-filter: blur(10px);
                    opacity: 0;
                    transform: translateY(-6px) scale(0.95);
                    transition: opacity 0.25s ease, transform 0.25s ease, background-color 0.25s ease;
                }

                .technology-card:hover .technology-zoom,
                .technology-card:focus-visible .technology-zoom {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .technology-zoom:hover {
                    background: rgba(255,255,255,0.24);
                }

                .technology-kicker {
                    position: absolute;
                    left: 1rem;
                    bottom: 1rem;
                    display: inline-flex;
                    align-items: center;
                    padding: 0.35rem 0.75rem;
                    border-radius: 999px;
                    color: #ffffff;
                    background: rgba(255,255,255,0.16);
                    border: 1px solid rgba(255,255,255,0.22);
                    backdrop-filter: blur(10px);
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }

                .technology-caption {
                    padding: 1.25rem 1.25rem 1.5rem;
                    text-align: left;
                }

                .technology-caption h3 {
                    margin: 0 0 0.625rem;
                    color: #0B1D3A;
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: clamp(1.05rem, 2vw, 1.25rem);
                    font-weight: 700;
                    line-height: 1.2;
                }

                .technology-caption p {
                    margin: 0;
                    color: #5D6B78;
                    font-size: 0.9rem;
                    line-height: 1.65;
                }

                @media (max-width: 900px) {
                    .technology-grid {
                        grid-template-columns: 1fr;
                        max-width: 560px;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .technology-image-wrap {
                        aspect-ratio: 16 / 10;
                    }
                }

                @media (max-width: 480px) {
                    .technology-caption {
                        padding: 1rem 1rem 1.25rem;
                    }

                    .technology-kicker {
                        font-size: 0.66rem;
                    }

                    .technology-zoom {
                        opacity: 1;
                        transform: none;
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                }
            `}</style>
            </section>

            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 9999,
                            backgroundColor: 'rgba(11,29,58,0.95)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                        }}
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="cursor-pointer"
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(8px)',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                            }}
                            aria-label="Cerrar"
                        >
                            <X size={20} />
                        </button>

                        <button
                            onClick={(event) => { event.stopPropagation(); goPrev(); }}
                            className="cursor-pointer"
                            style={{
                                position: 'absolute',
                                left: '1.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(8px)',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                            }}
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={(event) => { event.stopPropagation(); goNext(); }}
                            className="cursor-pointer"
                            style={{
                                position: 'absolute',
                                right: '1.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(8px)',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                            }}
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={20} />
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={lightboxIndex}
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.28 }}
                                onClick={(event) => event.stopPropagation()}
                                style={{
                                    maxWidth: '90vw',
                                    maxHeight: '86vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src={technologies[lightboxIndex].image}
                                    alt={technologies[lightboxIndex].title}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '78vh',
                                        objectFit: 'contain',
                                        borderRadius: '0.75rem',
                                        boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                                    }}
                                />
                                <div style={{
                                    color: 'rgba(255,255,255,0.82)',
                                    marginTop: '1rem',
                                    textAlign: 'center',
                                    maxWidth: '640px',
                                }}>
                                    <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>
                                        {technologies[lightboxIndex].title}
                                        <span style={{ color: 'rgba(255,255,255,0.42)', marginLeft: '0.75rem', fontWeight: 500 }}>
                                            {lightboxIndex + 1} / {technologies.length}
                                        </span>
                                    </p>
                                    <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                                        {technologies[lightboxIndex].caption}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
