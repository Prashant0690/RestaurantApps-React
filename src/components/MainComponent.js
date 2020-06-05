import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import { DISHES } from '../shared/dishes'
import Menu from '../components/MenuComponent';
import DishdetailComponent from '../components/DishdetailComponent';



function Main() {

    //const [dishes, setDishes] = useState(DISHES);  // TODO: Use when we have to update dishes
    const [selectedDishId, onDishSelect] = useState(null)

    return (
        <div >
            <Navbar dark color="primary">
                <div className=".container">
                    <NavbarBrand href="/">in DELHI NCR -- Indian Tadka </NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={DISHES} onDishSelect={onDishSelect}/>
            <DishdetailComponent selectedDish = {DISHES.filter( (dish) => dish.id === selectedDishId)[0]}/>
        </div>
    );
}

export default Main;
