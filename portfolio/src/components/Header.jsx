import { useEffect, useState } from "react"
import logo from "../assets/Logo Thais Thais.svg"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        
        {/* LOGO (leva pro topo) */}
        <a href="#home">
          <img src={logo} alt="Logo Thaís Santos" className="logo-img" />
        </a>

        {/* MENU */}
        <nav>
          <a href="#home">Home</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#contact">Contato</a>
        </nav>

        {/* BOTÃO DOWNLOAD */}
        <a href="/Curriculo Product Design UXUI.pdf" download className="btn-outline">
          Baixar currículo ↓
        </a>

      </div>
    </header>
  )
}