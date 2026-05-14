import { useEffect, useRef } from "react"

import Empresa from "../assets/Empresa.svg"
import User from "../assets/User.svg"

export default function UsersSection() {
  const cardsRef = useRef([])
  const headerRef = useRef(null)

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

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const users = [
    {
      title: "Donos / Marcas",
      text: "Empresas que buscam organizar o relacionamento com clientes, aumentar a recorrência e ter mais controle sobre operações como eventos, planos e vendas.",
      variant: "dark",
      icon: Empresa
    },
    {
      title: "Clientes / Torcedores",
      text: "Usuários que consomem serviços e participam de eventos, buscando praticidade, acesso rápido e uma experiência fluida.",
      variant: "light",
      icon: User
    }
  ]

  return (
    <section className="users container">

      <div className="users-layout">

        {/* ESQUERDA */}
        <div className="users-left" ref={headerRef}>

          <span className="tag">— USUÁRIOS</span>

          <h2>
            <strong>Dois perfis</strong>,<br />
            uma plataforma
          </h2>

          <p>
            O produto foi estruturado para dois perfis principais:
            empresas e usuários finais, equilibrando gestão, controle
            e experiência.
          </p>

        </div>

        {/* DIREITA */}
        <div className="users-right">

          {users.map((user, index) => (
            <div
              key={index}
              className={`user-card ${user.variant}`}
              ref={(el) => (cardsRef.current[index] = el)}
            >

              {/* ÍCONE */}
              <div className="user-icon">
                <img src={user.icon} alt="" />
              </div>

              <h3>{user.title}</h3>

              <p>{user.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}