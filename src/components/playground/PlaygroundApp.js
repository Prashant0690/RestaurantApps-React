import React, { useState } from 'react';
import Button from './Button';
import Display from './Display'

function PlaygroundApp() {

    const [counter, setCounter] = useState(0);

    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);

    return (
        <div>
            <h4>Playground App</h4>
            <Button onClickFunction = {incrementCounter} increment ={1}/>
            <Button onClickFunction = {incrementCounter} increment ={5}/>
            <Button onClickFunction = {incrementCounter} increment ={10}/>
            <Button onClickFunction = {incrementCounter} increment ={100}/>
            <Display message={counter} />
        </div>
    );

}

export default PlaygroundApp;