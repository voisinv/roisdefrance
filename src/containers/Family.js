// @flow

import React, { Component } from 'react';
import { hierarchy, tree } from 'd3-hierarchy';

import PersonageLink from '../components/personage/link';
import PersonageContainer from './PersonageCard';

import type {FamilyConfiguration} from "../types/family";
import type { PersonageNode } from "../types/personage";

type FamilyObject = {
  familyName: string,
  children: Array<any>
}

type State = {
  configuration: FamilyConfiguration,
  data: FamilyObject,
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
        children: []
      },
      links: [],
      descendants: [],
      width: 0,
      height: 0,
      configuration: props.configuration
    };
  }
  
  componentDidMount() {
    this.setState({data: this.props.data});
    this.updateTree(this.props.data);
  }
  
  updateTree(family: FamilyObject) {
    if (family.children.length === 0) {
      return;
    }
    const root = hierarchy(family.children[0]);
    const treeLayout = tree();
    const WIDTH = window.innerWidth;
    const HEIGHT = this.getMaxDepth(family.children[0]);
    
    treeLayout.size([WIDTH, HEIGHT - 150]);
    treeLayout(root);
    
    this.setState({
      links: root.links(),
      descendants: root.descendants(),
      width: WIDTH,
      height: HEIGHT
    });
  }
  
  getMaxDepth(parent: any = {}): number {
    let depth = 1;
    
    function test(p: any = {}): number {
      p.children = p.children || [];
      const depths = p.children.filter((child: any = {}) => child.children);
      if (depths.length) {
        depth++;
        return test(depths[0]);
      }
      return depth;
    }
    
    return test(parent) * 175;
  }
  
  
  render() {
    return (
      <g style={{ stroke: '#0000ff2e' }}>
        <rect width={this.state.width} height={this.state.height} style={{ fill: this.state.configuration.background }}></rect>
        <g transform='translate(0, 100)'>
          {this.state.links.map((p: any, i: number) =>
            (<PersonageLink link={p} key={i + 'link'}></PersonageLink>))}
          {this.state.descendants.map((p: any, i: number) =>
            (<PersonageContainer personage={p} key={i + 'personageperson'}></PersonageContainer>))}
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