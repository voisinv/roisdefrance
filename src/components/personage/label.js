// @flow

import React from 'react';
import * as d3 from 'd3';
import type { PersonageNode } from '../../types/personage';
import { PersonageNodeDefault } from './default';

const paddingLeftRight = 18;
const paddingTopBottom = 5;

export default (props: { personage: PersonageNode }) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();
  const x = personage.x;
  const y = personage.y - 40;
  const g = d3.select('.' + personage.data.id);
  
  g.append('rect')
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('fill', '#696969');
  
  g.append('text')
    .attr('x', x)
    .attr('y', y)
    .attr('fill', 'white')
    .attr('stroke', 'none')
    .attr('text-anchor', 'middle')
    .text(personage.data.value);
  
  
  g.select('text').each(function() {
    const bbox = this.getBBox();
    g.select('rect')
      .attr('x', x - (bbox.width / 2) - (paddingLeftRight / 2))
      .attr('y', y - bbox.height + paddingTopBottom / 2)
      .attr('width', bbox.width + paddingLeftRight)
      .attr('height', bbox.height + paddingTopBottom)
      
      .attr('text-anchor', 'middle');
  });
  
  return (
    <g className={personage.data.id}></g>
  );
}