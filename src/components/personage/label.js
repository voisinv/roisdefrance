// @flow

import React from 'react';
import * as d3 from 'd3';
import { PersonageNodeDefault } from './default';
import type { PersonageNode } from '../../types/personage';
import type { FamilyConfiguration } from '../../types/family';

const paddingLeftRight = 18;
const paddingTopBottom = 5;

function createLabel(
  node: any, personage: PersonageNode, configuration: FamilyConfiguration) {
  const x = personage.x;
  const y = personage.y;
  const g = d3.select('body');

  const hasReigned = personage.data.hasReigned;
  g.append('rect')
    .attr('rx', 2)
    .attr('ry', 2)
    .attr('fill', hasReigned ? configuration.colors.strong : '#9c9a9a')
    .attr('opacity', hasReigned ? 1 : 1);

  g.append('text')
    .attr('x', x)
    .attr('y', y)
    .attr('fill', hasReigned ? 'white' : '#f1f1f1')
    .attr('font-family', 'unset')
    .attr('font-weight', '300')
    .attr('stroke', 'none')
    .attr('text-anchor', 'middle')
    .text(personage.data.value);
  /*g.append('text')
    .attr('x', x)
    .attr('y', y)
    .attr('fill', hasReigned ? 'white' : '#f1f1f1')
    .attr('stroke', 'none')
    .attr('font-size', 13)
    .attr('text-anchor', 'middle')
    .text(personage.data.date[0] + '-' + personage.data.date[1]);*/

  g.select('text').each(function() {
    const bbox = this.getBBox();
    g.select('rect')
      .attr('x', x - (bbox.width / 2) - (paddingLeftRight / 2))
      .attr('y', y - (bbox.height) + (paddingTopBottom / 2) - 2)
      .attr('width', bbox.width + paddingLeftRight)
      .attr('height', bbox.height + paddingTopBottom)
      .attr('text-anchor', 'middle');
  });
}

export const Label = (props: { personage: PersonageNode, configuration: FamilyConfiguration }) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();

  return <g ref={node => createLabel(node, personage, props.configuration)}
            className={'label-' + personage.data.id}></g>;

};

export default (props: { personage: PersonageNode, actions: any }) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();
  const configuration = {
    colors: props.actions.colors(personage.data.dynasty)
  };
  return <g>
    <Label personage={personage} configuration={configuration}>
    </Label>
  </g>;
};