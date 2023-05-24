import React, { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../../Components/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../Components/FoodCard/FoodCard';
import useMenu from '../../Hooks/useMenu';

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinks = menu?.filter(item => item.category === 'drinks');
    const dessert = menu?.filter(item => item.category === 'dessert');
    const salad = menu?.filter(item => item.category === 'salad');
    const soup = menu?.filter(item => item.category === 'soup');
    const pizza = menu?.filter(item => item.category === 'pizza');

    return (
        <div>
            <Cover coverImg={orderCover} coverTitle={'Our shop'} coverSubTitle={'WOULD YOU LIKE TO TRY A DISH?'} />
            <div className='orderContainer'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <FoodCard/>
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;