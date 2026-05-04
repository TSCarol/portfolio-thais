import { useEffect, useRef } from "react"

export default function Strategy() {
  const sectionRef = useRef(null)

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

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="strategy container">

      {/* ESQUERDA */}
      <div className="strategy-left">

        <span className="tag">— ESTRATÉGIA</span>

        <h2>
          <strong>Plataforma escalável,</strong><br />
          experiência unificada
        </h2>

        <p>
          A solução foi pensada como uma plataforma escalável para diferentes segmentos,
          substituindo o uso fragmentado de ferramentas como WhatsApp por uma experiência
          centralizada, personalizada e orientada ao relacionamento contínuo.
        </p>

      </div>

      {/* DIREITA */}
      <div className="strategy-right">

        <span className="ecosystem-title">ECOSSISTEMA</span>

        <div className="ecosystem-flow">

          <div className="eco-card active">
            <div className="icon"></div>
            <p>Empresa</p>
          </div>

          <span className="arrow">→</span>

          <div className="eco-card middle">
            <div className="icon"></div>
            <p>Plataforma</p>
          </div>

          <span className="arrow">→</span>

          <div className="eco-card">
            <div className="icon"></div>
            <p>Usuário</p>
          </div>

        </div>

        <div className="ecosystem-labels">
          <span>Gestão</span>
          <span>Centralização</span>
          <span>Experiência</span>
        </div>

      </div>

    </section>
  )
}