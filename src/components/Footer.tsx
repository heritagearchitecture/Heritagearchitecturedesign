import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/contact" },
    { label: "Blog", href: "/projects" },
  ],
  services: [
    { label: "Vastu Consultation", href: "/services/vastu-consultation" },
    { label: "Architectural Design", href: "/services/architectural-design" },
    { label: "Interior Design", href: "/services/interior-design" },
    { label: "Construction", href: "/services/construction" },
  ],
  projects: [
    { label: "Residential", href: "/projects#residential" },
    { label: "Commercial", href: "/projects#commercial" },
    { label: "Temples", href: "/projects#temples" },
    { label: "Heritage Restoration", href: "/projects#heritage" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-text" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6" aria-label="Heritage Architecture - Home">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-primary-foreground font-heading text-xl font-bold">H</span>
                </div>
                <div>
                  <span className="font-heading text-xl font-bold text-footer-text block leading-tight">
                    Heritage
                  </span>
                  <span className="text-sm text-footer-text/80">
                    Architecture & Design
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-footer-text/90 mb-6 leading-relaxed">
              Creating harmonious living spaces through the ancient wisdom of Vastu Shastra, 
              blended with contemporary architectural excellence.
            </p>
            <div className="space-y-4">
              <a 
                href="tel:+918959562696" 
                className="flex items-center gap-3 text-footer-text hover:text-primary transition-colors min-h-[44px]"
              >
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>+91 89595 62696</span>
              </a>
              <a 
                href="https://wa.me/918959562696" 
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-footer-text hover:text-primary transition-colors min-h-[44px]"
              >
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>WhatsApp: +91 89595 62696</span>
              </a>
              <a 
                href="mailto:info@heritagearch.com" 
                className="flex items-center gap-3 text-footer-text hover:text-primary transition-colors min-h-[44px]"
              >
                <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>info@heritagearch.com</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <nav aria-label="Company links">
            <h2 className="font-heading text-lg font-bold text-footer-text mb-6">
              Company
            </h2>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-footer-text/90 hover:text-primary transition-colors py-1 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Links */}
          <nav aria-label="Services links">
            <h2 className="font-heading text-lg font-bold text-footer-text mb-6">
              Services
            </h2>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-footer-text/90 hover:text-primary transition-colors py-1 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Location & Hours */}
          <div>
            <h2 className="font-heading text-lg font-bold text-footer-text mb-6">
              Visit Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" aria-hidden="true" />
                <address className="text-footer-text/90 not-italic leading-relaxed">
                  Veda Business Park<br />
                  (Office address)
                </address>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" aria-hidden="true" />
                <div className="text-footer-text/90">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-footer-text/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-footer-text/80 text-center md:text-left">
              © {new Date().getFullYear()} Heritage Architecture Design & Construction. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-footer-text/80 hover:text-footer-text transition-colors min-h-[44px] flex items-center">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-footer-text/80 hover:text-footer-text transition-colors min-h-[44px] flex items-center">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
