// @flow

import React from 'react';
import type { PersonageNode } from '../../types/personage';
import { PersonageNodeDefault } from './default';

export default (person: PersonageNode = PersonageNodeDefault()) => {
  return (
    <text x={person.x - person.data.value.length * 4} y={person.y - 40}>{person.data.value}</text>
  );
}