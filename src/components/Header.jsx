import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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

        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo Thaís Santos"
            className="logo-img"
          />
        </Link>

        {/* MENU */}
        <nav>
          <Link to="/">Home</Link>

          <a href="/#projetos">
            Projetos
          </a>

          <Link to="/sobre">
            Sobre mim
          </Link>

          <a href="/#contact">
            Contato
          </a>
        </nav>

        {/* BOTÃO */}
        <a
          href="/Curriculo Product Design UXUI.pdf"
          download
          className="btn-outline"
        >
          Baixar currículo ↓
        </a>

      </div>
    </header>
  )
}