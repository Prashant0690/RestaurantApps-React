import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import PlaygroundApp from './playground/PlaygroundApp'

class Menu extends Component {

    constructor(props) {
        super(props);
        //console.log(props.dishes);
        this.state = {
            selectedDish: null
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onDishSelect(dish.id)}>
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
            </div>
        );
    }
}

export default Menu;
