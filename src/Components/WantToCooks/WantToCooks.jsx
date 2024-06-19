import PropTypes from 'prop-types';
import WantCook from '../WantCook/WantCook';

const WantToCooks = ({ wantToCook }) => {
    return (
        <div className="md:w-1/3">
            <div className='border border-red-700 rounded-3xl mt-6 p-10'>
                <div className='text-center'>
                    <h2 className="text-3xl">Want To Cooks :{wantToCook.length}</h2>
                    <hr />
                    <div className='flex gap-14 my-5 w-3/4'>
                        <p>Name</p>
                        <p>Time</p>
                        <p className='-ml-6'>Calories</p>
                    </div>
                    <div className='w-1/4'>

                    </div>
                </div>
                {
                    wantToCook.map(wantCook => <WantCook
                        key={wantCook.recipe_id}
                        wantCook={wantCook}
                    ></WantCook>)
                }

                <div className='text-center mt-5'>
                    <h2 className="text-3xl">Currently Cooking:{ }</h2>
                    <hr />
                    <div className='flex justify-between my-5 w-3/4'>
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

WantToCooks.propTypes = {
    wantToCook: PropTypes.array

}
export default WantToCooks;