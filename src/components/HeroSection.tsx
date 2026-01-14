import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/50688798023?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Cl%C3%ADnica%20B%C3%A9nitas.";
  const mapsLink = "https://maps.google.com/?q=Clinica+Benitas+La+Fortuna+Costa+Rica";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-blue-light via-background to-medical-teal-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-medical-green rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">Open Today – Closes at 7:00 PM</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Clínica Bénitas
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Medical Center
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            The best private healthcare option in La Fortuna, Costa Rica. 
            Comprehensive medical care for families, seniors, and travelers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a href="tel:+50688798023">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 border-2 hover:bg-accent"
            >
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-trust-gold fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-muted-foreground font-medium">4,900+ Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
