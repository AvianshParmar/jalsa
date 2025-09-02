import { Link } from "react-router-dom";
import { Star, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import sweetPaanImage from "@/assets/sweet-paan.jpg";
import calcuttaPaanImage from "@/assets/calcutta-paan.jpg";
import paanVarietiesImage from "@/assets/paan-varieties.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // 👈 animations repeat
      mirror: true, // 👈 animate on scroll up also
      easing: "ease-in-out",
    });
  }, []);

  // Paan Products
  const paanProducts = [
    {
      id: 1,
      name: "Jalsa Paan Medley",
      description: "Our signature mixed paan collection featuring traditional favorites",
      image: sweetPaanImage,
      ingredients: [
        "Kids Toto Paan",
        "Sweet Paan Bomb",
        "Calcutta Sweet Paan",
        "Calcutta Sada Khara/Khara Meetha Paan",
      ],
      category: "Medley",
      popular: true,
      spiceLevel: 1,
    },
    {
      id: 2,
      name: "Calcutta Paan",
      description: "Traditional Bengali-style paan with authentic spices and tobacco",
      image: calcuttaPaanImage,
      ingredients: [
        "Fresh Betel Leaf",
        "Tobacco",
        "Lime",
        "Katha",
        "Chuna",
        "Traditional Spices",
      ],
      category: "Traditional",
      popular: true,
      spiceLevel: 2,
    },
    {
      id: 3,
      name: "Khara Paan",
      description: "Spicy and refreshing paan with lime, mint, and traditional spices",
      image: paanVarietiesImage,
      ingredients: ["Fresh Betel Leaf", "Lime", "Mint", "Spices", "Katha", "Chuna"],
      category: "Spicy",
      popular: false,
      spiceLevel: 3,
    },
    {
      id: 4,
      name: "Sweet Paan (Meetha)",
      description: "Delightful mix of gulkand, dates, coconut, and aromatic spices",
      image: sweetPaanImage,
      ingredients: [
        "Fresh Betel Leaf",
        "Gulkand (Rose Petals)",
        "Coconut",
        "Dates",
        "Cardamom",
        "Silver Leaf",
      ],
      category: "Sweet",
      popular: true,
      spiceLevel: 0,
    },
    {
      id: 5,
      name: "Flavour Paan",
      description: "Modern fusion paan with various fruit and dessert flavors",
      image: paanVarietiesImage,
      ingredients: [
        "Kesar Sweet/Sada Paan",
        "Khas Sweet/Sada Paan",
        "Ratrani Sweet/Sada Paan",
        "Strawberry Sweet/Sada Paan",
      ],
      category: "Flavour",
      popular: true,
      spiceLevel: 0,
    },
    {
      id: 6,
      name: "Quiwam Paan",
      description: "Premium paan with special tobacco blend and traditional preparation",
      image: calcuttaPaanImage,
      ingredients: [
        "Fresh Betel Leaf",
        "Premium Quiwam",
        "Special Spices",
        "Traditional Preparation",
      ],
      category: "Premium",
      popular: false,
      spiceLevel: 2,
    },
    {
      id: 7,
      name: "Khara Meetha Paan",
      description: "Perfect balance of sweet and spicy flavors in one paan",
      image: sweetPaanImage,
      ingredients: [
        "Fresh Betel Leaf",
        "Sweet Elements",
        "Spicy Mix",
        "Balanced Spices",
      ],
      category: "Fusion",
      popular: true,
      spiceLevel: 1,
    },
    {
      id: 8,
      name: "Maghai Paan",
      description: "Traditional style paan with authentic Maghai preparation",
      image: paanVarietiesImage,
      ingredients: [
        "Fresh Betel Leaf",
        "Maghai Mix",
        "Traditional Spices",
        "Authentic Preparation",
      ],
      category: "Traditional",
      popular: false,
      spiceLevel: 2,
    },
  ];

  // Other Products
  const otherProducts = [
    {
      id: 9,
      name: "All Kinds Of Mukhwas",
      description: "Traditional mouth fresheners in various flavors and styles",
      image: sweetPaanImage,
      ingredients: ["Assorted Seeds", "Spices", "Natural Flavors"],
      category: "Mukhwas",
      popular: true,
      spiceLevel: 0,
    },
    {
      id: 10,
      name: "Fresh Indian Masala Soda",
      description: "Refreshing traditional soda with authentic Indian spices",
      image: paanVarietiesImage,
      ingredients: ["Carbonated Water", "Indian Spices", "Natural Flavors"],
      category: "Beverages",
      popular: true,
      spiceLevel: 1,
    },
    {
      id: 11,
      name: "Traditional Goti Soda",
      description: "Classic bottle soda with traditional preparation method",
      image: calcuttaPaanImage,
      ingredients: ["Carbonated Water", "Traditional Flavors", "Glass Bottle"],
      category: "Beverages",
      popular: false,
      spiceLevel: 0,
    },
    {
      id: 12,
      name: "Fresh Sugarcane Juice",
      description: "Freshly extracted pure sugarcane juice",
      image: sweetPaanImage,
      ingredients: ["Fresh Sugarcane", "Natural Sweetness"],
      category: "Beverages",
      popular: true,
      spiceLevel: 0,
    },
    {
      id: 13,
      name: "Indian Snacks",
      description: "Variety of traditional Indian snacks and savories",
      image: paanVarietiesImage,
      ingredients: ["Mixed Snacks", "Traditional Spices", "Various Flavors"],
      category: "Snacks",
      popular: true,
      spiceLevel: 1,
    },
    {
      id: 14,
      name: "Soft Drinks",
      description: "Selection of popular soft drinks and beverages",
      image: calcuttaPaanImage,
      ingredients: ["Assorted Brands", "Various Flavors"],
      category: "Beverages",
      popular: false,
      spiceLevel: 0,
    },
  ];

  const allProducts = [...paanProducts, ...otherProducts];

  const categories = [
    "All",
    "Medley",
    "Traditional",
    "Sweet",
    "Flavour",
    "Premium",
    "Fusion",
    "Mukhwas",
    "Beverages",

  ];

  const getSpiceLevelText = (level: number) => {
    switch (level) {
      case 0:
        return "Mild";
      case 1:
        return "Medium";
      case 2:
        return "Spicy";
      case 3:
        return "Very Spicy";
      default:
        return "Mild";
    }
  };

  const getSpiceLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-green-100 text-green-800";
      case 1:
        return "bg-yellow-100 text-yellow-800";
      case 2:
        return "bg-orange-100 text-orange-800";
      case 3:
        return "bg-red-100 text-red-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="mt-10 pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1
              className="text-5xl md:text-6xl font-playfair font-bold text-foreground"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Flavors of Jalsa Paan
            </h1>
            <p
              className="text-xl text-muted-foreground leading-relaxed"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Explore our wide variety of authentic and innovative paan creations,
              each crafted with the finest ingredients and traditional techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, i) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "btn-hero" : ""}
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <Card
                key={product.id}
                className="product-card overflow-hidden h-full"
                data-aos="zoom-in"
                data-aos-delay={index * 120}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.popular && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <Badge
                      variant="secondary"
                      className={getSpiceLevelColor(product.spiceLevel)}
                    >
                      {getSpiceLevelText(product.spiceLevel)}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-playfair font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-foreground flex items-center">
                      <Leaf className="w-4 h-4 mr-2 text-primary" />
                      Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {product.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end pt-4">
                    <Button
                      className="btn-hero"
                      asChild
                      data-aos="fade-up"
                      data-aos-delay={index * 120}
                    >
                      <Link to="/contact">
                        Order Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center space-y-8"
            data-aos="fade-up"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              Custom Paan Orders
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't see exactly what you're looking for? We're happy to create
              custom paan combinations based on your preferences and dietary
              requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: <Leaf className="w-6 h-6 text-primary" />,
                  title: "Custom Ingredients",
                  desc: "Choose your preferred ingredients and spice levels",
                },
                {
                  icon: <Star className="w-6 h-6 text-primary" />,
                  title: "Special Occasions",
                  desc: "Beautifully presented paan for events and celebrations",
                },
                {
                  icon: <ArrowRight className="w-6 h-6 text-primary" />,
                  title: "Bulk Orders",
                  desc: "Special pricing for large quantity orders",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="product-card p-6 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={i * 200}
                >
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="font-playfair font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              size="lg"
              className="btn-hero text-lg px-8 py-4"
              asChild
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link to="/contact#order-form">
                Discuss Custom Order <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Products;
