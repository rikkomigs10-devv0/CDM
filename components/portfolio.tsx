"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    image: "/placeholder-lxaq6.png",
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    image: "/luxury-apartment-construction.png",
  },
  {
    title: "Highway Bridge Project",
    category: "Infrastructure",
    image: "/placeholder-i4hr2.png",
  },
  {
    title: "Shopping Center Development",
    category: "Commercial",
    image: "/shopping-mall-construction.png",
  },
  {
    title: "Community Housing",
    category: "Residential",
    image: "/residential-construction.png",
  },
  {
    title: "Industrial Facility",
    category: "Industrial",
    image: "/industrial-warehouse-construction.png",
  },
]

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our commitment to excellence through completed projects across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-primary/80 transition-opacity duration-300 flex items-center justify-center ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center text-primary-foreground">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
