"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
       style={{
  backgroundImage: "url('/HeroHeader.png')",
}}

      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            
            <br />
            <span className="text-primary">CDM</span> ENTERPRISE
            <br />
          </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto font-medium">
            Committed. Diligent. Meaningful.
             </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Delivering tailored-fit solutions with integrity and impact.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg"
          >
            GET STARTED
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
