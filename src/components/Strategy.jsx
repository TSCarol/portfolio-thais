import { useEffect, useRef } from "react"

import empresaIcon from "../assets/Empresa.svg"
import phoneIcon from "../assets/Phone.svg"
import userIcon from "../assets/User.svg"

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

          {/* EMPRESA */}
          <div className="eco-card active">
            <div className="icon-box">
              <img src={empresaIcon} alt="Empresa" />
            </div>

            <p>Empresa</p>
          </div>

          <span className="arrow">→</span>

          {/* PLATAFORMA */}
          <div className="eco-card middle">
            <div className="icon-box">
              <img src={phoneIcon} alt="Plataforma" />
            </div>

            <p>Plataforma</p>
          </div>

          <span className="arrow">→</span>

          {/* USUÁRIO */}
          <div className="eco-card">
            <div className="icon-box">
              <img src={userIcon} alt="Usuário" />
            </div>

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