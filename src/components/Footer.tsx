import { Phone, MessageCircle, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/50688798023";
  const mapsLink = "https://maps.google.com/?q=Clinica+Benitas+La+Fortuna+Costa+Rica";

  return (
    <footer className="bg-foreground text-background">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">CB</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-background">Clínica Bénitas</p>
                  <p className="text-xs text-background/70">Medical Center</p>
                </div>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Providing exceptional private healthcare to La Fortuna's community and visitors. 
                Your health is our priority, with compassionate care you can trust.
              </p>
              <div className="flex items-center gap-2 text-background/70">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm">Caring for families since day one</span>
              </div>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="font-semibold text-background mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+50688798023"
                    className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +506 8879 8023
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-background/80 hover:text-whatsapp transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours column */}
            <div>
              <h3 className="font-semibold text-background mb-4">Hours</h3>
              <ul className="space-y-2 text-background/80 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Mon - Fri: 7AM - 7PM</p>
                    <p>Saturday: 8AM - 4PM</p>
                    <p>Sunday: Emergency Only</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© {currentYear} Clínica Bénitas Medical Center. All rights reserved.</p>
            <p>La Fortuna, Alajuela, Costa Rica</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
