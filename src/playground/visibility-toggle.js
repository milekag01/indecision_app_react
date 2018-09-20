class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !(prevState.visibility)
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details' : 'show details'}</button>
                {
                    this.state.visibility && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis sint officia quae pariatur </p>
                }
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />,appRoot);

// console.log("app is running");

// let temp = true;
// const toggleVisibility = () => {
//     temp=!temp;
//     renderTemp();
// }

// const appRoot = document.getElementById('app');

// const renderTemp = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{temp ? 'show details' : 'hide details'}</button>
//             <p>{!temp && 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis sint officiis!'}</p>
//         </div>
//     );
//     ReactDOM.render(template,appRoot);        
// }
// renderTemp();
