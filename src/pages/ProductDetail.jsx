import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <div className="loader">Chargement...</div>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className="product-detail-wrapper" style={{ padding: '60px 10%', animation: 'fadeIn 0.6s ease' }}>
      <button onClick={() => navigate(-1)} className="btn-back-minimal">← Retour</button>

      <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', marginTop: '30px' }}>
        <div className="image-card-premium">
          <img src={product.image} alt={product.title} style={{ maxWidth: '100%', borderRadius: '20px' }} />
        </div>

        <div className="product-info-section">
          <span className="category-badge">{product.category}</span>
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-price">{product.price} DH</p>
          <p className="detail-description">{product.description}</p>

          <button 
            className="btn-primary-large"
            onClick={() => addToCart(product)} 
          >
            Ajouter au Panier
          </button>

          <div className="trust-badges" style={{ marginTop: '20px', color: '#6e6e73' }}>
            <p>✓ Livraison gratuite au Maroc</p>
            <p>✓ Paiement à la livraison</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;