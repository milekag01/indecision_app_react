const User = (props) => {
    return (
        <div>
            <p>name:{props.name}</p>
            <p>age:{props.age}</p>
        </div>
    );
}

const appRoot = document.getElementById('app');

ReactDOM.render(<User name="milek" age={26} />,appRoot);