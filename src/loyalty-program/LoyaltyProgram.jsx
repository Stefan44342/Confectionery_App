import React, { useState, useEffect } from 'react';
import './LoyaltyProgram.css';
import { Award, Gift, Star, Heart, Coffee, Cake, ArrowRight, CheckCircle } from 'lucide-react';

function LoyaltyProgram() {
  const [activeTab, setActiveTab] = useState('puncte');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Animăm conținutul la încărcare
    setIsAnimated(true);
  }, []);

  const badges = [
    { 
      name: "Explorator Dulce", 
      icon: <Coffee className="badge-icon" />, 
      description: "Primești acest badge după prima ta comandă",
      points: 10
    },
    { 
      name: "Degustător de Elită", 
      icon: <Cake className="badge-icon" />, 
      description: "Ai comandat cel puțin 5 produse diferite",
      points: 50
    },
    { 
      name: "Colecționar de Arome", 
      icon: <Star className="badge-icon" />, 
      description: "Ai încercat toate categoriile noastre de produse",
      points: 100
    },
    { 
      name: "Ambasador Dolci", 
      icon: <Heart className="badge-icon" />, 
      description: "Ai recomandat cofetăria la 3 prieteni",
      points: 150
    },
    { 
      name: "Maestru Dulciurilor", 
      icon: <Award className="badge-icon" />, 
      description: "Ai acumulat peste 500 de puncte de loialitate",
      points: 250
    }
  ];

  const thresholds = [
    {
      name: "Bronze",
      points: 100,
      benefits: ["5% reducere la orice comandă", "1 cafea gratuită lunar"],
      color: "#CD7F32"
    },
    {
      name: "Argint",
      points: 300,
      benefits: ["8% reducere la orice comandă", "1 prăjitură gratuită lunar", "Livrare gratuită"],
      color: "#C0C0C0"
    },
    {
      name: "Aur",
      points: 600,
      benefits: ["12% reducere la orice comandă", "Set de 2 prăjituri gratuite lunar", "Livrare prioritară", "Acces la rețete exclusive"],
      color: "#FFD700"
    },
    {
      name: "Platină",
      points: 1000,
      benefits: ["15% reducere la orice comandă", "O cutie mică de prăjituri gratuită lunar", "Degustări în avanpremieră", "Invitații la evenimente speciale"],
      color: "#E5E4E2"
    }
  ];

  const howItWorks = [
    {
      title: "Fă o comandă",
      description: "La fiecare comandă primești puncte bazate pe valoarea achiziției tale.",
      icon: <CheckCircle className="step-icon" />
    },
    {
      title: "Acumulează puncte",
      description: "Pentru fiecare 10 lei cheltuiți, primești 1 punct de loialitate.",
      icon: <Star className="step-icon" />
    },
    {
      title: "Colectează badge-uri",
      description: "Îndeplinește diferite provocări pentru a debloca badge-uri speciale.",
      icon: <Award className="step-icon" />
    },
    {
      title: "Accesează beneficii",
      description: "Cu cât ai mai multe puncte, cu atât obții mai multe reduceri și cadouri.",
      icon: <Gift className="step-icon" />
    }
  ];

  return (
    <div className="loyalty-container">
      <header className="loyalty-header">
        <div className="container">
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
        </div>
      </header>

      <section className="loyalty-hero">
        <div className="container">
          <div className={`loyalty-hero-content ${isAnimated ? 'animate' : ''}`}>
            <h1 className="loyalty-title">Programul de Loialitate <span className="accent">Dolci</span></h1>
            <p className="loyalty-subtitle">Bucură-te de recompense dulci pentru fiecare moment petrecut alături de noi</p>
          </div>
        </div>
        <div className="loyalty-wave"></div>
      </section>

      <section className="loyalty-overview">
        <div className="container">
          <div className="loyalty-cards">
            {howItWorks.map((step, index) => (
              <div 
                key={index} 
                className={`loyalty-card ${isAnimated ? 'animate' : ''}`} 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-icon">{step.icon}</div>
                <h3 className="card-title">{step.title}</h3>
                <p className="card-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loyalty-details">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === 'puncte' ? 'active' : ''}`}
              onClick={() => setActiveTab('puncte')}
            >
              Puncte de Loialitate
            </button>
            <button 
              className={`tab-button ${activeTab === 'badges' ? 'active' : ''}`}
              onClick={() => setActiveTab('badges')}
            >
              Badge-uri
            </button>
            <button 
              className={`tab-button ${activeTab === 'praguri' ? 'active' : ''}`}
              onClick={() => setActiveTab('praguri')}
            >
              Praguri și Beneficii
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'puncte' && (
              <div className="points-content">
                <div className="points-illustration">
                  <img src="/sbs.png" alt="Ilustrație puncte" className="illustration-img" />
                </div>
                <div className="points-info">
                  <h3>Cum acumulezi puncte?</h3>
                  <ul className="points-list">
                    <li><span className="point-highlight">1 punct</span> pentru fiecare 10 lei cheltuiți</li>
                    <li><span className="point-highlight">5 puncte</span> bonus pentru prima comandă din fiecare lună</li>
                    <li><span className="point-highlight">10 puncte</span> bonus când recomanzi un prieten</li>
                    <li><span className="point-highlight">20 puncte</span> de ziua ta de naștere</li>
                    <li><span className="point-highlight">2x puncte</span> în timpul promoțiilor speciale</li>
                  </ul>
                  <p className="points-note">Punctele tale sunt valabile timp de 12 luni de la data acumulării.</p>
                </div>
              </div>
            )}

            {activeTab === 'badges' && (
              <div className="badges-content">
                <h3>Colecționează Badge-uri Speciale</h3>
                <p className="badges-intro">Badge-urile sunt realizări speciale care îți aduc puncte bonus și te deosebesc ca fiind un client fidel.</p>
                
                <div className="badges-grid">
                  {badges.map((badge, index) => (
                    <div key={index} className="badge-card">
                      <div className="badge-icon-wrapper">
                        {badge.icon}
                      </div>
                      <h4 className="badge-name">{badge.name}</h4>
                      <p className="badge-description">{badge.description}</p>
                      <div className="badge-points">+{badge.points} puncte</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'praguri' && (
              <div className="thresholds-content">
                <h3>Praguri de Loialitate și Beneficii</h3>
                <p className="thresholds-intro">Cu cât acumulezi mai multe puncte, cu atât obții mai multe beneficii!</p>
                
                <div className="thresholds-timeline">
                  {thresholds.map((threshold, index) => (
                    <div key={index} className="threshold-item">
                      <div 
                        className="threshold-marker" 
                        style={{ backgroundColor: threshold.color }}
                      >
                        <span className="threshold-points">{threshold.points}</span>
                      </div>
                      <div className="threshold-details">
                        <h4 className="threshold-name" style={{ color: threshold.color }}>Nivel {threshold.name}</h4>
                        <ul className="threshold-benefits">
                          {threshold.benefits.map((benefit, i) => (
                            <li key={i} className="benefit-item">
                              <ArrowRight className="benefit-icon" size={16} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="loyalty-example">
        <div className="container">
          <div className="example-content">
            <div className="example-text">
              <h3 className="example-title">Exemplu Practic</h3>
              <p className="example-description">
                Maria este clienta noastră și a acumulat 350 de puncte de loialitate.
                Ea se află la nivelul Argint și beneficiază de 8% reducere la fiecare comandă,
                o prăjitură gratuită lunar și livrare gratuită pentru toate comenzile.
              </p>
              <p className="example-description">
                Dacă Maria mai acumulează încă 250 de puncte, va ajunge la nivelul Aur și va 
                primi beneficii și mai atractive!
              </p>
              <a href="/" className="back-button">Începe să acumulezi puncte acum</a>
            </div>
            <div className="example-card">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-badge" style={{ backgroundColor: "#C0C0C0" }}>Argint</div>
                </div>
                <div className="profile-body">
                  <div className="profile-name">Maria P.</div>
                  <div className="profile-points">
                    <span className="points-value">350</span>
                    <span className="points-label">puncte</span>
                  </div>
                  <div className="profile-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '58%' }}></div>
                    </div>
                    <div className="progress-labels">
                      <span>0</span>
                      <span>600</span>
                    </div>
                    <div className="progress-next">Încă 250 puncte până la nivelul Aur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="loyalty-faq">
        <div className="container">
          <h2 className="faq-title">Întrebări Frecvente</h2>
          <div className="faq-items">
            <div className="faq-item">
              <h3 className="faq-question">Cum mă pot înscrie în programul de loialitate?</h3>
              <p className="faq-answer">
                Te înscrii automat când creezi un cont pe site-ul nostru sau faci prima comandă. 
                Începi să acumulezi puncte imediat!
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Cum pot vedea câte puncte am acumulat?</h3>
              <p className="faq-answer">
                Poți verifica oricând punctele tale și nivelul atins în contul tău personal, 
                în secțiunea "Programul meu de loialitate".
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Ce se întâmplă cu punctele mele dacă nu fac comenzi mult timp?</h3>
              <p className="faq-answer">
                Punctele expiră după 12 luni de la data acumulării lor. 
                Te încurajăm să le folosești și să te bucuri de beneficiile tale!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="loyalty-footer">
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

export default LoyaltyProgram;