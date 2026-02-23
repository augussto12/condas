import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Appointment from './components/sections/Appointment';
import MapSection from './components/sections/MapSection';
import SectionDivider from './components/ui/SectionDivider';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

/*
  Section gradient endpoints (for reference):
  - Services: white → #F0F9F9 → #F8FAFB  (ends at #F8FAFB)
  - About:    #F8FAFB → #EEF6F6 → #F4F0E8 (ends at #F4F0E8)
  - Team:     white → #F0F4F8 → #F8FAFB   (ends at #F8FAFB)
  - Testimonials: bg #F8FAFB
  - Appointment:  white → #F2F8F8 → #F0F4F8
*/

function App() {
  return (
    <Layout>
      <Hero />

      {/* Hero → Services (dark → white) */}
      <SectionDivider fillColor="#ffffff" />

      <Services />

      {/* Services (ends ~#F0F9F9) → About (starts #F8FAFB) */}
      <div style={{ backgroundColor: '#F0F9F9' }}>
        <SectionDivider fillColor="#F8FAFB" />
      </div>

      <About />

      {/* About ends at #F4F0E8 → Team starts at #ffffff */}
      <div style={{ backgroundColor: '#F4F0E8' }}>
        <SectionDivider fillColor="#ffffff" />
      </div>

      <Team />

      {/* Team (ends ~#F0F4F8) → Testimonials (bg #F8FAFB) */}
      <div style={{ backgroundColor: '#F0F4F8' }}>
        <SectionDivider fillColor="#F8FAFB" />
      </div>

      <Testimonials />

      {/* Testimonials #F8FAFB → Appointment starts at #ffffff */}
      <div style={{ backgroundColor: '#F8FAFB' }}>
        <SectionDivider fillColor="#ffffff" />
      </div>

      <Appointment />

      <MapSection />

      <WhatsAppFloat />
    </Layout>
  );
}

export default App;
