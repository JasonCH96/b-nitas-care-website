import { Phone, MessageCircle, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappLink = "https://wa.me/50688798023?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Cl%C3%ADnica%20B%C3%A9nitas.";

  const hours = [
    { day: "Monday - Friday", time: "7:00 AM - 7:00 PM" },
    { day: "Saturday", time: "8:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to us via phone or WhatsApp. We're here to help you with all your healthcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact options */}
            <div className="space-y-6">
              {/* Phone card */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Call Us Directly</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Speak with our team immediately
                    </p>
                    <a
                      href="tel:+50688798023"
                      className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      +506 8879 8023
                    </a>
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
                  <a href="tel:+50688798023">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* WhatsApp card */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-whatsapp" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">WhatsApp Booking</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Quick and easy appointment scheduling
                    </p>
                    <p className="text-foreground font-medium">
                      Send us a message anytime
                    </p>
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-whatsapp hover:bg-whatsapp/90 text-white">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-gradient-to-br from-medical-blue-light to-medical-teal-light rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">When you can visit us</p>
                </div>
              </div>

              <div className="space-y-4">
                {hours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-background/50 rounded-xl">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Appointments Recommended</p>
                    <p className="text-muted-foreground text-sm">
                      Walk-ins welcome, but booking ahead ensures minimal wait time.
                    </p>
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

export default ContactSection;
