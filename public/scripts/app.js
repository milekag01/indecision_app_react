'use strict';

console.log("app is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['option-1', 'option-2']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'no options'
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

var count = 0;
var addOne = function addOne() {
    console.log("add one");
};
var subtractOne = function subtractOne() {
    console.log("subtract one");
};
var reset = function reset() {
    console.log("reset");
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: subtractOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);
console.log(template2);
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
