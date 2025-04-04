"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Download, CheckCircle, ArrowUpRight } from "lucide-react";
import { Linkedin } from "lucide-react";


export default function AboutPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "Shadcn",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST API",
    "HTML/CSS",
    "Tailwind CSS",
    "UI/UX Design",
    "Git/GitHub",
    "Docker",
    "AI/ML",
    "AWS",
    "Firebase",
    "Agile/Scrum",
    "Responsive Design",
    "Wordpress",
    "Figma",
    "Material UI",
  ];

  const cardVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.02, rotate: -0.5 },
  };

  const imageVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -5 },
  };

  const buttonVariants = {
    initial: {
      backgroundColor: "#ffffff",
      color: "#2563eb",
      x: 0,
    },
    hover: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      x: 5,
      transition: {
        duration: 0.3,
        bounce: 0.4,
      },
    },
  };

  const teamMembers = [
    {
      name: "Suryamani Patra",
      role: "Tech Lead",
      title: "Full Stack Developer",
      image:
        "surya.jpg",
      linkedin: "https://www.linkedin.com/in/suryamani-patra-a21098293/",
    },
    {
      name: "Bisworanjan Rout",
      role: "UI/UX Lead",
      title: "Frontend Developer & Wordpress ",
      image: "me.jpg",  
      linkedin: "https://www.linkedin.com/in/bisworanjan-rout-90b13724b/",
    },
    {
      name: "Ramashis Kalyan Das",
      role: "Project Lead",
      title: "MERN Stack Developer",
      image:
        "ramashis.jpg",
      linkedin: "https://www.linkedin.com/in/ramashis-kalyan-das-a95086276/",
    },
    {
      name: "Ananda Behera",
      role: "Senior Developer",
      title: "Java Full Stack Developer",
      image:
        "kk.jpg",
      linkedin: "https://www.linkedin.com/in/ananda-behera-8b322b253/",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-10 bg-muted/50">
      
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 relative order-2 md:order-1 group">
              {" "}
              {/* Added group class */}
              <div className="relative w-full aspect-square max-w-xl mx-auto">
                {/* Gradient overlay that appears on hover */}
                {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-br  duration-500 z-10" /> */}

                <div className="absolute inset-2 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="https://res.cloudinary.com/dpbffql9d/image/upload/v1743506337/image4_boryxb.png"
                    alt="Profile Picture"
                    width={1000}
                    height={1000}
                    className="object-cover rounded-2xl w-full h-full transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Subtle glow effect */}
                {/* <div className="absolute inset-0 rounded-2xl  shadow-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
              </div>
            </div>

            <div className="flex-1 space-y-6 order-1 md:order-2">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  We are <span className="text-primary">Nexus Coders</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">
                A team of passionate full-stack developers, designers and
                problem solvers, dedicated to crafting modern web applications
                and seamless digital experiences.
              </p>

              <p className="text-muted-foreground">
                We specialize in building high-performance websites, custom web
                applications and scalable solutions using the latest
                technologies. Our expertise spans across frontend and backend
                development, UI/UX design and cloud deployment.
              </p>

              <p className="text-muted-foreground">
                Whether you're a startup looking for an MVP, a business seeking
                digital transformation or an individual with a creative idea,
                we're here to turn your vision into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="outline"
                  className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none transition-colors duration-300"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="cursor-pointer rounded-2xl text-primary 
            hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none transition-colors duration-300"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Team Section */}
      {/* Enhanced Team Section */}
      <section className="py-16 bg-muted/50 dark:bg-background/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4 text-primary dark:text-blue-300"
            >
              Our Developers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Meet our expert team driving technical excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers?.map((developer, index) => (
              <motion.div
                key={developer.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="relative h-full group"
              >
                <Card className="h-full bg-background rounded-lg cursor-pointer  dark:bg-card/70 shadow-lg hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 overflow-hidden">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Profile header */}
                  <div className="relative w-full flex justify-center items-center py-6 bg-primary/10 dark:bg-blue-900/20">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-background dark:border-blue-900/50 shadow-lg"
                    >
                      <Image
                        src={developer.image}
                        width={112}
                        height={112}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        alt={developer.name}
                        priority
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  {/* Profile content */}
                  <div className="p-6 text-center space-y-3">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-xl font-semibold text-foreground"
                    >
                      {developer.name}
                    </motion.h3>
                    <p className="text-sm text-primary font-medium">
                      {developer.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {developer.title}
                    </p>
                  </div>

                  {/* LinkedIn button */}
                  <motion.div
                    className="px-6 pb-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full relative z-20"
                    >
                      <Button
                        variant="outline"
                        className="w-full rounded-full bg-transparent hover:bg-primary/90 dark:hover:bg-blue-900/30 border-primary/30 dark:border-blue-800 text-primary hover:text-white dark:hover:text-blue-300 transition-all"
                      >
                        <motion.div
                          animate={{ y: 0 }}
                          whileHover={{ y: -2 }}
                          className="flex items-center gap-2"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span>Connect</span>
                        </motion.div>
                      </Button>
                    </a>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have worked with a wide range of technologies and frameworks to
              deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="group">
                <Card className="border-none rounded-3xl  shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-primary/5 cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary transition-all duration-500 group-hover:scale-150 group-hover:text-primary/80" />
                    <span className="transition-all duration-300 group-hover:font-medium group-hover:text-primary/90">
                      {skill}
                    </span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      {/* Enhanced Team Section */}

      {/* Education & Certifications */}

      {/* CTA Section */}
      <section
        className="relative py-20 dark:text-foreground text-white bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* Dark overlay */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Work Together
            </h2>
            <p className="text-xl opacity-90 font-bold">
              Interested in collaborating or have a project in mind? We would love to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                variant="outline"
                className="cursor-pointer rounded-xl text-primary hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
                asChild
              >
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="cursor-pointer rounded-2xl text-primary hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
                asChild
              >
                <Link href="/portfolio">View my work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
