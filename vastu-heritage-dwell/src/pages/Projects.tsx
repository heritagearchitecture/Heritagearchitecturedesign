import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, ArrowLeft, MapPin, Calendar, Ruler } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectTemple from "@/assets/project-temple-home.jpg";
import projectCourtyard from "@/assets/project-courtyard.jpg";

const allProjects = [
  {
    slug: "sundaram-residence",
    title: "Sundaram Residence",
    category: "Luxury Villa",
    location: "Pune, Maharashtra",
    year: "2023",
    area: "8,500 sq ft",
    description: "A stunning modern villa that seamlessly blends traditional Vastu principles with contemporary luxury living. The design features a central courtyard, abundant natural light, and carefully oriented living spaces that maximize positive energy flow.",
    challenge: "The clients wanted a home that honored their cultural heritage while providing all modern amenities. The irregularly shaped plot presented challenges for Vastu compliance.",
    solution: "We designed the home around a central courtyard that serves as the heart of the dwelling, ensuring proper orientation of all major rooms. Strategic placement of water features and landscaping elements enhanced the Vastu balance.",
    images: [heroImage, projectInterior, projectCourtyard],
    features: ["5 Bedrooms", "Private Temple", "Swimming Pool", "Home Theater", "Landscaped Gardens"],
  },
  {
    slug: "shanti-temple",
    title: "Shanti Temple Complex",
    category: "Temple Architecture",
    location: "Nashik, Maharashtra",
    year: "2022",
    area: "12,000 sq ft",
    description: "A sacred temple complex designed according to Shilpa Shastra and Vastu principles, featuring traditional stone carvings, a meditation hall, and community spaces for spiritual gatherings.",
    challenge: "Creating an authentic temple experience while accommodating large gatherings and modern facilities for the community.",
    solution: "The design follows traditional temple architecture with a gopuram entrance, mandapa, and garbhagriha. Modern amenities are discreetly integrated without compromising the sacred atmosphere.",
    images: [projectTemple, heroImage, projectInterior],
    features: ["Main Shrine", "Meditation Hall", "Community Kitchen", "Library", "Priest Quarters"],
  },
  {
    slug: "courtyard-house",
    title: "The Courtyard House",
    category: "Traditional Home",
    location: "Jaipur, Rajasthan",
    year: "2021",
    area: "6,200 sq ft",
    description: "A beautifully restored haveli-style home featuring traditional Rajasthani architecture with intricate jali work, central courtyard, and cooling water features adapted for modern living.",
    challenge: "Preserving the historical character of the existing structure while adding contemporary comforts and ensuring Vastu compliance.",
    solution: "Careful restoration of original architectural elements combined with sensitive modern interventions. The central courtyard was redesigned to improve ventilation and incorporate traditional cooling techniques.",
    images: [projectCourtyard, projectTemple, heroImage],
    features: ["Central Courtyard", "Rooftop Terrace", "Traditional Jali Work", "Modern Kitchen", "Guest Pavilion"],
  },
  {
    slug: "wellness-retreat",
    title: "Ananda Wellness Retreat",
    category: "Hospitality",
    location: "Rishikesh, Uttarakhand",
    year: "2023",
    area: "25,000 sq ft",
    description: "A holistic wellness center designed to promote healing and spiritual renewal, featuring yoga halls, treatment rooms, and accommodation cottages all designed according to Vastu principles.",
    challenge: "Creating diverse functional spaces that maintain a cohesive spiritual atmosphere while meeting commercial hospitality standards.",
    solution: "The layout follows a village concept with interconnected buildings oriented according to Vastu. Natural materials and traditional building techniques create an authentic, grounding environment.",
    images: [projectInterior, projectCourtyard, heroImage],
    features: ["20 Guest Cottages", "Yoga Shala", "Ayurveda Center", "Organic Farm", "Meditation Gardens"],
  },
];

const categories = ["All", "Luxury Villa", "Temple Architecture", "Traditional Home", "Hospitality"];

const Projects = () => {
  const { slug } = useParams();
  
  // If we have a slug, show the individual project page
  if (slug) {
    const project = allProjects.find(p => p.slug === slug);
    
    if (!project) {
      return (
        <main className="pt-20 section-padding">
          <div className="container-custom text-center">
            <h1 className="mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Button variant="gold" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </main>
      );
    }
    
    return (
      <main className="pt-20">
        {/* Hero */}
        <section className="relative" aria-labelledby="project-heading">
          <div className="aspect-[21/9] relative">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          </div>
          
          <div className="container-custom relative z-10 -mt-32 pb-16">
            <ScrollReveal>
              <Link to="/projects" className="inline-flex items-center gap-2 text-white font-medium mb-6 hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                All Projects
              </Link>
            </ScrollReveal>
            
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-medium max-w-4xl">
              <ScrollReveal>
                <span className="text-primary font-semibold">{project.category}</span>
                <h1 id="project-heading" className="mt-2 mb-6">{project.title}</h1>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Ruler className="w-5 h-5" aria-hidden="true" />
                    <span>{project.area}</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Challenge & Solution */}
        <section className="section-padding bg-muted" aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="sr-only">Our Approach</h2>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal>
                <div className="bg-card p-8 rounded-lg shadow-soft h-full">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <div className="bg-card p-8 rounded-lg shadow-soft h-full">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="section-padding" aria-labelledby="gallery-heading">
          <div className="container-custom">
            <ScrollReveal>
              <h2 id="gallery-heading" className="mb-8">Project Gallery</h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <img
                    src={image}
                    alt={`${project.title} - View ${index + 1}`}
                    className="rounded-lg shadow-soft w-full aspect-[4/3] object-cover hover:shadow-hover transition-shadow duration-400"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="section-padding bg-secondary" aria-labelledby="features-heading">
          <div className="container-custom">
            <ScrollReveal>
              <h2 id="features-heading" className="text-secondary-foreground mb-8">Key Features</h2>
            </ScrollReveal>
            
            <div className="flex flex-wrap gap-4">
              {project.features.map((feature, index) => (
                <ScrollReveal key={feature} delay={index * 50}>
                  <span className="bg-secondary-foreground/10 text-secondary-foreground px-6 py-3 rounded-full font-medium">
                    {feature}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h2 className="mb-6">Inspired by This Project?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let us help you create a similar masterpiece tailored to your unique requirements and vision.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
    );
  }
  
  // Projects listing page
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted" aria-labelledby="projects-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-primary font-semibold tracking-wide">Our Portfolio</span>
              <h1 id="projects-hero-heading" className="mt-2 mb-6">
                Featured Projects
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Explore our collection of Vastu-compliant architectural projects, from luxurious 
                residences to sacred temples. Each project represents our commitment to blending 
                ancient wisdom with contemporary design excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="section-padding" aria-labelledby="projects-list-heading">
        <h2 id="projects-list-heading" className="sr-only">All Projects</h2>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="block group overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-all duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={`${project.title} - ${project.category}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-primary font-medium text-sm">{project.category}</span>
                      <h3 className="text-white font-heading text-2xl font-bold mt-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-white/80 text-sm">
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.area}</span>
                      </div>
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
            <h2 className="text-secondary-foreground mb-6">Ready to Create Your Dream Space?</h2>
            <p className="text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're planning a new home, renovating an existing space, or need Vastu consultation, 
              we're here to help you every step of the way.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Projects;
