import PropTypes from 'prop-types';

const WantCook = ({ wantCook, handleAddToCooking }) => {
    const { recipe_name, preparing_time, calories } = wantCook;
    return (
        <div className='flex gap-8 space-y-6 '>
            <h3 className="text-base mt-6 min-w-20">{recipe_name}</h3>
            <h3 className="text-base ">{preparing_time}</h3>
            <h3 className="text-base  ">{calories}</h3>

            <div>
                <button onClick={handleAddToCooking}
                    className="btn btn-outline border-none p-4 bg-[#0BE58A]  rounded-full">Prepararing</button>
            </div>

        </div >
    );
};

WantCook.propTypes = {
    wantCook: PropTypes.object,
    handleAddToCooking: PropTypes.func
}
export default WantCook;