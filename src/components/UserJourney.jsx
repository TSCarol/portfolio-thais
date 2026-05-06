import { useEffect, useRef } from "react"

export default function UserJourney() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      tag: "DESCOBERTA",
      title: "Explorar evento"
    },
    {
      tag: "ACESSO",
      title: "Realizar check-in"
    },
    {
      tag: "COMPRA",
      title: "Comprar produtos"
    },
    {
      tag: "ENTREGA",
      title: "Retirar com QR Code"
    }
  ]

  return (
    <section className="journey container">

      {/* HEADER */}
      <div className="journey-header">
        <span className="tag">— FLUXO DO USUÁRIO</span>

        <h2>
          <strong>Jornada</strong> principal
        </h2>
      </div>

      {/* FLOW */}
      <div className="journey-wrapper">

        <div className="journey-box" ref={sectionRef}>

          {steps.map((step, index) => (
            <div className="journey-step" key={index}>

              <span className="journey-step-tag">
                {step.tag}
              </span>

              <h3>{step.title}</h3>

              <div className="journey-progress">
                <span className="active"></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* LINHA */}
              {index !== steps.length - 1 && (
                <div className="journey-line"></div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}