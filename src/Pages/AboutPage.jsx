import Header from "../components/Header"
import AboutContent from "./AboutContent"
import Process from "../components/Process"
import perfil from "../assets/thaisperfil3.png"
import Experience from "../components/Experience"
import Differentials from "../components/Differentials"
import Education from "../components/Education"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="about-hero container">

        {/* TEXTO */}
        <div className="about-hero-text">
          <span className="tag">SOBRE MIM</span>

          <h1>
            Product Designer focada<br />
            em <strong>crescimento</strong> e<br />
            <strong>performance</strong>
          </h1>

          <p>
            Product Designer com foco em UX/UI, transformando problemas
            complexos em interfaces simples, intuitivas e impactantes.
          </p>
        </div>

        {/* IMAGEM */}
        <div className="about-hero-image">
          <img src={perfil} alt="Thaís Santos" />
        </div>

      </section>

      {/* TRAJETÓRIA */}
      <section id="trajetoria">
        <AboutContent />
      </section>

      {/* PROCESSO */}
      <section id="processo">
        <Process />
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia">
        <Experience />
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais">
        <Differentials />
      </section>

      {/* FORMAÇÃO */}
      <section id="formacao">
        <Education />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      <Footer />
    </>
  )
}