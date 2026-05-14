import { useEffect, useRef } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import mockup from "../assets/Mockup2.png"

import hero1 from "../assets/community1.png"
import hero2 from "../assets/community2.png"
import hero3 from "../assets/community3.png"

import feedImg from "../assets/feed.png"
import profileImg from "../assets/profile.png"
import eventImg from "../assets/events.png"

export default function Case2() {

  const sectionsRef = useRef([])

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.15 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()

  }, [])

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="case2-hero container"
        ref={(el) => (sectionsRef.current[0] = el)}
      >

        <div className="case2-left">

          <div className="case2-tags">
            <span>Comunidade</span>
            <span>Networking</span>
            <span>Social Platform</span>
            <span>Experiência</span>
          </div>

          <h1>
            Conexões que <br />
            <strong>continuam além</strong><br />
            dos eventos
          </h1>

          <p>
            Plataforma criada para fortalecer relacionamentos entre empreendedoras,
            centralizando networking, conteúdos, eventos e interações em um único ambiente digital.
          </p>

        </div>

        <div className="case2-right">
          <img src={mockup} alt="Projeto comunidade" />
        </div>

      </section>

      {/* PROBLEMA */}
      <section
        className="case2-section container fade-up"
        ref={(el) => (sectionsRef.current[1] = el)}
      >

        <span className="tag">— PROBLEMA</span>

        <div className="case2-grid">

          <div>
            <h2>
              Conexões se perdiam <br />
              após os eventos
            </h2>
          </div>

          <div>
            <p>
              Muitas conexões criadas durante os encontros presenciais
              acabavam se perdendo após os eventos.
            </p>

            <p>
              A comunicação acontecia de forma descentralizada em grupos,
              dificultando networking contínuo, divulgação de conteúdos
              e fortalecimento da comunidade.
            </p>
          </div>

        </div>

      </section>

      {/* OBJETIVO */}
      <section
        className="case2-section container fade-up"
        ref={(el) => (sectionsRef.current[2] = el)}
      >

        <span className="tag">— OBJETIVO</span>

        <div className="case2-grid">

          <div>
            <h2>
              Uma comunidade ativa <br />
              além dos encontros
            </h2>
          </div>

          <div>
            <p>
              Criar uma plataforma capaz de manter a comunidade ativa
              continuamente, incentivando conexões, engajamento,
              networking e relacionamento entre empreendedoras.
            </p>
          </div>

        </div>

      </section>

      {/* SOLUÇÃO */}
      <section
        className="case2-solution container"
        ref={(el) => (sectionsRef.current[3] = el)}
      >

        <div className="solution-header">

          <span className="tag">— SOLUÇÃO</span>

          <h2>
            Plataforma social focada em <strong>comunidade</strong>
          </h2>

          <p>
            Foi desenvolvida uma plataforma digital com foco em networking,
            conteúdos, eventos, relacionamento e experiências compartilhadas.
          </p>

        </div>

        <div className="solution-grid">

          <div className="solution-card">
            <img src={feedImg} alt="" />
            <h3>Feed e interações</h3>
            <p>
              Espaço para publicações, curtidas, comentários e compartilhamentos.
            </p>
          </div>

          <div className="solution-card">
            <img src={profileImg} alt="" />
            <h3>Perfis profissionais</h3>
            <p>
              Perfis personalizados com informações, galeria, conexões e conteúdos.
            </p>
          </div>

          <div className="solution-card">
            <img src={eventImg} alt="" />
            <h3>Eventos e cursos</h3>
            <p>
              Centralização de eventos, experiências e conteúdos exclusivos.
            </p>
          </div>

        </div>

      </section>

      {/* PAPEL */}
      <section
        className="case2-section container fade-up"
        ref={(el) => (sectionsRef.current[4] = el)}
      >

        <span className="tag">— MEU PAPEL</span>

        <div className="role-grid">

          <div className="role-text">

            <h2>
              Construção da experiência <br />
              do produto
            </h2>

            <p>
              Atuei na construção da experiência da plataforma,
              desenvolvendo fluxos, arquitetura das telas,
              interface visual e experiência do usuário
              focada em comunidade e engajamento.
            </p>

          </div>

          <div className="role-tags">

            <span>UX</span>
            <span>UI Design</span>
            <span>Fluxos</span>
            <span>Wireframes</span>
            <span>Protótipos</span>
            <span>Design System</span>
            <span>Benchmark</span>
            <span>Estratégia</span>

          </div>

        </div>

      </section>

      {/* DESAFIOS */}
      <section
        className="case2-dark"
        ref={(el) => (sectionsRef.current[5] = el)}
      >

        <div className="container dark-content">

          <span className="tag dark-tag">— DESAFIOS</span>

          <h2>
            Equilibrar múltiplas funcionalidades <br />
            sem comprometer a experiência
          </h2>

          <p>
            Um dos principais desafios foi organizar funcionalidades sociais,
            networking, conteúdos, mensagens e eventos sem tornar a navegação complexa.
          </p>

        </div>

      </section>

      {/* DECISÕES */}
      <section
        className="case2-section container fade-up"
        ref={(el) => (sectionsRef.current[6] = el)}
      >

        <span className="tag">— DECISÕES DE DESIGN</span>

        <div className="decisions-grid">

          <div className="decision-item">
            <h3>Feed social</h3>
            <p>Aumentar engajamento e participação da comunidade.</p>
          </div>

          <div className="decision-item">
            <h3>Perfis profissionais</h3>
            <p>Fortalecer conexões e networking entre usuárias.</p>
          </div>

          <div className="decision-item">
            <h3>Eventos centralizados</h3>
            <p>Facilitar acesso e aumentar participação.</p>
          </div>

          <div className="decision-item">
            <h3>Mensagens</h3>
            <p>Estimular relacionamento contínuo entre empreendedoras.</p>
          </div>

          <div className="decision-item">
            <h3>Notificações</h3>
            <p>Melhorar retenção e recorrência de acesso.</p>
          </div>

        </div>

      </section>

      {/* IMPACTO */}
      <section
        className="case2-impact container"
        ref={(el) => (sectionsRef.current[7] = el)}
      >

        <div className="impact-left">

          <span className="tag">— IMPACTO ESPERADO</span>

          <h2>
            Fortalecer relacionamento <br />
            e retenção da comunidade
          </h2>

        </div>

        <div className="impact-right">

          <div className="impact-card">
            Comunidade ativa continuamente
          </div>

          <div className="impact-card">
            Relacionamento além dos eventos
          </div>

          <div className="impact-card">
            Networking centralizado
          </div>

          <div className="impact-card">
            Mais engajamento entre usuárias
          </div>

        </div>

      </section>

      {/* GALERIA */}
      <section
        className="case2-gallery container"
        ref={(el) => (sectionsRef.current[8] = el)}
      >

        <img src={hero1} alt="" />
        <img src={hero2} alt="" />
        <img src={hero3} alt="" />

      </section>

      <Footer />
    </>
  )
}