import { useEffect, useRef } from "react"

import img1 from "../assets/feature1.png"
import img2 from "../assets/feature2.png"
import img3 from "../assets/feature3.png"
import img4 from "../assets/feature4.png"
import img5 from "../assets/feature5.png"
import img6 from "../assets/feature6.png"
import img7 from "../assets/feature7.png"


export default function Features() {
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

    itemsRef.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      tag: "ACESSO",
      number: "01",
      title: "Check-in & QR Code",
      text: "Digitalização do acesso a eventos com QR Code, reduzindo filas e simplificando a entrada. O usuário chega, escaneia e passa, sem fricção, sem papel.",
      image: img1
    },
    {
      tag: "VENDAS",
      number: "02",
      title: "Compra antecipada",
      text: "Compra de produtos antes do evento, permitindo retirada no local de forma rápida e sem fricção. Menos fila, mais experiência.",
      image: img2
    },
    {
      tag: "STORE",
      number: "03",
      title: "Loja e produtos",
      text: "Centralização de produtos com descrições completas, imagens e informações detalhadas, permitindo que as marcas divulguem seus itens de forma estratégica e ofereçam uma experiência de compra simples, rápida e segura para os clientes.",
      image: img3
    },
    {
      tag: "ENGAJAMENTO",
      number: "04",
      title: "Notificações",
      text: "Envio de notificações diretas, aumentando o engajamento e a visibilidade de novidades e promoções no momento certo.",
      image: img4
    },
    {
      tag: "AGENDAMENTO",
      number: "05",
      title: "Agenda",
      text: "A funcionalidade de Agenda foi desenvolvida para facilitar o gerenciamento de atividades e agendamentos em segmentos como academias, clínicas e estúdios. A interface apresenta uma visualização semanal intuitiva, permitindo que os usuários acompanhem horários, atividades disponíveis e confirmações de presença de forma rápida e organizada. A solução ajudou a reduzir processos manuais realizados pelo WhatsApp, centralizando os agendamentos dentro da plataforma e proporcionando mais praticidade e eficiência para usuários e empresas.",
      image: img5
    },
    {
      tag: "EXPERIÊNCIA",
      number: "06",
      title: "Eventos",
      text: "A tela de Eventos foi criada para centralizar todas as experiências promovidas pela marca em um único ambiente digital. O usuário consegue visualizar eventos disponíveis, acessar informações completas e realizar check-in diretamente pela plataforma quando disponível. Caso necessário, também pode ser direcionado para a compra de ingressos online. O objetivo principal foi tornar a experiência mais fluida, organizada e acessível para os usuários.",
      image: img6
    },
    {
      tag: "CONTEÚDO",
      number: "07",
      title: "Notícias",
      text: "A funcionalidade de Notícias foi desenvolvida para fortalecer a comunicação entre a marca e seus usuários. Através de um feed dinâmico com imagens e vídeos, a empresa consegue compartilhar atualizações, novidades e conteúdos importantes, mantendo os usuários mais conectados à plataforma. A interface foi pensada para oferecer uma navegação fluida e incentivar o consumo de conteúdo dentro do aplicativo",
      image: img7
    }
  ]

  return (
    <section className="features container">

      {/* HEADER */}
      <div className="features-header">
        <span className="tag">— ESTRATÉGIA</span>

        <h2>
          <strong>Funcionalidades</strong> que importam
        </h2>
      </div>

      {/* LISTA */}
      <div className="features-list">
        {features.map((item, index) => (
          <div
            key={index}
            className={`feature-item ${index % 2 !== 0 ? "reverse" : ""}`}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            {/* TEXTO */}
            <div className="feature-text">

              <div className="feature-top">
                <span className="feature-tag">{item.tag}</span>
                <span className="feature-number">{item.number}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

            </div>

            {/* IMAGEM */}
            <div className="feature-image">
              <img src={item.image} alt="" />
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}