import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../constants/navigation';
import logoSrc from '../../assets/LOGO-CONDAS_Mesa-de-trabajo-1-copia-3-300x101.png';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ backgroundColor: '#0B1D3A', color: '#ffffff' }}>
            {/* Main Footer */}
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '4rem' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img
                                src={logoSrc}
                                alt="Consultorios Condas"
                                style={{ height: '3.5rem', width: 'auto', filter: 'brightness(0) invert(1)' }}
                            />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                            Centro Odontológico de excelencia. Tu sonrisa habla de vos.
                            Más de 20 años transformando sonrisas con tecnología de vanguardia.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Navegación
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href}
                                        className="hover:text-accent transition-colors"
                                        style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Contacto
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>
                                <a href={`tel:${CONTACT_INFO.phone}`}
                                    className="hover:text-accent transition-colors"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                                    <Phone size={16} />
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONTACT_INFO.email}`}
                                    className="hover:text-accent transition-colors"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                                    <Mail size={16} />
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                            <li>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                                    <MapPin size={16} style={{ flexShrink: 0 }} />
                                    {CONTACT_INFO.address}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Seguínos
                        </h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a
                                href={CONTACT_INFO.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-accent hover:scale-110 transition-all duration-300 rounded-xl flex items-center justify-center"
                                style={{ width: '3rem', height: '3rem' }}
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href={CONTACT_INFO.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-accent hover:scale-110 transition-all duration-300 rounded-xl flex items-center justify-center"
                                style={{ width: '3rem', height: '3rem' }}
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '2rem', paddingBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
                        © {new Date().getFullYear()} Consultorios Condas. Todos los derechos reservados.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="bg-accent/20 hover:bg-accent hover:scale-110 transition-all duration-300 text-white rounded-full flex items-center justify-center cursor-pointer"
                        style={{ width: '3rem', height: '3rem' }}
                        aria-label="Volver arriba"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
