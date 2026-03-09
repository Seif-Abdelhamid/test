import { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { MenuItems } from '@/entities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItems[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 12;

  useEffect(() => {
    loadMenuItems();
  }, [skip]);

  useEffect(() => {
    filterItems();
  }, [menuItems, searchQuery, selectedCategory]);

  const loadMenuItems = async () => {
    try {
      const result = await BaseCrudService.getAll<MenuItems>('menuitems', [], { limit, skip });
      setMenuItems(prev => skip === 0 ? result.items : [...prev, ...result.items]);
      setHasNext(result.hasNext);
    } catch (error) {
      console.error('Error loading menu items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterItems = () => {
    let filtered = menuItems;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.dishName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  };

  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category).filter(Boolean)))];

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
              Our Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our selection of authentic halal platters, crafted with premium ingredients and signature sauces
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-secondary/30 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? 'bg-primary text-primary-foreground hover:bg-accent' 
                    : 'border-border hover:border-primary hover:text-primary'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="min-h-[600px]">
            {isLoading ? null : filteredItems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item, index) => (
                    <AnimatedElement key={item._id} delay={index * 50}>
                      <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                        <div className="relative h-64 overflow-hidden">
                          <Image 
                            src={item.dishImage || 'https://static.wixstatic.com/media/ce80c1_3d3d8de18b73454ea960429bfccc2252~mv2.png?originWidth=384&originHeight=384'}
                            alt={item.dishName || 'Menu Item'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            width={400}
                          />
                          {item.category && (
                            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-md">
                              {item.category}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-heading font-bold text-card-foreground mb-2">
                            {item.dishName}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">
                              ${item.price?.toFixed(2)}
                            </span>
                            <Button 
                              size="sm"
                              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-200"
                              onClick={() => window.open('https://order.omgyro.com', '_blank')}
                            >
                              Order Now
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
                      Load More Items
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  {searchQuery || selectedCategory !== 'All' 
                    ? 'No items match your search criteria.' 
                    : 'No menu items available at the moment.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Hungry Yet?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Order your favorite dishes now and experience the OMG Way
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
