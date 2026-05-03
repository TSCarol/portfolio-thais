import { useEffect, useRef } from "react"

export default function Differentials() {
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

  const data = [
    "Visão sistêmica entre negócio, produto e tecnologia",
    "Background em Arquitetura — pensamento estrutural",
    "Fluência em front-end facilita conversa com dev",
    "Forte atuação em discovery e validação com usuário",
    "Construção e evolução de design systems",
    "Comunicação clara entre stakeholders e squad"
  ]

  return (
    <section className="differentials container">

      {/* HEADER */}
      <div className="differentials-header">
        <span className="tag">DIFERENCIAIS</span>

        <h2>
          O que trago <em>além do óbvio.</em>
        </h2>
      </div>

      {/* LISTA */}
      <div className="differentials-grid">
        {data.map((item, index) => (
          <div
            key={index}
            className="differential-item"
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <span className="number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p>{item}</p>
          </div>
        ))}
      </div>

    </section>
  )
}