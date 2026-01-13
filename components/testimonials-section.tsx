import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Pratik's design work transformed our product. His attention to detail and user-focused approach resulted in a 40% increase in user engagement.",
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Michael Chen",
    role: "Founder, Brandify",
    content:
      "Working with Pratik was a game-changer. He understood our vision perfectly and delivered a brand identity that truly represents who we are.",
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director, Innovate Co",
    content:
      "The social media graphics Pratik created for us consistently outperform our previous content. Creative, on-brand, and incredibly effective.",
    avatar: "/professional-woman-blonde-avatar.jpg",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 hero-gradient opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-8">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
