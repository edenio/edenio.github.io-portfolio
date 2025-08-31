import React from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#sobre" className="nav-link">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#experiencia" className="nav-link">Experiência</a>
          </li>
          <li className="nav-item">
            <a href="#projetos" className="nav-link">Projetos</a>
          </li>
          <li className="nav-item">
            <a href="#formacao" className="nav-link">Formação</a>
          </li>
          <li className="nav-item">
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;