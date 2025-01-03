'use client';
import './Hero.css';  // Adiciona a importação do CSS

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Texto */}
        <div className="hero-text">
          <h1 className="hero-title">
          &lt;/ Olá, eu sou <span className="highlight">Pedro Henrique</span> &gt;
          </h1>

          <p className="hero-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quasi, incidunt excepturi consequuntur sint recusandae accusantium quibusdam nobis dolore, odit libero eligendi corporis architecto qui tempore pariatur cumque quod impedit?
          </p>

          <a href="#projects" className="cta-button">
            Ver Projetos
          </a>
        </div>

        {/* Foto */}
        <div className="hero-image-container">
          <div className="hero-image-background"></div>
          <img src="/images/foto.png" alt="Pedro Henrique" className="foto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
