import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Greet from './components/Greet'
 import Welcome from "./components/Welcome"
import Hello from "./components/Hello"
import Message from "./components/Message"
import Counter from "./components/Counter"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter/>
       {/*  <Message /> */}
          {/* <Greet name="Bruce" >
          <p>Hi how are u?</p>
          
          </Greet>
          <Greet name="Clark" />
          <Greet name="Diana" />


          <Welcome name="Bruce" >
          <p>Hi how are u?</p>
          
          </Welcome>
          <Welcome name="Clark" />
          <Welcome name="Diana" />
           */}
      </div>
    );
  }
}

export default App;
