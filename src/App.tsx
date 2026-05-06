import SEO from './components/SEO';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Gallery from './components/sections/Gallery';
import MapSection from './components/sections/MapSection';
import SectionDivider from './components/ui/SectionDivider';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

/*
  Section backgrounds (new rhythm):
  - Hero:         navy #0B1D3A
  - Services:     white #FFFFFF
  - About:        navy #10224A
  - Team:         white #FFFFFF
  - Gallery:      gradient navyâ†’teal
  - Testimonials: celeste #F0FAFA
  - Map:          white #FFFFFF
  - Footer:       navy #0B1D3A
*/

function App() {
    return (
        <>
            <SEO />
            <Layout>
                <Hero />

                {/* Hero (navy) â†’ Services (white) */}
                <SectionDivider fillColor="#ffffff" />

                <Services />

                {/* Services (white) â†’ About (navy) */}
                <SectionDivider fillColor="#10224A" bgColor="#ffffff" />

                <About />

                {/* About (gradient ends #1A4A6E) â†’ Team (white) */}
                <SectionDivider fillColor="#ffffff" bgColor="#1A4A6E" />

                <Team />

                {/* Team (white) â†’ Gallery (navy gradient) */}
                <SectionDivider fillColor="#10224A" bgColor="#ffffff" />

                <Gallery />

                {/* Gallery (ends ~#1A4A6E) â†’ Testimonials (#F0FAFA) */}
                <SectionDivider fillColor="#F0FAFA" bgColor="#1A4A6E" />

                <Testimonials />

                {/* Testimonials (#F0FAFA) â†’ Map (white) */}
                <SectionDivider fillColor="#ffffff" bgColor="#F0FAFA" />

                <MapSection />

                <WhatsAppFloat />
            </Layout>
        </>
    );
}

export default App;
