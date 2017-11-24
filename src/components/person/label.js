// @flow

import React from 'react';
import type { PersonNode } from '../../types/person';
import { PersonNodeDefault } from './default';

export default (person: PersonNode = PersonNodeDefault()) => {
  return (
    <text x={person.x - person.data.value.length * 4} y={person.y - 40}>{person.data.value}</text>
  );
}