import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const Recipes = () => {

    const [recipes, setRecipes] = useState ([]);

    useEffect (() => {
        fetch('Recipe.json')
        .then (res=> res.json ())
        .then (data => setRecipes(data))
    },[])

    return (
        <div className="w-2/3">
            <h1 className="text-3xl">Recipes:{recipes.length}</h1>
            <div>
                
            </div>
        </div>
    );
};


Recipes.propTypes ={
    handleAddToCook:PropTypes.func
}
export default Recipes;