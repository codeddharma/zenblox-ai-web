import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogosStrip from '@/components/LogosStrip';
import PrismSection from '@/components/PrismSection';
import ForgeSection from '@/components/ForgeSection';
import SageSection from '@/components/SageSection';
import StackSection from '@/components/StackSection';
import ProcessSection from '@/components/ProcessSection';
import WhySection from '@/components/WhySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <LogosStrip />
      <WhySection />
      <ProcessSection />
      <PrismSection />
      <ForgeSection />
      <StackSection />
      <SageSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
