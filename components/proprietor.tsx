// components/proprietor.tsx
export function Proprietor() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

  return (
    <section id="proprietor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#344458] mb-4 font-poppins">THE PROPRIETOR</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Meet the visionary leader behind CDM Enterprise&apos;s success story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#344458] font-poppins">CHERRYL</h3>
              <h3 className="text-3xl font-bold text-[#344458] font-poppins">DECHAVEZ</h3>
              <h3 className="text-3xl font-bold text-[#344458] font-poppins">MORATO</h3>
            </div>

            <div className="text-center mb-8">
              <p className="text-2xl text-[#c99d46] font-dancing-script font-medium mb-4">
                &quot;Dreamer, Believer and Achiever&quot;
              </p>
            </div>

            <div className="space-y-6 text-gray-700 font-inter">
              <p className="leading-relaxed">
                CDM Enterprise was founded by Cherryl D. Morato a determined entrepreneur from Mauban, Quezon, whose
                business journey began at the age of 11.
              </p>
              <p className="leading-relaxed">
                From selling street food to exploring careers in direct selling, real estate, financial advising, and
                educational consulting, she gained hands-on experience across these industries early in life.
              </p>
              <p className="leading-relaxed">
                At 26, driven by faith, discipline, and vision, she established her own company. Through consistent
                effort, prayer, and resilience, she transformed a small dream into a thriving enterprise.
              </p>
              <p className="leading-relaxed">
                Now over two decades later, her leadership continues to guide CDM Enterprise—grounded in values,
                strengthened by experience, and committed to delivering quality service with purpose and gratitude.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={`${prefix}/TestWholeImage.png`}
              alt="Cherryl Dechavez Morato - CDM Enterprise Proprietor"
              className="w-full max-w-xl h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
