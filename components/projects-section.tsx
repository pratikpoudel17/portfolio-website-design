"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Mobile App UI Design",
    description: "A sleek fitness tracking app with intuitive UX and modern aesthetics",
    image: "/modern-fitness-mobile-app-ui-design-dark-theme.jpg",
    tags: ["UI/UX", "Mobile"],
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of an e-commerce platform focusing on conversion",
    image: "/modern-ecommerce-website-redesign-dark-minimal.jpg",
    tags: ["Web Design", "UX"],
  },
  {
    title: "Brand Identity",
    description: "Comprehensive brand system for a tech startup",
    image: "/tech-startup-brand-identity-logo-design-modern.jpg",
    tags: ["Branding", "Logo"],
  },
  {
    title: "Social Media Graphics",
    description: "Visual content strategy for a lifestyle brand",
    image: "/social-media-graphics-design-modern-lifestyle-bran.jpg",
    tags: ["Graphics", "Social"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 group/btn">
                  View Project
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
