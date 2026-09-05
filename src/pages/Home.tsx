import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Providers from '../components/Providers';
import TerminalSection from '../components/TerminalSection';
import DocsSection from '../components/DocsSection';
import AboutSection from '../components/AboutSection';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <Providers />
      <TerminalSection />
      <DocsSection />
      <AboutSection />
      <CTA />
    </div>
  );
}
