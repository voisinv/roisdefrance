// @flow
import React from 'react';

import type { PersonNode } from "../../types/person";
import { PersonNodeDefault } from './default';

export default ({ person }: PersonNode = PersonNodeDefault()) => {
  const styles = {
    fill: 'black',
    stroke: 'grey',
    strokeWidth: 3
  };
  return <circle
    cx={person.x}
    cy={person.y}
    r={30}
    style={styles}>
  </circle>;
};