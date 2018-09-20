console.log("app is running");

const app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer.',
    options:[]
}

//to add new option to array
const onformsubmit = (event) =>{
    event.preventDefault(); //to stop full page refresh
    const option = event.target.elements.option.value;  // to grab the value from the input field
    // console.log(event.target.elements.option.value);
    if(option){
        app.options.push(option);
        event.target.elements.option.value='';  //to empty the text box
        printOptions();
    }
}

//to remove all options from array
const removeAllOptions = () => {
    app.options=[]; //clearing th earray
    printOptions();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');


const printOptions = () => {
    const template = (
        <div>
            <h2>{app.title}</h2>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length>0) ? 'Here are your options' : 'no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAllOptions}>Remove all</button>
        
            <ol>
            {
                app.options.map((option) => {
                   return <li key={option}>{option}</li>
                })
            }
            </ol>
        
            <form onSubmit={onformsubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            
        </div>
    );
    ReactDOM.render(template,appRoot);    
};

printOptions();
