import { Card, CardContent } from "@/components/ui/card"

export function AboutCompany() {
  return (
    <section id="about-company" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#344458] mb-4 font-poppins">
            About Our Company
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Learn about CDM Enterprise&apos;s journey, vision, and commitment to excellence.
          </p>
        </div>

        {/* Single grid ensures row alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Row 1 - Left: Company Overview */}
          <Card className="border-[#c99d46]/20 h-full">
            <CardContent className="p-8 h-full">
              <h3 className="text-2xl font-bold text-[#344458] mb-4 font-poppins">Company Overview</h3>
              <p className="text-gray-700 leading-relaxed font-inter">
                CDM Enterprise is an accredited supplier and service provider based in Lucena City, established in 2003
                by Cherryl D. Morato. We cater to government, institutional, and commercial clients, delivering reliable
                solutions across equipment supply, general services, vehicle support, infrastructure assistance, and
                logistics.
              </p>
            </CardContent>
          </Card>

          {/* Row 1 - Right: Vision */}
          <Card className="border-[#c99d46]/20 h-full">
            <CardContent className="p-8 h-full">
              <h3 className="text-2xl font-bold text-[#344458] mb-4 font-poppins">VISION</h3>
              <p className="text-gray-700 leading-relaxed font-inter">
                To be a trusted partner recognized in Luzon for delivering high-quality products, services, and
                tailored-fit solutions that support growth and positive long-term impact.
              </p>
            </CardContent>
          </Card>

          {/* Row 2 - Left: Core Values */}
          <Card className="border-[#c99d46]/20 h-full">
            <CardContent className="p-8 h-full">
              <h3 className="text-2xl font-bold text-[#344458] mb-4 font-poppins">CORE VALUES</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-[#c99d46] font-bold text-xl">C</span>
                  <span className="text-gray-700 font-semibold font-inter">COMMITTED</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#c99d46] font-bold text-xl">D</span>
                  <span className="text-gray-700 font-semibold font-inter">DILIGENT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#c99d46] font-bold text-xl">M</span>
                  <span className="text-gray-700 font-semibold font-inter">MEANINGFUL</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4 italic font-inter">
                Grounded in Purpose. Driven by Heart. Delivered with Excellence.
              </p>
            </CardContent>
          </Card>

          {/* Row 2 - Right: Mission */}
          <Card className="border-[#c99d46]/20 h-full">
            <CardContent className="p-8 h-full">
              <h3 className="text-2xl font-bold text-[#344458] mb-4 font-poppins">MISSION</h3>
              <p className="text-gray-700 leading-relaxed font-inter">
                At CDM Enterprise, we provide quality products, services, and tailored solutions designed to meet each
                client&apos;s unique needs. To enhance operational efficiency and create lasting value with positive and
                meaningful impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
