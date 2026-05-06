import { useEffect, useRef } from "react"

export default function ResultsSection() {

  const itemsRef = useRef([])

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

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()

  }, [])

  const results = [
    "Maior organização operacional",
    "Redução de processos manuais",
    "Centralização de pagamentos e check-ins",
    "Melhoria na experiência do usuário",
    "Mais controle e visibilidade de dados"
  ]

  return (

    <section className="results container">

      <div className="results-grid">

        {/* LEFT */}
        <div className="results-left">

          <span className="results-tag">
            RESULTADOS
          </span>

          <h2>
            <strong>Impacto</strong> gerado
          </h2>

          <p>
            A plataforma entregou ganhos tangíveis em organização,
            eficiência operacional e qualidade de experiência para
            os dois perfis de usuário.
          </p>

        </div>

        {/* RIGHT */}
        <div className="results-right">

          {results.map((item, index) => (

            <div
              className="result-item"
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
            >

              <span className="result-icon">
                ↗
              </span>

              <p>{item}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}