import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Facebook, Instagram, X  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaHome, FaInfoCircle, FaShoppingBag ,FaImages, FaQuoteLeft ,FaPhone} from 'react-icons/fa';
import logo from 'public/lovable-uploads/png_logo.png';


const milestones = [
  { label: 'Home', path: '/', icon: <FaHome /> },
  { label: 'About Us', path: '/about', icon: <FaInfoCircle /> },
  { label: 'Our Products', path: '/products', icon: <FaShoppingBag /> },
  { label: 'Gallery', path: '/gallery', icon: <FaImages /> },
  { label: 'Testimonials', path: '/testimonials', icon: <FaQuoteLeft /> },
  { label: 'Contact Us', path: '/contact', icon: <FaPhone  className="transform scale-x-[-1]"/> },
];

const Footer = () => {

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Jalsa Paan Logo" 
                className=" w-auto h-16 "
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Experience the authentic taste of traditional paan with our premium quality ingredients and time-honored recipes.
            </p>
            <div className="text-xs text-primary-foreground/60">
              JALSA PAAN LIMITED
              Company No. 12100541<br />
              Incorporated 12 July 2019
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
  {milestones.map((item) => (
    <li key={item.path}>
      <Link 
        to={item.path} 
        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center space-x-2"
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
  <h3 className="font-playfair font-semibold text-lg">Contact Info</h3>
  <div className="space-y-3 text-sm">
    <div className="flex items-start space-x-3">
      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
      <div>
        <a
          href="https://maps.app.goo.gl/Adjn9GbMGLBifpiC9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          454c Alexandra Avenue<br /> Rayners Lane, Harrow HA2 9TL
        </a>
      </div>
    </div>
    <div className="flex items-start space-x-3">
      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
      <div>
        <a
          href="https://maps.google.com/?q=734+Kenton+Road,+Harrow,+HA3+9QX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          734 Kenton Road,<br /> Harrow, HA3 9QX
        </a>
      </div>
    </div>
    <div className="flex items-center space-x-3">
      <Phone className="w-4 h-4" />
      <a
        href="tel:+447454781461"
        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
      >
        Call for Orders
      </a>
    </div>
    <div className="flex items-center space-x-3">
      <Mail className="w-4 h-4" />
      <a
        href="mailto:info@jalsapaan.co.uk"
        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
      >
        info@jalsapaan.co.uk
      </a>
    </div>
    <div className="flex items-center space-x-3">
      <Clock className="w-4 h-4" />
      <a
        href="#"
        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
      >
        Mon-Sun: 12pm-10pm
      </a>
    </div>
  </div>
</div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to our newsletter for special offers and new paan varieties.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button size="sm" className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground">
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.facebook.com/share/16y9xN6AjZ/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/jalsa.paan/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Jalsa Paan Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;