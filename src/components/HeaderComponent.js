import React, {useState} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom'

function Header() {

    const [isCollapseOpen , setIsCollapseOpen] = useState(false);

    const toggleNav = () => {
        setIsCollapseOpen(!isCollapseOpen);
    }

    return (
        <React.Fragment>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={() => toggleNav()} />
                    <NavbarBrand href="/">The Indian Cooking Tadka </NavbarBrand>
                    <Collapse isOpen={isCollapseOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" >
                                    <span className="fa fa-home fa-lg"></span> Home
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus" >
                                    <span className="fa fa-info fa-lg"></span> About Us
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu" >
                                    <span className="fa fa-list fa-lg"></span> menu
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus" >
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                        </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
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