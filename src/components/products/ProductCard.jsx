import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, image, category, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const productToAdd = { id, title, price, image, qty: 1 };
    
    if (addToCart) {
      addToCart(productToAdd);
      
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1000); 
    }
  };

  return (
    <div className="modern-card">
      <div className="image-wrapper">
        <img src={image} alt={title} className="product-img" />
      </div>

      <div className="card-content">
        <span className="category-tag">{category}</span>
        <h3 className="product-title">{title}</h3>
        
        <div className="price-tag">
          {price} <span className="currency">DH</span>
        </div>

        <div className="button-group">
          <Link to={`/products/${id}`} className="btn-secondary">
            Détails
          </Link>

          <button 
            className={`btn-primary ${isAdded ? 'btn-success-animation' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? '✔ Ajouté' : 'Ajouter au Panier'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;