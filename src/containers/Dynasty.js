// @flow

import React from 'react';
import { hierarchy, tree } from 'd3-hierarchy';
import Tree from './Tree';
import type { FamilyData } from '../types/family';

const Family = ({ data, actions }: { data: FamilyData, actions: any }) => {
  const [start, end] = data.centuries;
  const { personage, family } = actions;
  const height = family.height(data.depth);
  const width = family.width();
  const { links, descendants } = getTreeConf(data, { height, width });

  return (
    <g style={styles.g} transform={`translate(0,
      ${family.translateY(data.cumulatedDepth)})`}>
      <BackgroundArea width={width} height={height}
                      fill={family.colors(
                        data.dynasty).background}></BackgroundArea>
      <Tree links={links} descendants={descendants}
            actions={personage}></Tree>
      <DynastyInfo name={data.dynasty} start={start} end={end}></DynastyInfo>
    </g>);
};

const BackgroundArea = ({ width, height, fill }) => (
  <rect width={width} height={height} style={{ fill: fill }}></rect>);

const DynastyInfo = ({ name, start, end }) => (
  <g>
    <text x={10} y={50} style={styles.familyName} key='name'>{name}</text>
    <text x={10} y={90} style={styles.familyCenturies} key='duration'>
      {start} - {end}
    </text>
  </g>
);

function getTreeConf(family: FamilyData, { height, width }) {
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

const styles = {
  g: { stroke: '#0000ff2e' },
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