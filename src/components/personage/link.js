// @flow
import React from 'react';

import type { PersonageLink } from '../../types/personage';
import { PersonageLinkDefault } from './default';
import type { FamilyConfiguration } from '../../types/family';

const Link = (props: { link: PersonageLink, configuration: FamilyConfiguration }) => {
  const { source, target }: PersonageLink = props.link ||
  PersonageLinkDefault();
  const kingLink = props.configuration ? props.configuration.colors.strong : '';

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
  ></line>;
};

export default (props: { link: PersonageLink, actions: any }) => {
  const configuration = {
    colors: props.actions.colors(props.link.source.data.dynasty)
  };
  return <Link link={props.link} configuration={configuration}/>;
};

const isAKingDescendance = ({ hasReigned = false, children = [] }: any): boolean => !!(hasReigned ||
  children.length);