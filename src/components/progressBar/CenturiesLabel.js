import React from 'react';
import { romans } from '../../data';

const romansNumber: Array<number> = Object.keys(romans);

export default class extends React.PureComponent<{ width: number }> {
  getX(index) {
    return (index / romansNumber.length) * this.props.width;
  }

  render() {
    return (<g>{
      romansNumber.map((num, i) =>
        <text style={style.centuryLabel}
              key={`label-progress-${i}`}
              x={this.getX(i)}
              y={70}>{num}
        </text>)
    }</g>);
  }
}

const style = {
  centuryLabel: {
    fontSize: 20,
    fill: 'white',
    fillOpacity: 0.5
  }
};