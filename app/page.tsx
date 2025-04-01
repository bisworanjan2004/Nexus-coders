"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Layout, Database, Zap } from "lucide-react";
import ProjectCard from "@/components/project-card";
import TestimonialCard from "@/components/testimonial-card";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  const service = [
    {
      title: "UI/UX Design",
      icon: <Layout className="h-6 w-6 text-primary" />,
      desc: "Creating intuitive and engaging user interfaces with a focus on user experience.",
    },
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      desc: "Building responsive and performant websites using modern frameworks and technologies.",
    },
    {
      title: "API Development",
      icon: <Database className="h-6 w-6 text-primary" />,
      desc: "Designing and implementing robust APIs to power your applications and services.",
    },
    {
      title: "Full Stack Solutions",
      icon: <Zap className="h-6 w-6 text-primary" />,
      desc: "End-to-end development from database design to frontend implementation.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dpbffql9d/video/upload/v1743505228/video-1-1_bg3tqu.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            {/* <img
              src="https://videocdn.cdnpk.net/videos/66b663a2-f41f-52ba-aee5-1d356f6ddb3f/horizontal/thumbnails/small.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            /> */}
          </video>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-1"></div>

        <div className="relative container mx-auto px-4 z-10">
          {/* FLEX COLUMN REVERSE FOR MOBILE, ROW FOR LARGER SCREENS */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12">
            {/* IMAGE SECTION */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto h-auto min-h-[300px] sm:min-h-[400px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse" />
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-background w-full h-full">
                  <Image
                    src="https://i.pinimg.com/originals/8b/35/fe/8b35fef55fba1a201c9c7a11d3ec3d64.gif"
                    alt="Ramashis Kalyan Das"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* TEXT SECTION */}
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Turning ideas into{" "}
                  <span className="text-primary">
                    <Typewriter
                      words={[
                        "Digital Reality",
                        "Scalable Products",
                        "AI Solutions",
                      ]}
                      loop={0}
                      typeSpeed={120}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </div>
              <p className="text-xl font-semibold text-muted-foreground text-justify hyphens-auto hidden md:block">
  Our expert freelancing team specializes in delivering high-quality, scalable, and innovative digital solutions. From
  web development and AI-driven applications to UI/UX design and full-stack solutions, we transform ideas into reality.
  Explore our portfolio and witness the impact of our expertise in action!
</p>


              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="cursor-pointer rounded-2xl  
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
                  asChild
                >
                  <Link href="/contact">
                    Work with us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
                  asChild
                >
                  <Link href="/portfolio">View our work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
     

<section className="py-20 text-black dark:text-foreground bg-muted/50 relative">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        We offer a comprehensive range of services to help businesses and
        individuals establish a strong online presence.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {service.map((service, index) => {
        // Calculate animation direction based on index
        const direction = index % 3;
        let initialX = 0;
        let initialY = 50; // Default to coming from bottom

        // Alternate directions for mobile
        if (direction === 0) initialX = -50; // From left
        if (direction === 1) initialX = 50;  // From right
        
        return (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, x: initialX, y: initialY }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              y: 0,
              transition: { 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="border border-sky-500 shadow-xl transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-none bg-white dark:bg-gray-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute inset-0 blur-2xl rounded-xl 
                  bg-gradient-to-r from-blue-400 via-blue-600 to-black 
                  dark:from-blue-700 dark:via-black dark:to-black 
                  opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                ></div>
              </div>

              <CardContent className="p-6 space-y-4 relative z-10">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>

    <motion.div
      className="text-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: 0.2,
          type: "spring",
          stiffness: 50
        }
      }}
      viewport={{ once: true }}
    >
      <Button
        variant="outline"
        className="cursor-pointer rounded-2xl text-primary 
        hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
        asChild
      >
        <Link href="/services">
          View all services <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  </div>
</section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent work. Each project represents a unique
              challenge and solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <ProjectCard
              title="Sikshya Guru"
              description="Siksya Guru is an innovative platform designed to assist students in navigating the complex landscape of higher education choices."
              image="sikshyaGuru.png"
              tags={["React.js", "Tailwind CSS", "Stripe", "MongoDB"]}
              link="/portfolio/ecommerce-platform"
              className="border border-sky-500 shadow-xl transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-none bg-white  dark:bg-gray-900 relative overflow-hidden"
            />
            <ProjectCard
              
              title= "Billing Software"
              description=
                "A comprehensive billing software solution for managing invoices, payments, and customer accounts."
              
              
              image=
                "billing.png"
              tags={["Next.js","MUI", "Node.js", "Express", "MongoDB"]}
              link="/portfolio/fitness-app"
            />
            <ProjectCard
              title= "AI Powered Waste Management System"
              description=
                "Our E-Waste Management System is an innovative solution that leverages AI technology to optimize waste collection and disposal processes."
              image=
                "e-waste-ai.jpg"
              tags={["React.js", "Firebase", "Chart.js", "Tailwind CSS"]}
              link="/portfolio/real-estate-dashboard"
            />
          </div>

          <div className="text-center mt-12   ">
            <Button
              variant="outline"
              className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none "
              asChild
            >
              <Link href="/portfolio ">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50 ">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say
              about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <TestimonialCard
              quote="Nexus Coders delivered our project ahead of schedule and exceeded our expectations. His attention to detail and problem-solving skills are exceptional."
              author="Pratik Pattanaik"
              position="CEO, Sikshya Guru."
              avatar="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Working with Nexus Coders was a pleasure. He understood our requirements perfectly and implemented solutions that were both elegant and efficient."
              author="Bishal Sahu"
              position=""
              avatar="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Nexus Coders transformed our outdated website into a modern, responsive platform that has significantly increased our conversion rates."
              author="Umakant Pradhan"
              position=""
              avatar="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 dark:text-foreground text-white relative bg-fixed bg-cover bg-center bg-[url('https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]`}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-xl opacity-90">
              Let's collaborate to create something amazing together. We're
              currently available for freelance projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              {/* Primary Button */}
              <Button
                size="lg"
                variant="secondary"
                className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
                asChild
              >
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              {/* Outline Button */}
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
                asChild
              >
                <Link href="/services">View our services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
