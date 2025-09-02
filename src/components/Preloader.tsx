import { useEffect } from 'react';
import logo from '@/assets/png logo.png';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  useEffect(() => {
    // Simple splash timer - show for 3 seconds then complete
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Simple Logo */}
        <div className="relative">
          <img 
            src={logo}
            alt="Jalsa Paan Logo"
            className="w-40 h-auto md:w-40 md:h-auto mx-auto object-contain animate-gentle-pulse"
          />
        </div>
        
        {/* Simple Brand Name */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground tracking-wide">
            JALSA PAAN
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            Experience the Joy of Authentic Paan
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gentle-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-gentle-pulse { animation: gentle-pulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Preloader;