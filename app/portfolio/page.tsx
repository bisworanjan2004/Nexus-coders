"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/project-card";
import BackgroundPaths from "@/components/background";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: "Sikshya Guru",
      title:"Sikshya Guru",
      description:"Siksya Guru is an innovative platform designed to assist students in navigating the complex landscape of higher education choices.",
      image:"sikshyaGuru.png",
      tags: ["React.js", "Tailwind CSS", "Node", "MongoDB"],
      category: "Website",
      featured: true,
    },
    {
      id: "Billing Software",
      title: "Billing Software",
      description:
        "A comprehensive billing software solution for managing invoices, payments, and customer accounts.",
      
      
      image:
        "billing.png",
      tags: ["Next.js", "Node.js", "Express", "MongoDB"],
      category: "Website",
      featured: true,
    },
    {
      id: "AI Powered Waste Management System",
      title: "AI Powered Waste Management System",
      description:
        "Our E-Waste Management System is an innovative solution that leverages AI technology to optimize waste collection and disposal processes.",
      image:
        "e-waste-ai.jpg",
      tags: ["Vue.js", "Firebase", "Chart.js", "Tailwind CSS"],
      category: "dashboard",
      featured: true,
    },
    // {
    //   id: "travel-blog",
    //   title: "Travel Blog Platform",
    //   description:
    //     "Content management system for travel bloggers with social sharing and monetization features.",
    //   image:
    //     "https://www.searchenginejournal.com/wp-content/uploads/2024/04/22-places-you-should-be-sharing-your-content-576.jpg",
    //   tags: ["WordPress", "PHP", "MySQL", "JavaScript"],
    //   category: "website",
    //   featured: false,
    // },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* <section className="py-16 md:py-20 bg-muted/50"> */}
      <BackgroundPaths/>
        {/* <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover a diverse range of projects showcasing our expertise in
              web and API development, AI solutions and automation. Each
              project reflects our commitment to innovation, quality, and
              scalability across various industries.
            </p>
          </div>
        </div> */}
      {/* </section> */}

      {/* Portfolio Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "Website", "dashboard"].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className="rounded-full capitalize"
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all"
                  ? "All Projects"
                  : category.replace("-", "s ")}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with 3D Effect */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative overflow-hidden rounded-xl shadow-lg p-[1px]"
                  style={{ perspective: "1000px" }} // 3D Depth
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    link={`/portfolio/${project.id}`}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 text-primary-foreground mt-16 bg-cover bg-fixed"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Have a project in mind?
            </h2>
            <p className="text-xl opacity-80 text-gray-300 font-medium">
              Let's collaborate to create something amazing together. We're
              currently available for freelance projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                variant="outline"
                className="cursor-pointer rounded-2xl text-primary hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
                asChild
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
