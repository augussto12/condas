import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../constants/navigation';
import logoSrc from '../../assets/LOGO-CONDAS_Mesa-de-trabajo-1-copia-3-300x101.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            const scrollY = window.scrollY;
            document.body.style.top = `-${scrollY}px`;
            document.body.classList.add('menu-open');
        } else {
            const scrollY = document.body.style.top;
            document.body.classList.remove('menu-open');
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
        return () => {
            const scrollY = document.body.style.top;
            document.body.classList.remove('menu-open');
            document.body.style.top = '';
            if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
        };
    }, [mobileOpen]);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        setTimeout(() => {
            const el = document.querySelector(href);
            if (el) {
                // Offset calculation if header is fixed
                const headerOffset = window.innerWidth < 768 ? 68 : 80; // approximate header height
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const isHeaderScrolled = scrolled && !mobileOpen;

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`
          fixed top-0 left-0 right-0 z-[9999]
          transition-all duration-500
          ${isHeaderScrolled
                        ? 'backdrop-blur-xl shadow-lg'
                        : 'bg-transparent'}
        `}
                style={isHeaderScrolled ? {
                    backgroundColor: 'rgba(13, 27, 62, 0.96)',
                    borderBottom: '1px solid rgba(45, 212, 191, 0.15)',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                } : undefined}
            >
                <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                    <div className="flex items-center justify-between h-[4rem] md:h-[5rem]">
                        {/* Logo */}
                        <a
                            href="#inicio"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
                            style={{ display: 'flex', alignItems: 'center' }}
                            className={`transition-opacity duration-300 ${mobileOpen ? 'md:opacity-100 opacity-0' : 'opacity-100'}`}
                        >
                            <img
                                src={logoSrc}
                                alt="Consultorios Condas"
                                className="h-[2.75rem] md:h-[3.5rem] w-auto transition-all duration-300"
                                style={{
                                    filter: 'brightness(0) invert(1)',
                                }}
                            />
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center" style={{ gap: '0.25rem' }}>
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className={`font-medium rounded-lg transition-all duration-200 text-white/80 hover:text-white hover:bg-white/10`}
                                    style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={CONTACT_INFO.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-accent text-white font-semibold rounded-full hover:bg-accent-dark
                  transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40"
                                style={{ marginLeft: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.5rem', fontSize: '0.85rem' }}
                            >
                                <Phone size={15} />
                                Contactar
                            </a>
                        </nav>

                        {/* Mobile Toggle (CSS Morphing Hamburger) */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden relative w-[24px] h-[18px] flex flex-col justify-between items-center cursor-pointer border-none bg-transparent p-0 z-[70]"
                            aria-label="Toggle menu"
                        >
                            <span className={`absolute left-0 w-full h-[2px] rounded-full transition-all duration-300 ${mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                                }`} style={{ backgroundColor: '#ffffff' }} />

                            <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'
                                }`} style={{ backgroundColor: '#ffffff' }} />

                            <span className={`absolute left-0 w-full h-[2px] rounded-full transition-all duration-300 ${mobileOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                                }`} style={{ backgroundColor: '#ffffff' }} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Dark Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.85 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="fixed inset-0 bg-[#071225] z-[990] md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Right Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
                            className="fixed top-0 bottom-0 right-0 z-[999] flex flex-col md:hidden"
                            style={{
                                width: '75%',
                                maxWidth: '320px',
                                background: 'linear-gradient(180deg, #0D1B3E 0%, #0a1628 100%)',
                                borderLeft: '3px solid #2DD4BF',
                                boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
                            }}
                        >
                            {/* Drawer Header (Logo inside panel) */}
                            <div className="flex items-center h-[4.25rem] md:h-[5rem] pl-8">
                                <img
                                    src={logoSrc}
                                    alt="Consultorios Condas"
                                    className="h-[2.75rem] md:h-[3.5rem] w-auto"
                                    style={{
                                        filter: 'brightness(0) invert(1)',
                                    }}
                                />
                                {/* The X is provided by the header's morphing hamburger positioned exactly here */}
                            </div>

                            {/* Drawer Links - scrollable area */}
                            <div className="flex-1 overflow-y-auto overflow-x-hidden px-8 pt-4">
                                <nav className="flex flex-col">
                                    {NAV_LINKS.map((link, i) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                            className="mobile-nav-link"
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>

                            {/* Bottom Contact Info - fixed at bottom of drawer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                style={{
                                    padding: '1.25rem 2rem 2.5rem 2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                }}
                            >
                                <div className="flex items-center gap-3 text-white/70 text-sm">
                                    <Phone size={16} className="text-accent shrink-0" />
                                    <span>223 531-3208</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70 text-sm">
                                    <MapPin size={16} className="text-accent shrink-0" />
                                    <span>Mar del Plata, BA</span>
                                </div>

                                <a
                                    href={CONTACT_INFO.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300 flex items-center justify-center gap-2"
                                    style={{ padding: '0.35rem 0.875rem', alignSelf: 'flex-start', fontSize: '0.7rem', marginTop: '0.25rem' }}
                                >
                                    <Phone size={14} />
                                    Contactar
                                </a>
                            </motion.div>
                        </motion.div>
                    </>
                )
                }
            </AnimatePresence >

            {/* Styles */}
            < style > {`
                @media (max-width: 380px) {
                    .navbar-logo {
                        height: 2.5rem !important;
                    }
                }
                
                .mobile-nav-link {
                    display: flex;
                    align-items: center;
                    padding: 14px 0;
                    font-size: 1.1rem;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    color: #ffffff;
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    transition: color 0.2s ease;
                    position: relative;
                    text-decoration: none;
                    padding-left: 16px;
                }

                .mobile-nav-link::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #C9A96E;
                    opacity: 0;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }
                .mobile-nav-link:hover, .mobile-nav-link:active {
                    color: #2DD4BF;
                }
                .mobile-nav-link:hover::before, .mobile-nav-link:active::before {
                    opacity: 1;
                    transform: translateY(-50%) scale(1.2);
                }
                body.menu-open {
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                    touch-action: none;
                }
            `}</style >
        </>
    );
}
