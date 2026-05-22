import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import WhatsApp from "@/components/WhatsApp"
import Footer from "@/components/Footer"
import Services from "@/sections/Services"
import Process from "@/sections/Process"
import Portfolio from "@/sections/Portfolio"
import Pricing from "@/sections/Pricing"

export default function App() {
  return (
    <div>
      <Navbar c2={"#45E3FF"} display="BIBIBOP" />
      <Hero c1={"#FF6B9D"} c2={"#45E3FF"} display="BIBIBOP" segment="Conteúdo Infantil" motto="Alegria de aprender" />
      <Stats c2={"#45E3FF"} />
      <Process c2={"#45E3FF"} />
      <Services c2={"#45E3FF"} />
      <Portfolio c2={"#45E3FF"} />
      <Pricing c2={"#45E3FF"} />
      <Footer />
      <WhatsApp />
    </div>
  )
}
