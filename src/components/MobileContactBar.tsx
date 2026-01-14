import { Phone, MessageCircle, MapPin } from "lucide-react";

const MobileContactBar = () => {
  const whatsappLink = "https://wa.me/50688798023?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Cl%C3%ADnica%20B%C3%A9nitas.";
  const mapsLink = "https://www.google.com/maps/dir//Clinica+Benitas+La+Fortuna+Costa+Rica";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg">
      <div className="grid grid-cols-3">
        <a
          href="tel:+50688798023"
          className="flex flex-col items-center justify-center py-3 text-primary hover:bg-primary/5 transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-whatsapp hover:bg-whatsapp/5 transition-colors border-x border-border"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-secondary hover:bg-secondary/5 transition-colors"
        >
          <MapPin className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Directions</span>
        </a>
      </div>
    </div>
  );
};

export default MobileContactBar;
