// @flow
import React from 'react';
import { dynasties } from '../data';
import { getColorPastel } from '../utils/colors';
import * as doc from '../utils/document';

const lastDynastie = dynasties[dynasties.length - 1];
const totalYearsOfReign = lastDynastie.cumulatedYearsOfReign +
  lastDynastie.yearsOfReign;
const height = 75;

const getWidthAndX = (width: number, totalYearsOfReign) => ({
  getWidth(o: any) {
    return width * (o.yearsOfReign / totalYearsOfReign);
  },
  getX(o: any) {
    return width * (o.cumulatedYearsOfReign / totalYearsOfReign);
  }
});
const progressBarWidth = 40;
const { getWidth, getX } = getWidthAndX(doc.getWindowWidth(),
  totalYearsOfReign);
type State = {
  x: number,
  documentHeight: number,
  window: {
    height: number,
    width: number
  }
}
export default class ProgressBar extends React.Component<any, State> {
  constructor() {
    super();
    this.state = {
      x: 0,
      documentHeight: 1,
      window: {
        height: 1,
        width: doc.getWindowWidth()
      }
    };
  }

  componentDidMount() {
    this.setState({
      documentHeight: doc.getDocumentHeight(),
      window: {
        height: doc.getWindowHeight(),
        width: doc.getWindowWidth()
      }
    });
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop: number = (doc.getDocumentScrollTop(): number);
    const trackLength: number = this.state.documentHeight -
      this.state.window.height;
    const pctScrolled = scrollTop / trackLength * 100;
    this.setState({ x: pctScrolled / 100 });
  }

  getLineX(percentage: number) {
    const windowWidth = this.state.window.width;
    const currentX = percentage * windowWidth;
    return currentX + progressBarWidth > windowWidth ? windowWidth -
      progressBarWidth : currentX;
  }

  render() {
    const rectX = this.getLineX(this.state.x);
    return (<svg style={styles.svg}>
      {
        dynasties.map((d, i: number) =>
          <rect
            key={`progress-${d.dynasty}`}
            x={getX(d)} y={0} width={getWidth(d)} height={height}
            fill={getColorPastel(i)}>
          </rect>)}
      <rect x={0} y={0} width={rectX} height={75}
            style={styles.noProgression}/>
      <rect x={rectX} y={0} width={progressBarWidth} height={75}
            style={styles.progression}/>
      <rect x={rectX + progressBarWidth} y={0}
            width={this.state.window.width - rectX - progressBarWidth}
            height={75} style={styles.noProgression}/>
    </svg>);
  }
}

const styles = {
  svg: {
    position: 'fixed',
    width: '100%'
  },
  progression: {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 2
  },
  noProgression: {
    fill: 'grey',
    opacity: 0.2
  }

};