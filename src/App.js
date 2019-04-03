import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageUploader from './components/ImageUploader';
import DrawChart from './components/DrawChart';

class App extends Component {
  render() {
    return (
      <div class="alert alert-primary">
	    Click X to Close
	    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
		  <span aria-hidden="true">&times;</span>
	    </button>
      </div>
    );
  }
}

export default App;
