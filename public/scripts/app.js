'use strict';

console.log("app is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: []

    //to add new option to array
};var onformsubmit = function onformsubmit(event) {
    event.preventDefault(); //to stop full page refresh
    var option = event.target.elements.option.value; // to grab the value from the input field
    // console.log(event.target.elements.option.value);
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = ''; //to empty the text box
        printOptions();
    }
};

//to remove all options from array
var removeAllOptions = function removeAllOptions(event) {
    app.options = []; //clearing th earray
    printOptions();
};

var appRoot = document.getElementById('app');

var printOptions = function printOptions() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAllOptions },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onformsubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

printOptions();
