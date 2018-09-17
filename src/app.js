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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
} 

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <p key={option}>{option}</p>)
                }
                
            </div>
        );
    }
}

//challenge to create 'Option' component and nest it in 'Options' component
class Option extends React.Component {
    render() {
        return (
            <p>option component here</p>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="option" />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<Indecision />,appRoot);