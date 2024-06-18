
import './App.css'
import Banner from './Components/Banner/Banner'
import Navber from './Components/Navber/Navber'
import OurRecipes from './Components/OurRecipes/OurRecipes'
import Recipes from './Components/Recipes/Recipes'
import WantToCooks from './Components/WantToCooks/WantToCooks'

function App() {


  return (
    <main className='max-w-[1320px] mx-auto'>
      <Navber></Navber>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

      <div className='md:flex justify-between'>
        <Recipes></Recipes>
        <WantToCooks></WantToCooks>

        
      </div>
    </main>


  )
}
export default App
