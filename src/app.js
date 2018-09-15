console.log("app is running");

var template = (
<div>
    <h2>Hi there...this is JSX from src</h2>
    <p>this is a paragraph</p>
    <ol>
        <li>item-1</li>
        <li>item-2</li>
    </ol>
</div>
);

// Challenge-1: create net template var jsx expression
// div 
//     h2->milek
//     p->age
//     p->location
// render new template inistead of previous one

var template2 = (
<div>
    <h2>Milek Agrawal</h2>
    <p>Age: 20</p>
    <p>Location: Gandhinagar, Gujarat</p>
</div>
);
    var appRoot = document.getElementById('app');
ReactDOM.render(template2,appRoot);