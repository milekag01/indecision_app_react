class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option); 
    }
    handleAddOption(option) {
        if(!option){
            return 'Enter valid value to add item';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This option already exist';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in hands of a computer";

        return (
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action 
                hasOptions = {this.state.options.length}
                handlePick = {this.handlePick}
                />
                <Options 
                options = {this.state.options}
                handleDeleteOptions= {this.handleDeleteOptions}
                />
                <AddOption handleAddOption = {this.handleAddOption}/>
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
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                        disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        );
    }
} 

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key = {option} optionText = {option}/>)
                }
                
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>{this.props.optionText}</p>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(event) {
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);    
    
        this.setState(() => {
            return {
                error:error
            };
        });

        event.target.elements.option.value='';
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
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