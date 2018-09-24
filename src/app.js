import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('app');

ReactDOM.render(<Indecision />,appRoot);
