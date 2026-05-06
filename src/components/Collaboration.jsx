import { useEffect, useRef } from "react"

export default function CollaborationSection() {

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

  const items = [
    {
      icon: "👥",
      title: "Stakeholders",
      text: "Alinhamento de expectativas e regras de negócio"
    },

    {
      icon: "🛠️",
      title: "Dev Team",
      text: "Viabilidade técnica e constraints de implementação"
    },

    {
      icon: "✓",
      title: "Validação",
      text: "Decisões baseadas em dados e feedback iterativo"
    }
  ]

  return (

    <section className="collaboration container">

      {/* HEADER */}
      <div className="collaboration-header">

        <span className="tag">
        — COLABORAÇÃO
        </span>

        <h2>
          <strong>Design como</strong> processo coletivo
        </h2>

        <p>
          Trabalho em conjunto com stakeholders e equipe de desenvolvimento,
          alinhando decisões de design com regras de negócio e viabilidade técnica.
        </p>

      </div>

      {/* CARDS */}
      <div className="collaboration-grid">

        {items.map((item, index) => (

          <div
            className="collaboration-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >

            <div className="collaboration-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  )
}