import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';

const appRoot = document.getElementById('app');

ReactDOM.render(<Indecision />,appRoot);

class OldSyntax {
    constructor(){
        this.name="milek";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `hi i am ${this.name}.`;
    }
}
const old = new OldSyntax();
const greeting = old.getGreeting;
console.log(greeting());

//////////////////////

class newSyntax {
    name = 'jen';   //we are able to define it without using constructor function
    getGreeting = () =>{
        return `hi i am ${this.name}.`;
    }
}
const news = new newSyntax();
const newgetGreeting = news.getGreeting;
console.log(newgetGreeting());