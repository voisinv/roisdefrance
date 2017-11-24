// @flow
import React, { Component } from 'react';
import './App.css';
import data from './source';
import FamilyArea from './components/FamilyArea';

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
          <FamilyArea data={this.state.data[0]}></FamilyArea>
        </svg>
      </div>
    );
  }
}

export default App;
