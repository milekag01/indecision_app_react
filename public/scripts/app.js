'use strict';

console.log("app is running");

// Challenge-2:
//  create app object title/subtitle
//  use title/subtitle in template
// render new template inistead of previous one
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item-1'
        ),
        React.createElement(
            'li',
            null,
            'item-2'
        )
    )
);

// var userName = 'Milek Agrawal';
// var userAge = 20;
// var userLoc = 'Gandhinagar';

// var template2 = (
// <div>
//     <h2>{userName}</h2>
//     <p>Age: {userAge}</p>
//     <p>Location: {userLoc}</p>
// </div>
// );

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
