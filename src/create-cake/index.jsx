import React, { useState, useEffect, useRef } from 'react';
import './CreateCake.css'; // Importăm fișierul CSS

export default function CreateCake() {
  // State-ul formularului cu valori prestabilite
  const [formData, setFormData] = useState({
    shape: 'rotund',        // Valoare implicită
    portions: '8',          // Valoare implicită
    baseType: 'Vanilie',    // Valoare implicită
    baseColor: '',
    creamType: 'Frișcă',    // Valoare implicită
    frosting: 'Fondant',    // Valoare implicită
    decorations: ['Ornamente de zahăr'], // Valoare implicită
    themeColor: '#d53f8c',  // Valoare implicită - roz
    message: '',
    occasion: 'Zi de naștere'  // Valoare implicită
  });

  // State pentru precomanda eveniment
  const [eventData, setEventData] = useState({
    eventDate: '',
    guestCount: '20',
    eventType: 'Zi de naștere',
    additionalDetails: '',
    selectedTime: '12:00',
    needsDelivery: false,
    deliveryAddress: '',
  });

  // Calculul pentru prăjituri/torturi necesare
  const [cakeCalculation, setCakeCalculation] = useState({
    recommendedCakes: 0,
    recommendedPortions: 0
  });

  // State pentru rezervări disponibile
  const [availableDates, setAvailableDates] = useState([]);
  
  // State pentru preview-ul tortului (separat de formData)
  const [cakePreview, setCakePreview] = useState(null);
  
  // State pentru tab activ (design tort sau precomandă)
  const [activeTab, setActiveTab] = useState('design');
  
  // Folosim un ref pentru a urmări dacă este prima renderare
  const isFirstRender = useRef(true);

  // Paleta de culori predefinite
  const colorPalette = [
    '#d53f8c', // roz
    '#805ad5', // violet
    '#3182ce', // albastru
    '#38a169', // verde
    '#d69e2e', // galben
    '#e53e3e', // roșu
    '#718096', // gri
    '#ffffff', // alb
  ];

  // Tipuri de blat disponibile
  const baseTypes = [
    'Vanilie',
    'Ciocolată',
    'Red Velvet',
    'Lămâie',
    'Cocos',
    'Morcov',
    'Fructe de pădure',
    'Caramel'
  ];

  // Tipuri de cremă disponibile
  const creamTypes = [
    'Frișcă',
    'Cremă de brânză',
    'Ciocolată',
    'Vanilie',
    'Caramel',
    'Fructe de pădure',
    'Mascarpone',
    'Lămâie'
  ];

  // Tipuri de glazură disponibile
  const frostingTypes = [
    'Fondant',
    'Ganache de ciocolată',
    'Cremă de unt',
    'Glazură royal',
    'Glazură de zahăr',
    'Caramel',
    'Jeleu de fructe'
  ];

  // Decoruri disponibile
  const decorationOptions = [
    'Figurine',
    'Fructe proaspete',
    'Fructe confiate',
    'Flori comestibile',
    'Ornamente de zahăr',
    'Ștrasuri comestibile',
    'Ciocolată decorativă',
    'Glazură colorată'
  ];

  // Ocazii disponibile
  const occasionOptions = [
    'Zi de naștere',
    'Nuntă',
    'Botez',
    'Aniversare',
    'Absolvire',
    'Valentine\'s Day',
    'Crăciun',
    'Paște',
    'Halloween'
  ];

  // Tipuri de evenimente pentru precomandă
  const eventTypes = [
    'Zi de naștere',
    'Nuntă',
    'Botez',
    'Aniversare',
    'Corporativ',
    'Absolvire',
    'Logodnă',
    'Petrecere privată'
  ];

  // Ore disponibile pentru rezervare
  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  // Handler pentru schimbarea input-urilor tortului
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          decorations: [...prev.decorations, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          decorations: prev.decorations.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handler pentru schimbarea datelor de eveniment
  const handleEventChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  // Handler pentru selectarea culorii
  const handleColorSelect = (color) => {
    setFormData(prev => ({ ...prev, themeColor: color }));
  };

  // Handler pentru submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cake Config:', formData);
    
    // Actualizăm preview-ul doar când utilizatorul submitează formularul
    setCakePreview({...formData});
  };

  // Handler pentru submit precomandă
  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log('Event Preorder:', eventData);
    
    // Aici am putea adăuga logica de trimitere a precomenzii
    alert(`Precomanda pentru evenimentul din data de ${eventData.eventDate} a fost înregistrată cu succes!`);
  };

  // Generează date disponibile pentru următoarele 30 de zile
  useEffect(() => {
    const generateAvailableDates = () => {
      const dates = [];
      const today = new Date();
      
      for (let i = 1; i <= 30; i++) {
        const nextDate = new Date();
        nextDate.setDate(today.getDate() + i);
        
        // Excludem weekend-urile (foarte ocupate)
        const dayOfWeek = nextDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          dates.push({
            date: nextDate.toISOString().split('T')[0],
            available: Math.random() > 0.3 // Simulăm disponibilitatea
          });
        }
      }
      
      return dates;
    };
    
    setAvailableDates(generateAvailableDates());
  }, []);

  // Calculăm numărul recomandat de torturi în funcție de numărul de invitați
  useEffect(() => {
    const guestCount = parseInt(eventData.guestCount, 10) || 0;
    const avgPortionsPerCake = 8;
    
    // Calculăm câte prăjituri/torturi sunt necesare
    const neededCakes = Math.ceil(guestCount / avgPortionsPerCake);
    
    setCakeCalculation({
      recommendedCakes: neededCakes,
      recommendedPortions: neededCakes * avgPortionsPerCake
    });
  }, [eventData.guestCount]);

  // Effect pentru a actualiza preview-ul inițial - doar la prima renderare
  useEffect(() => {
    if (isFirstRender.current) {
      setCakePreview({...formData});
      isFirstRender.current = false;
    }
  }, []);

  // Pentru a verifica dacă o dată este disponibilă
  const isDateAvailable = (dateStr) => {
    const matchingDate = availableDates.find(d => d.date === dateStr);
    return matchingDate ? matchingDate.available : false;
  };

  // Generare calendar pentru următoarele 7 zile
  const renderCalendar = () => {
    const today = new Date();
    const calendarDays = [];
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      const dayName = new Intl.DateTimeFormat('ro-RO', { weekday: 'short' }).format(date);
      const dayNum = date.getDate();
      const isAvailable = isDateAvailable(dateStr);
      
      calendarDays.push(
        <div 
          key={dateStr}
          className={`calendar-day ${isAvailable ? 'available' : 'unavailable'} ${eventData.eventDate === dateStr ? 'selected' : ''}`}
          onClick={() => isAvailable && handleEventChange({ target: { name: 'eventDate', value: dateStr } })}
        >
          <div className="day-name">{dayName}</div>
          <div className="day-number">{dayNum}</div>
          <div className="availability-indicator">{isAvailable ? 'Disponibil' : 'Ocupat'}</div>
        </div>
      );
    }
    
    return (
      <div className="mini-calendar">
        <h3>Calendar Rezervări (7 zile)</h3>
        <div className="calendar-days">
          {calendarDays}
        </div>
      </div>
    );
  };

  return (
    <div className="create-cake-container">
      <div className="create-cake-inner">
        <h1 className="create-cake-title">Configurează-ți Tortul de Vis</h1>
        
        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'design' ? 'active' : ''}`}
            onClick={() => setActiveTab('design')}
          >
            Design Tort
          </button>
          <button 
            className={`tab-button ${activeTab === 'event' ? 'active' : ''}`}
            onClick={() => setActiveTab('event')}
          >
            Precomandă pentru Eveniment
          </button>
        </div>
        
        {activeTab === 'design' ? (
          <div className="cake-content-container">
            {/* Coloana din stânga - Formular */}
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-row form-row-cols">
                  {/* Forma tortului */}
                  <div className="form-group">
                    <label className="form-label">Forma tortului:</label>
                    <select
                      name="shape"
                      value={formData.shape}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="rotund">Rotund</option>
                      <option value="patrat">Pătrat</option>
                      <option value="inima">În formă de inimă</option>
                      <option value="dreptunghi">Dreptunghi</option>
                      <option value="special">Formă specială</option>
                    </select>
                  </div>

                  {/* Număr de porții */}
                  <div className="form-group">
                    <label className="form-label">Număr de porții:</label>
                    <select
                      name="portions"
                      value={formData.portions}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="6">6 porții</option>
                      <option value="8">8 porții</option>
                      <option value="10">10 porții</option>
                      <option value="12">12 porții</option>
                      <option value="16">16 porții</option>
                      <option value="20">20 porții</option>
                      <option value="24">24 porții</option>
                      <option value="30">30 porții</option>
                    </select>
                  </div>

                  {/* Ocazia */}
                  <div className="form-group">
                    <label className="form-label">Ocazia:</label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {occasionOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row form-row-cols">
                  {/* Tipul de blat */}
                  <div className="form-group">
                    <label className="form-label">Tipul de blat:</label>
                    <select
                      name="baseType"
                      value={formData.baseType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {baseTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Tipul de cremă */}
                  <div className="form-group">
                    <label className="form-label">Tipul de cremă:</label>
                    <select
                      name="creamType"
                      value={formData.creamType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {creamTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Tipul de glazură */}
                  <div className="form-group">
                    <label className="form-label">Glazură:</label>
                    <select
                      name="frosting"
                      value={formData.frosting}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {frostingTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Decoruri - checkboxuri */}
                <div className="form-group">
                  <label className="form-label">Decorațiuni:</label>
                  <div className="checkbox-grid">
                    {decorationOptions.map(decoration => (
                      <div key={decoration} className="checkbox-item">
                        <input
                          type="checkbox"
                          id={`dec-${decoration}`}
                          name="decorations"
                          value={decoration}
                          checked={formData.decorations.includes(decoration)}
                          onChange={handleChange}
                          className="checkbox-input"
                        />
                        <label htmlFor={`dec-${decoration}`}>{decoration}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mesaj personalizat */}
                <div className="form-group">
                  <label className="form-label">Mesaj personalizat pe tort:</label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Ex: La mulți ani, Maria!"
                  />
                </div>

                {/* Culoare tematică */}
                <div className="form-group">
                  <label className="form-label">Culoare tematică:</label>
                  <div className="color-swatch-container">
                    {colorPalette.map(color => (
                      <div
                        key={color}
                        className={`color-swatch ${formData.themeColor === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(color)}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Buton de submit */}
                <button type="submit" className="btn">
                  Previzualizează tortul
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="cake-content-container">
            {/* Formular precomandă eveniment */}
            <div className="form-container event-form">
              <h2 className="section-title">Planificare Automată Eveniment</h2>
              
              <form onSubmit={handleEventSubmit}>
                <div className="form-row form-row-cols">
                  {/* Tipul evenimentului */}
                  <div className="form-group">
                    <label className="form-label">Tipul evenimentului:</label>
                    <select
                      name="eventType"
                      value={eventData.eventType}
                      onChange={handleEventChange}
                      className="form-select"
                    >
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Numărul de invitați */}
                  <div className="form-group">
                    <label className="form-label">Număr de invitați:</label>
                    <input
                      type="number"
                      name="guestCount"
                      value={eventData.guestCount}
                      onChange={handleEventChange}
                      min="1"
                      className="form-input"
                    />
                  </div>
                  
                  {/* Data evenimentului */}
                  <div className="form-group">
                    <label className="form-label">Data evenimentului:</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={eventData.eventDate}
                      onChange={handleEventChange}
                      className="form-input"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                
                <div className="form-row form-row-cols">
                  {/* Ora selectată */}
                  <div className="form-group">
                    <label className="form-label">Ora ridicării:</label>
                    <select
                      name="selectedTime"
                      value={eventData.selectedTime}
                      onChange={handleEventChange}
                      className="form-select"
                    >
                      {availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Checkbox pentru livrare */}
                  <div className="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id="needsDelivery"
                      name="needsDelivery"
                      checked={eventData.needsDelivery}
                      onChange={handleEventChange}
                      className="checkbox-input"
                    />
                    <label htmlFor="needsDelivery" className="checkbox-label">
                      Doresc livrare la adresă
                    </label>
                  </div>
                </div>
                
                {/* Câmp adresă de livrare condiționat */}
                {eventData.needsDelivery && (
                  <div className="form-group">
                    <label className="form-label">Adresa de livrare:</label>
                    <textarea
                      name="deliveryAddress"
                      value={eventData.deliveryAddress}
                      onChange={handleEventChange}
                      className="form-textarea"
                      rows="3"
                      placeholder="Introduceți adresa completă de livrare"
                    ></textarea>
                  </div>
                )}
                
                {/* Detalii suplimentare */}
                <div className="form-group">
                  <label className="form-label">Detalii suplimentare:</label>
                  <textarea
                    name="additionalDetails"
                    value={eventData.additionalDetails}
                    onChange={handleEventChange}
                    className="form-textarea"
                    rows="3"
                    placeholder="Specificați preferințe, alergii sau alte cerințe speciale"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-lg">
                  Trimite Precomanda
                </button>
              </form>
            </div>
            
            {/* Coloana dreaptă - Secțiunea de calendar și calculator */}
            <div className="info-section">
              {/* Mini calendar pentru selectarea datei */}
              {renderCalendar()}
              
              {/* Calculator de torturi */}
              <div className="cake-calculator">
                <h3>Calculator Torturi Necesare</h3>
                <div className="calculator-info">
                  <div className="calculator-row">
                    <span>Număr invitați:</span>
                    <span className="calculator-value">{eventData.guestCount}</span>
                  </div>
                  <div className="calculator-row">
                    <span>Torturi recomandate:</span>
                    <span className="calculator-value highlight">{cakeCalculation.recommendedCakes}</span>
                  </div>
                  <div className="calculator-row">
                    <span>Total porții estimate:</span>
                    <span className="calculator-value">{cakeCalculation.recommendedPortions}</span>
                  </div>
                </div>
                <div className="calculator-note">
                  * Calculul este bazat pe o medie de 8 porții per tort
                </div>
              </div>
              
              {/* Informații suplimentare */}
              <div className="additional-info">
                <h3>Informații Importante</h3>
                <ul className="info-list">
                  <li>Comenzile pentru evenimente trebuie plasate cu minim 3 zile înainte</li>
                  <li>Tariful de livrare variază în funcție de distanță</li>
                  <li>Putem adapta rețetele pentru diverse cerințe (fără gluten, vegane, etc.)</li>
                  <li>Pentru evenimente mari, vă recomandăm să faceți o degustare în prealabil</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}