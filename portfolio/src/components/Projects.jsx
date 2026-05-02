import { useEffect, useRef } from "react"
import Mockup1 from "../assets/Mockup1.png"
import Mockup2 from "../assets/Mockup2.png"
import Mockup3 from "../assets/Mockup3.png"
import Mockup4 from "../assets/Mockup4.png"

export default function Projects() {
  const cardsRef = useRef([])

  useEffect(() => {
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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projetos" className="projects container">

      <div className="projects-header">
        <div>
          <span className="tag">— PROJETOS</span>
          <h2>
            <strong>Projetos</strong> selecionados
          </h2>
        </div>

        <p>
          Alguns dos projetos em que atuei, com foco em estratégia,
          experiência do usuário e impacto no negócio.
        </p>
      </div>

      <div className="projects-grid">

        {[Mockup1, Mockup2, Mockup3, Mockup4].map((img, index) => (
          <div
            className="project-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={img} alt="" />

            <div className="project-overlay">
              <span>PROJETO</span>
              <h3>Título do projeto</h3>
              <p>Descrição curta</p>

              <div className="extra">
                <p>Descrição mais detalhada do projeto.</p>
                <span className="project-link">Ver projeto →</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}