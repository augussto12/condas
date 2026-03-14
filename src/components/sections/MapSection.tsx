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
                        src="https://maps.google.com/maps?q=Rivadavia+2456,+Mar+del+Plata,+Argentina&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            filter: 'grayscale(20%) contrast(1.05)',
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Consultorios Condas - Rivadavia 2456"
                    />
                </div>
            </AnimatedSection>
        </section>
    );
}
