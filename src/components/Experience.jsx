import { useEffect, useRef } from "react"

export default function Experience() {
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
    {
      year: "2024 - Atual",
      title: "Product Designer - UX/UI",
      company: "Signotech",
      text: [
        "Atuo como Product Designer na SignoTech, sendo responsável pela estratégia e execução de produtos digitais (web e mobile), conduzindo o design de ponta a ponta — da concepção à entrega.",
        "Lidero a definição da experiência do usuário, estruturando fluxos, wireframes e protótipos alinhados aos objetivos de negócio, sempre com foco em usabilidade, engajamento e conversão.",
        "Trabalho em colaboração direta com clientes e stakeholders na validação de soluções e tomada de decisões estratégicas.",
        "Atuo em parceria com times de desenvolvimento, assegurando consistência, escalabilidade e viabilidade técnica das soluções."
      ]
    },
    {
      year: "2021 - 2024",
      title: "Tatuadora",
      company: "Profissional Autônoma",
      text: [
        "Atuei no desenvolvimento de projetos personalizados, compreendendo as necessidades e expectativas de cada cliente.",
        "Conduzi atendimentos consultivos, garantindo uma experiência individualizada e fortalecendo o relacionamento.",
        "Essa experiência desenvolveu habilidades de comunicação, escuta ativa e decisão centrada no usuário."
      ]
    },
    {
      year: "2020 - 2021",
      title: "Supervisora e Analista de cobrança",
      company: "Grupo Services",
      text: [
        "Atuei na liderança de equipe operacional, acompanhando desempenho e conduzindo melhorias contínuas.",
        "Trabalhei com análise de indicadores, identificando oportunidades de otimização.",
        "Fui responsável pela estruturação de processos e organização operacional.",
        "Atuei também no relacionamento com clientes, conduzindo negociações e garantindo resolução eficiente."
      ]
    }
  ]

  return (
    <section className="experience container">

      <span className="tag">EXPERIÊNCIA</span>

      <div className="experience-timeline">

        {data.map((item, index) => (
          <div
            className="experience-item"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >

            <div className="experience-left">
              <span>{item.year}</span>
            </div>

            <div className="experience-dot" />

            <div className="experience-content">
              <h3>{item.title}</h3>
              <span className="company">{item.company}</span>

              {/* 👇 múltiplos parágrafos */}
              {item.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}