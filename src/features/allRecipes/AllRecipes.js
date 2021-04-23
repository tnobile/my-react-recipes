import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredAllRecipes } from './allRecipesSlice.js'
import { loadData } from './allRecipesSlice.js';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const favoriteIconURL = 'icons/favorite.svg';

export const AllRecipes = () => {
    const allRecipes = useSelector(selectFilteredAllRecipes);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
    }

    useEffect(onFirstRender, []);

    const onAddRecipeHandler = (recipe) => {
        dispatch(addRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {allRecipes.map(recipe =>
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavoriteButton
                        onClickHandler={() => onAddRecipeHandler(recipe)}
                        icon={favoriteIconURL}>
                        Add to Favorites
                    </FavoriteButton>
                </Recipe>)}
        </div>
    );
};


