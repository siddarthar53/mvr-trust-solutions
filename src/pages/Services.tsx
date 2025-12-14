import { Link } from "react-router-dom";
import { ArrowRight, Truck, MapPin, Package, Zap, Building2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: MapPin,
    title: "Local Transport Services",
    description: "Efficient and reliable transport within Hyderabad city limits. Perfect for businesses requiring regular local deliveries with quick turnaround times.",
    features: ["Same-day delivery available", "Flexible scheduling", "GPS tracking"],
  },
  {
    icon: Truck,
    title: "Regional Transport Services",
    description: "Comprehensive transport solutions covering Telangana and neighboring states. Ideal for businesses with inter-city logistics requirements.",
    features: ["Coverage across Telangana", "Scheduled routes", "Bulk transport options"],
  },
  {
    icon: Package,
    title: "Commercial Goods Transportation",
    description: "Specialized transport for commercial goods of all types. We handle your cargo with care and ensure safe delivery to the destination.",
    features: ["Secure handling", "Insurance options", "Multiple vehicle sizes"],
  },
  {
    icon: Zap,
    title: "On-Demand Transport Solutions",
    description: "Flexible transport services for urgent or unscheduled requirements. When you need transport quickly, we're ready to help.",
    features: ["Quick response time", "24/7 availability", "Emergency transport"],
  },
  {
    icon: Building2,
    title: "Business Logistics Support",
    description: "End-to-end logistics support for businesses. From warehousing coordination to last-mile delivery, we've got you covered.",
    features: ["Dedicated account manager", "Regular reporting", "Customized solutions"],
  },
  {
    icon: RotateCcw,
    title: "Regular Contract Services",
    description: "Long-term transport partnerships for businesses with ongoing logistics needs. Enjoy preferential rates and dedicated service.",
    features: ["Volume discounts", "Priority scheduling", "Consistent service quality"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container-narrow mx-auto px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive transport and logistics solutions tailored to meet
              your business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Why Choose Our Services?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At MVR Transport, we understand that every business has unique
                  transport requirements. That's why we offer flexible solutions
                  that can be customized to meet your specific needs.
                </p>
                <p>
                  Our experienced team ensures that your goods are handled with
                  care and delivered on time, every time. We take pride in our
                  track record of reliability and customer satisfaction.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Deliveries</p>
                </div>
                <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">On-Time Rate</p>
                </div>
                <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
              <h3 className="mb-6 text-2xl font-semibold">
                Our Service Promise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Transparent pricing with no hidden costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Real-time updates on your shipment status</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Dedicated support for all your queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Flexible scheduling to suit your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Safe and secure handling of all goods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-center text-primary-foreground md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Need a Custom Solution?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Every business is unique. Contact us to discuss your specific
              transport requirements and we'll create a tailored solution for
              you.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
