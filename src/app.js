class Indecision extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
   render() {
       return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in hands of a computer</h2>
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
                <p>option(s) components here</p>
                <Option />
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