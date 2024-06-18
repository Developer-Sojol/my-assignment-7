import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleAddToCook}) => {

    const [recipes, setRecipes] = useState ([]);

    useEffect (() => {
        fetch('Recipe.json')
        .then (res=> res.json ())
        .then (data => setRecipes(data))
    },[])

    return (
        <div className="w-2/3">
            <h1 className="text-3xl">Recipes:{recipes.length}</h1>
            <div className="md:grid grid-cols-2 gap-6 m-6">
                {
                    recipes.map(recipe => <Recipe 
                        key={recipe.recipe_id}
                        recipe={recipe}
                        handleAddToCook={handleAddToCook}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};


Recipes.propTypes ={
    handleAddToCook:PropTypes.func
}
export default Recipes;