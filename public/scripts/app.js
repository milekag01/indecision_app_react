'use strict';

console.log("app is running");

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

var user = {
    name: "Milek",
    age: 20,
    location: "Gandhinagar"

    // function getLocation(location){
    //     if(location){
    //         return location;
    //     }else{
    //         return "Unknown";
    //     }
    // }

    // var template2 = (
    // <div>
    //     <h2>{user.name}</h2>
    //     <p>Age: {user.age}</p>
    //     <p>Location: {getLocation(user.location)}</p>
    // </div>
    // );

    //now we want that nothing should appear in 
    //location placeholder if location is unknown.
};function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
////////////////////////////////////////////////

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
