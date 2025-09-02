import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Leaf, Users, Award, ArrowRight, PartyPopper, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import Preloader from '@/components/Preloader';
import heroImage from '@/assets/hero-paan.jpg';
import paanVarietiesImage from '@/assets/Paan Verity.webp';
import sweetPaanImage from '@/assets/Sweet Paan 3.webp';
import calcuttaPaanImage from '@/assets/Calcutte Paan.webp';
import backgroundPattern from '@/assets/bg.jpeg';
import leaf1 from '/lovable-uploads/leaf_1.png';
import leaf2 from '/lovable-uploads/leaf_2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  //  const [isLoading, setIsLoading] = useState(true);
  
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
// Inside Index component

  const heroTexts = [
    { main: "Experience the Joy of", highlight: "Authentic Paan" },
    { main: "Live Orders for", highlight: "Events & Functions" },
    { main: "Fresh Paan for Your", highlight: "Special Occasions" },
    { main: "Traditional Taste for", highlight: "Modern Celebrations" }

  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(textInterval);
  }, [heroTexts.length]);
  // const handlePreloaderComplete = () => {
  //   setIsLoading(false);
  // };
  const features = [
    { icon: <Leaf className="w-8 h-8 text-primary" />, title: "Fresh Ingredients", description: "We use only the freshest betel leaves and premium quality ingredients sourced daily." },
    { icon: <Users className="w-8 h-8 text-primary" />, title: "Expert Craftsmanship", description: "Our skilled paan makers have years of experience in creating the perfect paan." },
    { icon: <Award className="w-8 h-8 text-primary" />, title: "Authentic Recipes", description: "Traditional recipes passed down through generations, maintaining authentic flavors." },
    { icon: <Star className="w-8 h-8 text-primary" />, title: "Premium Quality", description: "We maintain the highest standards of quality and hygiene in all our preparations." },
    { icon: <Calendar className="w-8 h-8 text-primary" />, title: "Live Event Orders", description: "We cater to weddings, parties, and special occasions with fresh paan served on-site." },
    { icon: <PartyPopper className="w-8 h-8 text-primary" />, title: "Event Catering", description: "Professional paan service for your celebrations with customizable options and setup." }
  ];

  const popularProducts = [
    { name: "Sweet Paan (Meetha)", description: "A delightful mix of gulkand, coconut, dates, and aromatic spices wrapped in fresh betel leaf.", image: sweetPaanImage, price: "From £3.50" },
    { name: "Calcutta Paan", description: "Traditional Calcutta-style paan with tobacco and authentic Bengali spices.", image: calcuttaPaanImage, price: "From £4.00" },
    { name: "Paan Varieties", description: "Explore our wide range of paan varieties including flavored and specialty options.", image: paanVarietiesImage, price: "From £3.00" }
  ];
//  if (isLoading) {
//     return <Preloader onComplete={handlePreloaderComplete} />;
//   }
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-1 sm:pt-40 pb-10">
        {/* Background Image always visible */}
        <div className="absolute inset-0">
          <img
            src={backgroundPattern}
            alt="Authentic Paan"
            className="w-full h-full object-cover object-center blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-primary/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className={`space-y-4 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            {/* Animated Hero Text */}
            <div className="h-32 lg:h-40 flex items-center justify-center">
              <h1
                key={currentTextIndex}
                className="text-4xl sm:text-5xl lg:text-7xl font-playfair  text-white leading-tight animate-fade-in"
                data-aos="fade-up"
              >
                {heroTexts[currentTextIndex].main}<br />
                {/* drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] */}
                <span className="text-yellow-400 font-extrabold">{heroTexts[currentTextIndex].highlight}</span>
              </h1>
            </div>
            <p
              className="text-md sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-0 sm:px-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discover the rich tradition of premium paan crafted with the finest ingredients and time-honored recipes from the heart of India.
            </p>

            {/* Live Event Highlight Box */}
            <div
              className="bg-white/15 backdrop-blur rounded-xl p-6 lg:p-8 max-w-3xl mx-auto border border-white/30 shadow-2xl"
              data-aos-delay="0"
              
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <PartyPopper className="w-8 h-8 text-yellow-300 animate-pulse" />
                <h3 className="text-xl lg:text-2xl font-bold  text-yellow-400 ">Live Event Catering Available</h3>
                <Calendar className="w-8 h-8 text-yellow-300 animate-pulse" />
              </div>
              <p className="text-base lg:text-lg text-white/90 font-medium">
                Perfect for weddings, parties & celebrations - Fresh paan served on-site by our experts
              </p>
              <div className="mt-4 text-sm lg:text-base text-white/80">
                ✨ Professional setup • Custom varieties • On-demand preparation ✨
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
              <Button
                size="lg"
                className="btn-hero text-base lg:text-lg px-6 lg:px-8 lg:py-4 w-full sm:w-auto"
                asChild
               
              >
                <Link to="/contact">
                  Order Now <ArrowRight className="ml-2 w-4 lg:w-5 h-4 lg:h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-secondary text-base lg:text-lg px-6 lg:px-8 lg:py-4 border-white text-accent hover:bg-white hover:text-primary transition-colors duration-300 w-full sm:w-auto"
                asChild
          
              >
                <Link to="/contact">Event Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6" data-aos="fade-up">
              Why Choose Jalsa Paan?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              We're committed to providing you with the most authentic and delicious paan experience in Harrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="product-card text-center p-6 h-full"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6" data-aos="fade-up">
              Our Popular Paan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Taste the tradition with our most loved paan varieties, each crafted with care and authentic ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProducts.map((product, index) => (
              <Card
                key={index}
                className="product-card overflow-hidden h-full"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover scale-100 object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-playfair font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between">
                  <Button className="btn-hero w-full group relative overflow-hidden" asChild> 
                    <Link to="/contact" className="flex items-center justify-center gap-2"> 
                    <img src={leaf2} alt="Paan Icon" className="h-4 w-4  " /> 
                    <span>Order Now</span>
                    <img src={leaf1} alt="Paan Icon" className="h-4 w-4 " /> 
                    </Link> 
                  </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* bg-gradient-to-r from-primary via-primary-dark to-accent */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-green-700 ">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
              Ready to Experience Authentic Paan?
            </h2>
            <p className="text-xl text-white/90" data-aos="fade-up" data-aos-delay="200">
              Visit us in Harrow or get in touch to place your order. We're here to serve you the finest paan experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-secondary hover:scale-105 hover:bg-secondary-dark text-secondary-foreground text-lg px-8 py-4"
                asChild
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link to="/products">
                  View All Products <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-red-500 text-lg px-8 py-4"
                asChild
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Link to="/contact#hero">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
