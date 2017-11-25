// @flow

import React, { Component } from 'react';
import { hierarchy, tree } from 'd3';

import PersonageLink from '../components/personage/link';
import PersonageContainer from './PersonageCard';


type State = {
  data: {
    familyName: string,
    children: Array<any>
  }
}

class Family extends Component<State, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        familyName: '',
        children: []
      }
    }
  }
  
  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }
  
  getMaxDepth(parent: any = {}): number {
    let depth = 1;
    function test(p: any = {}) {
      p.children = p.children || [];
      const depths = p.children.filter((child: any = {}) => child.children);
      if (depths.length) {
        depth++;
        return test(depths[0]);
      }
      return depth;
    }
    return test(parent) * 150;
  }
  
  
  render() {
    const root = hierarchy(this.props.data.children[0]);
    const treeLayout = tree();
    const WIDTH = window.innerWidth;
    const HEIGHT = this.getMaxDepth(this.state.data.children[0]);
    
    treeLayout.size([WIDTH, HEIGHT - 100]);
    treeLayout(root);
    
    const links = root.links();
    const descendants = root.descendants();
    
    return (
      <g>
        <rect width={WIDTH} height={HEIGHT} style={{ fill: '#ff81006b' }}></rect>
        <g style={{ stroke: '#0000ff2e' }} transform='translate(0, 50)'>
          {links.map((p: any, i: number) =>
            (<PersonageLink link={p} key={i + 'link'}></PersonageLink>))}
          {descendants.map((p: any, i: number) =>
            (<PersonageContainer personage={p} key={i + 'personageperson'}></PersonageContainer>))}
        </g>
      </g>
    )
  }
}

export default Family;