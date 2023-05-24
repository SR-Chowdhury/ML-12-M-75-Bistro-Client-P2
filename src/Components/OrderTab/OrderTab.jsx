import React from 'react';
import FoodCard from '../FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='my-10 grid md:grid-cols-3 gap-10'>
            {
                items.map((item, index) => <FoodCard key={index} item={item} />)
            }
        </div>
    );
};

export default OrderTab;