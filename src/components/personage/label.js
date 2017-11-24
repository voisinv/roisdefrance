// @flow

import React from 'react';
import type { PersonageNode } from '../../types/personage';
import { PersonageNodeDefault } from './default';

export default (props: { personage: PersonageNode }) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();
  return (
    <text
      x={personage.x - personage.data.value.length * 4}
      y={personage.y - 40}>
      {personage.data.value}
    </text>
  );
}