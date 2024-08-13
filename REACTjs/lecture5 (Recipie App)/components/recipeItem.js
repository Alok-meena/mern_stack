import React from "react";

const RecipeItem = ({recipe}) => {
    return (
        <div className="recipe-item">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <p>{recipe.strInstructions}</p>
            <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
                View Recipe
            </a>
        </div>
    )
};

export default RecipeItem;
