import image from '../Images/banner.jpg'
const Banner = () => {
    return (
        <div className='bg-no-repeat bg-cover bg-slate-950 text-white rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${image}) ` }}>
            <div className='bg-[#00000054] p-32
          h-[600px] '>
                <div className="text-center space-y-10">

                    <h1 className="text-5xl font-bold ">Discover an exceptional cooking 12 <br /> class tailored for you!</h1>
                    <p className="text-center">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding  <br /> problems to become an exceptionally well world-class Programmer.</p>

                    <div className="space-x-16 mt-6 ">
                        <button className="btn btn-outline border-none p-4 bg-[#0BE58A]  rounded-full">Explore Now</button>

                        <button className="btn btn-outline px-9 text-white border-red-600  rounded-full">Primary</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;