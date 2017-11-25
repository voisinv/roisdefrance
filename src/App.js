// @flow
import React, { Component } from 'react';
import './App.css';
import data from './source';
import Family from './containers/Family';
import { scaleOrdinal } from 'd3-scale';
import { schemePastel2 } from 'd3-scale-chromatic';
import type { FamilyConfiguration } from "./types/family";

const rangePastel = scaleOrdinal(schemePastel2);
const getColor = (i: number): string => rangePastel(i);

type state = {
  data: Array<any>,
  configuration: FamilyConfiguration
};

class App extends Component<{}, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      data,
      configuration: {
        background: getColor(0),
        childLink: getColor(1),
        kingLink: getColor(2)
      }
    };
  }
  
  render() {
    return (
      <div className="App">
        <svg height={5000} width={window.innerWidth}>
          <Family
            configuration={this.state.configuration}
            data={this.state.data[0]}></Family>
        </svg>
      </div>
    );
  }
}

export default App;
