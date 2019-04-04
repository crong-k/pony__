import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ImageUploader from './components/ImageUploader';
import InfoButton from './components/InfoButton';
import DatePicker from './components/Calend';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<InfoButton />, document.getElementById('butt'));
ReactDOM.render(<DatePicker/>,document.getElementById('calen'));
ReactDOM.render(<ImageUploader />, document.getElementById('img'));

// ReactDOM.render(<DrawChart />, document.getElementById('chart'));  //At index.html 


serviceWorker.unregister();