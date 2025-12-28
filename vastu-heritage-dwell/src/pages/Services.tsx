import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, ArrowLeft, Compass, Home, Building2, Ruler, Paintbrush, Hammer, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const allServices = [
  {
    slug: "vastu-consultation",
    icon: Compass,
    title: "Vastu Consultation",
    shortDescription: "Expert analysis of your space according to ancient Vastu Shastra principles.",
    fullDescription: "Our comprehensive Vastu consultation service provides an in-depth analysis of your existing space or proposed plans according to the ancient science of Vastu Shastra. Our certified experts evaluate directional alignments, spatial proportions, elemental balance, and energy flow patterns to identify areas that may be causing disharmony.",
    benefits: [
      "Complete site and floor plan analysis",
      "Detailed Vastu compliance report",
      "Remedial recommendations without major structural changes",
      "Auspicious date and time guidance for important activities",
      "Follow-up consultations included",
      "Both on-site and remote consultation options",
    ],
    process: [
      "Initial discussion to understand your concerns and goals",
      "Detailed measurement and analysis of the property",
      "Assessment of directional alignments and elemental balance",
      "Comprehensive report with findings and recommendations",
      "Implementation guidance and support",
    ],
    image: heroImage,
  },
  {
    slug: "residential-architecture",
    icon: Home,
    title: "Residential Architecture",
    shortDescription: "Bespoke home designs blending traditional wisdom with modern comfort.",
    fullDescription: "Our residential architecture service creates custom home designs that seamlessly integrate Vastu principles with contemporary living requirements. From compact apartments to sprawling villas, we design homes that nurture well-being while reflecting your unique lifestyle and aesthetic preferences.",
    benefits: [
      "100% Vastu-compliant designs",
      "Custom floor plans tailored to your family's needs",
      "Optimal use of natural light and ventilation",
      "Energy-efficient and sustainable design options",
      "Integration of traditional and modern architectural elements",
      "Complete working drawings and specifications",
    ],
    process: [
      "Requirement gathering and site analysis",
      "Concept design with Vastu integration",
      "Design development and client feedback",
      "Final design with detailed drawings",
      "Construction documentation and support",
    ],
    image: heroImage,
  },
  {
    slug: "commercial-projects",
    icon: Building2,
    title: "Commercial Projects",
    shortDescription: "Strategic spaces designed for productivity and prosperity.",
    fullDescription: "Our commercial architecture services apply Vastu principles to create workspaces that enhance productivity, foster positive relationships, and attract prosperity. From office buildings to retail spaces and hospitality projects, we design commercial environments that support your business objectives.",
    benefits: [
      "Vastu-optimized workspace layouts",
      "Strategic placement of key functional areas",
      "Enhanced employee well-being and productivity",
      "Positive first impressions for clients and visitors",
      "Compliance with commercial building regulations",
      "Scalable designs for future growth",
    ],
    process: [
      "Business requirements and workflow analysis",
      "Site evaluation and Vastu assessment",
      "Conceptual design with zoning strategies",
      "Detailed design and regulatory approvals",
      "Construction management and handover",
    ],
    image: heroImage,
  },
  {
    slug: "interior-design",
    icon: Ruler,
    title: "Interior Design",
    shortDescription: "Thoughtfully curated interiors with optimal energy flow.",
    fullDescription: "Our interior design service transforms your spaces with carefully curated furnishings, materials, and color palettes that complement your architecture while maintaining Vastu compliance. We create interiors that are not only beautiful but also support the well-being of occupants through proper energy flow.",
    benefits: [
      "Vastu-compliant furniture placement",
      "Harmonious color schemes based on directional energies",
      "Custom furniture design and procurement",
      "Lighting design for ambiance and functionality",
      "Material selection with quality and sustainability focus",
      "Art and accessory curation",
    ],
    process: [
      "Space analysis and lifestyle assessment",
      "Concept development with mood boards",
      "Furniture layout and material selection",
      "Detailed drawings and specifications",
      "Procurement, installation, and styling",
    ],
    image: heroImage,
  },
  {
    slug: "construction",
    icon: Hammer,
    title: "Construction Services",
    shortDescription: "Quality construction with attention to every detail.",
    fullDescription: "Our construction services ensure that your Vastu-compliant designs are executed with precision and quality. Our experienced team manages every aspect of the construction process, from foundation to finishing, ensuring that the built structure faithfully represents the design intent.",
    benefits: [
      "Experienced project management team",
      "Vastu-compliant construction practices",
      "Quality materials and skilled craftsmen",
      "Regular progress updates and site visits",
      "Transparent pricing and timeline management",
      "Post-construction warranty and support",
    ],
    process: [
      "Pre-construction planning and scheduling",
      "Foundation work with Vastu rituals",
      "Structural and MEP construction",
      "Finishing and interior fit-out",
      "Quality inspection and handover",
    ],
    image: heroImage,
  },
  {
    slug: "renovation",
    icon: Paintbrush,
    title: "Renovation & Restoration",
    shortDescription: "Transforming existing spaces with Vastu improvements.",
    fullDescription: "Our renovation service helps you transform your existing property with Vastu improvements that don't require complete reconstruction. We specialize in identifying practical solutions that enhance energy flow and harmony while respecting your budget and minimizing disruption.",
    benefits: [
      "Non-invasive Vastu correction techniques",
      "Cost-effective improvement solutions",
      "Minimal disruption to daily life",
      "Heritage property restoration expertise",
      "Modern amenity integration",
      "Structural assessment and reinforcement",
    ],
    process: [
      "Property assessment and Vastu audit",
      "Prioritized improvement recommendations",
      "Design development for renovations",
      "Phased execution planning",
      "Implementation and completion",
    ],
    image: heroImage,
  },
];

