import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold">MVR Transport</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Trusted transport services in Telangana. Providing reliable and
              timely logistics solutions for businesses across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Our Services
            </h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-sm text-primary-foreground/80">
                Local Transport
              </span>
              <span className="text-sm text-primary-foreground/80">
                Regional Transport
              </span>
              <span className="text-sm text-primary-foreground/80">
                Commercial Goods
              </span>
              <span className="text-sm text-primary-foreground/80">
                Logistics Support
              </span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  Hyderabad, Telangana, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  +91 98486 26398
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  vr2586953@gmail.com 
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} MVR Transport. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Serving Hyderabad & surrounding regions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
