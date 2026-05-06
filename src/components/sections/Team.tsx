import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ZoomIn, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { TEAM_MEMBERS } from '../../constants/team';
import { CONTACT_INFO } from '../../constants/navigation';

// Professional photos
import imgMariaInes from '../../assets/profesionales/DSC_1498.jpg';
import imgJuanPablo from '../../assets/profesionales/DSC_1512.jpg';
import imgJulieta from '../../assets/profesionales/DSC_1541.jpg';
import imgAugusto from '../../assets/profesionales/DSC_1545.jpg';
import imgGrupal from '../../assets/profesionales/DSC_1479.jpg';
import AnimatedSection from '../ui/AnimatedSection';

const photoMap: Record<string, string> = {
    'maria-ines': imgMariaInes,
    'juan-pablo': imgJuanPablo,
    'julieta': imgJulieta,
    'augusto': imgAugusto,
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const accentColors = ['#5EC4C6', '#C8A96E', '#5EC4C6', '#C8A96E', '#5EC4C6'];

function getProfessionalContactUrl(member: typeof TEAM_MEMBERS[number]) {
    if (!member.whatsappPhone) return CONTACT_INFO.whatsapp;

    const text = encodeURIComponent(`Hola, quiero consultar con ${member.name}.`);
    return `https://api.whatsapp.com/send/?phone=${member.whatsappPhone}&text=${text}&type=phone_number&app_absent=0`;
}

export default function Team() {
    const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

    return (
        <>
        <section id="equipo" style={{
            paddingTop: '6rem', paddingBottom: '6rem',
            background: '#ffffff',
        }}>
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center' }}>
                <SectionHeading
                    label="Nuestro Equipo"
                    title="Nuestro Equipo de Profesionales"
                    subtitle="Cinco profesionales de la misma familia, unidos por una mirada integral de la odontología y el compromiso de cuidar cada sonrisa con excelencia."
                />

                {/* Group photo banner */}
                <AnimatedSection>
                    <div
                        className="group"
                        onClick={() => setLightboxPhoto(imgGrupal)}
                        style={{
                            position: 'relative',
                            borderRadius: '1.25rem',
                            overflow: 'hidden',
                            marginBottom: '3rem',
                            boxShadow: '0 8px 30px rgba(11,29,58,0.1)',
                            border: '1px solid #EDF1F3',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={imgGrupal}
                            alt="Equipo completo de Consultorios Condas"
                            className="transition-transform duration-700 group-hover:scale-[1.03] team-group-photo"
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />

                        {/* Badge */}
                        <span className="rounded-full team-badge"
                            style={{
                                position: 'absolute',
                                top: '1.25rem',
                                left: '1.25rem',
                                padding: '0.5rem 1.25rem',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                backgroundColor: 'rgba(255,255,255,0.92)',
                                backdropFilter: 'blur(8px)',
                                color: '#5EC4C6',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            }}>
                            Nuestro Equipo
                        </span>

                        {/* Hover overlay */}
                        <div className="gallery-overlay" style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(11,29,58,0.5) 0%, transparent 50%)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            padding: '1.5rem',
                        }}>
                            <div style={{
                                width: '3rem', height: '3rem',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(4px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <ZoomIn size={18} style={{ color: '#ffffff' }} />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Row 1: 3 cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    style={{ gap: '1.5rem' }}
                >
                    {TEAM_MEMBERS.slice(0, 3).map((member, i) => (
                        <motion.div key={member.id} variants={itemVariants}>
                            <TeamCard member={member} accent={accentColors[i]} photo={photoMap[member.id]} onPhotoClick={setLightboxPhoto} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Row 2: 2 cards centered */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: '1.5rem', marginTop: '1.5rem', maxWidth: '672px', marginLeft: 'auto', marginRight: 'auto' }}
                >
                    {TEAM_MEMBERS.slice(3).map((member, i) => (
                        <motion.div key={member.id} variants={itemVariants}>
                            <TeamCard member={member} accent={accentColors[i + 3]} photo={photoMap[member.id]} onPhotoClick={setLightboxPhoto} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Responsive group photo styles */}
            <style>{`
                .team-group-photo {
                    height: 500px;
                }
                @media (max-width: 1024px) {
                    .team-group-photo {
                        height: 400px;
                    }
                }
                @media (max-width: 768px) {
                    .team-group-photo {
                        height: 300px;
                    }
                }
                @media (max-width: 480px) {
                    .team-group-photo {
                        height: 240px;
                    }
                }

                /* Badge responsive */
                @media (max-width: 768px) {
                    .team-badge {
                        font-size: 0.6rem !important;
                        padding: 0.25rem 0.65rem !important;
                        top: 0.65rem !important;
                        left: 0.65rem !important;
                        max-width: calc(100% - 1.3rem) !important;
                    }
                }
                @media (max-width: 480px) {
                    .team-badge {
                        font-size: 0.55rem !important;
                        padding: 0.2rem 0.5rem !important;
                        top: 0.5rem !important;
                        left: 0.5rem !important;
                    }
                }
            `}</style>
        </section>

        {/* Group photo lightbox */}
        <AnimatePresence>
            {lightboxPhoto && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setLightboxPhoto(null)}
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
                >
                    <button
                        onClick={() => setLightboxPhoto(null)}
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

                    <motion.img
                        key={lightboxPhoto}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        src={lightboxPhoto}
                        alt="Consultorios Condas"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '85vh',
                            objectFit: 'contain',
                            borderRadius: '0.75rem',
                            boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}

function TeamCard({ member, accent, photo, onPhotoClick }: {
    member: typeof TEAM_MEMBERS[number];
    accent: string;
    photo?: string;
    onPhotoClick: (src: string) => void;
}) {
    const contactUrl = getProfessionalContactUrl(member);

    return (
        <div className="group rounded-2xl overflow-hidden h-full border border-surface-dark
            shadow-sm hover:shadow-xl transition-all duration-500"
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* Photo area */}
            <div
                onClick={() => photo && onPhotoClick(photo)}
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '4 / 5',
                    cursor: photo ? 'pointer' : 'default',
                }}
            >
                {photo ? (
                    <>
                        <img
                            src={photo}
                            alt={member.name}
                            className="gallery-img transition-transform duration-700 group-hover:scale-105"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                            }}
                        />
                        {/* Gradient overlay at bottom for smooth transition */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '20%',
                            background: 'linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)',
                            pointerEvents: 'none',
                        }} />
                        {/* Hover overlay with zoom icon */}
                        <div className="gallery-overlay" style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(11,29,58,0.4) 0%, transparent 60%)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            padding: '1rem',
                        }}>
                            <div style={{
                                width: '2.5rem', height: '2.5rem',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(4px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <ZoomIn size={16} style={{ color: '#ffffff' }} />
                            </div>
                        </div>
                    </>
                ) : (
                    /* Fallback: decorative initial */
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${accent}15 0%, ${accent}08 100%)`,
                    }}>
                        <span className="font-serif font-bold"
                            style={{ fontSize: '5rem', color: accent, opacity: 0.4 }}>
                            {member.name.charAt(member.name.indexOf(' ') + 1)}
                        </span>
                    </div>
                )}

                {/* Specialty badge floating on top of the photo */}
                <span className="rounded-full team-badge"
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        padding: '0.375rem 1rem',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        backgroundColor: 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(8px)',
                        color: accent,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        maxWidth: 'calc(100% - 2rem)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}>
                    {member.specialty}
                </span>
            </div>

            {/* Info section */}
            <div style={{ padding: '1.5rem 1.75rem 2rem', textAlign: 'left' }}>
                <h3 className="font-serif text-primary font-bold"
                    style={{ fontSize: '1.375rem', marginBottom: '0.25rem' }}>
                    {member.name}
                </h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem', color: accent }}>
                    {member.role}
                </p>
                <p className="text-text-secondary"
                    style={{ fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {member.bio}
                </p>
                <a
                    href={contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                    style={{
                        width: '100%',
                        padding: '0.7rem 1rem',
                        fontSize: '0.85rem',
                        color: '#ffffff',
                        backgroundColor: accent,
                        boxShadow: `0 8px 20px ${accent}33`,
                    }}
                    aria-label={`Contactar a ${member.name} por WhatsApp`}
                >
                    <MessageCircle size={16} />
                    Contactar
                </a>
            </div>
        </div>
    );
}
