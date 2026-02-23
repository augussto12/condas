import AnimatedSection from '../ui/AnimatedSection';
import { MapPin } from 'lucide-react';

export default function MapSection() {
    return (
        <section style={{ paddingTop: '6rem', paddingBottom: '0', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                <AnimatedSection>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <MapPin size={20} className="text-accent" />
                        <span className="text-accent" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Nuestra Ubicación
                        </span>
                    </div>
                    <h3 className="font-serif text-primary" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Encontranos en Mar del Plata
                    </h3>
                    <p className="text-text-secondary" style={{ fontSize: '0.875rem' }}>
                        Estamos ubicados en una zona céntrica y de fácil acceso.
                    </p>
                </AnimatedSection>
            </div>

            <AnimatedSection>
                <div style={{
                    width: '100%',
                    height: '400px',
                    overflow: 'hidden',
                    borderTop: '1px solid #EDF1F3',
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.1767989012!2d-57.5575!3d-38.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9536c47ef97%3A0x2b8d2e9e6c2ea18a!2sMar%20del%20Plata%2C%20Buenos%20Aires%20Province%2C%20Argentina!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            filter: 'grayscale(20%) contrast(1.05)',
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Consultorios Condas"
                    />
                </div>
            </AnimatedSection>
        </section>
    );
}
