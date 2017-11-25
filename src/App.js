// @flow
import React, { Component } from 'react';
import './App.css';
import data from './source';
import Family from './containers/Family';

type state = {
  data: Array<any>
};

class App extends Component<{}, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      data
    }
  }
  
  render() {
    return (
      <div className="App">
        <svg height={5000} width={window.innerWidth}>
          <Family data={this.state.data[0]}></Family>
        </svg>
      </div>
    );
  }
}

export default App;
