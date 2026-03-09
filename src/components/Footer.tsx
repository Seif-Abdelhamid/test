import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">OMGYRO</h3>
            <p className="text-background/80 mb-4">
              Experience the OMG Way - Creamy, savory, and absolutely delicious halal platters.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-background/80 hover:text-primary transition-colors duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-background/80 hover:text-primary transition-colors duration-200">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-background/80">South Orange, NJ</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-background/80">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-background/80">info@omgyro.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-background/80">
              <li>Monday - Thursday: 11am - 10pm</li>
              <li>Friday - Saturday: 11am - 11pm</li>
              <li>Sunday: 12pm - 9pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} seif-abdelhamid.github.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
