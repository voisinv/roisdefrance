// @flow
import React from 'react';

import type { PersonLink } from '../../types/person';
import { PersonLinkDefault } from './default';


export default ({ person }: PersonLink = PersonLinkDefault()) => {
  const { source, target } = person;
  const isRoyal = isAKingDescendance(target.data);
  
  const styles = Object.assign({}, isRoyal ? {
    stroke: 'red',
    strokeWidth: 3,
    strokeOpacity: 0.5
  } : {
    stroke: 'grey',
    strokeWidth: 2,
    strokeOpacity: 0.2
  });
  
  return <line
    style={styles}
    x1={source.x} y1={source.y}
    x2={target.x} y2={target.y}
  ></line>
}

const isAKingDescendance = ({ hasReigned = false, children = [] }: any): boolean => !!(hasReigned || children.length);