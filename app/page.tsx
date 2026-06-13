import dynamic from 'next/dynamic';
import HeroSection from './components/HeroSection';
import StickyWhatsApp from './components/StickyWhatsApp';

const ProgramHighlightsSection = dynamic(() => import('./components/ProgramHighlightsSection'));
const PainStorySection    = dynamic(() => import('./components/PainStorySection'));
const WhySolutionSection  = dynamic(() => import('./components/WhySolutionSection'));
const ProgramDetailsSection = dynamic(() => import('./components/ProgramDetailsSection'));
const WhoSection          = dynamic(() => import('./components/WhoSection'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));
const VideoSection        = dynamic(() => import('./components/VideoSection'));
const AboutSection        = dynamic(() => import('./components/AboutSection'));
const NotForSection       = dynamic(() => import('./components/NotForSection'));
const FinalCTASection     = dynamic(() => import('./components/FinalCTASection'));

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProgramHighlightsSection />
      <PainStorySection />
      <WhySolutionSection />
      <ProgramDetailsSection />
      <WhoSection />
      <TestimonialsSection />
      <VideoSection />
      <AboutSection />
      <NotForSection />
      <FinalCTASection />
      <StickyWhatsApp />
    </main>
  );
}
