import React, { useState } from 'react';
import { DISHES } from '../shared/dishes'
import Menu from '../components/MenuComponent';
import DishdetailComponent from '../components/DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';



function Main() {

    //const [dishes, setDishes] = useState(DISHES);  // TODO: Use when we have to update dishes
    const [selectedDishId, onDishSelect] = useState(null)

    return (
        <div >
            <Header />
            <Menu dishes={DISHES} onDishSelect={onDishSelect}/>
            <DishdetailComponent selectedDish = {DISHES.filter( (dish) => dish.id === selectedDishId)[0]}/>
            <Footer />
        </div>
    );
}

export default Main;
