import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicePrices from './components/ServicePrices';
import NYCExperience from './components/NYCExperience';
import CostEstimator from './components/CostEstimator';
import InstagramFeed from './components/InstagramFeed';
import GoogleReviews from './components/GoogleReviews';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LegalModals from './components/LegalModals';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-100 flex flex-col font-sans selection:bg-[#c5a059] selection:text-[#0b0c10] pb-16 sm:pb-0 overflow-x-hidden">
      <Navbar onOpenContact={scrollToContact} />
      <main className="flex-grow">
        <Hero onOpenContact={scrollToContact} />
        <TrustStrip />
        <ServicePrices onOpenContact={scrollToContact} />
        <NYCExperience />
        <CostEstimator onOpenContact={scrollToContact} />
        <InstagramFeed />
        <GoogleReviews />
        <AboutUs onOpenContact={scrollToContact} />
        <FAQ />
        <Contact />
      </main>
      <Footer onOpenLegal={(type) => setLegalModal(type)} />
      <MobileStickyBar onOpenContact={scrollToContact} />
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  );
}
