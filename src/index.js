import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ImageUploader from './components/ImageUploader';
import DrawChart from './components/DrawChart';
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<ImageUploader />, document.getElementById('img'));

// ReactDOM.render(<DrawChart />, document.getElementById('chart'));  //At index.html 


serviceWorker.unregister();