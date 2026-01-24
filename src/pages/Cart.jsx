import React from 'react';

const Cart = ({ cartItems, updateQty, removeFromCart }) => {
  // حساب المجموع الإجمالي حسب متطلبات المشروع 
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tva = subtotal * 0.20; // الضريبة 20% 
  const totalTTC = subtotal + tva;

  return (
    <div className="main-content" style={{ padding: '60px 5%', maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', animation: 'fadeInDown 0.6s ease-out' }}>
        <h1 style={{ color: '#1d1d1f', fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
          Votre Panier <span style={{ color: '#4A628A' }}>.</span>
        </h1>
        <p style={{ color: '#6e6e73', fontSize: '1.1rem' }}>Vérifiez vos articles avant de finaliser votre commande.</p>
      </header>
      
      {cartItems.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '100px 20px', 
          background: 'white', 
          borderRadius: '30px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
          animation: 'fadeIn 0.8s ease'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
          <h2 style={{ color: '#1d1d1f' }}>Votre panier est vide.</h2>
          <p style={{ color: '#6e6e73', marginBottom: '30px' }}>Il semble que vous n'avez pas encore ajouté de trésors artisanaux.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px', alignItems: 'start' }}>
          
          {/* قائمة المنتجات - Apple Style List */}
          <div style={{ animation: 'slideRight 0.6s ease-out' }}>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-card" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '25px', 
                padding: '24px', 
                backgroundColor: 'white', 
                marginBottom: '20px', 
                borderRadius: '24px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.02)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ 
                  width: '100px', 
                  height: '100px', 
                  backgroundColor: '#f5f5f7', 
                  borderRadius: '15px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <img src={item.image} style={{ width: '80%', height: '80%', objectFit: 'contain' }} alt={item.title} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#1d1d1f', fontSize: '1.1rem', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ color: '#4A628A', fontWeight: '700', fontSize: '1.2rem' }}>{item.price} <small>DH</small></p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f5f5f7', padding: '8px', borderRadius: '12px' }}>
                  <button onClick={() => updateQty(item.id, -1)} className="qty-btn-modern">-</button>
                  <span style={{ fontWeight: '600', width: '25px', textAlign: 'center' }}>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="qty-btn-modern">+</button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="delete-btn-modern"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* خلاصة الحساب الإجمالي - Stripe Style Sidebar  */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '28px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
            position: 'sticky',
            top: '120px',
            animation: 'slideLeft 0.6s ease-out'
          }}>
            <h3 style={{ marginBottom: '25px', color: '#1d1d1f' }}>Résumé</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#6e6e73' }}>
              <span>Sous-total</span>
              <span style={{ fontWeight: '600' }}>{subtotal.toFixed(2)} DH</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', color: '#6e6e73' }}>
              <span>TVA (20%)</span>
              <span style={{ fontWeight: '600' }}>{tva.toFixed(2)} DH</span>
            </div>
            
            <div style={{ borderTop: '1px solid #f5f5f7', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Total TTC</span>
              <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#4A628A' }}>{totalTTC.toFixed(2)} DH</span>
            </div>
            
            <button className="btn-primary" style={{ width: '100%', padding: '18px', fontSize: '1.1rem', borderRadius: '16px' }}>
              Payer maintenant
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;