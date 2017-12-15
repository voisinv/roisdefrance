// @flow
import React from 'react';
import * as utils from '../../utils/progressBar';
import { getWindowWidth } from '../../utils/document';
import { getColorPastel } from '../../utils/colors';

export const Dynasty = ({ x, fill, width }: { x: number, fill: string, width: number }) => {
  return (
    <rect
      x={x} y={0}
      width={width}
      height={utils.height}
      fill={fill}>
    </rect>);
};

export default class extends React.PureComponent<any> {

  render() {
    const dynasties = this.props.dynasties;
    const lastDynastie = dynasties[dynasties.length - 1];
    const totalYearsOfReign = lastDynastie.cumulatedYearsOfReign +
      lastDynastie.yearsOfReign;
    const getWidth = utils.getWidth(getWindowWidth(), totalYearsOfReign);
    const getX = utils.getX(getWindowWidth(), totalYearsOfReign);

    return (
      <g>
        {dynasties.map((d, i: number) =>
          <Dynasty
            key={`progress-${d.dynasty}`}
            x={getX(d)}
            width={getWidth(d)}
            fill={getColorPastel(i)}>
          </Dynasty>)}
      </g>);
  }
}