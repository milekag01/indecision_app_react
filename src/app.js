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
const addOne = () => {
    count++;
    renderCounterApp();
}
const subtractOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count=0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template2,appRoot);
};

//rendering the template in the starting
renderCounterApp();