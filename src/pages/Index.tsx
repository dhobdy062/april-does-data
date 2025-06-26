
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import AuthoritySection from '@/components/AuthoritySection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CTASection />
        <AuthoritySection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
