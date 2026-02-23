import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
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

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
                        ? 'backdrop-blur-xl shadow-lg'
                        : 'bg-transparent'}
        `}
                style={scrolled ? {
                    backgroundColor: 'rgba(240, 249, 249, 0.78)',
                    borderBottom: '1px solid rgba(94, 196, 198, 0.1)',
                    boxShadow: '0 4px 30px rgba(11, 29, 58, 0.06)',
                } : undefined}
            >
                <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                    <div className="flex items-center justify-between" style={{ height: '5rem' }}>
                        {/* Logo */}
                        <a
                            href="#inicio"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <img
                                src={logoSrc}
                                alt="Consultorios Condas"
                                style={{
                                    height: '3.5rem',
                                    width: 'auto',
                                    filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                                    transition: 'filter 0.5s ease',
                                }}
                            />
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center" style={{ gap: '0.25rem' }}>
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className={`font-medium rounded-lg transition-all duration-200 ${scrolled
                                        ? 'text-primary/70 hover:text-primary hover:bg-primary/5'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                        }`}
                                    style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
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
                                style={{ marginLeft: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}
                            >
                                <Phone size={16} />
                                Contactar
                            </a>
                        </nav>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`lg:hidden rounded-lg transition-colors ${scrolled ? 'text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10'
                                }`}
                            style={{ padding: '0.5rem' }}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setMobileOpen(false)}
                        />
                        <div className="absolute right-0 top-0 bottom-0 bg-primary shadow-2xl"
                            style={{ width: '18rem', padding: '2rem', paddingTop: '6rem' }}>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {NAV_LINKS.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        className="text-white/80 hover:text-white hover:bg-white/10
                      rounded-xl font-medium transition-all duration-200"
                                        style={{ padding: '0.75rem 1rem' }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={CONTACT_INFO.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all duration-300"
                                    style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
                                >
                                    <Phone size={16} />
                                    Contactar
                                </a>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
