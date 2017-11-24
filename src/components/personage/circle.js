// @flow
import React from 'react';

import type { PersonageNode } from "../../types/personage";
import { PersonageNodeDefault } from './default';

export default ({ personage }: { personage: PersonageNode } = { personage: PersonageNodeDefault() }) => {
  const styles = {
    fill: 'black',
    stroke: 'grey',
    strokeWidth: 3
  };
  return <circle
    cx={personage.x}
    cy={personage.y}
    r={30}
    style={styles}>
  </circle>;
};