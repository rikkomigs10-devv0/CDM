// components/hero.tsx
"use client"

export function Hero() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${prefix}/HeroHeader.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                      font-extrabold text-white mb-4 sm:mb-6 leading-tight 
                      font-sans tracking-[2px] uppercase max-w-5xl mx-auto text-center"
          >
            Delivering tailored-fit solutions with integrity and impact.
          </h1>
        </div>
      </div>
    </section>
  )
}
