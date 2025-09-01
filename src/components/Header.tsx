import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from 'public/lovable-uploads/png_logo.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center space-x-6 text-muted-foreground">
            <a 
              href="https://maps.app.goo.gl/Adjn9GbMGLBifpiC9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>454c Alexandra Avenue, Harrow, England, HA2 9TL</span>
            </a>
            <a 
              href="https://maps.app.goo.gl/D5AHJ1TFCwuHbuu66" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>734 Kenton Road Harrow Middlesex HA3 9QX</span>
            </a>
           
          </div>
          <div className="text-primary font-medium">
            <a 
              href="tel:+447454781461" 
              className="flex items-center space-x-2 hover:text-accent transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call for Orders</span>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src= {logo}  
              alt="Jalsa Paan Logo" 
              className="h-10 w-auto md:h-16 md:w-25 "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link font-medium transition-colors ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className='border-none text-white bg-red-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-red-500/50 hover:bg-accent' asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button size="sm" className="btn-hero" asChild>
              <Link to="/contact">Order Now</Link>
            </Button>
          </div>

          {/* Get a Quote Button (Mobile Only) */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="outline" size="sm" className="mr-1 border-none text-white bg-red-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-red-500/50 hover:bg-accent" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
              <Button className="w-full btn-hero" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Order Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
