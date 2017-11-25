// @flow
import React, { Component } from 'react';
import './App.css';
import data from './data';
import Family from './containers/Family';
import { scaleOrdinal } from 'd3-scale';
import { schemePastel2, schemeDark2 } from 'd3-scale-chromatic';
import type { FamilyConfiguration, FamilyData } from "./types/family";
import { getSVGHeightFromDepth } from "./utils/depth";

const rangePastel = scaleOrdinal(schemePastel2);
const rangeDark = scaleOrdinal(schemeDark2);

const getColorPastel = (i: number): string => rangePastel(i);
const getColorDark = (i: number): string => rangeDark(i);

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
        background: getColorPastel(0),
        childLink: getColorDark(0),
        kingLink: getColorDark(1)
      }
    };
  }
  
  getFamilyTpl(data: FamilyData, index: number) {
    const configuration = {
      background: getColorPastel(index),
      childLink: getColorDark(index),
      kingLink: getColorDark(index)
    };
    
    return <Family
      key={data.familyName}
      configuration={configuration}
      data={data}></Family>
  }
  
  render() {
    const {depth, cumulatedDepth} = data[data.length - 1];
    const maxDepth = depth + cumulatedDepth;
    return (
      <div className="App">
        <svg height={getSVGHeightFromDepth(maxDepth)} width={window.innerWidth}>
          {
            this.state.data.map(this.getFamilyTpl)}
        </svg>
      </div>
    );
  }
}

export default App;
