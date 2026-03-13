import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { Image } from '@/components/ui/image';

const IMG = 'https://seif-abdelhamid.github.io/inprogress/assets/images/';

const posts = [
  {
    date: 'Feb 2025',
    category: 'News',
    title: 'OMGYRO Expands Footprint Across New Jersey',
    excerpt: 'From South Orange to Morris Plains, Old Bridge, and Elmwood Park — OMGYRO is redefining halal dining across the Garden State.',
    img: IMG + 'The-store.jpg',
    href: 'https://finance.yahoo.com/news/omgyro-expands-footprint-across-jersey-125500175.html',
    external: true,
  },
  {
    date: 'Jan 2025',
    category: 'Press',
    title: 'NJ.com Spotlights OMGYRO Halal',
    excerpt: "New Jersey's food scene has a new star. OMGYRO's bold platters and signature sauces have caught the attention of food lovers everywhere.",
    img: IMG + 'people.jpg',
    href: 'https://www.nj.com',
    external: true,
  },
  {
    date: 'Nov 2024',
    category: 'Partnerships',
    title: 'OMGYRO x Crunch Fitness: Community First',
    excerpt: "We believe in fueling the people who keep our communities strong. Proud to partner with Crunch Fitness to bring bold, halal fuel to fitness fans across NJ.",
    img: IMG + 'Team.jpeg',
    href: 'https://finance.yahoo.com/news/omgyro-expands-footprint-across-jersey-125500175.html',
    external: true,
  },
  {
    date: 'Oct 2024',
    category: 'Guide',
    title: 'What Makes OMGYRO the Best Gyro Spot Near You',
    excerpt: 'Bold platters, halal-certified proteins, and signature sauces you can\'t find anywhere else. Here\'s why OMGYRO stands apart in the NJ food scene.',
    img: IMG + 'Platters/Compo-Platter.jpeg',
    href: '/menu',
    external: false,
  },
  {
    date: 'Dec 2024',
    category: 'Culture',
    title: 'The Sauce Bible: Our Four Signature Sauces Explained',
    excerpt: "White sauce, green sauce, hot sauce, OMG sauce — each one crafted to elevate your meal. Here's the story behind them.",
    img: IMG + 'Sauce-Bible.jpeg',
    href: '/store',
    external: false,
  },
];

export default function BlogPage() {
  useEffect(() => { document.title = 'Blog | OMGyro Halal'; }, []);

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-brand-black py-20 px-4 text-center">
        <Reveal>
          <span className="text-primary font-heading uppercase tracking-widest text-sm">Latest</span>
          <h1 className="font-display text-6xl md:text-7xl uppercase text-white mt-2">The OMG Blog</h1>
          <p className="font-paragraph text-white/60 mt-4 max-w-md mx-auto">News, stories, and updates from the OMGYRO crew.</p>
        </Reveal>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ date, category, title, excerpt, img, href, external }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col">
                <div className="h-52 overflow-hidden">
                  <Image src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-heading font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">{category}</span>
                    <span className="text-xs font-paragraph text-muted-foreground">{date}</span>
                  </div>
                  <h2 className="font-heading font-bold text-brand-black text-lg mb-3 leading-snug flex-1">{title}</h2>
                  <p className="font-paragraph text-foreground/60 text-sm leading-relaxed mb-5 line-clamp-3">{excerpt}</p>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all duration-200"
                    >
                      Read More <i className="fa-solid fa-arrow-right text-xs" />
                    </a>
                  ) : (
                    <Link
                      to={href}
                      className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all duration-200"
                    >
                      Read More <i className="fa-solid fa-arrow-right text-xs" />
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
