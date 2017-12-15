// @flow
import React from 'react';

import { progressBarWidth } from '../../utils/progressBar';
import {getWindowWidth} from '../../utils/document';
const width = getWindowWidth();

export default (props: {x: number}) => {
  return (
    <g>
      <rect x={0} y={0} width={props.x} height={75}
            style={styles.noProgression}/>
      <rect x={props.x} y={0} width={progressBarWidth} height={75}
            style={styles.progression}/>
      <rect x={props.x + progressBarWidth} y={0}
            width={width - props.x - progressBarWidth}
            height={75} style={styles.noProgression}/>
    </g>);
}

const styles = {
  progression: {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 2
  },
  noProgression: {
    fill: 'grey',
    opacity: 0.2
  }
};