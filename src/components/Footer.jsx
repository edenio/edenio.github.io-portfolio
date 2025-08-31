import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("edenio.alv@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer id="contato" className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Vamos trabalhar juntos?</h2>
        <p className="footer-subtitle">Entre em contato através dos canais abaixo</p>
        
        <div className="contact-options">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h3>Email</h3>
              <div className="email-container">
                <a href="mailto:edenio.alv@gmail.com">edenio.alv@gmail.com</a>
                <button 
                  className="copy-btn" 
                  onClick={copyEmailToClipboard}
                  aria-label="Copiar email"
                >
                  {emailCopied ? '✓' : '📋'}
                </button>
              </div>
              {emailCopied && <span className="copied-message">Email copiado!</span>}
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/edenio-oliveira" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Conectar no LinkedIn
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">🐙</div>
            <div className="contact-details">
              <h3>GitHub</h3>
              <a 
                href="https://github.com/edenio" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver repositórios
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="copyright">
            © {currentYear} Edenio Alves de Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}