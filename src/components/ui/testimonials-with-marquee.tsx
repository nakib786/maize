import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "relative overflow-hidden",
      "py-16 sm:py-24 md:py-32 px-0",
      "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] before:opacity-50",
      className
    )}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"></div>
      
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-8 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-6 px-4 sm:gap-8">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm">
            <span className="mr-2">⭐</span>
            Trusted by 200+ Clients
          </div>
          <h2 className="max-w-[720px] text-4xl font-bold leading-tight text-white sm:text-6xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-lg max-w-[600px] font-medium text-white/70 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-4 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(6)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Enhanced gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent sm:block" />
        </div>
      </div>
    </section>
  )
}
