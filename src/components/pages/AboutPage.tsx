import { useEffect, useRef, useState } from 'react';
import { Award, Shield, Flame, Heart, Users, TrendingUp } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              About OMGYRO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than just delicious food — we&apos;re about creating unforgettable experiences, one platter at a time
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://static.wixstatic.com/media/ce80c1_2bb00a4811d549169d7410fa799bb050~mv2.png?originWidth=576&originHeight=448"
                  alt="OMGYRO Story"
                  className="w-full h-full object-cover"
                  width={600}
                />
              </div>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wide">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  The Original Platters Restaurant in NJ
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At OMGYRO, we&apos;re more than just delicious food — we&apos;re about creating unforgettable experiences, one platter at a time. Our slogan, <strong>&quot;The OMG Way,&quot;</strong> reflects our commitment to excellence in everything we do.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From our humble beginnings in South Orange to becoming a recognized name across New Jersey, we&apos;ve stayed true to our core values: quality ingredients, authentic preparation, and exceptional hospitality.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  &quot;We want to create an experience where people remember both the meal and the hospitality.&quot; - Partner Lou Bari
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2 uppercase tracking-wide">Our Values</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                What Drives Us
              </h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for perfection in every dish, ensuring each bite meets our high standards.',
                delay: 0
              },
              {
                icon: Shield,
                title: '100% Halal',
                description: 'Certified halal ingredients prepared with integrity and respect for tradition.',
                delay: 100
              },
              {
                icon: Flame,
                title: 'Bold Flavors',
                description: 'Our signature sauces and unique recipes create unforgettable taste experiences.',
                delay: 200
              },
              {
                icon: Heart,
                title: 'Hospitality',
                description: 'Every guest is treated like family, with warmth and genuine care.',
                delay: 300
              },
              {
                icon: Users,
                title: 'Community',
                description: 'We&apos;re proud to serve and give back to the communities we call home.',
                delay: 400
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Constantly evolving while staying true to authentic flavors and traditions.',
                delay: 500
              }
            ].map((value, index) => (
              <AnimatedElement key={index} delay={value.delay}>
                <div className="bg-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Sauces */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement delay={200}>
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wide">Our Sauces</p>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Paid the Cost To Be the Sauce
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At OMGYRO, our sauces are more than just condiments—they&apos;re crafted to elevate every bite, bringing bold flavors and unique twists to your meal.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you&apos;re drizzling, dipping, or smothering, our sauces are designed to complement your favorite meals and take your dining experience to the next level. Each sauce is carefully developed to pair perfectly with our halal platters.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Signature white sauce with a creamy, tangy finish</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Spicy red sauce with the perfect kick</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">House special sauce that brings it all together</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://static.wixstatic.com/media/ce80c1_ab53915c5b0a469f9938e5ae47591b42~mv2.png?originWidth=576&originHeight=448"
                  alt="OMGYRO Signature Sauces"
                  className="w-full h-full object-cover"
                  width={600}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2 uppercase tracking-wide">In The News</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                OMGYRO Is Taking Over New Jersey
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From our South Orange roots to new locations in Morris Plains, Old Bridge, and Elmwood Park — OMGYRO is redefining halal dining across the state. Featured on Yahoo Finance and NJ.com, our bold platters and signature sauces have caught the attention of food lovers everywhere.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedElement delay={100}>
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-primary font-bold text-lg mb-2">Yahoo Finance</div>
                <p className="text-muted-foreground">
                  &quot;OMGYRO is bringing a fresh take on halal dining to New Jersey with their signature platters and bold flavors.&quot;
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-primary font-bold text-lg mb-2">NJ.com</div>
                <p className="text-muted-foreground">
                  &quot;The OMG Way is more than a slogan - it&apos;s a commitment to quality that customers can taste in every bite.&quot;
                </p>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement delay={300}>
            <div className="text-center mt-12">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://finance.yahoo.com', '_blank')}
              >
                Read The Full Story
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Expansion Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2 uppercase tracking-wide">Our Growth</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Expanding Across New Jersey
              </h2>
            </div>
          </AnimatedElement>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { location: 'South Orange', status: 'Original Location', year: '2020' },
                { location: 'Morris Plains', status: 'Now Open', year: '2023' },
                { location: 'Old Bridge', status: 'Now Open', year: '2024' },
                { location: 'Elmwood Park', status: 'Now Open', year: '2024' }
              ].map((milestone, index) => (
                <AnimatedElement key={index} delay={index * 100}>
                  <div className="flex items-center gap-6 bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">{milestone.year}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-heading font-bold text-card-foreground mb-1">
                        {milestone.location}
                      </h3>
                      <p className="text-muted-foreground">{milestone.status}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Experience the OMG Way
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Visit us today and discover why everyone is talking about OMGYRO
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
