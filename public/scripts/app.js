console.log("app is running");

// var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
    "p",
    { id: "key" },
    "hi there"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);