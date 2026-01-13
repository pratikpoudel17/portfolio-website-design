import { Figma, Palette, PenTool, Monitor, Sparkles, Video, Layout } from "lucide-react"

const skills = [
  { name: "Figma", icon: Figma },
  { name: "Adobe XD", icon: Layout },
  { name: "Photoshop", icon: Palette },
  { name: "Illustrator", icon: PenTool },
  { name: "After Effects", icon: Video },
  { name: "Web Design", icon: Monitor },
  { name: "Branding", icon: Sparkles },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">I&apos;m Pratik Poudel</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A passionate UI/UX designer with a keen eye for detail and a love for creating beautiful, functional
                digital experiences. With expertise in both design and visual storytelling, I help brands communicate
                their unique value.
              </p>
              <p>
                My approach combines user-centered design principles with creative innovation, ensuring every project
                not only looks stunning but also delivers exceptional user experiences that drive engagement and
                conversion.
              </p>
              <p>
                When I&apos;m not pushing pixels, you&apos;ll find me exploring new design trends, collaborating with
                fellow creatives, or working on passion projects that challenge conventional design thinking.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <h3 className="text-xl font-semibold text-foreground mb-8">Tools & Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 group"
                >
                  <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
