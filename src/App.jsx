import React from 'react';
import { Header, Footer } from './components';
import ProductsList from './components/products/ProductsList'; 
function App() {
  return (
    <div className="app-container">
      <Header />

      <main style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Boutique Shop.ma</h2>
        
        {/* استدعاء مكون قائمة المنتجات اللي كيجيب السلعة من API  */}
        <ProductsList />
      </main>

      <Footer />
    </div>
  );
}

export default App;