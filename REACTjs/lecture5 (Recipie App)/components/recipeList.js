import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({recipes}) =>{
    return (
        //BAS yha pe ek loop lga ke recipe items ko bhej rhe hai ham aor khuch nhi
        <div className="recipe-list">
            {
                recipes && recipes.map((recipe,index)=>(
                    <RecipeItem key={index} recipe={recipe}/>
                ))
            }
        </div>
    )
}

export default RecipeList;
