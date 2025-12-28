import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Compass, Home, Building2, Ruler, Award, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectTemple from "@/assets/project-temple-home.jpg";
import projectCourtyard from "@/assets/project-courtyard.jpg";

const services = [
  {
    icon: Compass,
    title: "Vastu Consultation",
    description: "Expert analysis of your space according to ancient Vastu Shastra principles, ensuring harmony between your living environment and cosmic energies.",
    href: "/services/vastu-consultation",
  },
  {
    icon: Home,
    title: "Residential Architecture",
    description: "Bespoke home designs that blend traditional Indian architectural wisdom with modern comfort, creating spaces that nurture well-being.",
    href: "/services/residential-architecture",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Strategic commercial spaces designed to enhance productivity and prosperity, following Vastu principles for business success.",
    href: "/services/commercial-projects",
  },
  {
    icon: Ruler,
    title: "Interior Design",
    description: "Thoughtfully curated interiors that reflect your personality while maintaining Vastu compliance for optimal energy flow.",
    href: "/services/interior-design",
  },
];

const projects = [
  {
    title: "Sundaram Residence",
    category: "Luxury Villa",
    location: "Pune, Maharashtra",
    image: heroImage,
    href: "/projects/sundaram-residence",
  },
  {
    title: "Shanti Temple Complex",
    category: "Temple Architecture",
    location: "Nashik, Maharashtra",
    image: projectTemple,
    href: "/projects/shanti-temple",
  },
  {
    title: "The Courtyard House",
    category: "Traditional Home",
    location: "Jaipur, Rajasthan",
    image: projectCourtyard,
    href: "/projects/courtyard-house",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Vastu Compliant" },
  { value: "50+", label: "Awards Won" },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20" aria-labelledby="hero-heading">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern Vastu-compliant luxury home with traditional Indian architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block text-primary font-semibold text-lg mb-4 tracking-wide">
                Vastu-Inspired Architecture
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 id="hero-heading" className="text-white mb-6 leading-tight">
                Where Ancient Wisdom Meets Modern Design
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We craft living spaces that honor the time-tested principles of Vastu Shastra, 
                creating homes that bring harmony, prosperity, and peace to your life.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" asChild>
                  <Link to="/projects">
                    Explore Our Work
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="hero-outline" className="text-white border-white hover:bg-white hover:text-foreground" asChild>
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
                <Button variant="hero-outline" className="text-white border-white hover:bg-white hover:text-foreground" asChild>
                  <Link to="/contact?free=true">Free Consultation</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-12 border-y border-border" aria-label="Company statistics">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding" aria-labelledby="about-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src={projectInterior}
                  alt="Elegant Vastu-compliant interior with traditional Indian design elements"
                  className="rounded-lg shadow-medium w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-hover hidden md:block">
                  <p className="font-heading text-3xl font-bold">25+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>
            
            <div>
              <ScrollReveal>
                <span className="text-primary font-semibold tracking-wide">About Us</span>
                <h2 id="about-heading" className="mt-2 mb-6">
                  Crafting Spaces That Nurture the Soul
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  At Heritage Architecture, we believe that a home is more than just walls and a roof—it is 
                  a sanctuary that shapes your life. For over two decades, we have been dedicated to creating 
                  architectural masterpieces that honor the ancient science of Vastu Shastra.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our team of expert architects, Vastu consultants, and interior designers work together 
                  to create spaces that are not only aesthetically stunning but also energetically balanced, 
                  promoting health, wealth, and happiness for generations to come.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="space-y-4 mb-8">
                  {["Authentic Vastu Shastra expertise", "Award-winning architectural designs", "Sustainable and eco-friendly practices", "End-to-end project management"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <Button variant="gold" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted" aria-labelledby="services-heading">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-wide">Our Services</span>
              <h2 id="services-heading" className="mt-2 mb-6">
                Comprehensive Vastu Architecture Services
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From initial consultation to final construction, we offer a complete range of services 
                to bring your vision of a Vastu-compliant home to life.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <Link
                  to={service.href}
                  className="block bg-card p-8 rounded-lg shadow-soft hover:shadow-hover transition-all duration-400 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-400">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding" aria-labelledby="projects-heading">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wide">Our Portfolio</span>
                <h2 id="projects-heading" className="mt-2">
                  Featured Projects
                </h2>
              </div>
              <Button variant="outline" asChild>
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 100}>
                <Link
                  to={project.href}
                  className="block group overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-all duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} in ${project.location}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-primary font-medium text-sm">{project.category}</span>
                      <h3 className="text-white font-heading text-xl font-bold mt-1">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">{project.location}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 id="cta-heading" className="text-secondary-foreground mb-6">
                Ready to Build Your Dream Home?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-secondary-foreground/90 text-lg mb-8 leading-relaxed">
                Let us help you create a living space that brings harmony and prosperity to your life. 
                Schedule a free consultation with our Vastu experts today.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                  asChild
                >
                  <a href="tel:+918959562696">Call: +91 89595 62696</a>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                  asChild
                >
                  <a href="https://wa.me/918959562696" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding" aria-labelledby="testimonial-heading">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-semibold tracking-wide">Testimonials</span>
              <h2 id="testimonial-heading" className="mt-2 mb-12">
                What Our Clients Say
              </h2>
              
              <blockquote className="relative">
                <div className="text-6xl text-primary/20 font-heading absolute -top-4 left-0" aria-hidden="true">"</div>
                <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-8 px-8">
                  Heritage Architecture transformed our vision into reality. Their deep understanding of 
                  Vastu principles combined with modern design sensibilities resulted in a home that 
                  truly feels like a sanctuary. We've noticed a remarkable positive change in our 
                  family's well-being since moving in.
                </p>
                <footer className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <cite className="font-heading font-bold text-foreground text-lg not-italic">
                      Rajesh & Priya Sharma
                    </cite>
                    <p className="text-muted-foreground">Homeowners, Pune</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
