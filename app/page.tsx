import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { AboutCompany } from "@/components/about-company"
import { Proprietor } from "@/components/proprietor"
import { Partners } from "@/components/partners"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutCompany />
      <Proprietor />
      <Services />
      <Partners />
      <Portfolio />
      <Contact />
    </main>
  )
}
