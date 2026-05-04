import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/Logo Thais Thais.svg"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHome = location.pathname === "/"
  const isAbout = location.pathname === "/sobre"

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="Logo Thaís Santos" className="logo-img" />
        </Link>

        {/* MENU */}
        <nav>

          {/* HOME */}
          <Link to="/">Home</Link>

          {/* 👇 SE ESTIVER NA HOME */}
          {isHome && (
            <>
              <a href="#projetos">Projetos</a>
              <Link to="/sobre">Sobre mim</Link>
              <a href="#contact">Contato</a>
            </>
          )}

          {/* 👇 SE ESTIVER NA ABOUT */}
          {isAbout && (
            <>
              <a href="#trajetoria">Trajetória</a>
              <a href="#processo">Processo</a>
              <a href="#experiencia">Experiência</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#formacao">Formação</a>
              <a href="#skills">Skills</a>
            </>
          )}

        </nav>

        {/* BOTÃO */}
        <a href="/Curriculo Product Design UXUI.pdf" download className="btn-outline">
          Baixar currículo ↓
        </a>

      </div>
    </header>
  )
}