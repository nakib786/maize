import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "group relative flex flex-col rounded-2xl",
        "bg-white/10 backdrop-blur-md border border-white/20",
        "p-6 text-start sm:p-8",
        "hover:bg-white/15 hover:border-white/30 hover:scale-105",
        "max-w-[350px] sm:max-w-[380px]",
        "transition-all duration-500 ease-out",
        "shadow-xl hover:shadow-2xl",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 before:group-hover:opacity-100",
        className
      )}
    >
      {/* Quote icon */}
      <div className="absolute top-4 right-4 text-white/20 text-2xl font-serif">
        &quot;
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-14 w-14 ring-2 ring-white/20">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-bold leading-none text-white">
            {author.name}
          </h3>
          <p className="text-sm text-white/60 font-medium">
            {author.handle}
          </p>
        </div>
      </div>
      
      <p className="text-base leading-relaxed text-white/80 font-medium">
        {text}
      </p>
      
      {/* Hover effect indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Card>
  )
}
