import React from 'react';
import { dynasties } from '../data';
import { getColorPastel } from '../utils/colors';

const lastDynastie = dynasties[dynasties.length - 1];
const totalYearsOfReign = lastDynastie.cumulatedYearsOfReign +
  lastDynastie.yearsOfReign;
const width = window.innerWidth;
const height = 75;

const get = (width: number, totalYearsOfReign) => ({
  getWidth(o: any) {
    return width * (o.yearsOfReign / totalYearsOfReign);
  },
  getX(o: any) {
    return width * (o.cumulatedYearsOfReign / totalYearsOfReign);
  }
});
const progressBarWidth = 40;
const { getWidth, getX } = get(width, totalYearsOfReign);

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      documentHeight: 1
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({
      documentHeight: getDocumentHeight()
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const winheight = window.innerHeight ||
      (document.documentElement || document.body).clientHeight;
    const scrollTop = window.pageYOffset ||
      (document.documentElement || document.body.parentNode ||
        document.body).scrollTop;
    const trackLength = this.state.documentHeight - winheight;
    const pctScrolled = scrollTop / trackLength * 100;
    this.setState({ x: pctScrolled / 100 });
  }

  getLineX(percentage) {
    const currentX = percentage * width;
    return currentX + progressBarWidth > width ? width - progressBarWidth : currentX;
  }

  render() {
    let lineX = this.getLineX(this.state.x);
    return (<svg style={styles.svg}>
      {
        dynasties.map((d, i: number) =>
          <rect
            key={`progress-${d.dynasty}`}
            x={getX(d)} y={0} width={getWidth(d)} height={height}
            fill={getColorPastel(i)}>
          </rect>)}
      <rect x={0} y={0} width={lineX} height={75} style={styles.noProgression}></rect>
      <rect x={lineX} y={0} width={progressBarWidth} height={75} style={styles.progression}></rect>
      <rect x={lineX + progressBarWidth} y={0} width={width - lineX - progressBarWidth} height={75} style={styles.noProgression}></rect>
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

function getDocumentHeight() {
  const D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}