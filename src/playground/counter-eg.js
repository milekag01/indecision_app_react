class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //in react components we can can set the
        // values we want to track using this.state object
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        try{
            const num = localStorage.getItem('count');
            const count = parseInt(num,10);

            if(!isNaN(count)){
                this.setState(() => ({count: count}));
            }
        }catch(error){
            //do nothing
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            const num = this.state.count;
            localStorage.setItem('count',num);
        }
    }
    handleAddOne(){
        // console.log('add 1');
        //we can update the state by directly updating as shown below.
        // this.state.count++; 
        // but our component does not re-render itself if we use this method
        // instead what we do is use setState method
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleSubtractOne(){
        // console.log('subtract 1');
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
        // console.log('Reset');
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubtractOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />,appRoot);
