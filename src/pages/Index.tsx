import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <LocationSection />
        <ReviewsSection />
      </main>
      <Footer />
      <MobileContactBar />
      {/* Add padding at bottom on mobile for the fixed contact bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default Index;
