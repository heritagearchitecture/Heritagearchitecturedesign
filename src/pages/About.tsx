import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Award, Users, Target, Heart, CheckCircle } from "lucide-react";
import projectInterior from "@/assets/project-interior.jpg";
import projectCourtyard from "@/assets/project-courtyard.jpg";

const values = [
  {
    icon: Target,
    title: "Authenticity",
    description: "We stay true to the authentic principles of Vastu Shastra, never compromising on the fundamental guidelines that have stood the test of time.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every project we undertake is executed with the highest standards of craftsmanship, attention to detail, and commitment to quality.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your vision is our priority. We listen, understand, and collaborate closely with you to create spaces that truly reflect your aspirations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Our multidisciplinary team of architects, Vastu consultants, and designers work seamlessly together to deliver holistic solutions.",
  },
];

const team = [
  {
    name: "Dr. Arun Sharma",
    role: "Founder & Chief Architect",
    description: "With over 30 years of experience, Dr. Sharma is a pioneer in integrating Vastu Shastra with contemporary architecture.",
  },
  {
    name: "Priya Krishnamurthy",
    role: "Senior Vastu Consultant",
    description: "A renowned Vastu expert trained under traditional gurus, Priya brings authentic knowledge to every project.",
  },
  {
    name: "Vikram Mehta",
    role: "Lead Interior Designer",
    description: "Vikram specializes in creating interiors that seamlessly blend traditional Indian aesthetics with modern functionality.",
  },
  {
    name: "Anita Desai",
    role: "Project Director",
    description: "With her exceptional organizational skills, Anita ensures every project is delivered on time and within budget.",
  },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-muted" aria-labelledby="about-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-primary font-semibold tracking-wide">About Heritage Architecture</span>
              <h1 id="about-hero-heading" className="mt-2 mb-6">
                Building Dreams with Ancient Wisdom
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-muted-foreground text-xl leading-relaxed">
                For over 25 years, Heritage Architecture has been at the forefront of Vastu-compliant 
                architectural design in India, creating spaces that honor tradition while embracing innovation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding" aria-labelledby="story-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <h2 id="story-heading" className="mb-6">Our Story</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Heritage Architecture was founded in 1998 by Dr. Arun Sharma, a visionary architect 
                  who recognized the profound impact that Vastu Shastra could have on modern living. 
                  Growing up in a family steeped in traditional knowledge, Dr. Sharma spent years 
                  studying ancient texts and learning from revered Vastu masters.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  What began as a small practice in Pune has grown into one of India's most respected 
                  architectural firms, with a portfolio spanning luxury residences, commercial complexes, 
                  temples, and heritage restoration projects across the country.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, our team of over 50 professionals continues to uphold the founding principles 
                  of authenticity, excellence, and client satisfaction, ensuring that every project 
                  we undertake becomes a testament to the harmonious blend of ancient wisdom and 
                  contemporary design.
                </p>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src={projectInterior}
                  alt="Heritage Architecture interior design showcasing Vastu principles"
                  className="rounded-lg shadow-medium w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-hover hidden md:block">
                  <p className="font-heading text-3xl font-bold">1998</p>
                  <p className="text-sm">Established</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted" aria-labelledby="values-heading">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="values-heading" className="mb-6">Our Core Values</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These principles guide everything we do, from initial consultation to project completion.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-lg shadow-soft">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding" id="team" aria-labelledby="team-heading">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="team-heading" className="mb-6">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our diverse team brings together expertise in architecture, Vastu Shastra, 
                interior design, and project management.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary" aria-labelledby="why-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <img
                src={projectCourtyard}
                alt="Beautiful courtyard designed with Vastu principles"
                className="rounded-lg shadow-medium w-full"
              />
            </ScrollReveal>
            
            <div>
              <ScrollReveal>
                <h2 id="why-heading" className="text-secondary-foreground mb-6">
                  Why Choose Heritage Architecture?
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-secondary-foreground/90 text-lg mb-8 leading-relaxed">
                  When you choose Heritage Architecture, you're choosing a partner who understands 
                  that your home is more than a building—it's a reflection of your values, dreams, 
                  and aspirations.
                </p>
              </ScrollReveal>
              
              <div className="space-y-4">
                {[
                  "Certified Vastu experts with traditional training",
                  "Award-winning architectural designs",
                  "Transparent pricing and timelines",
                  "End-to-end project management",
                  "Post-completion support and maintenance",
                  "100% Vastu-compliant guarantee",
                ].map((item, index) => (
                  <ScrollReveal key={item} delay={150 + index * 50}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                      <span className="text-secondary-foreground font-medium">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal delay={500}>
                <div className="mt-8">
                  <Button variant="gold" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
