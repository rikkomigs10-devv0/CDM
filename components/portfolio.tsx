"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ArrowLeft } from "lucide-react"

const projects = [
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    image: "/placeholder-lxaq6.png",
    description:
      "A state-of-the-art 25-story office complex located in the heart of downtown, featuring modern architectural design and sustainable construction practices. This project spans 450,000 square feet and includes premium office spaces, retail outlets, and underground parking for 800 vehicles.\n\nThe building incorporates cutting-edge technology including smart building systems, energy-efficient HVAC, LED lighting throughout, and advanced security systems. The exterior features a striking glass and steel facade with integrated solar panels that contribute to the building's LEED Platinum certification.\n\nKey features include: high-speed elevators, flexible floor plans ranging from 5,000 to 50,000 square feet, rooftop garden and event space, fitness center, conference facilities, and ground-floor retail spaces. The project was completed 2 months ahead of schedule and 5% under budget, demonstrating our commitment to excellence and efficiency.\n\nConstruction challenges included working in a dense urban environment with limited staging area, coordinating with multiple utility companies for infrastructure upgrades, and maintaining traffic flow during construction. Our team successfully navigated these challenges through careful planning, innovative construction techniques, and strong community partnerships.",
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    image: "/luxury-apartment-construction.png",
    description:
      "An elegant 35-story luxury residential tower offering 280 premium units with breathtaking city and waterfront views. This architectural masterpiece combines sophisticated design with modern amenities to create an unparalleled living experience.\n\nThe tower features a variety of unit types including studio, one, two, and three-bedroom apartments, as well as exclusive penthouse suites with private terraces. Each unit is finished with premium materials including hardwood floors, granite countertops, stainless steel appliances, and floor-to-ceiling windows.\n\nBuilding amenities include a 24-hour concierge service, fitness center with yoga studio, rooftop infinity pool and lounge area, business center, children's playroom, pet spa, and secure parking garage. The building also features sustainable design elements including rainwater harvesting, energy-efficient systems, and green roof spaces.\n\nThis project required specialized construction techniques for high-rise construction, including advanced crane operations, wind-resistant design considerations, and precision scheduling to coordinate the complex mechanical, electrical, and plumbing systems. The result is a landmark building that sets new standards for luxury living in the city.",
  },
  {
    title: "Highway Bridge Project",
    category: "Infrastructure",
    image: "/placeholder-i4hr2.png",
    description:
      "A critical infrastructure project involving the construction of a 1.2-mile cable-stayed bridge spanning the metropolitan river, designed to accommodate both vehicular traffic and pedestrian walkways. This engineering marvel features a 400-foot main span with twin towers rising 300 feet above the water.\n\nThe bridge design incorporates seismic-resistant technology, corrosion-resistant materials, and advanced drainage systems to ensure longevity and safety. The structure includes six lanes of traffic, dedicated bike lanes, and scenic pedestrian walkways with viewing areas.\n\nConstruction presented unique challenges including deep-water foundation work, coordination with maritime traffic, environmental protection measures for local wildlife, and weather-dependent operations. Our team utilized specialized marine construction equipment, including floating cranes and cofferdams for underwater construction.\n\nThe project required extensive collaboration with environmental agencies, transportation departments, and local communities. We implemented innovative construction methods to minimize environmental impact, including fish-friendly construction timing, water quality monitoring, and habitat restoration programs. The completed bridge reduces commute times by 30% and serves as a vital economic link for the region.",
  },
  {
    title: "Shopping Center Development",
    category: "Commercial",
    image: "/shopping-mall-construction.png",
    description:
      "A comprehensive retail development project encompassing 850,000 square feet of mixed-use space, including anchor department stores, specialty retail shops, restaurants, entertainment venues, and a 12-screen cinema complex. The center is designed to serve as a community hub with both indoor and outdoor shopping experiences.\n\nThe architectural design features a modern aesthetic with natural lighting, open-air courtyards, water features, and landscaped walkways. The center includes over 150 retail spaces, ranging from small boutiques to large anchor stores, with flexible layouts to accommodate various tenant needs.\n\nSustainability features include solar panel installations, rainwater collection systems, energy-efficient lighting and HVAC systems, and extensive green spaces. The development also incorporates smart parking systems with real-time availability updates and electric vehicle charging stations.\n\nConstruction coordination involved managing multiple phases to allow early tenant move-ins while continuing construction in other areas. This required careful sequencing of utilities, coordinated material deliveries, and maintaining safe pedestrian and vehicle access throughout the construction process. The project created over 2,000 permanent jobs and significantly boosted local economic development.",
  },
  {
    title: "Community Housing",
    category: "Residential",
    image: "/residential-construction.png",
    description:
      "An affordable housing development providing 320 family-friendly units across multiple low-rise buildings, designed to create a vibrant, sustainable community. This project addresses the critical need for quality affordable housing while incorporating modern amenities and green building practices.\n\nThe development features a mix of one, two, three, and four-bedroom units with private entrances, patios or balconies, and in-unit laundry facilities. Community amenities include a clubhouse, fitness center, playground, community garden, and on-site childcare facility.\n\nSustainable design elements include energy-efficient appliances, LED lighting, low-flow plumbing fixtures, and native landscaping that requires minimal irrigation. The buildings are constructed with durable, low-maintenance materials and feature excellent insulation for energy efficiency.\n\nThis project was developed in partnership with local housing authorities and community organizations to ensure it meets the specific needs of residents. Construction included extensive community engagement, local hiring initiatives, and partnerships with minority-owned businesses. The development has achieved LEED Gold certification and serves as a model for sustainable affordable housing development.",
  },
  {
    title: "Industrial Facility",
    category: "Industrial",
    image: "/industrial-warehouse-construction.png",
    description:
      "A cutting-edge 500,000 square foot manufacturing and distribution facility designed for advanced manufacturing operations. The facility features high-bay construction with 40-foot clear heights, heavy-duty flooring capable of supporting industrial equipment, and advanced utility infrastructure.\n\nThe building incorporates state-of-the-art technology including automated material handling systems, climate-controlled production areas, quality control laboratories, and administrative offices. The facility is designed for flexibility, allowing for future expansion and reconfiguration as operational needs evolve.\n\nSustainability features include a 2-megawatt solar array, LED lighting with smart controls, high-efficiency HVAC systems, and water recycling systems. The facility is designed to achieve net-zero energy consumption and has received LEED Platinum certification.\n\nConstruction challenges included coordinating the installation of specialized manufacturing equipment, managing complex utility requirements including high-voltage electrical systems, and maintaining strict quality control standards for precision manufacturing environments. The project was completed using advanced project management techniques including Building Information Modeling (BIM) and lean construction principles, resulting in zero safety incidents and on-time delivery.",
  },
]

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const truncateDescription = (description: string, maxLength = 700) => {
    if (description.length <= maxLength) {
      return description
    }

    // Find the last complete sentence within the limit
    const truncated = description.substring(0, maxLength)
    const lastSentence = truncated.lastIndexOf(".")
    const lastSpace = truncated.lastIndexOf(" ")

    // Use last sentence if it's reasonably close, otherwise use last space
    const cutPoint = lastSentence > maxLength - 100 ? lastSentence + 1 : lastSpace

    return description.substring(0, cutPoint) + "..."
  }

  return (
    <>
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
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleProjectClick(project)}
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
                      <p className="text-sm mb-2">{project.category}</p>
                      <p className="text-xs opacity-90">Click to view details</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image section */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                    onClick={closeModal}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content section */}
              <div className="lg:w-1/2 p-6 lg:p-8">
                <div className="mb-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">{selectedProject.title}</h3>
                </div>

                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                    {truncateDescription(selectedProject.description)}
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Button
                    onClick={closeModal}
                    className="px-6 py-2 rounded-lg hover:shadow-md transition-all duration-200"
                    size="lg"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
