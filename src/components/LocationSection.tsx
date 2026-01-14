import { MapPin, Navigation, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const mapsLink = "https://maps.google.com/?q=Clinica+Benitas+La+Fortuna+Costa+Rica";
  const directionsLink = "https://www.google.com/maps/dir//Clinica+Benitas+La+Fortuna+Costa+Rica";

  return (
    <section id="location" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in the heart of La Fortuna, just steps away from local landmarks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.8694!2d-84.6435!3d10.4688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI4JzA3LjciTiA4NMKwMzgnMzYuNiJX!5e0!3m2!1sen!2scr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clínica Bénitas Location"
                className="grayscale-[20%]"
              />
            </div>

            {/* Location details */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Address card */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      100 meters north of the Police Station
                      <br />
                      La Fortuna, Alajuela
                      <br />
                      Costa Rica
                    </p>
                  </div>
                </div>
              </div>

              {/* Directions card */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Getting Here</h3>
                    <p className="text-muted-foreground text-sm">
                      Easy to find in downtown La Fortuna. Look for the Police Station and head 
                      100 meters north. Parking available nearby.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                  <a href={directionsLink} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </a>
                </Button>
              </div>

              {/* Landmark tip */}
              <div className="bg-accent/50 rounded-xl p-4 text-sm">
                <p className="text-accent-foreground">
                  <strong>💡 Tip for tourists:</strong> Ask any local for "Clínica Bénitas" or 
                  "la clínica cerca de la estación de policía" – everyone knows where we are!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
