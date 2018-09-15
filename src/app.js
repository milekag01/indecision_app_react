console.log("app is running");

//Challenge-3:
//render subtitle and p-tag if subtitle exists -- logical & operator
//conditionally render new p-tag if options.length>0 'here are your options' or 'no options'
//do it using ternary operator
var app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer.',
    options:['option-1','option-2']
}

var template = (
<div>
    <h2>{app.title}</h2>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options && app.options.length>0) ? 'Here are your options' : 'no options'}</p>
    
    <ol>
        <li>item-1</li>
        <li>item-2</li>
    </ol>
</div>
);

var user = {
    name: "Milek",
    age: 20,
    location: "Gandhinagar"
}

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
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

var template2 = (
<div>
    <h2>{user.name ? user.name : 'Anonymous'}</h2>
    {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);
////////////////////////////////////////////////

var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);