import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderDish({ dish }) {
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

function RenderComments({ dish }) {
    if (dish != null) {
        const COMMENTS = dish.comments.map((comment) => {
            let commentDate = new Date(comment.date);
            const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{'--' + comment.author + ', ' + months[commentDate.getMonth()] + ' ' + commentDate.getDate() + ', ' + commentDate.getFullYear()}</p>
                </li>
            );
        }
        )
        return COMMENTS;
    } else {
        return (<div></div>);
    }
}

const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                        <RenderComments dish={props.selectedDish} />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Dishdetail;