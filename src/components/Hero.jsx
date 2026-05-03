import perfil from "../assets/thaisperfil2.png"

export default function Hero() {
  return (
    <section id="home" className="hero container">

      {/* TEXTO */}
      <div className="hero-text animate-left">
        <span className="tag">— PRODUCT DESIGNER</span>

        <h1>
          Eu projeto <strong>experiências</strong><br />
          digitais <strong>que conectam</strong><br />
          estratégia, usuário e resultado
        </h1>

        <p>
          Product Designer com atuação end-to-end, transformando
          necessidades de negócio em soluções digitais centradas no usuário.
        </p>

        <div className="hero-buttons">
          
          {/* 👇 agora rola até projetos */}
          <a href="#projetos" className="btn-primary">
            Ver projetos →
          </a>

          <a href="/Curriculo Product Design UXUI.pdf" download className="btn-outline">
            Baixar currículo ↓
          </a>

        </div>
      </div>

      {/* IMAGEM */}
      <div className="hero-image animate-fade">
        <img src={perfil} alt="Thaís Santos" />
      </div>

    </section>
  )
}