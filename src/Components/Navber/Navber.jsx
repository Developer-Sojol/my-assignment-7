
const Navber = () => {
    return (
        <div className=" flex navbar bg-base-100 ">

        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
        </div>
          
          <div className=' flex-1 ' >
            <ul className='flex gap-12'>
              <li><a href="">Home</a></li>
              <li><a href="">Recipes</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Search</a></li>

            </ul>
          </div>

        <div className="flex-none gap-2">

          <div className="form-control">
            {/* <CiSearch></CiSearch> */}
            <input type="text" placeholder=" Search" className="input input-bordered w-24 md:w-auto" />
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
               
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
         </div>

        </div>

      </div>
    );
};

export default Navber;