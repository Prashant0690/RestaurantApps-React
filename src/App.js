// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {

  // const [dishes, setDishes] = useState(DISHES);

  return (
    <BrowserRouter>
      <div >
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
