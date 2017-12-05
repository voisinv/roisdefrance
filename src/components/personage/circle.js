// @flow
import React from 'react';
import * as d3Selection from 'd3-selection';
import type { PersonageNode } from "../../types/personage";
import { PersonageNodeDefault } from './default';
import type { FamilyConfiguration } from "../../types/family";

function createCircle(node: any, { x, y, data: { value, hasReigned } }: PersonageNode, configuration: FamilyConfiguration) {
  const g = d3Selection.select(node).append('g');
  g.append('circle')
    .attr('cx', x)
    .attr('cy', y)
    .attr('r', 0)
    .attr('fill', '#9e9e9e')
    .attr('stroke', hasReigned ? configuration.kingLink : 'grey')
    .attr('stroke-opacity', 0.7)
    .attr('stroke-width', 3)
    .transition()
    .attr('r', 20);
  
  g.append('text')
    .attr('x', x)
    .attr('y', y + 10)
    .attr('fill', '#9e9e9e')
    .attr('stroke', '#8a8a8a')
    .attr('font-weight', 'bold')
    .attr('font-size', 30)
    .attr('text-anchor', 'middle')
    .text(value.substring(0 , 1))
}

export default (props: { personage: PersonageNode, configuration: FamilyConfiguration }) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();
  
  return <g ref={node => createCircle(node, personage, props.configuration)}
            className={'circle-' + personage.data.id}></g>
  
};