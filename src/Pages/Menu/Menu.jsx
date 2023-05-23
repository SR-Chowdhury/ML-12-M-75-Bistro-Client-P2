import React from 'react';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import Cover from '../../Components/Cover/Cover';
import coverImg from '../../assets/menu/banner3.jpg';
import dessert from '../../assets/menu/dessert-bg.jpeg';
import pizza from '../../assets/menu/pizza-bg.jpg';
import soup from '../../assets/menu/soup-bg.jpg';
import PopularMenu from '../Shared/PopularMenu/PopularMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import './Menu.css';

const Menu = () => {
    return (
        <section className='menuSection'>
            <ReactHelmet title={'Menu'} />

            <Cover coverImg={coverImg} coverTitle={'our menu'} coverSubTitle={'Would you like to try our dish?'} />

            <div className='sectionGap'>
                <SectionTitle subHeading={'Dont Miss'} Heading={'Todays Offer'} />
                <PopularMenu />
            </div>

            <Cover coverImg={dessert} coverTitle={'desserts'} coverSubTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.'} />

            <div className='sectionGap'>
                <PopularMenu />
            </div>

            <Cover coverImg={pizza} coverTitle={'pizza'} coverSubTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.'} />

            <div className='sectionGap'>
                <PopularMenu />
            </div>

            <Cover coverImg={soup} coverTitle={'soup'} coverSubTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.'} />

            <div className='sectionGap'>
                <PopularMenu />
            </div>

        </section>
    );
};

export default Menu;