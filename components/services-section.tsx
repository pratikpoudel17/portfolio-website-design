import { Monitor, Smartphone, Palette, Layout, Share2, Play } from "lucide-react"

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and delightful user experiences through research-driven design",
    icon: Layout,
  },
  {
    title: "Web Design",
    description: "Stunning, responsive websites that captivate visitors and drive conversions",
    icon: Monitor,
  },
  {
    title: "Mobile App Design",
    description: "Native and cross-platform app interfaces that users love to interact with",
    icon: Smartphone,
  },
  {
    title: "Branding & Logo",
    description: "Memorable brand identities that tell your story and stand out from the crowd",
    icon: Palette,
  },
  {
    title: "Social Media Design",
    description: "Scroll-stopping visuals that boost engagement and grow your audience",
    icon: Share2,
  },
  {
    title: "Motion Graphics",
    description: "Dynamic animations that bring your brand and interfaces to life",
    icon: Play,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">What I Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
