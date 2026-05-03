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
  
            <a 
              href="https://www.linkedin.com/in/thais-carolina/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
  
            <a href="mailto:thaiscsantoos@gmail.com">
              Email
            </a>
  
          </div>
  
        </div>
  
      </footer>
    )
  }