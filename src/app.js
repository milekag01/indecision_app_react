class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    //fetching data from database when the app starts
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options: options}) );
            }
        } catch(error) {
            //if error like wrong datatype, do nothing
        }
    }

    //as new options is added it stores it
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }) );
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove!==option )//to delete the option
        })
        )
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
        this.setState((prevState) => ({ options: prevState.options.concat(option) }) );
    }
    render() {
        const subtitle = "Put your life in hands of a computer";

        return (
            <div>
                <Header subtitle = {subtitle} />
                <Action 
                hasOptions = {this.state.options.length}
                handlePick = {this.handlePick}
                />
                <Options 
                options = {this.state.options}
                handleDeleteOptions= {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption} 
                />
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

Indecision.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
   );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick = {props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => ( 
                    <Option key = {option} 
                    optionText = {option}
                    handleDeleteOption = {props.handleDeleteOption}
                    />)
                )
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick = {(event) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
}

//AddOption is not stateless
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
    
        this.setState(() => ({ error:error}) );
        if(!error){
            event.target.elements.option.value='';
        }
        
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