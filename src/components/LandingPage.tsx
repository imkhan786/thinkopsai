import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import DemoSection from "./DemoSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import ChatbotButton from "./ChatbotButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DemoSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default LandingPage;
