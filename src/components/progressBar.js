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

const { getWidth, getX } = get(width, totalYearsOfReign);

export default () => {

  return <svg style={styles}>
    {
      dynasties.map((d, i: number) => <rect
        key={`progress-${d.dynasty}`}
        x={getX(d)} y={0} width={getWidth(d)} height={height}
        fill={getColorPastel(i)}>
      </rect>)}
  </svg>;
}

const styles = {
  position: 'fixed',
  width: '100%',
};
;
;