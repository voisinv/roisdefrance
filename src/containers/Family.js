// @flow

import React from 'react';
import { hierarchy, tree } from 'd3-hierarchy';

import PersonageLink from '../components/personage/link';
import PersonageLabelContainer from '../components/personage/label';

import type { FamilyData } from '../types/family';

function getTree(family: FamilyData, { height, width }) {
  if (family.children.length === 0) {
    return { links: [], descendants: [] };
  }
  const root = hierarchy(family.children[0]);
  const treeLayout = tree();

  treeLayout.size([width, height - 150]);
  treeLayout(root);

  return {
    links: root.links(),
    descendants: root.descendants()
  };
}

const Family = ({ data, actions }: { data: FamilyData, actions: any }) => {
  const [start, end] = data.centuries;
  const { personage, family } = actions;
  const height = family.height(data.depth);
  const width = family.width();
  const { links, descendants } = getTree(data, { height, width });
  
  return (
    <g style={{ stroke: '#0000ff2e' }} transform={`translate(0,
      ${family.translateY(data.cumulatedDepth)})`}>
      <rect width={width} height={height}
            style={{ fill: family.colors(data.dynasty).background }}></rect>
      <g transform='translate(0, 100)'>
        {links.map((p: any, i: number) =>
          (<PersonageLink
            link={p} actions={personage} key={i + 'link'}></PersonageLink>))}
        {descendants.map((p: any, i: number) =>
          (<PersonageLabelContainer
            actions={personage} personage={p} key={i + 'personage'}>
          </PersonageLabelContainer>))}
      </g>
      <text x={10} y={50}
            style={styles.familyName}>{data.dynasty}</text>
      <text x={10} y={90} style={styles.familyCenturies}>{start + ' - ' +
      end}</text>
    </g>);
};

const styles = {
  familyName: {
    fontSize: 60,
    fill: 'white',
    stroke: '#cacaca',
    fontWeight: 'bold',
    fillOpacity: 0.9
  },
  familyCenturies: {
    fontSize: 45,
    fill: '#f5f4f4',
    fillOpacity: 0.9
  }

};

export default Family;