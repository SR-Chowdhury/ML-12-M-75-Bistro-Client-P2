import React, { useState, useEffect } from 'react';
import Menu from '../../../Components/Menu/Menu';
import './PopularMenu.css';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const PopularMenu = () => {

    const customStyle = {
        color: '#1F2937',
        borderBottom: '3px solid #1F2937'
    };

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(item => item.category === 'popular');
                setMenu(popular);
            })
            .catch(err => console.log(err.message))
    }, []);

    return (
        <section>
            <div className="popularMenuContainer">
                {
                    menu.map((item, index) => <Menu key={index} item={item} />)
                }
            </div>
            <div className='text-center mb-5'>
                <PrimaryBtn btnInfo={'view full menu'} styles={customStyle} />
            </div>
        </section>
    );
};

export default PopularMenu;