import { useEffect, useRef } from "react"

export default function Skills() {
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

  const skills = {
    hard: [
      "UX Research",
      "UI Design",
      "Prototipação",
      "Wireframing",
      "Design Systems",
      "Acessibilidade"
    ],
    soft: [
      "Liderança",
      "Comunicação",
      "Colaboração",
      "Pensamento Crítico",
      "Resolução de problemas",
      "Gestão de tempo"
    ],
    tools: [
      "Figma",
      "Adobe XD",
      "Wordpress",
      "Framer",
      "Jira",
      "Webflow",
      "Miro",
      "VS Code"
    ]
  }

  return (
    <section className="skills container">

      {/* HEADER */}
      <div className="skills-header">
        <span className="tag">SKILLS</span>
      </div>

      <div className="skills-grid">

        {/* HARD */}
        <div className="skills-column">
          <h3>Hard skills</h3>
          <div className="skills-list">
            {skills.hard.map((item, index) => (
              <span
                key={index}
                className="skill-item"
                ref={(el) => (itemsRef.current[index] = el)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* SOFT */}
        <div className="skills-column">
          <h3>Soft skills</h3>
          <div className="skills-list">
            {skills.soft.map((item, index) => (
              <span
                key={index}
                className="skill-item"
                ref={(el) => (itemsRef.current[index + 10] = el)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="skills-column">
          <h3>Ferramentas</h3>
          <div className="skills-list">
            {skills.tools.map((item, index) => (
              <span
                key={index}
                className="skill-item"
                ref={(el) => (itemsRef.current[index + 20] = el)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}