"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      id: "modern-web-development",
      title: "Modern Web Development Trends in 2023",
      excerpt: "Exploring the latest trends and technologies shaping the web development landscape in 2023.",
      image: "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/web-design-header.jpg?itok=4d7TmUMl",
      date: "June 15, 2023",
      readTime: "5 min read",
      author: "Ramashis Kalyan Das",
      category: "Web Development",
    },
    {
      id: "react-vs-vue",
      title: "React vs Vue: Choosing the Right Framework",
      excerpt: "A comprehensive comparison of React and Vue.js to help you choose the right framework for your next project.",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpq4y7rwc3duav3uctoad.jpg",
      date: "May 22, 2023",
      readTime: "8 min read",
      author: "Ramashis Kalyan Das",
      category: "JavaScript",
    },
    {
      id: "serverless-architecture",
      title: "The Rise of Serverless Architecture",
      excerpt: "How serverless architecture is changing the way we build and deploy web applications.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFjhg7BqtNzkQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682404044256?e=2147483647&v=beta&t=xRmJUPFuE7ZVWpFasBQQlPNpdxZRAwctuRfrr9qUOpA",
      date: "April 10, 2023",
      readTime: "6 min read",
      author: "Ramashis Kalyan Das",
      category: "Cloud Computing",
    },
    {
      id: "responsive-design",
      title: "Responsive Design Best Practices",
      excerpt: "Essential tips and techniques for creating responsive websites that work on all devices.",
      image: "https://ecareinfoway.com/storage/oY6ADbtZNZnVGuZfmYEuKM4ORD5vOC-metaUmVzcG9uc2l2ZS1XZWItRGVzaWduLUJlc3QtUHJhY3RpY2VzLmpwZw==-.jpg",
      date: "March 5, 2023",
      readTime: "7 min read",
      author: "Ramashis Kalyan Das",
      category: "UI/UX Design",
    },
    {
      id: "typescript-benefits",
      title: "Why TypeScript Should Be Your Next Language",
      excerpt: "The benefits of using TypeScript in your projects and how it can improve your development workflow.",
      image: "https://assets-eu-01.kc-usercontent.com/8c150fae-fba4-0115-ef12-b10a8a4e2715/36961122-2fd0-4bd1-8aad-40c4c5dfa139/benefits_of_typescript_without_typescript_blog_index.webp",
      date: "February 18, 2023",
      readTime: "4 min read",
      author: "Ramashis Kalyan Das",
      category: "TypeScript",
    },
    {
      id: "api-security",
      title: "Securing Your APIs: Best Practices",
      excerpt: "Essential security practices to protect your APIs from common vulnerabilities and attacks.",
      image: "https://www.payrollintegrations.com/hubfs/Best%20Practices%20for%20Securing%20APIs%20%20A%20Checklist%20.png",
      date: "January 30, 2023",
      readTime: "9 min read",
      author: "Ramashis Kalyan Das",
      category: "Security",
    },
    {
      id: "progressive-web-apps",
      title: "The Power of Progressive Web Apps",
      excerpt: "How PWAs are transforming web development and improving user experience.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQHS7TZ1a4VAuQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680178820416?e=2147483647&v=beta&t=rIjAAW_-Cot3fHxKGzMIlIFGRrBE_8CaaZNkuSGYJHc",
      date: "December 12, 2022",
      readTime: "6 min read",
      author: "Ramashis Kalyan Das",
      category: "Web Development",
    },
    {
      id: "graphql-vs-rest",
      title: "GraphQL vs REST: Which API Style is Right for You?",
      excerpt: "Breaking down the key differences between GraphQL and REST APIs.",
      image: "https://ultahost.com/blog/wp-content/uploads/2024/05/6-Comparison-GraphQL-vs-REST-Which-API-Approach-is-Right-for-You.png",
      date: "November 5, 2022",
      readTime: "7 min read",
      author: "Ramashis Kalyan Das",
      category: "API Development",
    },
    {
      id: "css-tricks",
      title: "10 Advanced CSS Tricks for Better Web Design",
      excerpt: "Lesser-known CSS techniques that can take your web design skills to the next level.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImsaXr9TTaF7-eofjRNgxIIH_lvOjHpEqYA&s",
      date: "October 21, 2022",
      readTime: "5 min read",
      author: "Ramashis Kalyan Das",
      category: "UI/UX Design",
    },
    {
      id: "docker-for-developers",
      title: "Getting Started with Docker for Developers",
      excerpt: "Learn how to use Docker to containerize and deploy your applications.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*JKGCmCLDI4wrIJXHUhEACg.png",
      date: "September 10, 2022",
      readTime: "10 min read",
      author: "Ramashis Kalyan Das",
      category: "DevOps",
    },
    {
      id: "microservices-architecture",
      title: "An Introduction to Microservices Architecture",
      excerpt: "Understanding the benefits and challenges of microservices in software development.",
      image: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/02/What-Is-Microservices-0.png",
      date: "August 2, 2022",
      readTime: "8 min read",
      author: "Ramashis Kalyan Das",
      category: "Cloud Computing",
    },
    {
      id: "machine-learning-basics",
      title: "Machine Learning Basics for Beginners",
      excerpt: "A simple introduction to machine learning and how to get started.",
      image: "https://images.codebasics.io/filters:format(webp)/images/1.1.419/courses/thumbnails/machine-learning-for-beginners.webp",
      date: "July 14, 2022",
      readTime: "7 min read",
      author: "Ramashis Kalyan Das",
      category: "AI & Machine Learning",
    },
    {
      id: "nextjs-vs-nuxtjs",
      title: "Next.js vs Nuxt.js: Which One Should You Choose?",
      excerpt: "A detailed comparison between Next.js and Nuxt.js for building web applications.",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*fGwvE0xoflxbd5Lu.png",
      date: "June 3, 2022",
      readTime: "6 min read",
      author: "Ramashis Kalyan Das",
      category: "JavaScript",
    },
  ]
   
  
  
  

  const categories = ["All", "Web Development", "JavaScript", "Cloud Computing", "UI/UX Design"]
  const filteredPosts = selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* <Badge variant="outline" className="px-3 py-1 text-sm">Blog</Badge> */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Insights & <span className="text-primary">Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground">Sharing my knowledge and experiences in web development, design, and technology.</p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card 
                key={post.id} 
                className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all group
                relative before:absolute before:inset-0 before:bg-gradient-to-br 
                before:from-primary/5 before:to-secondary/5 
                before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
                dark:before:from-primary/10 dark:before:to-secondary/10
                hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-primary/20"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/90 transition-colors duration-300">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Link href={`/blog/${post.id}`} className="block group-hover:text-primary transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center gap-1 group-hover:text-foreground transition-colors duration-300">
                      <Calendar className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-foreground transition-colors duration-300">
                      <Clock className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t">
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-primary hover:text-primary/80 font-medium flex items-center
                    group-hover:underline underline-offset-4 transition-all duration-300 z-50"
                  >
                    Read more 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </CardFooter>
                
                {/* Glow effect for dark mode */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 to-secondary/30 
                  dark:from-primary/40 dark:to-secondary/40 
                  blur-xl group-hover:animate-pulse-slow"></div>
                </div>
              </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No posts found in this category.</p>
          )}
        </div>
      </section>

      {/* Newsletter Section with Background Image */}
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
      Subscribe to our newsletter
      </h2>
      <p className="text-xl opacity-80 text-gray-300 font-medium">
      Get the latest articles and insights delivered directly to your inbox.      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          variant="outline"
          className="cursor-pointer rounded-2xl text-primary hover:bg-blue-700 hover:text-white border-sky-400 hover:border-none"
          asChild
        >
          <Link href="/contact">Subscribe </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
