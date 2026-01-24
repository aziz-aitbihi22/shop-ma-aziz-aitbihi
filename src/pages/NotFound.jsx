import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '72px', color: '#e74c3c' }}>404</h1> 
      <h2>Oups ! Page non trouvée</h2> 
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" style={{ color: '#3498db', textDecoration: 'underline' }}>
        Retourner à l'accueil
      </Link> 
    </div>
  );
};

export default NotFound;