import React, { useState } from 'react';
import './NewsletterSubscriber.css';
import { CheckCircle, Send } from 'lucide-react';

const NewsletterSubscriber = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    
    // Validate email
    if (!email) {
      setError('Te rugăm să introduci adresa de email.');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Te rugăm să introduci o adresă de email validă.');
      return;
    }
    
    // Simulate API call
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // În aplicația reală, aici ar fi logica de trimitere către server
    }, 1500);
  };

  const handleRedirectToLoyalty = () => {
    // În aplicația reală, acest lucru ar naviga către pagina de loialitate
    window.location.href = '/loyalty';
  };

  return (
    <div className="newsletter-subscriber">
      {!submitted ? (
        <div className="newsletter-form-container">
          <h2 className="newsletter-title">Abonează-te la Newsletter</h2>
          <p className="newsletter-description">
            Abonează-te pentru a primi rețete, oferte speciale și noutăți dulci.
          </p>
          
          <form onSubmit={handleSubmit} className="subscriber-form">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                className="email-input"
              />
              <button 
                type="submit" 
                className="subscribe-button"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    <span>Abonează-te</span>
                    <Send size={16} className="send-icon" />
                  </>
                )}
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      ) : (
        <div className="success-container">
          <div className="success-icon">
            <CheckCircle size={48} />
          </div>
          <h2 className="success-title">Felicitări!</h2>
          <p className="success-message">
            Ai fost abonat cu succes la newsletter-ul nostru.
          </p>
          <p className="success-details">
            Vei primi cele mai noi rețete, promoții și noutăți despre programul nostru de loialitate.
          </p>
          
          <div className="loyalty-info">
            <h3 className="loyalty-info-title">Programul de Loialitate Dolci</h3>
            <p className="loyalty-info-description">
              Felicitări! Ai primit primele 10 puncte de loialitate pentru abonarea la newsletter!
            </p>
            
            <div className="points-showcase">
              <div className="points-badge">+10</div>
              <div className="points-text">
                <span className="points-label">PUNCTE DE LOIALITATE</span>
                <span className="points-info">Ai primit 10 puncte pentru abonare</span>
              </div>
            </div>
            
            <div className="loyalty-benefits">
              <h4 className="benefits-title">Ce avantaje ai cu punctele de loialitate?</h4>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <div className="benefit-icon">🎂</div>
                  <div className="benefit-text">Reduceri la produsele preferate</div>
                </li>
                <li className="benefit-item">
                  <div className="benefit-icon">🎁</div>
                  <div className="benefit-text">Cadouri dulci la aniversări</div>
                </li>
                <li className="benefit-item">
                  <div className="benefit-icon">⭐</div>
                  <div className="benefit-text">Badge-uri exclusive</div>
                </li>
                <li className="benefit-item">
                  <div className="benefit-icon">🚚</div>
                  <div className="benefit-text">Livrare gratuită la comenzi</div>
                </li>
              </ul>
            </div>
            
            <button 
              className="discover-button"
              onClick={handleRedirectToLoyalty}
            >
              Descoperă programul de loialitate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsletterSubscriber;