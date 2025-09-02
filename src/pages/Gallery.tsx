import { useEffect, useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import heroImage from '@/assets/hero-paan.jpg';
import paanVarietiesImage from '@/assets/paan-varieties.jpg';
import sweetPaanImage from '@/assets/sweet-paan.jpg';
import calcuttaPaanImage from '@/assets/calcutta-paan.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  useEffect(() => {
      AOS.init({
        duration: 1200,
        once: false, // 👈 animations repeat
        mirror: true, // 👈 animate on scroll up also
        easing: "ease-in-out",
      });
    }, []);

  const galleryImages = [
    {
      src: heroImage,
      title: "Authentic Paan Presentation",
      description: "Our signature paan beautifully crafted with fresh ingredients"
    },
    {
      src: paanVarietiesImage,
      title: "Paan Varieties Collection",
      description: "A stunning array of our different paan varieties"
    },
    {
      src: sweetPaanImage,
      title: "Sweet Paan (Meetha)",
      description: "Traditional sweet paan with gulkand and silver leaf"
    },
    {
      src: calcuttaPaanImage,
      title: "Calcutta Paan",
      description: "Authentic Bengali-style paan with traditional spices"
    },
    {
      src: heroImage,
      title: "Premium Ingredients",
      description: "Only the finest quality betel leaves and ingredients"
    },
    {
      src: sweetPaanImage,
      title: "Artisan Craftsmanship",
      description: "Each paan is carefully crafted by our skilled artisans"
    },
    {
      src: paanVarietiesImage,
      title: "Special Occasions",
      description: "Beautifully presented paan for celebrations and events"
    },
    {
      src: calcuttaPaanImage,
      title: "Traditional Methods",
      description: "Time-honored techniques passed down through generations"
    },
    {
      src: heroImage,
      title: "Fresh Daily",
      description: "All our paan is made fresh daily with premium ingredients"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="mt-10 pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground"
            data-aos='fade-up'
            data-aos-delay='300'>
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed"
             data-aos='zoom-in'
            data-aos-delay='600'>
              Take a visual journey through our authentic paan creations, showcasing the artistry and tradition behind every piece.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="product-card overflow-hidden cursor-pointer group"
                data-aos="zoom-in"
                data-aos-delay={index * 120}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-playfair font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              Ready to Taste the Tradition?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience these beautiful paan creations in person. Visit our store or place an order to enjoy authentic flavors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Visit Our Store
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                Place an Order
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/90">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Gallery;