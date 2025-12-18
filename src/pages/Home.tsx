import { Link } from "react-router-dom";
import { ArrowRight, Truck, Clock, Shield, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const features = [
  {
    icon: Truck,
    title: "Reliable Fleet",
    description: "Well-maintained vehicles ensuring safe and timely delivery of your goods.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand the value of time and ensure punctual service every time.",
  },
  {
    icon: Shield,
    title: "Secure Transport",
    description: "Your cargo is handled with utmost care and security throughout the journey.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced professionals committed to providing exceptional service.",
  },
];

const services = [
  "Local Transport Services",
  "Regional Transport Services",
  "Commercial Goods Transportation",
  "On-Demand Transport Solutions",
  "Reliable Logistics Support",
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container-narrow relative mx-auto px-4 py-20 md:px-8 md:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" />
              Serving Hyderabad & Telangana
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Reliable Transport Solutions{" "}
              <span className="text-primary">You Can Trust</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              MVR Transport is a dependable transport service provider based in
              Hyderabad, offering reliable and timely logistics solutions for
              businesses across Telangana.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Why Choose MVR Transport?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We are committed to providing the highest quality transport services
              with a focus on reliability, safety, and customer satisfaction.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Comprehensive Transport Services
              </h2>
              <p className="mb-6 text-muted-foreground">
                From local deliveries to regional logistics, we offer a wide range
                of transport services tailored to meet your business needs.
              </p>
              <ul className="mb-8 space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <div className="flex h-full items-center justify-center">
                  <Truck className="h-32 w-32 text-primary/30" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary p-4 text-primary-foreground shadow-lg">
                <p className="text-3xl font-bold">4+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Contact us today to discuss your transport requirements. We are here
              to provide reliable solutions for all your logistics needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
