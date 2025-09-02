import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SERVICE_ID = 'Fake';
const TEMPLATE_ID_Quote = 'Fake';
const TEMPLATE_ID_Order = 'Fake';
const USER_ID = 'Fake';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const { toast } = useToast();
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);

  // Quote Form handler
  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingQuote(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_Quote, e.target as HTMLFormElement, USER_ID)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setIsSubmittingQuote(false);
      }, () => {
        toast({
          title: "Error",
          description: "Failed to send. Please try again.",
        });
        setIsSubmittingQuote(false);
      });
  };

  // Order Form handler
  const handleOrderSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingOrder(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_Order, e.target as HTMLFormElement, USER_ID)
      .then(() => {
        toast({
          title: "Order Placed Successfully!",
          description: "Thank you for your order. We'll contact you soon.",
        });
        setIsSubmittingOrder(false);
      }, () => {
        toast({
          title: "Try Again!",
          description: "Failed to send. Please try again.",
        });
        setIsSubmittingOrder(false);
      });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Stores",
      details: [
        "Main Store: 454c Alexandra Avenue, Rayners Lane, Harrow, HA2 9TL",
        "New Branch: 734 Kenton Road, Harrow, HA3 9QX (Opening Sept 1, 2025)"
      ],
      action: { label: "Get Directions", link: "https://maps.app.goo.gl/Adjn9GbMGLBifpiC9" }
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["For Orders & Inquiries", "Available 7 Days a Week"],
      action: { label: "Call Now", link: "tel:+447454781461" }
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@jalsapaan.co.uk", "We'll respond you as soon as possible!"],
      action: { label: "Send Email", link: "mailto:info@jalsapaan.co.uk" }
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Monday - Sunday", "12:00 PM - 10:00 PM"],
      action: { label: "View Hours", link: "#hours" }
    }
  ];

  const paanOptions = [
    "Sweet Paan (Meetha)",
    "Calcutta Paan",
    "Khara Paan",
    "Chocolate Paan",
    "Ice Cream Paan",
    "Fire Paan",
    "Custom Paan",
    "Mixed Variety"
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="mt-10 pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" id='hero'>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground"
              data-aos="fade-up"
              data-aos-delay="300">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed"
              data-aos="zoom-in"
              data-aos-delay="600">
              Ready to experience authentic paan? Contact us for orders, quotes, or any questions about our delicious offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
            {contactInfo.map((info, index) => (
              <Card key={index} className="product-card text-center h-full"
                data-aos="zoom-in"
                data-aos-delay={index * 200}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair font-semibold text-lg">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className='z-10 relative' asChild>
                    <a href={info.action.link} target="_blank" rel="noopener noreferrer">
                      {info.action.label}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 bg-muted/30" id='order-form'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Quote Form */}
            <Card className="product-card"
              data-aos="fade-right"
              data-aos-delay="300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                  Get a Quote
                </CardTitle>
                <p className="text-muted-foreground">Get a personalized quote for your paan order or event catering.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input name="fullName" required className="z-10 relative" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number *</label>
                      <Input name="phone" type="tel" required className="z-10 relative" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <Input name="email" type="email" required className="z-10 relative" placeholder="Enter your email address" />
                  </div>
                  <div className="space-y-2 z-10 relative">
                    <label className="text-sm font-medium">Event Type</label>
                    <Select name="eventType">
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type!" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="festival">Festival Celebration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Number of Guests</label>
                    <Input name="guests" type="number" className="z-10 relative" placeholder="Number of guests" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Additional Details</label>
                    <Textarea name="details" rows={4} className="z-10 relative" placeholder="Provide any other information to help us serve you better." />
                  </div>
                  <Button type="submit" className="w-full btn-hero z-10 relative" disabled={isSubmittingQuote}>
                    {isSubmittingQuote ? "Sending..." : "Get a Quote"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond you as soon as possible!
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Order Form */}
            <Card className="product-card"
              data-aos="fade-left"
              data-aos-delay="400">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-accent " />
                  Place an Order
                </CardTitle>
                <p className="text-muted-foreground">Ready to order? Fill out this form and we'll prepare your paan fresh!</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleOrderSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input name="name" required className="z-10 relative" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number *</label>
                      <Input name="phone" type="tel" required className="z-10 relative" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  <div className="space-y-2 z-10 relative">
                    <label className="text-sm font-medium">Paan Selection *</label>
                    <Select name="paan_name" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your paan" />
                      </SelectTrigger>
                      <SelectContent>
                        {paanOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Quantity *</label>
                    <Input name="quantity" type="number" min="1" required className="z-10 relative" placeholder="Quantity" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preferred Pickup Date</label>
                      <Input name="pickup_date" type="date" className="z-10 relative" placeholder="Pickup date" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preferred Pickup Time</label>
                      <Input name="pickup_time" type="time" className="z-10 relative" placeholder="Pickup time" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Special Instructions</label>
                    <Textarea name="instructions" rows={3} className="z-10 relative" placeholder="Tell us how you’d like your paan – we’ll make it just the way you love!" />
                  </div>
                  <Button type="submit" className="w-full text-white bg-red-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-red-500/50 hover:bg-accent z-10 relative" disabled={isSubmittingOrder}>
                    {isSubmittingOrder ? "Placing Order..." : "Place Order"}
                    <Phone className="ml-2 w-4 h-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll call you to confirm your order and provide pickup/delivery details.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className=" mx-auto text-center space-y-8">
            <h2 className="text-4xl font-playfair font-bold text-foreground"
              data-aos="fade-up"
              data-aos-delay="300">
              Visit Our Store
            </h2>
            <p className="text-xl text-muted-foreground"
              data-aos="zoom-in"
              data-aos-delay="500">
              Come and experience our authentic paan in person. We're located in the heart of Rayners Lane, Harrow.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>
              <Card className="overflow-hidden"
                data-aos="fade-right"
                data-aos-delay="400">
                <div className="p-10 bg-muted flex items-center justify-center w-full">
                  <div className="text-center space-y-4 w-full">
                    <MapPin className="w-16 h-16 text-primary mx-auto" />
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-playfair font-semibold">Main Store</h3>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">454c Alexandra Avenue, Rayners Lane, Harrow, HA2 9TL</p>
                      </div>
                    </div>
                    <div className="w-full h-64 rounded-lg overflow-hidden my-4">
                      <iframe
                        title="Main Store Map"
                        src="https://www.google.com/maps?q=454c+Alexandra+Avenue,+Rayners+Lane,+Harrow,+HA2+9TL&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/Adjn9GbMGLBifpiC9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hero inline-block mt-2"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden"
                data-aos="fade-left"
                data-aos-delay="500">
                <div className="p-10 bg-muted flex items-center justify-center">
                  <div className="text-center space-y-4 w-full">
                    <MapPin className="w-16 h-16 text-primary mx-auto" />
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-playfair font-semibold">New Branch</h3>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">734 Kenton Road, Harrow, HA3 9QX</p>
                      </div>
                    </div>
                    <div className="w-full h-64 rounded-lg overflow-hidden my-4">
                      <iframe
                        title="New Branch Map"
                        src="https://www.google.com/maps?q=734+Kenton+Road,+Harrow,+HA3+9QX&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a
                      href="https://maps.google.com/?q=734+Kenton+Road,+Harrow,+HA3+9QX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hero inline-block mt-2"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-playfair font-semibold mb-2">Opening Hours</h4>
                <p className="text-muted-foreground">Monday - Sunday<br />12:00 PM - 10:00 PM</p>
              </div>
              <div>
                <h4 className="font-playfair font-semibold mb-2">Parking</h4>
                <p className="text-muted-foreground">Street parking available<br />Easy access location</p>
              </div>
              <div>
                <h4 className="font-playfair font-semibold mb-2">Transport</h4>
                <p className="text-muted-foreground">Close to Rayners Lane Station<br />Multiple bus routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Contact;