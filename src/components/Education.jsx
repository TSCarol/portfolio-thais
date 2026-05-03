import { useEffect, useRef } from "react"

export default function Education() {
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

  const data = [
    {
      year: "2025 - Cursando",
      title: "Engenharia de Design Digital",
      school: "Bacharel - Universidade Cidade Verde"
    },
    {
      year: "2024",
      title: "Engenharia Front-end",
      school: "Tecnólogo - EBAC"
    },
    {
      year: "2017",
      title: "Arquitetura e Urbanismo",
      school: "Bacharel - Universidade Paulista"
    }
  ]

  return (
    <section className="education container">

      {/* HEADER */}
      <div className="education-header">
        <span className="tag">FORMAÇÃO</span>
        <h2>Formação acadêmica</h2>
      </div>

      {/* CARDS */}
      <div className="education-grid">
        {data.map((item, index) => (
          <div
            className="education-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <span className="education-year">{item.year}</span>

            <h3>{item.title}</h3>

            <p>{item.school}</p>
          </div>
        ))}
      </div>

    </section>
  )
}