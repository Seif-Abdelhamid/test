// WI-HPI
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Flame, MapPin, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { MenuItems, Locations } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

// Enhanced Animated reveal component with direction support
const AnimatedElement: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'left': return '-translate-x-12';
      case 'right': return 'translate-x-12';
      case 'scale': return 'scale-95';
      default: return 'translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
          : `opacity-0 ${getInitialTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function HomePage() {
  const navigate = useNavigate();
  const [featuredItems, setFeaturedItems] = useState<MenuItems[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [isLoadingMenu, setIsLoadingMenu] = useState(true);
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);

  useEffect(() => {
    loadFeaturedItems();
    loadLocations();
  }, []);

  const loadFeaturedItems = async () => {
    try {
      const result = await BaseCrudService.getAll<MenuItems>('menuitems', [], { limit: 3 });
      setFeaturedItems(result.items);
    } catch (error) {
      console.error('Error loading menu items:', error);
    } finally {
      setIsLoadingMenu(false);
    }
  };

  const loadLocations = async () => {
    try {
      const result = await BaseCrudService.getAll<Locations>('locations', [], { limit: 4 });
      setLocations(result.items);
    } catch (error) {
      console.error('Error loading locations:', error);
    } finally {
      setIsLoadingLocations(false);
    }
  };

  // Reusable Button Style matching the screenshot
  const PillButton = ({ children, onClick, className = '' }: { children: React.ReactNode, onClick: () => void, className?: string }) => (
    <Button 
      variant="outline"
      className={`rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 h-auto font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return (
    <div className="min-h-screen bg-background font-paragraph selection:bg-primary/20 selection:text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax feel */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-in fade-in duration-1000"
          style={{
            backgroundImage: 'url(https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=1)',
          }}
        />
        {/* Dark Overlay matching screenshot */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center mt-16">
          <AnimatedElement direction="up" delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Experience<br />the OMG Way
            </h1>
          </AnimatedElement>
          
          <AnimatedElement direction="up" delay={300}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide">
              Creamy, savory, and absolutely delicious platters that will have you saying &quot;Oh my GAWWD&quot;
            </p>
          </AnimatedElement>
          
          <AnimatedElement direction="up" delay={500}>
            <PillButton onClick={() => window.open('https://order.omgyro.com', '_blank')}>
              ORDER NOW
            </PillButton>
          </AnimatedElement>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedElement direction="up">
            <div className="text-center mb-20">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Why OMGYRO
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                What Sets Us Apart
              </h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              {
                icon: Star,
                title: 'The OMG Way',
                description: 'Excellence in every bite, every time.',
                delay: 0
              },
              {
                icon: ShieldCheck,
                title: '100% Halal',
                description: 'Certified and prepared with integrity.',
                delay: 150
              },
              {
                icon: Flame,
                title: 'Signature Sauces',
                description: 'Bold flavors that hit different.',
                delay: 300
              },
              {
                icon: MapPin,
                title: 'Growing Fast',
                description: 'Expanding all across New Jersey.',
                delay: 450
              }
            ].map((feature, index) => (
              <AnimatedElement key={index} delay={feature.delay} direction="up">
                <div className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:-rotate-3">
                    <feature.icon size={32} strokeWidth={1.5} className="transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                    {feature.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedElement direction="right" className="order-2 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                  src="https://static.wixstatic.com/media/ce80c1_4ecf97bd3af0480a94725c8b1bd575bb~mv2.png?originWidth=1152&originHeight=896"
                  alt="OMGYRO Platter"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement direction="left" className="order-1 lg:order-2">
              <div className="max-w-xl">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                  The Original Platters Restaurant in NJ
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  At OMGYRO, we&apos;re more than just delicious food — we&apos;re about creating unforgettable experiences, one platter at a time. Our slogan, <strong className="text-foreground font-bold">&quot;The OMG Way,&quot;</strong> reflects our commitment to excellence in everything we do.
                </p>
                <PillButton onClick={() => navigate('/locations')} className="group">
                  FIND A LOCATION 
                  <ArrowRight className="ml-2 w-4 h-4 inline-block transition-transform group-hover:translate-x-1" />
                </PillButton>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* In The News Section */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedElement direction="right">
              <div className="max-w-xl">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                  In The News
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                  OMGYRO Is Taking Over New Jersey
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  From our South Orange roots to new locations in Morris Plains, Old Bridge, and Elmwood Park — OMGYRO is redefining halal dining across the state. Featured on Yahoo Finance and NJ.com, our bold platters and signature sauces have caught the attention of food lovers everywhere.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10 italic border-l-4 border-primary/30 pl-4 py-1">
                  &quot;We want to create an experience where people remember both the meal and the hospitality.&quot; <br/>
                  <span className="text-sm font-bold text-foreground not-italic mt-2 block">— Partner Lou Bari</span>
                </p>
                <PillButton onClick={() => window.open('https://finance.yahoo.com', '_blank')} className="group">
                  READ THE FULL STORY 
                  <ArrowRight className="ml-2 w-4 h-4 inline-block transition-transform group-hover:translate-x-1" />
                </PillButton>
              </div>
            </AnimatedElement>

            <AnimatedElement direction="left">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                  src="https://static.wixstatic.com/media/ce80c1_84adcca25fdd44638bf55796db45748c~mv2.png?originWidth=1152&originHeight=896"
                  alt="OMGYRO Storefront"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Sauces Section */}
      <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedElement direction="right" className="order-2 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                  src="https://static.wixstatic.com/media/ce80c1_9f584d46c7f74e03bb4299dfd0f71ca6~mv2.png?originWidth=1152&originHeight=896"
                  alt="OMGYRO Signature Sauces"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement direction="left" className="order-1 lg:order-2">
              <div className="max-w-xl">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                  Our Sauces
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                  Paid the Cost To Be the Sauce
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  At OMGYRO, our sauces are more than just condiments—they&apos;re crafted to elevate every bite, bringing bold flavors and unique twists to your meal. Whether you&apos;re drizzling, dipping, or smothering, our sauces are designed to complement your favorite meals and take your dining experience to the next level.
                </p>
                <PillButton onClick={() => navigate('/about')} className="group">
                  EXPLORE OUR SAUCE BIBLE 
                  <ArrowRight className="ml-2 w-4 h-4 inline-block transition-transform group-hover:translate-x-1" />
                </PillButton>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Data Section: Featured Menu Items */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedElement direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                  Our Menu
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                  Signature Dishes
                </h2>
              </div>
              {!isLoadingMenu && featuredItems.length > 0 && (
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/5 group"
                  onClick={() => navigate('/menu')}
                >
                  View Full Menu <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              )}
            </div>
          </AnimatedElement>

          <div className="min-h-[400px] relative">
            {isLoadingMenu ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner className="text-primary w-10 h-10" />
              </div>
            ) : featuredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredItems.map((item, index) => (
                  <AnimatedElement key={item._id} delay={index * 150} direction="up">
                    <div 
                      className="group cursor-pointer h-full flex flex-col"
                      onClick={() => navigate(`/menu/${item._id}`)}
                    >
                      <div className="relative h-72 rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <Image 
                          src={item.dishImage || 'https://static.wixstatic.com/media/ce80c1_670f631aad55441dbf8e1e902a4accfb~mv2.png?originWidth=1280&originHeight=704'}
                          alt={item.dishName || 'Menu Item'}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {item.category && (
                          <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm text-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm">
                            {item.category}
                          </div>
                        )}
                      </div>
                      <div className="flex-grow flex flex-col px-2">
                        <div className="flex justify-between items-start mb-3 gap-4">
                          <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.dishName}
                          </h3>
                          <span className="text-xl font-bold text-primary shrink-0">
                            ${item.price?.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground text-lg">No menu items available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Data Section: Locations */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedElement direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                  Visit Us
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                  Our Locations
                </h2>
              </div>
              {!isLoadingLocations && locations.length > 0 && (
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/5 group"
                  onClick={() => navigate('/locations')}
                >
                  View All Locations <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              )}
            </div>
          </AnimatedElement>

          <div className="min-h-[300px] relative">
            {isLoadingLocations ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner className="text-primary w-10 h-10" />
              </div>
            ) : locations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {locations.map((location, index) => (
                  <AnimatedElement key={location._id} delay={index * 100} direction="up">
                    <div 
                      className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer border border-border/50 hover:border-primary/20"
                      onClick={() => navigate(`/locations/${location._id}`)}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <MapPin size={24} />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {location.locationName}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {location.address}
                      </p>
                      {location.operatingHours && (
                        <div className="pt-4 border-t border-border/50">
                          <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Hours</p>
                          <p className="text-muted-foreground text-sm">
                            {location.operatingHours}
                          </p>
                        </div>
                      )}
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground text-lg">No locations available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}