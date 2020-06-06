import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

function Header() {

    return (
        <React.Fragment>
            <Navbar dark >
                <div className="container">
                    <NavbarBrand href="/">The Indian Cooking Tadka </NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Keep Calm and Love Cooking!!</h1>
                            <p>Listen to the people who love you. Believe that they are worth living for even when you don't believe it. Seek out the memories depression takes away and project them into the future. Be brave; be strong; take your pills. Exercise because it's good for you even if every step weighs a thousand pounds. Eat when food itself disgusts you. Reason with yourself when you have lost your reason.</p>
                        </div>
                    </div>

                </div>
            </Jumbotron>
        </React.Fragment>
    );
}

export default Header;