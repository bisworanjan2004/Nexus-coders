import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border hover:border-sky-500 shadow-sm hover:shadow-md h-[400px] transition-all group ">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent
        className="p-6  cursor-pointer 
            hover:bg-gradient-to-r from-blue-400 via-blue-600 to-black 
            dark:from-blue-700 dark:via-black dark:to-black 
            opacity-100 group-hover:opacity-80 transition-opacity duration-300 h-full hover:shadow-md"
      >
        <div className="flex justify-between items-start mb-2 ">
          <h3 className="text-xl font-semibold">{title}</h3>
          <Link href={link} className="text-primary hover:text-primary/80">
            <ArrowUpRight className="h-5 w-5" />
            <span className="sr-only">View project</span>
          </Link>
        </div>
        <p className="text-bold mb-4 flex-grow line-clamp-2 hover:line-clamp-3 hover:flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto ">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal border-sky-400">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
