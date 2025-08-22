"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 100
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-[#344458] shadow-lg border-b border-white/10",
      )}
    >
      <div className="flex items-center h-16 md:h-20">
        <div className="bg-[#c99d46] h-full flex items-center px-4 md:px-8">
          <h1 className="text-lg md:text-2xl font-bold text-white tracking-tight font-poppins">CDM ENTERPRISE</h1>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-end space-x-6 xl:space-x-8 px-6 xl:px-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white/90 font-normal hover:text-[#c99d46] transition-colors font-inter text-sm xl:text-base"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about-company")}
            className="text-white/90 font-normal hover:text-[#c99d46] transition-colors font-inter text-sm xl:text-base"
          >
            ABOUT OUR COMPANY
          </button>
          <button
            onClick={() => scrollToSection("proprietor")}
            className="text-white/90 font-normal hover:text-[#c99d46] transition-colors font-inter text-sm xl:text-base"
          >
            PROPRIETOR
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white/90 font-normal hover:text-[#c99d46] transition-colors font-inter text-sm xl:text-base"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="text-white/90 font-normal hover:text-[#c99d46] transition-colors font-inter text-sm xl:text-base"
          >
            PARTNERS
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-white/90 font-normal hover:text-[#c99d46] transition-colors font-inter text-sm xl:text-base"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white font-normal hover:text-[#c99d46] transition-colors font-inter text-sm xl:text-base"
          >
            CONTACT US
          </button>
        </div>

        <div className="lg:hidden flex-1 flex justify-end px-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:text-[#c99d46] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#344458] border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-3 px-2 text-white/90 hover:text-[#c99d46] hover:bg-white/5 transition-colors font-inter"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about-company")}
              className="block w-full text-left py-3 px-2 text-white/90 hover:text-[#c99d46] hover:bg-white/5 transition-colors font-inter"
            >
              ABOUT OUR COMPANY
            </button>
            <button
              onClick={() => scrollToSection("proprietor")}
              className="block w-full text-left py-3 px-2 text-white/90 hover:text-[#c99d46] hover:bg-white/5 transition-colors font-inter"
            >
              PROPRIETOR
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-3 px-2 text-white/90 hover:text-[#c99d46] hover:bg-white/5 transition-colors font-inter"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="block w-full text-left py-3 px-2 text-white/90 hover:text-[#c99d46] hover:bg-white/5 transition-colors font-inter"
            >
              PARTNERS
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-3 px-2 text-white/90 hover:text-[#c99d46] hover:bg-white/5 transition-colors font-inter"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-3 px-2 text-white hover:text-[#c99d46] hover:bg-white/5 transition-colors font-inter"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
