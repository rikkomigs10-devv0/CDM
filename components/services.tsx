import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Commercial Construction",
    description:
      "Large-scale commercial projects including office buildings, retail spaces, and industrial facilities.",
    icon: "🏢",
  },
  {
    title: "Residential Development",
    description: "Custom homes, residential complexes, and community developments built to the highest standards.",
    icon: "🏠",
  },
  {
    title: "Infrastructure Projects",
    description: "Roads, bridges, utilities, and public infrastructure that connects communities.",
    icon: "🌉",
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely delivery and budget compliance.",
    icon: "📋",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your unique project requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
