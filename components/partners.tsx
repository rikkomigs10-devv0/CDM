export function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#344458] mb-4 font-poppins">Partners Who Trust Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            We are proud to work with leading organizations across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {/* Placeholder for partner logos */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
            >
              <div className="text-gray-400 text-sm font-inter text-center">Partner Logo {index + 1}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 font-inter">
            Join our growing network of satisfied partners and clients who trust CDM Enterprise for their business
            needs.
          </p>
        </div>
      </div>
    </section>
  )
}
