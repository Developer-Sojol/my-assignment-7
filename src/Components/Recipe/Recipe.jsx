import PropTypes from 'prop-types'; 
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe, handleAddToCook}) => {

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className=' p-6 border  border-red-800 rounded-3xl space-y-3 ml-5'>
        <img className='w-[331px] h-[200px] rounded-xl' src={recipe_image} alt={`Cover picture of the recipe_name ${recipe_name}`} />
        <h1 className="text-3xl">{recipe_name}</h1>

        <h3>{short_description}</h3>
        <h2 className='text-xl'>Ingredients : {ingredients.length}</h2>
        
        <div>
            {
                ingredients.map (ingredient => <li>{ingredient}</li> )
            }
        
        </div>

        <hr />

        <div className='flex gap-16'>
            <div className="flex items-center gap-1">
                <IoMdTime />
                <p>{preparing_time}</p>
            </div>
            <div className="flex items-center">
                <AiOutlineFire />
                <p>{calories}</p> 
            </div> 
        </div>

        <button onClick={()=>handleAddToCook(recipe)} 
        className="btn btn-outline border-none p-4 bg-[#0BE58A]  rounded-full">Want to Cook</button>
    </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
    handleAddToCook:PropTypes.func
}
export default Recipe;