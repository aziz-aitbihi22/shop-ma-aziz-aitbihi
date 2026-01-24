import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // محاكاة عملية الإرسال مع أنيميشن
    setTimeout(() => {
      alert('Merci Aziz! Votre message a été envoyé avec succès.');
      setForm({ nom: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="contact-container main-content">
      <div className="contact-grid">
        {/* معلومات التواصل - ستايل Apple */}
<div className="contact-premium-wrapper">

  {/* العنوان الرئيسي احترافي */}

  <h1 className="contact-title">

    Parlons de votre <br />

    <span>expérience artisanale.</span>

  </h1>

  

  <p className="contact-subtitle">

    Vous avez des questions sur nos collections ou vous souhaitez une commande personnalisée ? 

    Notre équipe d'experts est à votre écoute pour vous accompagner. 

  </p>



  {/* بطاقة المعلومات بستايل الصورة الأصلية */}

  <div className="contact-card-modern">

    <div className="card-icon-wrapper">

      <span className="location-pin">📍</span>

    </div>

    <div className="card-content-text">

      <h4>Siège Social & Showroom</h4>

      <p>42 Rue des Artisans, Sidi Ghanem, Marrakech, Maroc</p>

    </div>

  </div>

</div> 

        {/* الفورم - ستايل Stripe/SaaS */}
<div className="contact-form-premium">
  <form className="modern-form-inner">
    <div className="form-group-apple">
      <label>Nom complet</label>
      <input type="text" placeholder="Aziz ..." required />
    </div>

    <div className="form-group-apple">
      <label>Email professionnel</label>
      <input type="email" placeholder="aziz@example.com" required />
    </div>

    <div className="form-group-apple">
      <label>Votre message</label>
      <textarea placeholder="Comment pouvons-nous vous aider ?" rows="5" required></textarea>
    </div>

    <button type="submit" className="btn-send-apple">
      Envoyer le message
    </button>
  </form>
</div>
      </div>
    </div>
  );
};

export default Contact;