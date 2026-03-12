import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Locations } from '@/entities';
import { Button } from '@/components/ui/button';

const AnimatedElement: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function LocationsPage() {
  const [locations, setLocations] = useState<Locations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 8;

  useEffect(() => {
    loadLocations();
  }, [skip]);

  const loadLocations = async () => {
    try {
      const result = await BaseCrudService.getAll<Locations>('locations', [], { limit, skip });
      setLocations(prev => skip === 0 ? result.items : [...prev, ...result.items]);
      setHasNext(result.hasNext);
    } catch (error) {
      console.error('Error loading locations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setSkip(prev => prev + limit);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Our Locations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find an OMGYRO restaurant near you across New Jersey. Experience the OMG Way at any of our locations.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="min-h-[600px]">
            {isLoading ? null : locations.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {locations.map((location, index) => (
                    <AnimatedElement key={location._id} delay={index * 100}>
                      <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                        <div className="relative h-64 overflow-hidden">
                          <Image 
                            src={location.locationImage || 'https://static.wixstatic.com/media/ce80c1_de47cca25ac24feaaaf058d828c4b1f0~mv2.png?originWidth=576&originHeight=384'}
                            alt={location.locationName || 'Location'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            width={600}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-heading font-bold text-background">
                              {location.locationName}
                            </h3>
                          </div>
                        </div>
                        
                        <div className="p-6 space-y-4">
                          {location.address && (
                            <div className="flex items-start gap-3">
                              <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                              <div>
                                <p className="font-medium text-card-foreground mb-1">Address</p>
                                <p className="text-muted-foreground">{location.address}</p>
                              </div>
                            </div>
                          )}

                          {location.phoneNumber && (
                            <div className="flex items-start gap-3">
                              <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                              <div>
                                <p className="font-medium text-card-foreground mb-1">Phone</p>
                                <a 
                                  href={`tel:${location.phoneNumber}`}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {location.phoneNumber}
                                </a>
                              </div>
                            </div>
                          )}

                          {location.operatingHours && (
                            <div className="flex items-start gap-3">
                              <Clock className="text-primary flex-shrink-0 mt-1" size={20} />
                              <div>
                                <p className="font-medium text-card-foreground mb-1">Hours</p>
                                <p className="text-muted-foreground">{location.operatingHours}</p>
                              </div>
                            </div>
                          )}

                          <div className="pt-4">
                            <Button 
                              className="w-full bg-primary text-primary-foreground hover:bg-accent transition-all duration-200"
                              onClick={() => window.open('https://order.omgyro.com', '_blank')}
                            >
                              Order from This Location
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>

                {/* Load More */}
                {hasNext && (
                  <div className="text-center mt-12">
                    <Button 
                      size="lg"
                      variant="outline"
                      onClick={loadMore}
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Load More Locations
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No locations available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Growing Across New Jersey
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From our South Orange roots to new locations in Morris Plains, Old Bridge, and Elmwood Park — OMGYRO is rapidly expanding to bring the OMG Way to more communities across the state. Stay tuned for new locations opening soon!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-primary/10 rounded-full px-6 py-3">
                  <span className="text-primary font-bold text-lg">South Orange</span>
                </div>
                <div className="bg-primary/10 rounded-full px-6 py-3">
                  <span className="text-primary font-bold text-lg">Morris Plains</span>
                </div>
                <div className="bg-primary/10 rounded-full px-6 py-3">
                  <span className="text-primary font-bold text-lg">Old Bridge</span>
                </div>
                <div className="bg-primary/10 rounded-full px-6 py-3">
                  <span className="text-primary font-bold text-lg">Elmwood Park</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Visit Us Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Stop by any of our locations and experience authentic halal dining at its finest
            </p>
            <Button 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 hover:scale-105 shadow-xl text-lg px-8 py-6"
              onClick={() => window.open('https://order.omgyro.com', '_blank')}
            >
              Order Now
            </Button>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
