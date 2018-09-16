console.log("app is running");

const app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer.',
    options:['option-1','option-2']
}

const template = (
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

let count = 0;
const template2 = (
<div>
    <h2>Count: {count}</h2>
    <button id="my-id " className="button">+1</button>
</div>
);
console.log(template2);
const appRoot = document.getElementById('app');
ReactDOM.render(template2,appRoot);