import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle, Jumbotron } from 'reactstrap';
import PlaygroundApp from './playground/PlaygroundApp'
import DishdetailComponent from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);
        //console.log(props.dishes);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card  onClick={() => this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });


        return (
            <div className="container">
                {/* <Jumbotron fluid>
                    <PlaygroundApp  />
                </Jumbotron> */}
                <div className="row">
                    {menu}
                </div>
                {/* <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div> */}
                
                <DishdetailComponent selectedDish = {this.state.selectedDish}/>
                
            </div>
        );
    }
}

export default Menu;
