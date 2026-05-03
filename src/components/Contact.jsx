import { useEffect } from "react"

export default function Contact() {

  useEffect(() => {
    const cards = document.querySelectorAll(".contact-card")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            const index = Array.from(cards).indexOf(entry.target)

            setTimeout(() => {
              entry.target.classList.add("show")
            }, index * 200) // 👈 delay progressivo

          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="contact" className="contact container">

      {/* TAG */}
      <div className="contact-tag">
        <span></span>
        <p>CONTATO</p>
        <span></span>
      </div>

      {/* TÍTULO */}
      <h2 className="contact-title">
        Vamos <em>conversar.</em>
      </h2>

      {/* TEXTO */}
      <p className="contact-description">
        Estou aberta a novas oportunidades, projetos e conexões. Se quiser
        trocar uma ideia ou saber mais sobre meu trabalho, é só me chamar.
      </p>

      {/* CARDS */}
      <div className="contact-grid">

        <div className="contact-card">
          <span>EMAIL</span>
          <p>thaiscsantoos@gmail.com</p>
        </div>

        <div className="contact-card">
          <span>LINKEDIN</span>
          <p>www.linkedin.com/in/thais-carolina/</p>
        </div>

        <div className="contact-card">
          <span>WHATSAPP</span>
          <p>+55 43 99961-8085</p>
        </div>

      </div>

    </section>
  )
}