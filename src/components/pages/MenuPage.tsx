import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { MenuItems } from '@/entities';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Reveal from '@/components/Reveal';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

export default function MenuPage() {
  const [items, setItems] = useState<MenuItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Menu | OMGyro Halal';
    BaseCrudService.getAll<MenuItems>('menuitems', undefined, { limit: 200 })
      .then(r => setItems(r.items))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categories = ['All', ...Array.from(new Set(items.map(i => i.category).filter(Boolean) as string[]))];
  const filtered = activeCategory === 'All' ? items : items.filter(i => i.category === activeCategory);

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-brand-black py-20 px-4 text-center">
        <Reveal>
          <span className="text-primary font-heading uppercase tracking-widest text-sm">Fresh & Halal</span>
          <h1 className="font-display text-6xl md:text-7xl uppercase text-white mt-2">Our Menu</h1>
          <p className="font-paragraph text-white/60 mt-4 max-w-md mx-auto">
            Bold platters, signature sauces, and flavors you won't find anywhere else.
          </p>
        </Reveal>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-20"><LoadingSpinner /></div>
        ) : (
          <>
            {/* Category tabs */}
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={
                      'font-heading font-semibold px-6 py-2 rounded-full text-sm transition-all duration-200 ' +
                      (activeCategory === cat
                        ? 'bg-primary text-white shadow-md shadow-primary/30'
                        : 'bg-secondary text-foreground hover:bg-brand-black hover:text-white')
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20 font-paragraph">
                No items yet — add them in the Wix CMS to see them here.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((item, i) => (
                  <Reveal key={item._id} delay={(i % 4) * 60}>
                    <div className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col">
                      <div className="h-48 bg-muted overflow-hidden relative">
                        {item.dishImage ? (
                          <Image src={item.dishImage} alt={item.dishName ?? 'Dish'} className="w-full h-full object-cover" />
                        ) : (
                          <img
                            src={IMG + 'Gyros/Combo-Gyro.jpeg'}
                            alt={item.dishName ?? 'Dish'}
                            className="w-full h-full object-cover"
                          />
                        )}
                        {item.category && (
                          <span className="absolute top-3 left-3 bg-brand-black/80 text-white text-xs font-heading px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-heading font-bold text-brand-black text-base mb-1">{item.dishName}</h3>
                        {item.description && (
                          <p className="font-paragraph text-foreground/60 text-sm leading-relaxed flex-1 mb-3 line-clamp-2">{item.description}</p>
                        )}
                        {item.price != null && (
                          <span className="font-display text-xl text-primary">${item.price.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <section className="bg-brand-black py-16 px-4 text-center">
        <Reveal>
          <h2 className="font-display text-4xl uppercase text-white mb-4">Ready to Order?</h2>
          <p className="font-paragraph text-white/60 mb-8 max-w-sm mx-auto">Order online for pickup or delivery.</p>
          <a
            href="https://omgyrohalal.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-1"
          >
            Order Online
          </a>
        </Reveal>
      </section>
    </main>
  );
}
