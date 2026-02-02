import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container main-content">
      <section className="hero-section">
        <h1 className="hero-title">L'artisanat marocain, <br /><span>redéfini pour vous.</span></h1>
        <p className="hero-subtitle">
          Découvrez une collection exclusive de produits authentiques 
          mêlant tradition ancestrale et design contemporain.
        </p>
        
        <div className="hero-cta">
          <Link to="/products" className="btn-primary-large">
            Explorer la collection
          </Link>
          <Link to="/contact" className="btn-link">
            En savoir plus →
          </Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Qualité Premium</h3>
          <p>Chaque pièce est sélectionnée à la main pour sa finition irréprochable.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌍</div>
          <h3>Éco-responsable</h3>
          <p>Des matériaux naturels et des processus respectueux de l'environnement.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🇲🇦</div>
          <h3>100% Authentique</h3>
          <p>Directement de l'artisan à votre porte, sans intermédiaire.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;