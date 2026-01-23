import React from 'react';

// تبديل name بـ title في الـ props 
const ProductCard = ({ title, price, image, category, rating }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
      {/* عرض الصورة والفئة */}
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
      <p style={{ color: '#888', fontSize: '12px' }}>{category}</p>
      
      {/* عرض العنوان الجديد  */}
      <h3 style={{ fontSize: '16px', height: '50px', overflow: 'hidden' }}>{title}</h3>
      
      {/* عرض الثمن والتقييم (اختياري) */}
      <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>{price} DH</p>
      
      {rating && (
        <span style={{ fontSize: '12px', color: '#f1c40f' }}>
          ⭐ {rating.rate} ({rating.count})
        </span>
      )}
    </div>
  );
};

export default ProductCard;