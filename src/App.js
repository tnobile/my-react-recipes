import React from 'react';

import { AllRecipes } from './features/allRecipes/AllRecipes.js';
import { SearchTerm } from './features/searchTerm/SearchTerm.js';
import { FavoriteRecipes } from './features/favoriteRecipes/FavoriteRecipes.js';

const App = () => {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes />
      </section>
    </main>
  )
}

export default App;