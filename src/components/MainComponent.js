import React from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS  } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

import Menu from '../components/MenuComponent';
import DishdetailComponent from '../components/DishdetailComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent'
import { Switch, Route, Redirect} from 'react-router-dom';


const DishWithId = ({match}) => {
    // let { dishId } = useParams();
    console.log(match.params.dishId);
    return (
        <DishdetailComponent dish = {DISHES.filter( (dish)=> dish.id === parseInt(match.params.dishId,10))[0]} 
            comments = {COMMENTS.filter( (comment)=> comment.dishId === parseInt(match.params.dishId,10) )}/>
    );
}

function Main() {

    //const [dishes, setDishes] = useState(DISHES);  // TODO: Use when we have to update dishes
    // const [selectedDishId, onDishSelect] = useState(null);
   

    return (
        <div >
            <Header />
            {/* <Menu dishes={DISHES} onDishSelect={onDishSelect}/>
            <DishdetailComponent selectedDish = {DISHES.filter( (dish) => dish.id === selectedDishId)[0]}/>
            <Home /> */}
            <Switch>
                <Route path="/home">
                    <Home dish = {DISHES.filter((dish)=> dish.featured)[0]} 
                        promotion = {PROMOTIONS.filter((promo)=> promo.featured)[0]} 
                        leader = {LEADERS.filter((leader)=> leader.featured)[0]} />
                </Route>
                <Route exact path="/menu">
                    <Menu dishes={DISHES}  />
                </Route>
                <Route path="/menu/:dishId" component={DishWithId}>
                    {/* <DishWithId /> */}
                </Route>
                <Route path="/contactus">
                    <Contact />
                </Route>
                <Route path="/aboutus">
                    <About leaders = {LEADERS}/>
                </Route>
                <Redirect to="/home" />

            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
