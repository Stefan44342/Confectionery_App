// Hero.jsx
import React, { useEffect, useState } from 'react';
import './Hero.css'; // Vom crea acest fișier separat

function Hero() {
    const [scrolled, setScrolled] = useState(false);
    
    const labImages = [
      "/Cofetarie_afara.png",
      "/prajituri.png",
      "/tejghea.png"
    ];
    
    const reviews = [
      {
        name: "Ana Popescu",
        review: "Tortul personalizat pentru ziua fiicei mele a fost exact cum mi l-am imaginat! Toți invitații au fost impresionați.",
        rating: 5
      },
      {
        name: "Mihai Ionescu",
        review: "Decorul și gustul sunt de excepție. Cea mai bună cofetărie din oraș!",
        rating: 5
      },
      {
        name: "Elena Dumitrescu",
        review: "Serviciul de abonament dulce este fantastic. În fiecare lună aștept cu nerăbdare cutia cu delicii.",
        rating: 4
      }
    ];
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="hero-container">
        {/* Header */}
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="container header-container">
            <div className="logo-container">
              <h1 className="site-title">Dolci & Delizii</h1>
            </div>
            <nav className="desktop-nav">
              <a href="/" className="nav-link">Acasă</a>
              <a href="/create-cake" className="nav-link">Creează Tort</a>
              <a href="/sweet-box" className="nav-link">Abonamente Dulci</a>
              <a href="/recipes" className="nav-link">Rețete</a>
              <a href="/contact" className="nav-link">Contact</a>
            </nav>
            <button className="mobile-menu-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
        
        {/* Hero section */}
        <section className="hero-section">
          <div className="hero-background">
            <img src="/api/placeholder/1600/900" alt="Hero Background" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <h1 className="hero-title">Dulciuri cu Suflet</h1>
            <p className="hero-description">Creăm momente de bucurie și satisfacție prin rețete autentice și ingrediente naturale</p>
            <a href="/create-cake" className="cta-button">
              Creează Propriul Tort
            </a>
          </div>
        </section>
        
        {/* Tur virtual al laboratorului */}
        <section className="lab-tour-section">
          <div className="container">
            <h2 style={{color:'#d53f8c'}} className="section-title">Călătorie în Culisele Cofetăriei</h2>
            
            <div className="lab-intro">
              <p className="lab-description">
                Vă invităm să descoperiți magia din spatele deliciilor noastre, 
                unde fiecare desert este creat cu pasiune și atenție la detalii.
              </p>
            </div>
            
            <div className="lab-content">
              <div className="lab-gallery">
                {labImages.map((img, index) => (
                  <div key={index} className={`gallery-item ${index === 2 ? 'gallery-item-large' : ''}`}>
                    <img src={img} alt={`Laboratorul nostru ${index+1}`} className="gallery-image" />
                  </div>
                ))}
              </div>
              
              <div className="lab-story">
                <h3 className="story-title">Povestea Noastră</h3>
                <div className="story-content">
                  <p>
                    Cofetăria Dolci & Delizii a început ca un vis în 2015, când am deschis 
                    primul nostru mic laborator. De atunci, ne-am dedicat misiunii de a aduce zâmbete 
                    prin creații dulci autentice, folosind rețete tradiționale îmbinate cu tehnici moderne.
                  </p>
                  <p>
                    Echipa noastră este formată din cofetari pasionați, cu experiență vastă și 
                    dorința de a crea constant experiențe gustative memorabile. Fiecare desert este pregătit 
                    cu ingrediente proaspete și naturale, selectate cu grijă de la producători locali.
                  </p>
                  <p>
                    În laboratorul nostru, calitatea și curățenia sunt prioritare. Procesul de creație 
                    începe cu selecția ingredientelor, continuă cu prepararea atentă și se încheie cu 
                    decorarea artistică a fiecărui produs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="features">
              <div className="feature-item">
                <div className="feature-icon">🍰</div>
                <h4 className="feature-title">Pasiune pentru Dulce</h4>
                <p className="feature-description">Fiecare desert este făcut cu dragoste și dedicație.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌿</div>
                <h4 className="feature-title">Ingrediente Naturale</h4>
                <p className="feature-description">Folosim doar ingrediente de calitate, fără aditivi artificiali.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <h4 className="feature-title">Artă și Inovație</h4>
                <p className="feature-description">Îmbinăm rețete tradiționale cu tehnici moderne.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Secțiuni principale */}
        <section className="main-services-section">
          <div className="container">
            <div className="services-grid">
              <div className="service-card">
                <img src="/tort.png" alt="Creează Tort" className="service-image" />
                <div className="service-content">
                  <h3 className="service-title">Configurator Torturi</h3>
                  <p className="service-description">Creează propriul tort personalizat, alegând forma, crema, glazura și decorurile preferate.</p>
                  <a href="/create-cake" className="service-button">
                    Personalizează
                  </a>
                </div>
              </div>
              
              <div className="service-card">
                <img src="/subscription.png" alt="Abonamente Dulci" className="service-image" />
                <div className="service-content">
                  <h3 className="service-title">Abonamente Dulci</h3>
                  <p className="service-description">Primește lunar o cutie cu selecții de prăjituri noi sau sezoniere, adaptate preferințelor tale.</p>
                  <a href="/sweet-box" className="service-button">
                    Descoperă
                  </a>
                </div>
              </div>
              
              <div className="service-card">
                <img src="/recipes.png" alt="Rețete de la Noi" className="service-image" />
                <div className="service-content">
                  <h3 className="service-title">Rețete de la Noi</h3>
                  <p className="service-description">Explorează colecția noastră de rețete simple și povești despre deserturi, direct de la cofetarii noștri.</p>
                  <a href="/recipes" className="service-button">
                    Citește
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="assistant-section">
          <div className="container">
            <h3 className="assistant-title">Asistent virtual pentru recomandari dulci</h3>
            <p className="assistant-description">Apasa butonul de mai jos pentru a afla ce prajitura ti se potriveste!</p>
            <div className="assistant-form">
              <a href="/assistant" className="service-button">
                Afla acum!
              </a>
            </div>
          </div>
        </section>
        
        {/* Secțiunea de recenzii */}
        <section className="reviews-section">
          <div className="container">
            <h2 style={{color:'#d53f8c'}} className="section-title">Clienții Noștri Fericiți</h2>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="star-icon">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="review-text">"{review.review}"</p>
                  <p className="review-author">- {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="container">
            <h3 style={{ color: 'white' }} className="newsletter-title">Rămâi la Curent cu Noutățile Noastre</h3>
            <p style={{ color: 'white' }} className="newsletter-description">Abonează-te pentru a primi rețete, oferte speciale și noutăți dulci.</p>
            <div className="newsletter-form">
              <a href="/newsletter" className="service-button">
                Aboneaza-te!
              </a>
            </div>
          </div>
        </section>

       
        
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-info">
                <div className="footer-logo">
                  <h3 className="footer-title">Dolci & Delizii</h3>
                </div>
                <p className="footer-description">Dulciuri artizanale făcute cu pasiune și ingrediente naturale.</p>
              </div>
              
              <div className="footer-nav">
                <h4 className="footer-heading">Navigare</h4>
                <div className="footer-links">
                  <a href="/" className="footer-link">Acasă</a>
                  <a href="/create-cake" className="footer-link">Creează Tort</a>
                  <a href="/sweet-box" className="footer-link">Abonamente</a>
                  <a href="/recipes" className="footer-link">Rețete</a>
                </div>
              </div>
              
              <div className="footer-contact">
                <h4 className="footer-heading">Contact</h4>
                <div className="contact-info">
                  <p>Email: contact@dolcidelizii.ro</p>
                  <p>Telefon: 0700 123 456</p>
                  <p>Adresă: Str. Dulce Nr. 10, București</p>
                </div>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>© 2025 Dolci & Delizii. Toate drepturile rezervate.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

export default Hero;