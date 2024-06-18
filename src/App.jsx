
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navber from './Components/Navber/Navber'
import OurRecipes from './Components/OurRecipes/OurRecipes'
import Recipes from './Components/Recipes/Recipes'
import WantToCooks from './Components/WantToCooks/WantToCooks'

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const handleAddToCook = recipe =>{
    const isExists = wantToCook.find(wtc =>wtc.recipe_id === recipe.recipe_id);
    if (!isExists) {
      const newWantToCook = [...wantToCook, recipe];
      setWantToCook (newWantToCook);
    }
    else{
      alert("Already Added")
    }

  }



  return (
    <main className='max-w-[1320px] mx-auto'>
      <Navber></Navber>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

      <div className='md:flex justify-between'>
        <Recipes handleAddToCook={handleAddToCook} ></Recipes>
        <WantToCooks wantToCook={wantToCook}></WantToCooks>

        
      </div>
    </main>

  )
}
export default App
