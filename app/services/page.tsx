import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, CheckCircle, Server, Globe, Smartphone, Palette } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technologies that are fast, responsive, and SEO-friendly.",
      features: [
        "Responsive design for all devices",
        "Performance optimization",
        "SEO best practices",
        "Cross-browser compatibility",
        "Content management systems",
      ],
      price: "Starting at $399",
      cta: "Get a quote",
    },
    {
      id: "api-development",
      icon: Server,
      title: "API Development",
      description: "Robust and scalable APIs to power your applications and connect your services.",
      features: [
        "RESTful API design",
        // "GraphQL implementation",
        "Authentication & authorization",
        "Documentation",
        "Performance optimization",
      ],
      price: "Starting at $119",
      cta: "Get a quote",
    },
    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and drives engagement.",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design",
        "Usability testing",
        "Design systems",
      ],
      price: "Starting at $99",
      cta: "Get a quote",
    },
    {
      id: "full-stack",
      icon: Code,
      title: "Full Stack Solutions",
      description: "End-to-end development from database design to frontend implementation.",
      features: [
        "Database architecture",
        "Backend development",
        "Frontend implementation",
        "DevOps & deployment",
        "Maintenance & support",
      ],
      price: "Starting at $499",
      cta: "Get a quote",
    },
    {
      id: "ecommerce",
      icon: Smartphone,
      title: "E-commerce Development",
      description: "Custom online stores with secure payment processing and inventory management.",
      features: [
        "Product catalog management",
        "Secure payment integration",
        "Order processing",
        "Customer accounts",
        "Contact & reporting",
      ],
      price: "Starting at $499",
      cta: "Get a quote",
    },
    {
      id: "maintenance",
      icon: Zap,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your website running smoothly.",
      features: [
        "Regular updates & backups",
        "Security monitoring",
        "Performance optimization",
        "Bug fixes",
        "Content updates",
      ],
      price: "Starting at $175/month",
      cta: "Get a quote",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Expert Digital <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
  We offer a comprehensive range of development services to help businesses and individuals establish a strong online presence, including  
  <span className="text-primary"> Web Development</span>,  
  <span className="text-primary"> API Development</span>,  
  <span className="text-primary"> Full-Stack Solutions</span>,  
  <span className="text-primary"> WordPress Customization</span>
  <span className="text-primary"> and</span>  
  <span className="text-primary"> Maintenance & Support</span>.
</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
                  variant="outline"
                  className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none "
                  asChild
                >
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-16">
  <div className="container mx-auto px-4 cursor-pointer">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card
          key={service.id}
          id={service.id}
          className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 
          group hover:scale-[1.03] dark:hover:scale-[1.05]
          relative overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-br 
          before:from-primary/5 before:to-secondary/5 
          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
          after:absolute after:inset-0 after:bg-gradient-to-br 
          after:from-primary/10 after:to-secondary/10 
          after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300
          dark:before:from-primary/10 dark:before:to-secondary/10
          dark:after:from-primary/20 dark:after:to-secondary/20"
        >
          <div className="relative z-10">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 
              group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                {service.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-foreground transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="font-medium group-hover:text-primary transition-colors duration-300">
                {service.price}
              </div>
              <Button
                  variant="outline"
                  className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none "
                  asChild
                >
                <Link href="/contact">
                  {service.cta} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </CardFooter>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 to-secondary/30 
            dark:from-primary/40 dark:to-secondary/40 
            blur-xl group-hover:animate-pulse-slow"></div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I follow a structured approach to ensure every project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding your requirements, goals, and target audience to create a solid foundation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold">Planning</h3>
              <p className="text-muted-foreground">
                Creating a detailed roadmap with timelines, milestones, and deliverables.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold">Development</h3>
              <p className="text-muted-foreground">
                Building your solution with clean, efficient code and regular progress updates.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold">Delivery</h3>
              <p className="text-muted-foreground">
                Thorough testing, deployment, and post-launch support to ensure everything runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answers to common questions about my services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold  group-hover:text-primary transition-colors duration-300">How long does a typical project take?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a
                  complex web application could take 2-3 months. I'll provide a detailed timeline during the planning
                  phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group cursor-pointer">
              <CardContent className="p-6">
              <h3 className="text-xl font-semibold  group-hover:text-primary transition-colors duration-300">What is your payment structure?</h3>
                <p className="text-muted-foreground">
                  I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion.
                  For larger projects, I offer milestone-based payment schedules.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group cursor-pointer">
              <CardContent className="p-6">
              <h3 className="text-xl font-semibold  group-hover:text-primary transition-colors duration-300">Do you provide ongoing support?</h3>
                <p className="text-muted-foreground">
                  Yes, I offer maintenance and support packages to keep your website running smoothly. This includes
                  regular updates, security monitoring, and content updates.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group cursor-pointer">
              <CardContent className="p-6">
              <h3 className="text-xl font-semibold  group-hover:text-primary transition-colors duration-300">What technologies do you work with?</h3>
                <p className="text-muted-foreground">
                  I specialize in modern web technologies including React, Next.js, Node.js, and various databases. I
                  choose the best technology stack based on your specific project requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
  className="relative py-20 dark:text-foreground text-white bg-fixed bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  }}
>
  <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
  <div className="relative container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Ready to start your project?
      </h2>
      <p className="text-xl opacity-90 font-bold">
        Let's discuss your requirements and create a solution that meets your
        needs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
      <Button
                  variant="outline"
                  className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none "
                  asChild
                >
          <Link href="/contact">
            Contact us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

