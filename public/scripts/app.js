"use strict";

console.log("app is running");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        "Hi there...this is JSX from src"
    ),
    React.createElement(
        "p",
        null,
        "this is a paragraph"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "item-1"
        ),
        React.createElement(
            "li",
            null,
            "item-2"
        )
    )
);

// Challenge-1: create net template var jsx expression
// div 
//     h2->milek
//     p->age
//     p->location
// render new template inistead of previous one

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        "Milek Agrawal"
    ),
    React.createElement(
        "p",
        null,
        "Age: 20"
    ),
    React.createElement(
        "p",
        null,
        "Location: Gandhinagar, Gujarat"
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
