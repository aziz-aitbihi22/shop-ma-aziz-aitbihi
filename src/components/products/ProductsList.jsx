import { useState, useEffect } from 'react'; 
import ProductCard from './ProductCard';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => { 
        if (!res.ok) throw new Error('Erreur de chargement'); 
        return res.json(); 
      })
      .then(data => { 
        setProducts(data); 
        setLoading(false); 
      })
      .catch(err => { 
        setError(err.message); 
        setLoading(false); 
      });
  }, []);

  if (loading) return <p>Chargement... ⏳</p>;
  if (error) return <p style={{color:'red'}}>Erreur: {error}</p>;

  return (
    <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {/* 4. عرض القائمة باستخدام map [cite: 151] */}
      {products.map(p => (
        <ProductCard key={p.id} {...p} /> 
      ))}
    </div>
  );
// داخل مكون ProductsList وقبل الـ return ديال القائمة
const handleRefresh = () => {
  setLoading(true);
  // الكود اللي كيعاود الـ Fetch
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setLoading(false);
    });
};

// فوسط الـ return (مثلا فوق الـ grid)
<button onClick={handleRefresh} style={{ marginBottom: '20px' }}>
  Rafraîchir la liste 🔄
</button>
}

export default ProductsList;