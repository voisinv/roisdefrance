// @flow
import React from 'react';

import type { PersonageLink } from '../../types/personage';
import { PersonageLinkDefault } from './default';
import type { FamilyConfiguration } from "../../types/family";


export default (props: {link: PersonageLink, configuration: FamilyConfiguration}) => {
  const {source, target}: PersonageLink = props.link || PersonageLinkDefault();
  const kingLink = props.configuration ? props.configuration.kingLink : '';
  
  const isRoyal = isAKingDescendance(target.data);
  
  const styles = Object.assign({}, isRoyal ? {
    stroke: kingLink,
    strokeWidth: 2
  } : {
    stroke: kingLink,
    strokeWidth: 2,
    strokeDasharray: 10,
    opacity: 0.7
  });
  
  return <line
    style={styles}
    x1={source.x} y1={source.y}
    x2={target.x} y2={target.y}
  ></line>
}

const isAKingDescendance = ({ hasReigned = false, children = [] }: any): boolean => !!(hasReigned || children.length);