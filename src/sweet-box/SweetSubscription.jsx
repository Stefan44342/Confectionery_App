import React, { useState } from 'react';
import './SweetSubscription.css';

function SweetSubscription() {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  const subscriptionOptions = [
    {
      id: 1,
      title: "Cutia Clasică",
      price: "129 lei/lună",
      description: "Selecție lunară de prăjituri clasice și sezoniere",
      features: [
        "8-10 prăjituri în fiecare lună",
        "Variație de deserturi tradiționale și moderne",
        "Notă personalizată cu descrierea fiecărui desert",
        "Livrare gratuită în București"
      ],
      image: "/cutie-1.png"
    },
    {
      id: 2,
      title: "Cutia Specială",
      price: "169 lei/lună",
      description: "Pentru iubitorii de deserturi rafinate și experiențe gustative deosebite",
      features: [
        "8-10 deserturi premium în fiecare lună",
        "Include cel puțin 2 deserturi signature",
        "Fișă de degustare și recomandări de asociere",
        "Livrare gratuită în București și Ilfov"
      ],
      image: "/cutie-2.png"
    },
    {
      id: 3,
      title: "Cutia Tematică",
      price: "149 lei/lună",
      description: "Deserturi adaptate preferințelor și nevoilor nutriționale",
      features: [
        "8-10 deserturi adaptate dietei tale",
        "Opțiuni: fără zahăr, fără gluten, post",
        "Fișă cu valori nutriționale",
        "Livrare gratuită în București"
      ],
      image: "/cutie-3.png"
    }
  ];

  const handleSubscriptionClick = (id) => {
    setSelectedSubscription(id === selectedSubscription ? null : id);
  };

  const toggleGiftModal = () => {
    setIsGiftModalOpen(!isGiftModalOpen);
  };

  return (
    <section className="sweet-subscription-section" id="sweet-box">
      <div className="container">
        <div className="subscription-header">
          <h2 className="section-title">Abonamente Dulci</h2>
          <p className="subscription-intro">
            Descoperă experiența noastră "sweet box of the month" - o cutie surpriză cu deserturi 
            artizanale livrate direct la tine acasă în fiecare lună. Un cadou perfect pentru tine 
            sau pentru cei dragi.
          </p>
        </div>

        <div className="subscription-benefits">
          <div className="benefit-item">
            <div className="benefit-icon">🎁</div>
            <h4>Surpriză Lunară</h4>
            <p>În fiecare lună primești o selecție nouă de deserturi artizanale</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🍰</div>
            <h4>Deserturi Premium</h4>
            <p>Creații exclusive care nu se găsesc mereu în vitrina cofetăriei</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🌱</div>
            <h4>Opțiuni Speciale</h4>
            <p>Variante adaptate pentru diete specifice (fără zahăr, fără gluten, post)</p>
          </div>
        </div>

        <div className="subscription-options">
          {subscriptionOptions.map((option) => (
            <div 
              key={option.id} 
              className={`subscription-card ${selectedSubscription === option.id ? 'selected' : ''}`}
              onClick={() => handleSubscriptionClick(option.id)}
            >
              <div className="subscription-image-container">
                <img src={option.image} alt={option.title} className="subscription-image" />
                {selectedSubscription === option.id && (
                  <div className="selected-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                )}
              </div>
              <div className="subscription-content">
                <h3 className="subscription-title">{option.title}</h3>
                <p className="subscription-price">{option.price}</p>
                <p className="subscription-description">{option.description}</p>
                <ul className="subscription-features">
                  {option.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="subscription-actions">
          <button 
            className="subscription-button primary"
            disabled={!selectedSubscription}
          >
            Abonează-te Acum
          </button>
          <button 
            className="subscription-button secondary"
            onClick={toggleGiftModal}
          >
            Oferă Cadou
          </button>
        </div>

        <div className="subscription-testimonials">
          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              ))}
            </div>
            <p className="testimonial-text">
              "Abonamentul la cutia lunară este cea mai bună decizie! De fiecare dată când ajunge la mine, 
              este ca o mică sărbătoare. Prăjiturile sunt mereu proaspete și delicioase."
            </p>
            <p className="testimonial-author">- Maria Stanciu</p>
          </div>
        </div>

        {isGiftModalOpen && (
          <div className="gift-modal-overlay">
            <div className="gift-modal">
              <button className="close-modal" onClick={toggleGiftModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <h3 className="gift-modal-title">Oferă un Abonament Cadou</h3>
              <p className="gift-modal-description">
                Completează formularul pentru a oferi un abonament cadou persoanei dragi.
              </p>
              <form className="gift-form">
                <div className="form-group">
                  <label htmlFor="recipientName">Numele destinatarului</label>
                  <input type="text" id="recipientName" placeholder="Numele complet" required />
                </div>
                <div className="form-group">
                  <label htmlFor="recipientEmail">Email destinatar</label>
                  <input type="email" id="recipientEmail" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="giftMessage">Mesaj personalizat</label>
                  <textarea id="giftMessage" placeholder="Scrie un mesaj personalizat..." rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="subscriptionDuration">Durată abonament</label>
                  <select id="subscriptionDuration">
                    <option value="1">1 lună</option>
                    <option value="3">3 luni</option>
                    <option value="6">6 luni</option>
                    <option value="12">12 luni</option>
                  </select>
                </div>
                <button type="submit" className="gift-submit-button">Oferă Abonament Cadou</button>
              </form>
            </div>
          </div>
        )}

        <div className="subscription-faq">
          <h3 className="faq-title">Întrebări Frecvente</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">Când primesc cutia mea lunară?</h4>
              <p className="faq-answer">
                Cutiile sunt livrate în prima săptămână a fiecărei luni, de regulă în zilele de marți-joi.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Pot modifica sau anula abonamentul?</h4>
              <p className="faq-answer">
                Da, poți modifica sau anula abonamentul cu cel puțin 7 zile înainte de următoarea livrare.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Ce conține o cutie tipică?</h4>
              <p className="faq-answer">
                O cutie conține 8-10 deserturi variind de la prăjituri clasice la creații speciale, în funcție de abonamentul ales.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Cum sunt ambalate produsele?</h4>
              <p className="faq-answer">
                Toate produsele sunt ambalate cu grijă în cutii speciale care mențin prospețimea și integritatea deserturilor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SweetSubscription;