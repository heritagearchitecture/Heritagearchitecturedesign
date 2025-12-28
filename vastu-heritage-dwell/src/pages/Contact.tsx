import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isFreeConsultation = params.get("free") === "true";
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
  };
  
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted" aria-labelledby="contact-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-primary font-semibold tracking-wide">Contact Us</span>
              <h1 id="contact-hero-heading" className="mt-2 mb-6">
                Let's Build Something Beautiful Together
              </h1>
            </ScrollReveal>
            
            {isFreeConsultation && (
              <ScrollReveal delay={80}>
                <div className="mb-4 p-4 rounded-md bg-primary/10 text-primary">
                  <strong>Free Consultation booked:</strong> Our team will contact you to schedule a complimentary 30-minute session.
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={100}>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Whether you're ready to start your project or just exploring possibilities, 
                we'd love to hear from you. Reach out to schedule a consultation with our 
                Vastu architecture experts.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="section-padding" aria-labelledby="contact-form-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 id="contact-form-heading" className="mb-8">Send Us a Message</h2>
              </ScrollReveal>
              
              {isSubmitted ? (
                <ScrollReveal>
                  <div className="bg-card p-8 rounded-lg shadow-soft text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-4">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. Our team will review your inquiry and 
                      get back to you within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal delay={100}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                          placeholder="+91 89595 62696"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                      >
                        <option value="">Select a service</option>
                        <option value="vastu-consultation">Vastu Consultation</option>
                        <option value="residential">Residential Architecture</option>
                        <option value="commercial">Commercial Projects</option>
                        <option value="interior">Interior Design</option>
                        <option value="construction">Construction Services</option>
                        <option value="renovation">Renovation & Restoration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                        Project Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        placeholder="City, State"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Describe your project requirements, budget range, timeline, and any specific Vastu concerns..."
                      />
                    </div>
                    
                    <Button variant="gold" size="lg" type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </form>
                </ScrollReveal>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="mb-8">Contact Information</h2>
              </ScrollReveal>
              
              <div className="space-y-8">
                <ScrollReveal delay={100}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Phone / WhatsApp</h3>
                      <div className="text-muted-foreground">
                        <a href="tel:+918959562696" className="block hover:text-primary transition-colors">+91 89595 62696</a>
                        <a href="tel:+919754454044" className="block hover:text-primary transition-colors">+91 97544 54044</a>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Preferred contact: Call, WhatsApp or Form</p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={150}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@heritagearch.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@heritagearch.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Office</h3>
                      <address className="text-muted-foreground not-italic">
                        Veda Business Park<br />
                        (Studio / Office address)
                      </address>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={250}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment Only
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              {/* Map placeholder */}
              <ScrollReveal delay={300}>
                <div className="mt-8 bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
                    <p className="text-muted-foreground">
                      Visit our office at Veda Business Park
                    </p>
                    <div className="mt-6">
                      <Button variant="outline" asChild>
                        <a href="/payment">Payment Details</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
