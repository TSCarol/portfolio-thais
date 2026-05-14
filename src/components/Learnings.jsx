import { useEffect, useRef } from "react"

export default function LearningsSection() {

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

  return (

    <section className="learnings">

      <div className="container">

        <div className="learnings-content" ref={sectionRef}>

          {/* HEADER */}
          <div className="learnings-header">

            <span className="learnings-tag">
              APRENDIZADOS
            </span>

            <h2>
              <strong>O que este projeto</strong> me ensinou
            </h2>

            <p>
              O projeto reforçou a importância da priorização em produtos
              complexos e do equilíbrio entre flexibilidade e clareza na
              experiência do usuário. Nem toda feature precisa de destaque,
              saber o que esconder é tão importante quanto saber o que mostrar.
            </p>

          </div>

          {/* DIVIDER */}
          <div className="learnings-divider"></div>

          {/* INFOS */}
          <div className="learnings-info">

            <div className="learning-item">
              <span>DURAÇÃO</span>
              <h3>2 meses</h3>
            </div>

            <div className="learning-item">
              <span>SEGMENTOS</span>
              <h3>Multi</h3>
            </div>

            <div className="learning-item">
              <span>PLATAFORMAS</span>
              <h3>iOS + Android</h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}