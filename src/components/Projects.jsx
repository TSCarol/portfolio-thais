import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

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

  // 👇 AGORA COM TAG
  const projects = [
    {
      tag: "Aplicativo",
      img: Mockup1,
      title: "Plataforma de fidelização",
      description: "SaaS focado em recorrência e relacionamento com clientes.",
      details:
        "Solução completa com gestão de clientes, pagamentos e comunicação.",
      link: "/case1",
    },
    {
      tag: "Website",
      img: Mockup2,
      title: "Projeto 2",
      description: "Descrição curta do projeto.",
      details: "Descrição mais detalhada.",
      link: "/",
    },
    {
      tag: "Dashboard",
      img: Mockup3,
      title: "Projeto 3",
      description: "Descrição curta do projeto.",
      details: "Descrição mais detalhada.",
      link: "/",
    },
    {
      tag: "Landing Page",
      img: Mockup4,
      title: "Projeto 4",
      description: "Descrição curta do projeto.",
      details: "Descrição mais detalhada.",
      link: "/",
    },
  ]

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
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={project.img} alt={project.title} />

            <div className="project-overlay">
              
              {/* 👇 TAG DINÂMICA */}
              <span>{project.tag}</span>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="extra">
                <p>{project.details}</p>

                <Link to={project.link} className="project-link">
                  Ver projeto →
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}