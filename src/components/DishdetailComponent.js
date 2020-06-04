import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            const COMMENTS = this.props.selectedDish.comments.map( (comment) => {
                let commentDate = new Date(comment.date);
                const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                <p>{'--'+comment.author + ', ' + months[commentDate.getMonth()] +' '+ commentDate.getDate()+ ', ' + commentDate.getFullYear()}</p>
                </li>
                );
            }
            ) 
            return COMMENTS;
        } else {
            return (<div></div>);
        }
    }

    render() {
        console.log(this.props.selectedDish)
        return (
            <div className ="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                        {this.renderComments(this.props.selectedDish)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dishdetail;