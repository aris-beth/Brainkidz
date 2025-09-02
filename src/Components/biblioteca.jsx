import React from 'react';
import './biblioteca.css';

const BrainKidz = () => {
  return (
    <div className="brainkidz-container">
      <header className="header">
        <h1 className="logo">Brain Kidz</h1>
        <nav className="menu">
          <a>#bibliotecaBiblioteca</a>
        <a>#mascotaMi mascota</a>
      <a>#cuentaMi cuenta</a>
          </nav>
      </header>

  <main className="main-content">
    <section className="biblioteca" id="biblioteca">
      <h2>Biblioteca</h2>
      <div className="libros-grid">
        {[
          "Alicia en el país de las maravillas",
          "Alicia a través del espejo",
          "Las aventuras de Pinocho",
          "Anne de Avonlea",
          "El jardín secreto",
          "Peter Pan"
        ].map((titulo, index) => (
          <div key={index} className="libro-card">
            <p>{titulo}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="continuar">
      <h2>Continuar con...</h2>
      <div className="continuar-card">
        <p>Heidi</p>
        <button className="continuar-btn">
          <span>Continuar</span>
          <i className="play-icon">▶</i>
        </button>
      </div>
    </section>
  </main>
</div>
);
};

export default BrainKidz;
