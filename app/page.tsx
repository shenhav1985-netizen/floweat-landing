import dynamic from 'next/dynamic';
import HeroSection from './components/HeroSection';
import StickyWhatsApp from './components/StickyWhatsApp';

const ProgramIntroSection  = dynamic(() => import('./components/ProgramIntroSection'));
const PainChecklistSection = dynamic(() => import('./components/PainChecklistSection'));
const PainSection          = dynamic(() => import('./components/PainSection'));
const VisionSection       = dynamic(() => import('./components/VisionSection'));
const WhoSection          = dynamic(() => import('./components/WhoSection'));
const ProgramSection      = dynamic(() => import('./components/ProgramSection'));
const MechanismSection    = dynamic(() => import('./components/MechanismSection'));
const BonusesSection      = dynamic(() => import('./components/BonusesSection'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));
const VideoSection        = dynamic(() => import('./components/VideoSection'));
const AboutSection        = dynamic(() => import('./components/AboutSection'));
const NotForSection       = dynamic(() => import('./components/NotForSection'));
const FinalCTASection     = dynamic(() => import('./components/FinalCTASection'));

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainChecklistSection />
      <ProgramIntroSection />
      <PainSection />
      <VisionSection />
      <ProgramSection />
      <WhoSection />
      <MechanismSection />
      <BonusesSection />
      <TestimonialsSection />
      <VideoSection />
      <AboutSection />
      <NotForSection />
      <FinalCTASection />
      <StickyWhatsApp />
    </main>
  );
}
