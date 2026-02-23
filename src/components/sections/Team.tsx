import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { TEAM_MEMBERS } from '../../constants/team';

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

// Alternating gradient tints for cards
const cardGradients = [
    'linear-gradient(135deg, rgba(94,196,198,0.06) 0%, rgba(200,169,110,0.04) 100%)',
    'linear-gradient(135deg, rgba(200,169,110,0.06) 0%, rgba(94,196,198,0.04) 100%)',
    'linear-gradient(135deg, rgba(94,196,198,0.04) 0%, rgba(11,29,58,0.04) 100%)',
    'linear-gradient(135deg, rgba(11,29,58,0.04) 0%, rgba(94,196,198,0.06) 100%)',
    'linear-gradient(135deg, rgba(200,169,110,0.04) 0%, rgba(11,29,58,0.04) 100%)',
];

const accentColors = ['#5EC4C6', '#C8A96E', '#5EC4C6', '#C8A96E', '#5EC4C6'];

export default function Team() {
    return (
        <section id="equipo" style={{
            paddingTop: '8rem', paddingBottom: '8rem',
            background: 'linear-gradient(180deg, #ffffff 0%, #F0F4F8 50%, #F8FAFB 100%)',
        }}>
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center' }}>
                <SectionHeading
                    label="Nuestro Equipo"
                    title="Conocé a nuestros profesionales"
                    subtitle="Un equipo dedicado a transformar tu sonrisa con excelencia y calidez humana."
                />

                {/* Row 1: 3 cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    style={{ gap: '2rem' }}
                >
                    {TEAM_MEMBERS.slice(0, 3).map((member, i) => (
                        <motion.div key={member.id} variants={itemVariants}>
                            <TeamCard member={member} gradient={cardGradients[i]} accent={accentColors[i]} />
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
                    style={{ gap: '2rem', marginTop: '2rem', maxWidth: '672px', marginLeft: 'auto', marginRight: 'auto' }}
                >
                    {TEAM_MEMBERS.slice(3).map((member, i) => (
                        <motion.div key={member.id} variants={itemVariants}>
                            <TeamCard member={member} gradient={cardGradients[i + 3]} accent={accentColors[i + 3]} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TeamCard({ member, gradient, accent }: {
    member: typeof TEAM_MEMBERS[number];
    gradient: string;
    accent: string;
}) {
    return (
        <div className="group rounded-2xl overflow-hidden h-full" style={{ textAlign: 'left' }}>
            <div className="border border-surface-dark rounded-2xl h-full
        flex flex-col justify-end hover:shadow-lg transition-all duration-500"
                style={{
                    padding: '2.5rem',
                    minHeight: '320px',
                    background: gradient,
                    borderTop: `3px solid ${accent}`,
                    position: 'relative',
                }}>
                {/* Decorative initial */}
                <div className="rounded-full flex items-center justify-center
          group-hover:scale-110 transition-all duration-500"
                    style={{
                        position: 'absolute', top: '2rem', right: '2rem', width: '5rem', height: '5rem',
                        backgroundColor: `${accent}15`,
                    }}>
                    <span className="font-serif font-bold" style={{ fontSize: '1.875rem', color: accent }}>
                        {member.name.charAt(member.name.indexOf(' ') + 1)}
                    </span>
                </div>

                {/* Specialty badge */}
                <span className="rounded-full"
                    style={{
                        display: 'inline-block', width: 'fit-content',
                        padding: '0.375rem 1rem', fontSize: '0.75rem', fontWeight: 600,
                        letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem',
                        backgroundColor: `${accent}15`, color: accent,
                    }}>
                    {member.specialty}
                </span>

                <h3 className="font-serif text-primary font-bold" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    {member.name}
                </h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem', color: accent }}>{member.role}</p>
                <p className="text-text-secondary" style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {member.bio}
                </p>

                <div className="font-semibold group-hover:gap-3 transition-all duration-300 cursor-pointer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: accent }}>
                    Conocer más
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
            </div>
        </div>
    );
}
