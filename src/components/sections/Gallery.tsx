import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { GALLERY_IMAGES } from '../../constants/gallery';

export default function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goNext = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    };
    const goPrev = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };

    // Carousel scroll handlers
    const scrollToSlide = useCallback((index: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const slides = container.querySelectorAll('.carousel-slide');
        if (slides[index]) {
            slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
        setCarouselIndex(index);
    }, []);

    const carouselNext = () => {
        const next = Math.min(carouselIndex + 1, GALLERY_IMAGES.length - 1);
        scrollToSlide(next);
    };

    const carouselPrev = () => {
        const prev = Math.max(carouselIndex - 1, 0);
        scrollToSlide(prev);
    };

    // Track scroll position for dots
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        const handleScroll = () => {
            const slides = container.querySelectorAll('.carousel-slide');
            if (!slides.length) return;
            const containerLeft = container.scrollLeft;
            let closest = 0;
            let minDist = Infinity;
            slides.forEach((slide, i) => {
                const dist = Math.abs((slide as HTMLElement).offsetLeft - containerLeft);
                if (dist < minDist) {
                    minDist = dist;
                    closest = i;
                }
            });
            setCarouselIndex(closest);
        };
        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section id="galeria" style={{
                paddingTop: '6rem', paddingBottom: '6rem',
                background: 'linear-gradient(180deg, #0D1B3E 0%, #1A4A6E 100%)',
                position: 'relative',
            }}>
                {/* Subtle decorative elements */}
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                    <div style={{
                        position: 'absolute', top: '20%', right: '10%',
                        width: '300px', height: '300px',
                        background: 'radial-gradient(circle, rgba(94,196,198,0.08) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }} />
                </div>

                <div style={{
                    maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto',
                    paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center',
                    position: 'relative', zIndex: 1,
                }}>
                    <SectionHeading
                        label="Nuestro Consultorio"
                        title="Conocé nuestro espacio"
                        subtitle="Un equipo comprometido trabajando en instalaciones de primer nivel para brindarte la mejor atención."
                        light
                    />

                    {/* Desktop: Bento Grid (>= 1024px) */}
                    <div className="gallery-desktop-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1rem',
                    }}>
                        {GALLERY_IMAGES.map((image, index) => (
                            <AnimatedSection key={image.id} delay={index * 0.06}>
                                <motion.div
                                    className={`gallery-item ${image.span === 'wide' ? 'gallery-wide' : ''} ${image.span === 'tall' ? 'gallery-tall' : ''}`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        position: 'relative',
                                        borderRadius: '0.75rem',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        height: '100%',
                                        minHeight: image.span === 'tall' ? '100%' : '240px',
                                    }}
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: image.objectPosition || 'center',
                                            display: 'block',
                                            transition: 'transform 0.6s ease',
                                        }}
                                        className="gallery-img"
                                    />

                                    {/* Hover overlay — teal tint */}
                                    <div className="gallery-overlay" style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(94,196,198,0.3) 0%, rgba(94,196,198,0.08) 50%, transparent 100%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        padding: '1.25rem',
                                    }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                        }}>
                                            <p style={{
                                                color: '#ffffff',
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                            }}>
                                                {image.alt}
                                            </p>
                                            <div style={{
                                                width: '2.5rem', height: '2.5rem',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255,255,255,0.2)',
                                                backdropFilter: 'blur(4px)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0,
                                                marginLeft: '0.75rem',
                                            }}>
                                                <ZoomIn size={16} style={{ color: '#ffffff' }} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Mobile/Tablet: Carousel (< 1024px) */}
                    <div className="gallery-carousel-wrapper" style={{ position: 'relative' }}>
                        <div
                            ref={scrollRef}
                            className="carousel-container"
                            style={{ paddingBottom: '0.5rem' }}
                        >
                            {GALLERY_IMAGES.map((image, index) => (
                                <div
                                    key={image.id}
                                    className="carousel-slide"
                                    style={{
                                        borderRadius: '0.75rem',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        className="carousel-img"
                                        style={{
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: image.objectPosition || 'center',
                                            display: 'block',
                                            borderRadius: '0.75rem',
                                        }}
                                    />
                                    {/* Subtle gradient overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '40%',
                                        background: 'linear-gradient(to top, rgba(13,27,62,0.6) 0%, transparent 100%)',
                                        borderRadius: '0 0 0.75rem 0.75rem',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: '1rem',
                                    }}>
                                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', fontWeight: 500 }}>
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel arrows */}
                        <button
                            onClick={carouselPrev}
                            className="cursor-pointer"
                            style={{
                                position: 'absolute',
                                left: '-0.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '2.75rem',
                                height: '2.75rem',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(8px)',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                transition: 'all 0.2s',
                                opacity: carouselIndex === 0 ? 0.3 : 1,
                            }}
                            aria-label="Anterior"
                            disabled={carouselIndex === 0}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={carouselNext}
                            className="cursor-pointer"
                            style={{
                                position: 'absolute',
                                right: '-0.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '2.75rem',
                                height: '2.75rem',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(8px)',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                transition: 'all 0.2s',
                                opacity: carouselIndex === GALLERY_IMAGES.length - 1 ? 0.3 : 1,
                            }}
                            aria-label="Siguiente"
                            disabled={carouselIndex === GALLERY_IMAGES.length - 1}
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dots indicator */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            marginTop: '1.25rem',
                        }}>
                            {GALLERY_IMAGES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollToSlide(i)}
                                    className="transition-all duration-300 cursor-pointer"
                                    style={{
                                        width: i === carouselIndex ? '2rem' : '0.5rem',
                                        height: '0.5rem',
                                        borderRadius: '9999px',
                                        backgroundColor: i === carouselIndex ? '#5EC4C6' : 'rgba(255,255,255,0.25)',
                                        border: 'none',
                                        padding: 0,
                                    }}
                                    aria-label={`Imagen ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Responsive styles for gallery */}
                <style>{`
                    /* Desktop: show grid, hide carousel */
                    .gallery-desktop-grid { display: grid; }
                    .gallery-carousel-wrapper { display: none; }

                    @media (max-width: 1023px) {
                        /* Tablet/Mobile: hide grid, show carousel */
                        .gallery-desktop-grid { display: none !important; }
                        .gallery-carousel-wrapper { display: block !important; }

                        .carousel-img {
                            height: 340px;
                        }
                    }

                    @media (max-width: 767px) {
                        .carousel-img {
                            height: 280px;
                        }
                    }

                    @media (min-width: 1024px) {
                        .carousel-img {
                            height: 380px;
                        }
                    }
                `}</style>
            </section>

            {/* Lightbox Modal */}
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
                        {/* Close button */}
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
                                transition: 'all 0.2s',
                            }}
                            aria-label="Cerrar"
                        >
                            <X size={20} />
                        </button>

                        {/* Prev button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
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
                                transition: 'all 0.2s',
                            }}
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
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
                                transition: 'all 0.2s',
                            }}
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={lightboxIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    maxWidth: '90vw',
                                    maxHeight: '85vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src={GALLERY_IMAGES[lightboxIndex].src}
                                    alt={GALLERY_IMAGES[lightboxIndex].alt}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '80vh',
                                        objectFit: 'contain',
                                        borderRadius: '0.75rem',
                                        boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                                    }}
                                />
                                <p style={{
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '0.875rem',
                                    marginTop: '1rem',
                                    textAlign: 'center',
                                }}>
                                    {GALLERY_IMAGES[lightboxIndex].alt}
                                    <span style={{ color: 'rgba(255,255,255,0.4)', marginLeft: '0.75rem' }}>
                                        {lightboxIndex + 1} / {GALLERY_IMAGES.length}
                                    </span>
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
