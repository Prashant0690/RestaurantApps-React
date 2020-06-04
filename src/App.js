import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes'
import Menu from './components/MenuComponent';


function App() {

  const [dishes, setDishes] = useState(DISHES);

  return (
    <div >
      <Navbar dark color="primary">
        <div className=".container">
          <NavbarBrand href="/">in DELHI NCR -- Indian Tadka </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
