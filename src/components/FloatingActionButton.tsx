import { MessageCircle, Quote, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-scale-in">
          <Link
            to="/contact"
            className="flex items-center space-x-3 bg-card text-card-foreground px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105  transition-all group"
          >
            <Quote className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium whitespace-nowrap">Get a Quote</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-3 bg-card text-card-foreground px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105  transition-all group"
          >
            <ShoppingCart className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium whitespace-nowrap">Order Now</span>
          </Link>
          <a
            href="https://wa.me/447454781461"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 transition-all group"
          >
            <FaWhatsapp size={24} color="#ffffffff" />
            <span className="text-sm font-medium whitespace-nowrap">WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`floating-btn text-primary-foreground transition-transform ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <div className="w-6 h-6 relative">
            <div className="absolute inset-0 w-full h-0.5 bg-current top-1/2 transform -translate-y-1/2"></div>
            <div className="absolute inset-0 h-full w-0.5 bg-current left-1/2 transform -translate-x-1/2"></div>
          </div>
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingActionButton;