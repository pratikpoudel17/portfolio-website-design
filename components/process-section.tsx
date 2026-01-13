const processSteps = [
  {
    number: "01",
    title: "Research",
    description: "Understanding your goals, audience, and competition through thorough analysis",
  },
  {
    number: "02",
    title: "Wireframing",
    description: "Creating structural blueprints that map out user flows and information architecture",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting beautiful, pixel-perfect interfaces that align with your brand",
  },
  {
    number: "04",
    title: "Prototype",
    description: "Building interactive prototypes to test and validate design decisions",
  },
  {
    number: "05",
    title: "Final Delivery",
    description: "Delivering polished assets ready for development with detailed documentation",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">How I Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">My Process</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

            <div className="space-y-8 md:space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Number bubble */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="text-primary font-bold">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`glass-card rounded-2xl p-6 flex-1 md:w-[calc(50%-4rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
