import Header from "../components/Header"
import UsersSection from "../components/UsersSection"
import BeforeAfter from "../components/BeforeAfter"
import mockup from "../assets/mockup-case1.png"
import Objectives from "../components/Objectives"
import Strategy from "../components/Strategy"

export default function Case1() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="case-hero container">
        <div className="case-hero-text">
          <div className="case-tags">
            <span>Product Design</span>
            <span>SaaS</span>
            <span>Recorrência</span>
            <span>Multi-segmento</span>
          </div>

          <h1>
            Plataforma digital para<br />
            <strong>recorrência e fidelização</strong><br />
            de clientes
          </h1>

          <p>
            Solução criada para centralizar comunicação, pagamentos e gestão
            de clientes, transformando interações pontuais em relacionamento contínuo.
          </p>
        </div>

        <div className="case-hero-image">
          <img src={mockup} alt="" />
        </div>
      </section>

      {/* USERS */}
      <UsersSection />

      {/* BEFORE / AFTER */}
      <BeforeAfter />
      <Objectives />
      <Strategy />

    </>
  )
}