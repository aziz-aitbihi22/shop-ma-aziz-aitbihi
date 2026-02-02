import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import './App.css'; // تأكد أن التنسيق ديال الـ Toast كاين هنا

function App() {
  // 1. تعريف السلة وحالة التنبيه (Toast)
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);

  // 2. وظيفة إضافة منتج للسلة مع التنبيه العصري
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // إذا كان المنتج موجود، نزيد في الكمية
        return prevCart.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // إذا كان منتج جديد، نضيفه للسلة
      return [...prevCart, { ...product, qty: 1 }];
    });

    // إظهار التنبيه (Toast) وإخفاؤه تلقائياً بعد 3 ثواني
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // 3. وظائف تعديل الكمية وحذف المنتج
  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
     <div className="app-wrapper">      
      {/* تمرير عدد العناصر للـ Navbar */}
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} />
      
      <main className="main-content" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* تمرير addToCart للصفحات المعنية */}
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          
          {/* صفحة السلة */}
          <Route path="/cart" element={
            <Cart 
              cartItems={cart} 
              updateQty={updateQty} 
              removeFromCart={removeFromCart} 
            />
          } />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* التنبيه العصري (Toast Notification) */}
      {showToast && (
        <div className="toast-notification">
          <span className="toast-icon">✅</span>
          <p>Produit ajouté au panier !</p>
        </div>
      )}
    </div>
  );
}

export default App;