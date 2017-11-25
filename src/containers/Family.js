// @flow

import React, { Component } from 'react';
import { hierarchy, tree } from 'd3-hierarchy';

import PersonageLink from '../components/personage/link';
import PersonageContainer from './PersonageCard';
import { getSVGHeightFromDepth } from '../utils/depth';

import type { FamilyData, FamilyConfiguration } from "../types/family";
import type { PersonageNode } from "../types/personage";


type State = {
  configuration: FamilyConfiguration,
  data: FamilyData,
  links: Array<void | PersonageLink>,
  descendants: Array<void | PersonageNode>,
  width: number,
  height: number
}

class Family extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        familyName: '',
        children: [],
        depth: 0
      },
      links: [],
      descendants: [],
      width: 0,
      height: 0,
      ...props
    };
  }
  
  componentDidMount() {
    this.setState({ data: this.props.data });
    this.updateTree(this.props.data);
  }
  
  updateTree(family: FamilyData) {
    if (family.children.length === 0) {
      return;
    }
    const root = hierarchy(family.children[0]);
    const treeLayout = tree();
    const WIDTH = window.innerWidth;
    const HEIGHT = getSVGHeightFromDepth(this.state.data.depth);
    
    treeLayout.size([WIDTH, HEIGHT - 150]);
    treeLayout(root);
    
    this.setState({
      links: root.links(),
      descendants: root.descendants(),
      width: WIDTH,
      height: HEIGHT
    });
  }
  
  render() {
    return (
      <g style={{ stroke: '#0000ff2e' }} transform={'translate(0,' + getSVGHeightFromDepth(this.state.data.cumulatedDepth) + ')'}>
        <rect width={this.state.width} height={this.state.height}
              style={{ fill: this.state.configuration.background }}></rect>
        <g transform='translate(0, 100)'>
          {this.state.links.map((p: any, i: number) =>
            (<PersonageLink
              link={p}
              configuration={this.state.configuration}
              key={i + 'link'}></PersonageLink>))}
          {this.state.descendants.map((p: any, i: number) =>
            (<PersonageContainer
              configuration={this.state.configuration}
              personage={p} key={i + 'personageperson'}></PersonageContainer>))}
        </g>
        <text x={10} y={50} style={styles.familyName}>{this.state.data.familyName}</text>
        <text x={10} y={90} style={styles.familyCenturies}>XVII - XIX</text>
      </g>
    )
  }
}

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