import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Harrow",
      rating: 5,
      text: "Absolutely authentic taste! The sweet paan reminds me of my childhood in Mumbai. The quality of ingredients is exceptional and the service is always friendly.",
      avatar: "PS",
      date: "2 weeks ago"
    },
    {
      name: "Mohammed Khan",
      location: "Wembley",
      rating: 5,
      text: "Best Calcutta paan in London! I've been coming here for over a year and the quality is consistently excellent. The traditional preparation methods really show.",
      avatar: "MK",
      date: "1 month ago"
    },
    {
      name: "Rajesh Patel",
      location: "Southall",
      rating: 5,
      text: "Jalsa Paan has become my go-to place for special occasions. Their custom paan arrangements for my daughter's wedding were absolutely beautiful and delicious.",
      avatar: "RP",
      date: "3 weeks ago"
    },
    {
      name: "Anita Gupta",
      location: "Harrow",
      rating: 5,
      text: "Fresh ingredients, traditional recipes, and excellent hygiene standards. I especially love their chocolate paan - such a creative fusion that works perfectly!",
      avatar: "AG",
      date: "1 week ago"
    },
    {
      name: "Suresh Reddy",
      location: "Ealing",
      rating: 5,
      text: "The fire paan experience is incredible! The presentation is spectacular and the taste is unforgettable. Highly recommend for anyone looking for authentic paan.",
      avatar: "SR",
      date: "2 months ago"
    },
    {
      name: "Kavita Singh",
      location: "Harrow",
      rating: 5,
      text: "I order from Jalsa Paan regularly and they never disappoint. The sweet varieties are my favorite, and I appreciate how they accommodate special dietary requests.",
      avatar: "KS",
      date: "3 days ago"
    },
    {
      name: "Arjun Malhotra",
      location: "Uxbridge",
      rating: 5,
      text: "Authentic flavors that transport you to India! The staff is knowledgeable about ingredients and always helps me choose the perfect paan for my taste.",
      avatar: "AM",
      date: "1 month ago"
    },
    {
      name: "Deepika Joshi",
      location: "Harrow",
      rating: 5,
      text: "The ice cream paan is a revelation! Such a unique combination that shouldn't work but absolutely does. My kids love it too. Great family-friendly place.",
      avatar: "DJ",
      date: "2 weeks ago"
    },
    {
      name: "Vikram Mehta",
      location: "Stanmore",
      rating: 5,
      text: "Professional service and premium quality. I've tried paan places across London, but Jalsa Paan stands out for their consistency and authentic preparation.",
      avatar: "VM",
      date: "1 week ago"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "95%", label: "Repeat Customers" },
    { number: "5+", label: "Years Serving" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="mt-10 pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground">
              What Our Customers Say
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what our valued customers have to say about their Jalsa Paan experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {stats.map((stat, index) => (
              <Card key={index} className="product-card text-center p-6">
                <CardContent className="space-y-2">
                  <div className="text-4xl font-playfair font-bold text-primary">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="product-card h-full">
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-primary/20" />
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Why Customers Choose Us
              </h2>
              <p className="text-xl text-muted-foreground">
                The most mentioned reasons in our customer reviews.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="product-card p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl">Authentic Taste</h3>
                  <p className="text-muted-foreground">
                    "Genuine traditional flavors that remind customers of home"
                  </p>
                </CardContent>
              </Card>
              
              <Card className="product-card p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl">Fresh Ingredients</h3>
                  <p className="text-muted-foreground">
                    "Premium quality betel leaves and ingredients sourced daily"
                  </p>
                </CardContent>
              </Card>
              
              <Card className="product-card p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl">Excellent Service</h3>
                  <p className="text-muted-foreground">
                    "Friendly, knowledgeable staff who care about customer experience"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary-dark to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground">
              Join Our Happy Customers
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Experience the authentic taste that has earned us these wonderful reviews. Visit us today or place your order online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="btn-secondary bg-secondary hover:bg-secondary-dark text-secondary-foreground text-lg px-8 py-4 rounded-lg font-semibold transition-all">
                Leave a Review
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rounded-lg font-semibold transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Testimonials;