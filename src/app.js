class Indecision extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in hands of a computer";
        const options=["option1" , "option2" , "option3"];
        return (
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action />
                <Options options = {options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
   render() {
       return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
       );
   } 
}

class Action extends React.Component {
    handlePick() {
        alert('handlepick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
} 

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick = {this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key = {option} optionText = {option}/>)
                }
                
            </div>
        );
    }
}

//challenge to create 'Option' component and nest it in 'Options' component
class Option extends React.Component {
    render() {
        return (
            <p>{this.props.optionText}</p>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if(option){
            alert("handleoption");
            event.target.elements.option.value='';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<Indecision />,appRoot);