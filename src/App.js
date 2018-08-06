import React, { Component } from 'react';
import Accordion from './components/Accordion';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Accordion>
          <Accordion.Item title="Toggle 1" open={true}>
          With this code, our FormField component will now accept input, select, textarea, or our custom RadioGroup component. Our RadioGroup component will in turn validate that it's children are labels each containing a single input of type radio, or checkbox.
          </Accordion.Item>
          <Accordion.Item title="Toggle 2">
            Content 2
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default App;
