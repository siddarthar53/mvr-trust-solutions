import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Award,
    title: "Reliability",
    description: "We deliver on our promises, ensuring your goods reach their destination safely and on time.",
  },
  {
    icon: Users,
    title: "Punctuality",
    description: "Time is valuable. Our commitment to punctual service sets us apart in the industry.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Building long-term relationships through transparent and honest business practices.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container-narrow mx-auto px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About MVR Transport
            </h1>
            <p className="text-lg text-muted-foreground">
              A trusted name in transport and logistics services across Hyderabad
              and Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MVR Transport was established with a clear vision: to provide
                  reliable and efficient transport solutions for businesses in
                  Hyderabad and across Telangana. What started as a small
                  operation has grown into a trusted logistics partner for
                  numerous clients in the region.
                </p>
                <p>
                  Under the leadership of Mr. Madugula Venkat Reddy, our company
                  has built a reputation for excellence in the transport sector.
                  With years of hands-on experience and a deep understanding of
                  the logistics industry, we have consistently delivered
                  exceptional service to our clients.
                </p>
                <p>
                  Today, MVR Transport continues to uphold its founding
                  principles of reliability, punctuality, and customer
                  satisfaction, serving businesses of all sizes with dedication
                  and professionalism.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-primary-foreground">
                <blockquote className="text-lg italic">
                  "Our commitment to reliable service and customer satisfaction
                  has been the cornerstone of our success. We treat every
                  shipment as if it were our own."
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold">Mr. Madugula Venkat Reddy</p>
                  <p className="text-sm text-primary-foreground/80">
                    Founder & Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide reliable, efficient, and cost-effective transport
                solutions that meet the evolving needs of our clients while
                maintaining the highest standards of service quality and
                professionalism.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To become the most trusted transport partner in Telangana,
                recognized for our commitment to excellence, innovation in
                logistics, and the long-term success of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These principles guide everything we do at MVR Transport.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="group text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Let's Work Together
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Experience the MVR Transport difference. Contact us today to discuss
            how we can support your logistics needs.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
