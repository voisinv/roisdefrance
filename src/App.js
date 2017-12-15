// @flow
import React, { Component } from 'react';
import './App.css';
import data from './data';
import Family from './containers/Family';
import type { FamilyConfiguration, FamilyData } from './types/family';
import { getSVGHeightFromDepth } from './utils/depth';
import colors from './utils/colors';
import ProgressBar from './components/progressBar';

type state = {
  data: Array<any>,
  colors: any,
  configuration?: FamilyConfiguration
};

const scroll = (e) => {
  console.log(e);
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
  familyActions = {
    colors: (dynasty: string) => this.state.colors[dynasty],
    width: () => window.innerWidth,
    height: (depth: number) => getSVGHeightFromDepth(depth),
    translateY: (cumulatedDepth: number) => getSVGHeightFromDepth(
      cumulatedDepth)
  };

  getFamilyTpl(data: FamilyData) {
    return <Family
      key={data.dynasty}
      actions={Object.assign({}, {
        personage: this.personageActions,
        family: this.familyActions
      })
      }
      data={data}>
    </Family>;
  }

  render() {
    const { depth, cumulatedDepth } = data[data.length - 1];
    const maxDepth = depth + cumulatedDepth;
    const svgHeight = getSVGHeightFromDepth(maxDepth) + 75;
    return (
      <div className="App"  onScrollCapture={scroll}>
        <ProgressBar></ProgressBar>
        <svg height={svgHeight} width={window.innerWidth}>
          <g transform="translate(0,100)">
            {
              this.state.data.map(this.getFamilyTpl.bind(this))
            }
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
