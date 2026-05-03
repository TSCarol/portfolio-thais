import { useEffect, useRef } from "react"

export default function Process() {
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
    <section className="process container">

      {/* HEADER */}
      <div className="process-header">
        <div>
          <span className="tag">PROCESSO</span>

          <h2>Como eu trabalho</h2>
        </div>

        <p>
          Um processo flexível, mas com etapas claras, adaptado ao contexto de cada produto e time.
        </p>
      </div>

      {/* CARDS */}
      <div className="process-grid">

        {[
          {
            number: "01",
            title: "Descoberta",
            text: "Entrevistas, pesquisa e imersão para entender pessoas, contexto e oportunidades."
          },
          {
            number: "02",
            title: "Estratégia",
            text: "Definição de problema, hipóteses e métricas que conectam negócio e usuário."
          },
          {
            number: "03",
            title: "Execução",
            text: "Fluxos, wireframes e UI iterando com squad para encontrar a melhor solução."
          },
          {
            number: "04",
            title: "Entrega",
            text: "Handoff próximo do dev, QA visual e acompanhamento do impacto pós-release."
          }
        ].map((item, index) => (
          <div
            className="process-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <span className="process-number">{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}

      </div>

    </section>
  )
}