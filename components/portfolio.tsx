"use client"

import { useCallback, useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X } from "lucide-react"

// Embla
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaCarouselType } from "embla-carousel"

// Images
import imgOffice from "@/public/downtown-office-complex.png"
import imgLuxury from "@/public/luxury-apartment-construction.png"
import imgBridge from "@/public/highway-bridge-construction.png"
import imgMall from "@/public/shopping-mall-construction.png"
import imgHousing from "@/public/residential-construction.png"
import imgIndustrial from "@/public/industrial-warehouse-construction.png"

type Project = {
  title: string
  category: string
  images: StaticImageData[]
  description: string
}

const projects: Project[] = [
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    images: [imgOffice, imgMall, imgLuxury],
    description:
      "A state-of-the-art 25-story office complex located in the heart of downtown, featuring modern architectural design and sustainable construction practices. This project spans 450,000 square feet and includes premium office spaces, retail outlets, and underground parking for 800 vehicles.\n\nThe building incorporates cutting-edge technology including smart building systems, energy-efficient HVAC, LED lighting throughout, and advanced security systems. The exterior features a striking glass and steel facade with integrated solar panels that contribute to the building's LEED Platinum certification.\n\nKey features include: high-speed elevators, flexible floor plans ranging from 5,000 to 50,000 square feet, rooftop garden and event space, fitness center, conference facilities, and ground-floor retail spaces. The project was completed 2 months ahead of schedule and 5% under budget, demonstrating our commitment to excellence and efficiency.\n\nConstruction challenges included working in a dense urban environment with limited staging area, coordinating with multiple utility companies for infrastructure upgrades, and maintaining traffic flow during construction. Our team successfully navigated these challenges through careful planning, innovative construction techniques, and strong community partnerships.",
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    images: [imgLuxury, imgHousing, imgOffice],
    description:
      "An elegant 35-story luxury residential tower offering 280 premium units with breathtaking city and waterfront views. This architectural masterpiece combines sophisticated design with modern amenities to create an unparalleled living experience.\n\nThe tower features a variety of unit types including studio, one, two, and three-bedroom apartments, as well as exclusive penthouse suites with private terraces. Each unit is finished with premium materials including hardwood floors, granite countertops, stainless steel appliances, and floor-to-ceiling windows.\n\nBuilding amenities include a 24-hour concierge service, fitness center with yoga studio, rooftop infinity pool and lounge area, business center, children's playroom, pet spa, and secure parking garage. The building also features sustainable design elements including rainwater harvesting, energy-efficient systems, and green roof spaces.\n\nThis project required specialized construction techniques for high-rise construction, including advanced crane operations, wind-resistant design considerations, and precision scheduling to coordinate the complex mechanical, electrical, and plumbing systems. The result is a landmark building that sets new standards for luxury living in the city.",
  },
  {
    title: "Highway Bridge Project",
    category: "Infrastructure",
    images: [imgBridge, imgIndustrial, imgMall],
    description:
      "A critical infrastructure project involving the construction of a 1.2-mile cable-stayed bridge spanning the metropolitan river, designed to accommodate both vehicular traffic and pedestrian walkways. This engineering marvel features a 400-foot main span with twin towers rising 300 feet above the water.\n\nThe bridge design incorporates seismic-resistant technology, corrosion-resistant materials, and advanced drainage systems to ensure longevity and safety. The structure includes six lanes of traffic, dedicated bike lanes, and scenic pedestrian walkways with viewing areas.\n\nConstruction presented unique challenges including deep-water foundation work, coordination with maritime traffic, environmental protection measures for local wildlife, and weather-dependent operations. Our team utilized specialized marine construction equipment, including floating cranes and cofferdams for underwater construction.\n\nThe project required extensive collaboration with environmental agencies, transportation departments, and local communities. We implemented innovative construction methods to minimize environmental impact, including fish-friendly construction timing, water quality monitoring, and habitat restoration programs. The completed bridge reduces commute times by 30% and serves as a vital economic link for the region.",
  },
  {
    title: "Shopping Center Development",
    category: "Commercial",
    images: [imgMall, imgOffice, imgLuxury],
    description:
      "A comprehensive retail development project encompassing 850,000 square feet of mixed-use space, including anchor department stores, specialty retail shops, restaurants, entertainment venues, and a 12-screen cinema complex. The center is designed to serve as a community hub with both indoor and outdoor shopping experiences.\n\nThe architectural design features a modern aesthetic with natural lighting, open-air courtyards, water features, and landscaped walkways. The center includes over 150 retail spaces, ranging from small boutiques to large anchor stores, with flexible layouts to accommodate various tenant needs.\n\nSustainability features include solar panel installations, rainwater collection systems, energy-efficient lighting and HVAC systems, and extensive green spaces. The development also incorporates smart parking systems with real-time availability updates and electric vehicle charging stations.\n\nConstruction coordination involved managing multiple phases to allow early tenant move-ins while continuing construction in other areas. This required careful sequencing of utilities, coordinated material deliveries, and maintaining safe pedestrian and vehicle access throughout the construction process. The project created over 2,000 permanent jobs and significantly boosted local economic development.",
  },
  {
    title: "Community Housing",
    category: "Residential",
    images: [imgHousing, imgLuxury, imgOffice],
    description:
      "An affordable housing development providing 320 family-friendly units across multiple low-rise buildings, designed to create a vibrant, sustainable community. This project addresses the critical need for quality affordable housing while incorporating modern amenities and green building practices.\n\nThe development features a mix of one, two, three, and four-bedroom units with private entrances, patios or balconies, and in-unit laundry facilities. Community amenities include a clubhouse, fitness center, playground, community garden, and on-site childcare facility.\n\nSustainable design elements include energy-efficient appliances, LED lighting, low-flow plumbing fixtures, and native landscaping that requires minimal irrigation. The buildings are constructed with durable, low-maintenance materials and feature excellent insulation for energy efficiency.\n\nThis project was developed in partnership with local housing authorities and community organizations to ensure it meets the specific needs of residents. Construction included extensive community engagement, local hiring initiatives, and partnerships with minority-owned businesses. The development has achieved LEED Gold certification and serves as a model for sustainable affordable housing development.",
  },
  {
    title: "Industrial Facility",
    category: "Industrial",
    images: [imgIndustrial, imgBridge, imgMall],
    description:
      "A cutting-edge 500,000 square foot manufacturing and distribution facility designed for advanced manufacturing operations. The facility features high-bay construction with 40-foot clear heights, heavy-duty flooring capable of supporting industrial equipment, and advanced utility infrastructure.\n\nThe building incorporates state-of-the-art technology including automated material handling systems, climate-controlled production areas, quality control laboratories, and administrative offices. The facility is designed for flexibility, allowing for future expansion and reconfiguration as operational needs evolve.\n\nSustainability features include a 2-megawatt solar array, LED lighting with smart controls, high-efficiency HVAC systems, and water recycling systems. The facility is designed to achieve net-zero energy consumption and has received LEED Platinum certification.\n\nConstruction challenges included coordinating the installation of specialized manufacturing equipment, managing complex utility requirements including high-voltage electrical systems, and maintaining strict quality control standards for precision manufacturing environments. The project was completed using advanced project management techniques including Building Information Modeling (BIM) and lean construction principles, resulting in zero safety incidents and on-time delivery.",
  },
]

