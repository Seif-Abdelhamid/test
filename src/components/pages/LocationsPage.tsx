import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { Locations } from '@/entities';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Reveal from '@/components/Reveal';

const FALLBACK = 'https://seif-abdelhamid.github.io/inprogress/assets/images/The-store.jpg';

export default function LocationsPage() {
  const [locations, setLocations] = useState<Locations[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Locations | OMGyro Halal';
    BaseCrudService.getAll<Locations>('locations', undefined, { limit: 50 })
      .then(r => setLocations(r.items))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-brand-black py-20 px-4 text-center">
        <Reveal>
          <span className="text-primary font-heading uppercase tracking-widest text-sm">Visit Us</span>
          <h1 className="font-display text-6xl md:text-7xl uppercase text-white mt-2">Our Locations</h1>
          <p className="font-paragraph text-white/60 mt-4 max-w-md mx-auto">
            Find an OMGYRO near you. Halal done right, across New Jersey.
          </p>
        </Reveal>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-20"><LoadingSpinner /></div>
        ) : locations.length === 0 ? (
          <p className="text-center text-muted-foreground py-20 font-paragraph">
            Locations coming soon — check back shortly!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <Reveal key={loc._id} delay={i * 80}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                  <div className="h-52 bg-brand-black overflow-hidden">
                    {loc.locationImage ? (
                      <Image src={loc.locationImage} alt={loc.locationName ?? 'Location'} className="w-full h-full object-cover" />
                    ) : (
                      <img src={FALLBACK} alt={loc.locationName ?? 'Location'} className="w-full h-full object-cover opacity-70" />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-display text-2xl uppercase text-brand-black mb-4">{loc.locationName}</h2>
                    {loc.address && (
                      <div className="flex items-start gap-3 mb-3">
                        <i className="fa-solid fa-location-dot text-primary mt-1 flex-shrink-0" />
                        <span className="font-paragraph text-foreground/70 text-sm">{loc.address}</span>
                      </div>
                    )}
                    {loc.operatingHours && (
                      <div className="flex items-start gap-3 mb-3">
                        <i className="fa-solid fa-clock text-primary mt-1 flex-shrink-0" />
                        <span className="font-paragraph text-foreground/70 text-sm whitespace-pre-line">{loc.operatingHours}</span>
                      </div>
                    )}
                    {loc.phoneNumber && (
                      <div className="flex items-center gap-3 mb-3">
                        <i className="fa-solid fa-phone text-primary flex-shrink-0" />
                        <a href={\`tel:\${loc.phoneNumber}\`} className="font-paragraph text-primary text-sm hover:underline">{loc.phoneNumber}</a>
                      </div>
                    )}
                    {loc.address && (
                      <a
                        href={\`https://maps.google.com/?q=\${encodeURIComponent(loc.address)}\`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 bg-brand-black text-white font-heading font-semibold px-6 py-3 rounded-full text-sm hover:bg-primary transition-colors self-start"
                      >
                        Get Directions <i className="fa-solid fa-arrow-right" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
