// @flow
import React from 'react';

import type { PersonageNode } from "../../types/personage";
import { PersonageNodeDefault } from './default';

export default (props: {personage: PersonageNode, styles: any}) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();
  
  return <circle
    cx={personage.x}
    cy={personage.y}
    r={30}
    style={props.styles}>
  </circle>;
};