// --- Modal carousel: left half = prev, right half = next ---
function ModalCarousel({ images }: { images: StaticImageData[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      try {
        emblaApi.off?.("select", onSelect)
      } catch {}
    }
  }, [emblaApi, onSelect])

  const scrollPrev = () => {
    if (!emblaApi) return
    if (emblaApi.canScrollPrev()) emblaApi.scrollPrev()
    else emblaApi.scrollTo(images.length - 1)
  }

  const scrollNext = () => {
    if (!emblaApi) return
    if (emblaApi.canScrollNext()) emblaApi.scrollNext()
    else emblaApi.scrollTo(0)
  }

  return (
    <div className="relative h-full">
      {/* Viewport */}
      <div className="embla h-full w-full overflow-hidden select-none" ref={emblaRef}>
        {/* Track */}
        <div className="embla__container flex h-full w-full items-stretch">
          {images.map((img, idx) => (
            <div key={idx} className="embla__slide relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={img}
                alt={`Project image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Transparent click zones (left = prev, right = next) */}
      <button
        onClick={scrollPrev}
        aria-label="Previous image"
        className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"
      />
      <button
        onClick={scrollNext}
        aria-label="Next image"
        className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"
      />
    </div>
  )
}

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const closeModal = () => setSelectedProject(null)

  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our commitment to excellence through completed projects across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index < 3}
                  />
                  <div
                    className={`absolute inset-0 bg-white/90 transition-opacity duration-300 flex items-center justify-center ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="text-center text-foreground">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm mb-2">{project.category}</p>
                      <p className="text-xs opacity-70">
                        {project.images.length > 1 ? "Click to view gallery" : "Click to view details"}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-[92vw] max-w-5xl h-[85vh] md:h-[70vh] bg-background rounded-2xl shadow-2xl overflow-hidden border border-border"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              aria-label="Close"
              onClick={closeModal}
              className="absolute top-3 right-3 inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid h-full grid-cols-1 md:grid-cols-2">
              <div className="relative order-1 md:order-2">
                <ModalCarousel images={selectedProject.images} />
              </div>

              <div className="order-2 md:order-1 overflow-y-auto p-5 sm:p-6 md:p-8">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>

                <div className="mt-6 flex gap-3">
                  <Button onClick={closeModal} className="rounded-lg">
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
