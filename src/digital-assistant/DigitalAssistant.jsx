import React, { useState } from 'react';
import './DigitalAssistant.css';
import { recipes, categories } from '../recipes/RecipesData';
const DigitalAssistant = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [showAssistant, setShowAssistant] = useState(true);

  // Întrebările pentru asistentul virtual
  const questions = [
    {
      id: 'dessertType',
      question: 'Ce tip de desert preferi?',
      options: [
        { value: 'classic', label: 'Clasic și tradițional' },
        { value: 'seasonal', label: 'Sezonal, cu ingrediente proaspete' },
        { value: 'healthy', label: 'Sănătos și nutritiv' }
      ]
    },
    {
      id: 'restrictions',
      question: 'Ai restricții alimentare?',
      options: [
        { value: 'none', label: 'Nu, consum orice' },
        { value: 'vegan', label: 'Sunt vegan/postesc' },
        { value: 'gluten-free', label: 'Fără gluten' },
        { value: 'sugar-free', label: 'Fără zahăr' }
      ]
    },
    {
      id: 'flavors',
      question: 'Ce aromă preferi?',
      options: [
        { value: 'chocolate', label: 'Ciocolată' },
        { value: 'fruit', label: 'Fructe' },
        { value: 'vanilla', label: 'Vanilie' },
        { value: 'nuts', label: 'Nuci și semințe' }
      ]
    }
  ];

  // Funcție pentru a gestiona răspunsurile
  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Generare recomandări bazate pe răspunsuri
      generateRecommendations();
    }
  };

  // Mapare între restricții și categorii
  const restrictionToCategory = {
    'none': 'all',
    'vegan': 'vegan',
    'gluten-free': 'without-gluten',
    'sugar-free': 'without-sugar'
  };

  // Funcție pentru a genera recomandări
  const generateRecommendations = () => {
    // Filtrăm rețetele în funcție de răspunsuri
    let filteredRecipes = [...recipes];
    
    // Filtrare după restricții alimentare
    const categoryFilter = restrictionToCategory[answers.restrictions];
    if (categoryFilter && categoryFilter !== 'all') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.category === categoryFilter);
    }

    // Filtrare în funcție de tipul de desert
    if (answers.dessertType === 'classic') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.category === 'classic');
    } else if (answers.dessertType === 'seasonal') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.category === 'seasonal');
    } else if (answers.dessertType === 'healthy') {
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.category === 'vegan' || 
        recipe.category === 'without-sugar' || 
        recipe.category === 'without-gluten'
      );
    }

    // Filtrare în funcție de aromă
    // Acest filtru este mai complex și ar trebui să fie bazat pe ingrediente sau descrieri
    let flavorFilteredRecipes = [];
    if (answers.flavors === 'chocolate') {
      flavorFilteredRecipes = filteredRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes('ciocolată') || 
        recipe.title.toLowerCase().includes('cacao') ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes('ciocolată') || ing.toLowerCase().includes('cacao'))
      );
    } else if (answers.flavors === 'fruit') {
      flavorFilteredRecipes = filteredRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes('fruct') || 
        recipe.ingredients.some(ing => ing.toLowerCase().includes('fruct') || ing.toLowerCase().includes('mere') || ing.toLowerCase().includes('pere') || ing.toLowerCase().includes('afine') || ing.toLowerCase().includes('zmeură'))
      );
    } else if (answers.flavors === 'vanilla') {
      flavorFilteredRecipes = filteredRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes('vanilie') || 
        recipe.ingredients.some(ing => ing.toLowerCase().includes('vanilie'))
      );
    } else if (answers.flavors === 'nuts') {
      flavorFilteredRecipes = filteredRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes('nucă') || 
        recipe.title.toLowerCase().includes('alune') || 
        recipe.ingredients.some(ing => ing.toLowerCase().includes('nucă') || ing.toLowerCase().includes('alune') || ing.toLowerCase().includes('migdale'))
      );
    }

    // Dacă filtrarea după aromă a dat rezultate, le folosim, altfel revenim la filtrarea anterioară
    const finalRecipes = flavorFilteredRecipes.length > 0 ? flavorFilteredRecipes : filteredRecipes;
    
    // Selectăm maxim 3 recomandări
    let recommendations = finalRecipes.slice(0, 3);

    // Dacă nu avem suficiente recomandări, adăugăm din restul rețetelor
    if (recommendations.length < 2 && recipes.length > 0) {
      const remainingRecipes = recipes.filter(recipe => !recommendations.some(r => r.id === recipe.id));
      recommendations = [...recommendations, ...remainingRecipes.slice(0, 3 - recommendations.length)];
    }

    setRecommendations(recommendations);
  };

  // Resetare asistent
  const resetAssistant = () => {
    setStep(0);
    setAnswers({});
    setRecommendations([]);
  };

  // Toggle pentru afișarea/ascunderea asistentului
  const toggleAssistant = () => {
    setShowAssistant(!showAssistant);
    if (!showAssistant) {
      resetAssistant();
    }
  };

  return (
    <div className="digital-assistant-container">
      <div className="bakery-background"></div>
      <div className="content-wrapper">
        <h2 className="main-title">Cofetăria Dolce & Delizii</h2>
        <div className="assistant-panel">
          <div className="assistant-header">
            <div className="assistant-avatar">👩‍🍳</div>
            <h3>Asistent Virtual Cofetărie</h3>
          </div>
          
          {step < questions.length && recommendations.length === 0 ? (
            <div className="assistant-question">
              <h4>{questions[step].question}</h4>
              <div className="assistant-options">
                {questions[step].options.map(option => (
                  <button 
                    key={option.value} 
                    className="option-button"
                    onClick={() => handleAnswer(questions[step].id, option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="assistant-recommendations">
              <h4>Iată recomandările mele pentru tine:</h4>
              {recommendations.length > 0 ? (
                <div className="recommendations-list">
                  {recommendations.map(recipe => (
                    <div key={recipe.id} className="recommendation-card">
                      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                      <div className="recipe-details">
                        <h5>{recipe.title}</h5>
                        <p>{recipe.excerpt}</p>
                        <div className="recipe-tags">
                          <span className="tag">{recipe.difficulty}</span>
                          <span className="tag">Prep: {recipe.prepTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Ne pare rău, nu am găsit recomandări potrivite. Te rugăm să încerci alte preferințe.</p>
              )}
              <button className="reset-button" onClick={resetAssistant}>
                Încearcă din nou
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalAssistant;