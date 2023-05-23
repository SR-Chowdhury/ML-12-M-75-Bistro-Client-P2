import React, {useState, useEffect} from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Menu from '../../../Components/Menu/Menu';
import './PopularMenu.css';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect( () => {
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
            <SectionTitle subHeading={'Check it Out'} Heading={'From Our Menu'}/>
            <div className="popularMenuContainer">
                {
                    menu.map((item, index) => <Menu key={index} item={item}/>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;