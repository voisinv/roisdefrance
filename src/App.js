// @flow
import React, { Component } from 'react';
import './App.css';
import data from './data';
import Dynasty from './containers/Dynasty';
import type { FamilyConfiguration, FamilyData } from './types/family';
import { getSVGHeightFromDepth } from './utils/depth';
import colors from './utils/colors';
import ProgressBar from './containers/progressBar';

type state = {
  data: Array<any>,
  colors: any,
  configuration?: FamilyConfiguration
};

class App extends Component<{}, state> {

  constructor(props: any) {
    super(props);
    this.state = {
      data,
      colors
    };
  }

  personageActions = {
    colors: (dynasty: string) => this.state.colors[dynasty]
  };
  dynastyActions = {
    colors: (dynasty: string) => this.state.colors[dynasty],
    width: () => window.innerWidth,
    height: (depth: number) => getSVGHeightFromDepth(depth),
    translateY: (cumulatedDepth: number) => getSVGHeightFromDepth(
      cumulatedDepth)
  };

  getDynastyTemplate(data: FamilyData) {
    return <Dynasty
      key={data.dynasty}
      actions={Object.assign({}, {
        personage: this.personageActions,
        family: this.dynastyActions
      })}
      data={data}>
    </Dynasty>;
  }

  render() {
    const { depth, cumulatedDepth } = data[data.length - 1];
    const maxDepth = depth + cumulatedDepth;
    const svgHeight = getSVGHeightFromDepth(maxDepth) + 75;
    return (
      <div className="App">
        <ProgressBar></ProgressBar>
        <svg height={svgHeight} width={window.innerWidth}>
          <g transform="translate(0,100)">
            {
              this.state.data.map(this.getDynastyTemplate.bind(this))
            }
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
