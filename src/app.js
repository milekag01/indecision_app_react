import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.content}
            <p>Footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(<Layout content={template}/>,appRoot);
