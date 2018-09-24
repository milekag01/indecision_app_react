import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
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

ReactDOM.render((
    <Layout>
        <p>Passing content using children</p>   
    </Layout>
), appRoot);
