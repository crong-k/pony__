import React, { Component } from 'react';
import './App.css';
import ImageUploader from './components/ImageUploader';
import InfoButton from './components/InfoButton';

class App extends Component {
  render() {
    return (
      <div>
      ReactDOM.render(<InfoButton />, document.getElementById('but'));
      ReactDOM.render(<ImageUploader />, document.getElementById('img'));
      </div>
    );
  }
}
export default App;
