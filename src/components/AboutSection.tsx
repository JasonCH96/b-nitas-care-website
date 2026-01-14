import { Shield, Heart, Users, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Private Healthcare",
      description: "Comprehensive private medical services with no wait times",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Patient-centered approach with warmth and professionalism",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified specialists across multiple medical disciplines",
    },
    {
      icon: Award,
      title: "Trusted Excellence",
      description: "4,900+ reviews from satisfied patients and travelers",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Your Trusted Medical Partner in La Fortuna
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Clínica Bénitas has been providing exceptional healthcare services to the La Fortuna community 
              and international visitors for years. We combine modern medical technology with compassionate 
              care to ensure every patient receives the highest quality treatment.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-medical-blue-light flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 bg-gradient-to-r from-medical-blue-light to-medical-teal-light rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Serving Locals & Travelers Alike
                </h3>
                <p className="text-muted-foreground mb-4">
                  Whether you're a local resident, a tourist exploring the Arenal volcano region, 
                  or an expat living in Costa Rica, our multilingual staff is ready to assist you 
                  with all your healthcare needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    English & Spanish speaking staff
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Assistance with travel insurance claims
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Emergency care available
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">Clinic Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
