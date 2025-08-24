import Image from "next/image"
import proprietorImg from "@/public/TestWholeImage.png"

export function Proprietor() {
  return (
    <section id="proprietor" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#344458] mb-2 font-poppins">
            THE PROPRIETOR
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Meet the visionary leader behind CDM Enterprise&apos;s success story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column with text */}
          <div className="order-2 lg:order-1">
            {/* Name */}
            <div className="mb-4 text-left tracking-wide"> 
              <h3 className="text-2xl md:text-3xl font-bold text-[#344458] font-poppins">
                CHERRYL DECHAVEZ MORATO
              </h3>
           
            </div>

            {/* Tagline */}
            <div className="mb-6 text-left">
              <p className="text-xl md:text-2xl text-[#c99d46] font-dancing-script italic font-medium">
                &quot;Dreamer, Believer and Achiever&quot;
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-700 font-inter text-left">
              <p className="leading-relaxed">
                CDM Enterprise was founded by Cherryl D. Morato, a determined entrepreneur from Mauban, Quezon, whose
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
                Now over two decades later, her leadership continues to guide CDM Enterprise — grounded in values,
                strengthened by experience, and committed to delivering quality service with purpose and gratitude.
              </p>
            </div>
          </div>

          {/* Right column with image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md">
              <Image
                src={proprietorImg}
                alt="Cherryl Dechavez Morato - CDM Enterprise Proprietor"
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
