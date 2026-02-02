import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/products/ProductCard';

const Products = ({ addToCart }) => {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortType, setSortType] = useState("default");

  if (loading) return <div className="loader-container"><div className="apple-loader"></div></div>;
  if (error) return <p className="error-message">Erreur: {error}</p>;

  let displayedProducts = products.filter(p => {
    return p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
           (category === "all" || p.category === category) &&
           p.price <= maxPrice;
  });

  if (sortType === "name-asc") {
    displayedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "price-asc") {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "price-desc") {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="products-page-wrapper">
      <header className="products-header">
        <h1 className="premium-title">Nos Produits <span>Artisanaux</span></h1>
        <p className="premium-subtitle">L'excellence du savoir-faire marocain entre vos hands.</p>
      </header>

      <div className="filter-bar-premium">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Rechercher un trésor..." 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="select-group">
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="all">Toutes les catégories</option>
            <option value="electronics">Électronique</option>
            <option value="jewelery">Bijoux</option>
            <option value="men's clothing">Mode Homme</option>
          </select>

          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="default">Trier par</option>
            <option value="name-asc">Nom A-Z</option> 
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
        </div>

        <div className="price-slider-group">
          <span>Max: <strong>{maxPrice} DH</strong></span>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)} 
          />
        </div>
      </div>

      <div className="products-grid-premium">
        {displayedProducts.map((p, index) => (
          <div key={p.id} style={{ animationDelay: `${index * 0.1}s` }} className="staggered-item">
            <ProductCard {...p} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;