import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  avatar: string
}

export default function TestimonialCard({ quote, author, position, avatar }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-all group hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer">
      <CardContent className="p-6 space-y-4">
        <Quote className="h-8 w-8 text-primary/30" />
        <p className="text-lg italic">{quote}</p>
        <div className="flex items-center gap-4 pt-2">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

