export default function Footer() {
    return (
      <footer className="footer container">
  
        <div className="footer-content">
  
          {/* ESQUERDA */}
          <p className="footer-copy">
            © {new Date().getFullYear()} Thaís Santos
          </p>
  
          {/* DIREITA */}
          <div className="footer-links">
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
  
        </div>
  
      </footer>
    )
  }