import { useEffect, useRef } from "react"

export default function Objectives() {
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

  const objectives = [
    {
      icon: "▦",
      title: "Organização",
      text: "Estruturar operações dispersas em um único ambiente de gestão."
    },
    {
      icon: "♡",
      title: "Fidelização",
      text: "Criar vínculos duradouros entre marcas e seus clientes."
    },
    {
      icon: "⟳",
      title: "Recorrência",
      text: "Transformar compras pontuais em relacionamento contínuo."
    },
    {
      icon: "≡",
      title: "Autonomia",
      text: "Dar às empresas controle total sobre suas operações."
    }
  ]

  return (
    <section className="objectives container">

      {/* HEADER */}
      <div className="objectives-header">
        <span className="tag">— OBJETIVOS</span>

        <h2>
          <strong>O que queríamos</strong> resolver
        </h2>
      </div>

      {/* CARDS */}
      <div className="objectives-grid">
        {objectives.map((item, index) => (
          <div
            className="objective-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="objective-icon">{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
