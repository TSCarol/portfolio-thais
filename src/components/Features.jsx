import { useEffect, useRef } from "react"

import img1 from "../assets/feature1.png"
import img2 from "../assets/feature2.png"
import img3 from "../assets/feature3.png"
import img4 from "../assets/feature4.png"
import img5 from "../assets/feature5.png"

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
      text: "Digitalização do acesso a eventos com QR Code, reduzindo filas e simplificando a entrada. O usuário chega, escaneia e passa — sem fricção, sem papel.",
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
      tag: "ANALYTICS",
      number: "03",
      title: "Gestão e relatórios",
      text: "Centralização de dados como clientes, pagamentos e check-ins, oferecendo maior controle e visibilidade para as empresas tomarem decisões.",
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
      tag: "IDENTIDADE",
      number: "05",
      title: "Carteirinha digital",
      text: "Acesso simplificado com identificação digital integrada ao sistema. A identidade do usuário dentro do ecossistema da marca.",
      image: img5
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