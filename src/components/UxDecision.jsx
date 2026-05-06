import { useEffect, useRef } from "react"

export default function UxDecision() {

  const quoteRef = useRef(null)

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

    if (quoteRef.current) {
      observer.observe(quoteRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="ux-decision container">

      {/* HEADER */}
      <div className="ux-header">

        <span className="tag">
        — DECISÃO DE UX
        </span>

        <h2>
          <strong>Prioridade</strong> como princípio
        </h2>

      </div>

      {/* QUOTE */}
      <div className="ux-quote" ref={quoteRef}>

        <p>
          “A principal decisão de UX foi priorizar e organizar funcionalidade
          em um produto completo, garantindo que as ações mais importantes
          estivessem em destaque sem comprometer a flexibilidade da plataforma”
        </p>

      </div>

    </section>
  )
}