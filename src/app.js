console.log("app is running");

// Challenge-2:
//  create app object title/subtitle
//  use title/subtitle in template
// render new template inistead of previous one
var app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer.'
}

var template = (
<div>
    <h2>{app.title}</h2>
    <p>{app.subtitle}</p>
    <ol>
        <li>item-1</li>
        <li>item-2</li>
    </ol>
</div>
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
ReactDOM.render(template,appRoot);