import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ImageUploader from './components/ImageUploader';
import Button from './components/Button';
import DrawChart from './components/DrawChart';
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Button />, document.getElementById('but'));
ReactDOM.render(<ImageUploader />, document.getElementById('img'));

// ReactDOM.render(<DrawChart />, document.getElementById('chart'));  //At index.html 


serviceWorker.unregister();