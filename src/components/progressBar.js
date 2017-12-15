// @flow
import React from 'react';
import Dynasties from './progressBar/Dynasties';
import CenturiesLabel from './progressBar/RomanCenturies';
import Cursor from './progressBar/Cursor';
import * as doc from '../utils/document';

import { dynasties } from '../data';
import {progressBarWidth} from '../utils/progressBar';

const windowWidth = doc.getWindowWidth();
const windowHeight = doc.getWindowHeight();

type State = {
  x: number,
  documentHeight: number
};

export default class ProgressBar extends React.Component<any, State> {
  constructor() {
    super();
    this.state = {
      x: 0,
      documentHeight: 1
    };
  }

  componentDidMount() {
    this.setState({
      documentHeight: doc.getDocumentHeight()
    });
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop: number = (doc.getDocumentScrollTop(): number);
    const trackLength: number = this.state.documentHeight - windowHeight;
    const pctScrolled = scrollTop / trackLength * 100;
    this.setState({ x: pctScrolled / 100 });
  }

  getCursorX(percentage: number) {
    const currentX = percentage * windowWidth;
    return currentX + progressBarWidth > windowWidth ? windowWidth -
      progressBarWidth : currentX;
  }

  render() {
    const rectX = this.getCursorX(this.state.x);
    return (<svg style={styles.svg}>
      <Dynasties dynasties={dynasties}></Dynasties>
      <CenturiesLabel width={windowWidth}></CenturiesLabel>
      <Cursor x={rectX}></Cursor>
    </svg>);
  }
}

const styles = {
  svg: {
    position: 'fixed',
    width: '100%'
  }
};