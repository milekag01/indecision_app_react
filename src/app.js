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
                <p>options components here</p>
            </div>
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