const Services = () => {
  const { slug } = useParams();
  
  // If we have a slug, show the individual service page
  if (slug) {
    const service = allServices.find(s => s.slug === slug);
    
    if (!service) {
      return (
        <main className="pt-20 section-padding">
          <div className="container-custom text-center">
            <h1 className="mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button variant="gold" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </main>
      );
    }
    
    return (
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-muted" aria-labelledby="service-heading">
          <div className="container-custom">
            <ScrollReveal>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium mb-6 hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                All Services
              </Link>
            </ScrollReveal>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollReveal>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h1 id="service-heading" className="mb-6">{service.title}</h1>
                </ScrollReveal>
                
                <ScrollReveal delay={100}>
                  <p className="text-muted-foreground text-xl leading-relaxed">
                    {service.fullDescription}
                  </p>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={200}>
                <img
                  src={service.image}
                  alt={`${service.title} by Heritage Architecture`}
                  className="rounded-lg shadow-medium w-full"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="section-padding" aria-labelledby="benefits-heading">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <ScrollReveal>
                  <h2 id="benefits-heading" className="mb-8">What's Included</h2>
                </ScrollReveal>
                
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <ScrollReveal key={benefit} delay={index * 50}>
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-foreground text-lg">{benefit}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              
              <div>
                <ScrollReveal>
                  <h2 className="mb-8">Our Process</h2>
                </ScrollReveal>
                
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <ScrollReveal key={step} delay={index * 50}>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                          {index + 1}
                        </div>
                        <div className="pt-2">
                          <p className="text-foreground text-lg">{step}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h2 className="text-secondary-foreground mb-6">Ready to Get Started?</h2>
              <p className="text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your requirements and learn how our {service.title.toLowerCase()} service can help you create your ideal space.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
    );
  }
  
  // Services listing page
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted" aria-labelledby="services-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-primary font-semibold tracking-wide">Our Services</span>
              <h1 id="services-hero-heading" className="mt-2 mb-6">
                Comprehensive Vastu Architecture Solutions
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-muted-foreground text-xl leading-relaxed">
                From consultation to construction, we offer end-to-end services to bring your 
                vision of a Vastu-compliant space to life. Each service is designed to work 
                independently or as part of a complete solution.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section-padding" aria-labelledby="services-list-heading">
        <h2 id="services-list-heading" className="sr-only">All Services</h2>
        <div className="container-custom">
          <div className="space-y-12">
            {allServices.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 100}>
                <Link
                  to={`/services/${service.slug}`}
                  className={`block group ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center bg-card p-8 rounded-lg shadow-soft hover:shadow-hover transition-all duration-400">
                    <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-400">
                        <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-400" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>
                      <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                      <img
                        src={service.image}
                        alt={`${service.title} service`}
                        className="rounded-lg w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-secondary-foreground mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Our experts will help you identify the right services based on your specific needs and goals. 
              Schedule a free consultation to get started.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Schedule a Free Consultation
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
