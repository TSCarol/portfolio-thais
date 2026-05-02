import { useEffect } from "react"

export default function About() {

  useEffect(() => {
    const element = document.querySelector(".about-left")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.2 }
    )

    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="sobre" className="about container">

      <div className="about-grid">

        {/* ESQUERDA */}
        <div className="about-left">
          <span className="tag">— ABOUT</span>

          <h2>
            <strong>Sobre</strong> mim
          </h2>

          <div className="about-divider" />

          <div className="about-info">
            <div>
              <span>FOCO</span>
              <p>Produto end-to-end</p>
            </div>

            <div>
              <span>FORMAÇÃO</span>
              <p>Design + UX/UI</p>
            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div className="about-right">
          <p>
            Sou Product Designer com atuação end-to-end na criação de
            produtos digitais, conectando estratégia, experiência do usuário e
            viabilidade técnica.
          </p>

          <p>
            Tenho experiência em transformar necessidades de negócio em
            soluções centradas no usuário, sempre buscando equilíbrio entre
            clareza, usabilidade e resultado.
          </p>

          <p>
            Meu background em Arquitetura e conhecimento em front-end
            contribuem para uma visão estruturada e colaborativa na construção
            de produtos digitais.
          </p>

          <a href="#" className="about-link">
            Ver mais sobre mim →
          </a>
        </div>

      </div>
    </section>
  )
}