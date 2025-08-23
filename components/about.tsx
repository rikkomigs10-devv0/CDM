// components/about.tsx
import { Button } from "@/components/ui/button"

export function About() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Building Excellence Since 1995</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Sphere Constructions has been at the forefront of the construction industry for over 25 years. We
              specialize in delivering high-quality construction projects that exceed client expectations while
              maintaining the highest standards of safety and sustainability.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our experienced team of professionals brings together expertise in commercial, residential, and
              infrastructure construction, ensuring every project is completed on time and within budget.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Learn More About Us</Button>
          </div>

          <div className="relative">
            <img
              src={`${prefix}/construction-team-site.png`}
              alt="Construction team at work"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
