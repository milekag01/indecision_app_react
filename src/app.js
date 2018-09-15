console.log("app is running");

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
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
</div>
);
////////////////////////////////////////////////

var appRoot = document.getElementById('app');
ReactDOM.render(template2,appRoot);