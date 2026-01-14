import {
  Stethoscope,
  FlaskConical,
  Siren,
  ScanLine,
  Accessibility,
  Dumbbell,
  MessageSquare,
  Brain,
  BookOpen,
  Apple,
  Sparkles,
  Ear,
  Activity,
  HeartPulse,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary care for all ages",
    },
    {
      icon: FlaskConical,
      title: "Clinical Laboratory",
      description: "Fast and accurate diagnostic testing",
    },
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 urgent medical attention",
    },
    {
      icon: ScanLine,
      title: "X-Ray",
      description: "Digital imaging and diagnostics",
    },
    {
      icon: Accessibility,
      title: "Occupational Therapy",
      description: "Restoring independence and function",
    },
    {
      icon: Dumbbell,
      title: "Physical Therapy",
      description: "Rehabilitation and pain management",
    },
    {
      icon: MessageSquare,
      title: "Speech Therapy",
      description: "Communication and swallowing disorders",
    },
    {
      icon: Brain,
      title: "Psychology",
      description: "Mental health and emotional wellness",
    },
    {
      icon: BookOpen,
      title: "Psychopedagogy",
      description: "Learning and developmental support",
    },
    {
      icon: Apple,
      title: "Nutrition",
      description: "Personalized dietary counseling",
    },
    {
      icon: Sparkles,
      title: "Dermatology",
      description: "Skin health and treatments",
    },
    {
      icon: Ear,
      title: "Otolaryngology (ENT)",
      description: "Ear, nose, and throat care",
    },
    {
      icon: Activity,
      title: "Urology",
      description: "Urinary and reproductive health",
    },
    {
      icon: HeartPulse,
      title: "Peripheral Vascular Care",
      description: "Circulatory system treatments",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Comprehensive Medical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From general medicine to specialized care, we offer a wide range of services 
              to meet all your healthcare needs under one roof.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-medical-blue-light to-medical-teal-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see the service you need? Contact us – we can help or refer you to the right specialist.
            </p>
            <a
              href="https://wa.me/50688798023?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Contact us on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
