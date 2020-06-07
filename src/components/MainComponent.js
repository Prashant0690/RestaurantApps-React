import React, { useState } from 'react';
import { DISHES } from '../shared/dishes'
import Menu from '../components/MenuComponent';
import DishdetailComponent from '../components/DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


function Main() {

    //const [dishes, setDishes] = useState(DISHES);  // TODO: Use when we have to update dishes
    const [selectedDishId, onDishSelect] = useState(null)

    return (
        <div >
            <Header />
            {/* <Menu dishes={DISHES} onDishSelect={onDishSelect}/>
            <DishdetailComponent selectedDish = {DISHES.filter( (dish) => dish.id === selectedDishId)[0]}/>
            <Home /> */}
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/menu">
                    <Menu dishes={DISHES}  />
                </Route>
                <Redirect to="/home" />

            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
