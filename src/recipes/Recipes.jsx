import React, { useState, useEffect } from 'react';
import './Recipes.css';
import { recipes, categories } from './RecipesData.js';

function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleRecipes, setVisibleRecipes] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRecipe, setActiveRecipe] = useState(null);
  
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeRecipe]);
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const loadMore = () => {
    setVisibleRecipes(prev => Math.min(prev + 3, filteredRecipes.length));
  };
  
  const openRecipe = (recipe) => {
    setActiveRecipe(recipe);
  };
  
  const closeRecipe = () => {
    setActiveRecipe(null);
  };
  
  return (
    <section className="recipes-section" id="recipes">
      <div className="container">
        <div className="recipes-header">
          <h2 className="section-title">Rețete de la Noi pentru Voi</h2>
          <p className="recipes-intro">
            Explorează colecția noastră de rețete simple și povești despre deserturi, direct de la cofetarii noștri. 
            Recreează acasă gusturile și aromele preferate din cofetăria noastră.
          </p>
        </div>
        
        <div className="recipes-filters">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Caută rețete..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          
          <div className="category-filters">
            {categories.map(category => (
              <button 
                key={category.id} 
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {filteredRecipes.length > 0 ? (
          <>
            <div className="recipes-grid">
              {filteredRecipes.slice(0, visibleRecipes).map(recipe => (
                <div key={recipe.id} className="recipe-card" onClick={() => openRecipe(recipe)}>
                  <div className="recipe-image-container">
                    <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                    <div className="recipe-category-badge">{categories.find(c => c.id === recipe.category)?.name}</div>
                  </div>
                  <div className="recipe-content">
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <p className="recipe-excerpt">{recipe.excerpt}</p>
                    <div className="recipe-meta">
                      <span className="recipe-difficulty">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20v-6M6 20V10M18 20V4"></path>
                        </svg>
                        {recipe.difficulty}
                      </span>
                      <span className="recipe-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {recipe.prepTime} + {recipe.cookTime}
                      </span>
                    </div>
                    <button className="read-more-button">Citește rețeta</button>
                  </div>
                </div>
              ))}
            </div>
            
            {visibleRecipes < filteredRecipes.length && (
              <div className="load-more-container">
                <button className="load-more-button" onClick={loadMore}>
                  Încarcă mai multe rețete
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-recipes">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <p>Nu am găsit nicio rețetă care să corespundă criteriilor tale.</p>
          </div>
        )}
      </div>
      
      {activeRecipe && (
        <div className="recipe-modal-overlay">
          <div className="recipe-modal">
            <button className="close-modal-button" onClick={closeRecipe}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="recipe-modal-header">
              <div className="recipe-modal-category">{categories.find(c => c.id === activeRecipe.category)?.name}</div>
              <h2 className="recipe-modal-title">{activeRecipe.title}</h2>
              <div className="recipe-modal-meta">
                <span className="recipe-modal-difficulty">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20v-6M6 20V10M18 20V4"></path>
                  </svg>
                  Dificultate: {activeRecipe.difficulty}
                </span>
                <span className="recipe-modal-prep-time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  Pregătire: {activeRecipe.prepTime}
                </span>
                <span className="recipe-modal-cook-time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Preparare: {activeRecipe.cookTime}
                </span>
              </div>
            </div>
            
            <div className="recipe-modal-content">
              <div className="recipe-modal-image-container">
                <img src={activeRecipe.image} alt={activeRecipe.title} className="recipe-modal-image" />
              </div>
              
              <div className="recipe-story">
                <h3 className="recipe-section-title">Povestea rețetei</h3>
                <p>{activeRecipe.story}</p>
              </div>
              
              <div className="recipe-ingredients">
                <h3 className="recipe-section-title">Ingrediente</h3>
                <ul className="ingredients-list">
                  {activeRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div className="recipe-instructions">
                <h3 className="recipe-section-title">Mod de preparare</h3>
                <ol className="instructions-list">
                  {activeRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-item">{instruction}</li>
                  ))}
                </ol>
              </div>
              
              <div className="recipe-tips">
                <h3 className="recipe-section-title">Sfaturi și trucuri</h3>
                <ul className="tips-list">
                  {activeRecipe.tips.map((tip, index) => (
                    <li key={index} className="tip-item">{tip}</li>
                  ))}
                </ul>
              </div>
              
              <div className="recipe-share">
                <h3 className="recipe-section-title">Împarte bucuria</h3>
                <p>Ai încercat această rețetă? Etichetează-ne în postările tale și folosește hashtag-ul #DulceleNostru</p>
                <div className="social-buttons">
                  <button className="social-button facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </button>
                  <button className="social-button pinterest">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                    Pinterest
                  </button>
                  <button className="social-button email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </button>
                </div>
              </div>
              
              <div className="recipe-action-buttons">
                <button className="recipe-print-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                  Printează rețeta
                </button>
                <button className="recipe-save-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Salvează pentru mai târziu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Recipes;