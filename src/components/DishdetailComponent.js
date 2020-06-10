import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';



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

function RenderComments({ comments }) {
    if (comments != null) {
        const COMMENTS = comments.map((comment) => {
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                        <RenderComments comments={props.comments} />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Dishdetail;