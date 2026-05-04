import { useEffect, useRef } from "react"

export default function BeforeAfter() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".ba-card")

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

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="before-after container" ref={sectionRef}>

      {/* HEADER */}
      <div className="ba-header">
        <span className="tag">— PROBLEMA</span>
        <h2>
          <strong>Antes</strong> e depois
        </h2>
      </div>

      {/* GRID */}
      <div className="ba-grid">

        {/* ANTES */}
        <div className="ba-card before">
          <span className="ba-label">ANTES</span>

          <ul>
            <li>Comunicação via WhatsApp e redes sociais</li>
            <li>Baixa visibilidade de informações</li>
            <li>Controle manual em planilhas</li>
            <li>Falta de previsibilidade</li>
            <li>Processos descentralizados</li>
          </ul>
        </div>

        {/* DEPOIS */}
        <div className="ba-card after">
          <span className="ba-label">DEPOIS</span>

          <ul>
            <li>Plataforma centralizada</li>
            <li>Notificações diretas</li>
            <li>Gestão estruturada</li>
            <li>Recorrência previsível</li>
            <li>Processos automatizados</li>
            <li>Check-in digital com QR Code</li>
          </ul>
        </div>

      </div>
    </section>
  )
}