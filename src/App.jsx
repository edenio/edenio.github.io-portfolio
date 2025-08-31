import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      
      <Section id="sobre" title="Sobre Mim">
        <div className="about-content">
          <p>
            Desenvolvedor Java com sólida experiência no desenvolvimento de sistemas backend utilizando Java, 
            Spring Boot, AWS e arquitetura de microsserviços. Forte atuação em soluções escaláveis, APIs RESTful 
            e ambientes com Docker/Kubernetes. Perfil proativo, focado em resultados e com excelente capacidade 
            de resolver problemas técnicos e de negócio.
          </p>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Linguagens</h3>
              <p>Java, Python, JavaScript</p>
            </div>
            <div className="skill-category">
              <h3>Frameworks</h3>
              <p>Spring Boot, React, Angular, JPA</p>
            </div>
            <div className="skill-category">
              <h3>DevOps/Cloud</h3>
              <p>AWS (EC2, S3), Docker, Kubernetes</p>
            </div>
            <div className="skill-category">
              <h3>Banco de Dados</h3>
              <p>SQL, PostgreSQL, MySQL</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="experiencia" title="Experiência Profissional">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Jan/2022 – Jul/2025</div>
            <div className="timeline-content">
              <h3>Especialista em TI – Casa&Video</h3>
              <p className="location">Rio de Janeiro – Remoto</p>
              <ul>
                <li>Desenvolvimento de APIs RESTful com Java, Spring Boot e JPA</li>
                <li>Implantação de soluções escaláveis em ambiente AWS (EC2, S3)</li>
                <li>Participação em squads ágeis com GitHub, Docker e Kubernetes</li>
                <li>Integrações com sistemas de terceiros e manutenção de serviços legados</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>Analista Desenvolvedor de Sistemas Jr II – Liax Tecnologia</h3>
              <p className="location">São Paulo – Remoto</p>
              <ul>
                <li>Desenvolvimento e manutenção de sistemas web</li>
                <li>Aplicação de testes unitários e boas práticas de Clean Code</li>
                <li>Utilização de ferramentas como Git, Maven, JIRA e Jenkins</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2021 – 2022</div>
            <div className="timeline-content">
              <h3>Analista Desenvolvedor de Sistemas Jr – Lamp IT</h3>
              <p className="location">Fortaleza – Remoto</p>
              <ul>
                <li>Atuação em sistema de gestão de clientes</li>
                <li>Uso de arquitetura MVC, Spring Data e React no frontend</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="projetos" title="Projetos">
        <div className="projects-grid">
          <div className="project-card">
            <h3>Sistema de Consulta de Clientes</h3>
            <p>Aplicação backend para consulta de clientes via PDV utilizando Java/Spring, com arquitetura em microsserviços, containerizada com Docker e orquestrada com Kubernetes.</p>
            <div className="tech-tags">
              <span>Java</span>
              <span>Spring</span>
              <span>Docker</span>
              <span>Kubernetes</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Sistema de Pesquisa (em andamento)</h3>
            <p>Aplicação fullstack com backend em Java/Spring e frontend em React, onde usuários podem criar pesquisas e responder via dispositivos móveis. Organização em camadas, uso de DTOs e REST.</p>
            <div className="tech-tags">
              <span>Java</span>
              <span>Spring</span>
              <span>React</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="formacao" title="Formação Acadêmica">
        <div className="education-list">
          <div className="education-item">
            <h3>MBA em Data Science, Analytics e BI</h3>
            <p className="institution">UNINASSAU, Mossoró – RN</p>
            <p className="period">2021 – 2022</p>
          </div>
          
          <div className="education-item">
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p className="institution">Faculdade Câmara Cascudo, Natal – RN</p>
            <p className="period">2016 – 2018</p>
          </div>
          
          <div className="education-item">
            <h3>Ciências e Tecnologia</h3>
            <p className="institution">UFERSA, Caraúbas – RN</p>
            <p className="period">2018 – Trancado</p>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}

export default App;