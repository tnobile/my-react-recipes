import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl = './icons/unfavorite.svg';

export const FavoriteRecipes = () => {
    const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
    const dispatch = useDispatch();

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {favoriteRecipes.map(createRecipeComponent)}
        </div>
    );

    // Helper Function
    function createRecipeComponent(recipe) {
        return (
            <Recipe recipe={recipe} key={recipe.id}>
                <FavoriteButton
                    onClickHandler={() => onRemoveRecipeHandler(recipe)}
                    icon={unfavoriteIconUrl} >
                    Remove Favorite
                </FavoriteButton>
            </Recipe>
        )
    }
};