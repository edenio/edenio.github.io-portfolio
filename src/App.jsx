import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section id="sobre" title="Sobre Mim">
        <p>Com X anos de experiência em Java SE, Java EE e Spring Boot... (contextualize com seus dados)</p>
      </Section>
      <Section id="projetos" title="Projetos">
        <p>Projetos destacados aqui</p>
      </Section>
      <Section id="experiencia" title="Experiência Profissional">
        <p>Experiências listadas cronologicamente</p>
      </Section>
      <Footer />
    </>
  );
}

export default App;
