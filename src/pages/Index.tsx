import HeroSection from "@/components/landing/HeroSection";
import ProblematizareSection from "@/components/landing/ProblematizareSection";
import BeneficiiSection from "@/components/landing/BeneficiiSection";
import DespreAxeniaSection from "@/components/landing/DespreAxeniaSection";
import PentruCineSection from "@/components/landing/PentruCineSection";
import TestimonialeSection from "@/components/landing/TestimonialeSection";
import FAQSection from "@/components/landing/FAQSection";
import CTAFinalSection from "@/components/landing/CTAFinalSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblematizareSection />
      <BeneficiiSection />
      <DespreAxeniaSection />
      <PentruCineSection />
      <TestimonialeSection />
      <FAQSection />
      <CTAFinalSection />
      <Footer />
    </main>
  );
};

export default Index;
