export default function Header() {
  return (
    <header>
  <div className="header-text">
    <h2>Olá, meu nome é</h2>
    <h1>Edenio Oliveira</h1>
    <h2>Sou um Desenvolvedor de <span style={{color:"#007acc"}}>Software</span></h2>
    <p>
      Trabalho com desenvolvimento na linguagem de programação Java (Full-Stack) há mais de 4 anos. 
      Atualmente presto assistência para os softwares que desenvolvi, mas estou em busca de novos desafios 
      através dos estudos em novas tecnologias.
    </p>
    <a href="/Curriculo_Edenio_2025.pdf" download>Baixe meu Currículo</a>
  </div>

  <div className="header-image">
    <img src="/profile.png" alt="Foto de perfil" />
  </div>
</header>

  );
}
