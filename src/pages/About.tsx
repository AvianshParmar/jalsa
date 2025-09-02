import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Calendar, MapPin, Users, Award, Leaf, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

const About = () => {
  useEffect(() => {
    // initialize AOS to allow repeating animations on scroll
    AOS.init({
      duration: 900,
      once: false,    // allow animations to happen more than once
      mirror: true,   // animate elements when scrolling past them in both directions
      offset: 120,
      easing: "ease-in-out",
    });

    // ensure AOS picks up any dynamic content
    AOS.refresh();
  }, []);

  const milestones = [
    {
      year: "2019",
      title: "Company Incorporation",
      description:
        "Jalsa Paan Limited was incorporated on 12th July 2019, marking the beginning of our journey to bring authentic paan to Harrow.",
      icon: <Calendar className="w-6 h-6 text-primary" />,
    },
    {
      year: "2020",
      title: "First Location",
      description:
        "Opened our flagship store at Alexandra Avenue, establishing our presence in the heart of Rayners Lane.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      year: "2021",
      title: "Community Growth",
      description:
        "Built a loyal customer base of over 1000+ happy customers who appreciate authentic paan flavors.",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      year: "2024",
      title: "Premium Quality",
      description:
        "Recognized as one of the finest paan providers in Harrow, maintaining traditional recipes with modern hygiene standards.",
      icon: <Award className="w-6 h-6 text-primary" />,
    },
    {
      year: "2025",
      title: "Second Branch Opening",
      description:
        "Expanding our reach with a new branch at 734 Kenton Road, Harrow, HA3 9QX, opening September 1st, 2025.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Authenticity",
      description:
        "We stay true to traditional paan-making methods and use only authentic ingredients sourced from trusted suppliers.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passion",
      description:
        "Every paan is crafted with love and passion, ensuring each bite delivers the perfect balance of flavors.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community",
      description:
        "We're proud to serve the diverse community of Harrow, bringing people together through the joy of paan.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality and hygiene, ensuring every customer receives premium paan.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section
        className="mt-10 pt-32 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"
        data-aos="zoom-in-up"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the journey of Jalsa Paan Limited and our commitment to
              bringing authentic, traditional paan to the heart of Harrow.
            </p>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16" data-aos="slide-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-playfair font-bold text-foreground">
                  JALSA PAAN LIMITED
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Incorporated: 12th July 2019</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span>Company Number: 12100541</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p>Registered Office:</p>
                      <p>454c Alexandra Avenue</p>
                      <p>Rayners Lane, Harrow</p>
                      <p>England, HA2 9TL</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">
                  Since our establishment in 2019, we have been dedicated to
                  preserving the authentic art of paan making while serving the
                  vibrant community of Harrow. Our mission is to provide an
                  exceptional paan experience that honors traditional flavors
                  and meets modern quality standards.
                </p>
              </div>

              <Card className="product-card p-8" data-aos="zoom-in">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl font-playfair font-semibold text-center">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    To celebrate and preserve the rich cultural heritage of paan
                    while providing our customers with the most authentic,
                    high-quality, and delicious paan varieties in a clean,
                    welcoming environment.
                  </p>

                  {/* Animated counters */}
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center justify-between text-md">
                      <span className="text-muted-foreground">Years of Experience</span>
                      <span className="font-semibold text-primary">
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                          {({ isVisible }: { isVisible: boolean }) =>
                            isVisible ? <CountUp end={5} duration={2} /> : <span>0</span>
                          }
                        </VisibilitySensor>
                        +
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-md">
                      <span className="text-muted-foreground">Happy Customers</span>
                      <span className="font-semibold text-primary">
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                          {({ isVisible }: { isVisible: boolean }) =>
                            isVisible ? (
                              <CountUp end={1000} duration={2.5} separator="," />
                            ) : (
                              <span>0</span>
                            )
                          }
                        </VisibilitySensor>
                        +
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-md">
                      <span className="text-muted-foreground">Paan Varieties</span>
                      <span className="font-semibold text-primary">
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                          {({ isVisible }: { isVisible: boolean }) =>
                            isVisible ? <CountUp end={10} duration={2} /> : <span>0</span>
                          }
                        </VisibilitySensor>
                        +
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4 md:mb-6">
                Our Journey
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">
                Milestones that have shaped our story and commitment to excellence.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20 z-0"></div>

              <div className="space-y-10 md:space-y-12">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;
                  const aosEffect = isEven ? "fade-right" : "fade-left";

                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                        } md:space-x-8 md:items-stretch`}
                    >
                      {/* Timeline Dot */}
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 top-4 md:top-1/2 md:-translate-y-1/2"
                        
                        data-aos-duration="700"
                      />

                      {/* Content */}
                      <div
                        className={`w-full md:w-1/2 mx-auto md:mx-0 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8"
                          } mt-8 md:mt-0 z-20`}
                        data-aos={aosEffect}
                        data-aos-duration="1000"
                      >
                        <Card className="product-card" >
                          <CardContent className="p-6">
                            <div className={`flex items-center space-x-3 mb-4 ${isEven ? "md:flex-row-reverse md:space-x-reverse" : ""
                              }`}>
                              {milestone.icon}
                              <span className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                                {milestone.year}
                              </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-playfair font-semibold mb-2 md:mb-3">
                              {milestone.title}
                            </h3>

                            <p className="text-sm md:text-base text-muted-foreground">
                              {milestone.description}
                              {milestone.year === "2025" && (
                                <a
                                  href="https://maps.app.goo.gl/Adjn9GbMGLBifpiC9"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary underline ml-2"
                                  style={{ position: "relative", zIndex: 30 }}
                                >
                                  <br />
                                  View Location
                                </a>
                              )}
                              {milestone.year === "2020" && (
                                <a
                                  href="https://maps.app.goo.gl/D5AHJ1TFCwuHbuu66"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary underline ml-2"
                                  style={{ position: "relative", zIndex: 30 }}
                                >
                                  <br />
                                  View Location
                                </a>
                              )}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Spacer for opposite side (hidden on mobile) */}
                      <div className="hidden md:block w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do at Jalsa Paan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="product-card text-center p-6 h-full"
                  data-aos="zoom-in-up"
                  data-aos-duration={800 + index * 120}
                >
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-playfair font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default About;
