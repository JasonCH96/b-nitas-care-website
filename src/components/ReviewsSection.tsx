import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReviewsSection = () => {
  const googleReviewsLink = "https://www.google.com/search?q=Clinica+Benitas+La+Fortuna+reviews";

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Patient Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            See why patients and travelers choose Clínica Bénitas for their healthcare needs.
          </p>

          {/* Google Reviews Badge */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg max-w-lg mx-auto">
            {/* Google logo placeholder */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-lg font-semibold text-foreground">Google Reviews</span>
            </div>

            {/* Rating display */}
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-trust-gold fill-current" />
              ))}
            </div>
            
            <div className="mb-4">
              <span className="text-5xl font-bold text-foreground">4.9</span>
              <span className="text-2xl text-muted-foreground">/5</span>
            </div>

            <p className="text-muted-foreground mb-6">
              Based on <strong className="text-foreground">4,900+ reviews</strong>
            </p>

            {/* Review highlights */}
            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-medical-green rounded-full" />
                <span className="text-foreground">"Professional and caring staff"</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-medical-green rounded-full" />
                <span className="text-foreground">"Quick service, no long waits"</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-medical-green rounded-full" />
                <span className="text-foreground">"Helped with our travel insurance"</span>
              </div>
            </div>

            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Read All Reviews on Google
              </a>
            </Button>
          </div>

          {/* Trust message */}
          <p className="mt-8 text-muted-foreground text-sm">
            We're proud to be the top-rated medical clinic in the La Fortuna area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
