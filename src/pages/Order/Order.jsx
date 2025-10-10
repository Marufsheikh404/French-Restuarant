import { useState } from 'react';
import shopImg from '../../assets/shop/banner2.jpg'
import Cover from '../share/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderItem from '../../components/OrderItem/OrderItem';
import { useParams } from 'react-router-dom';


const Order = () => {
    const [menu] = useMenu();
    const { category } = useParams();
    const categories = ['SALAD', 'PIZZA', 'SOUP', 'DESSERTS', 'DRINKS'];
    const initialIndex = categories.indexOf(category)
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    const [index, setIndex] = useState(initialIndex);
    return (
        <div>
            <Cover image={shopImg} title={'OUR SHOP'} explain={'WOULD YOU LIKE TO TRY A DISH?'}></Cover>

            <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div>
                        {
                            <OrderItem item={salad}></OrderItem>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            <OrderItem item={pizza}></OrderItem>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            <OrderItem item={soup}></OrderItem>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            <OrderItem item={dessert}></OrderItem>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            <OrderItem item={drinks}></OrderItem>
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;