import { scaleOrdinal } from 'd3-scale';
import { schemePastel2, schemeDark2 } from 'd3-scale-chromatic';

import { families } from '../data';

const rangePastel = scaleOrdinal(schemePastel2);
const rangeDark = scaleOrdinal(schemeDark2);

export const getColorPastel = (i: number): string => rangePastel(i);
export const getColorDark = (i: number): string => rangeDark(i);

const obj = families.reduce((acc, name: string, index) =>
  Object.assign(acc, {
    [name]: {
      background: getColorPastel(index),
      strong: getColorDark(index),
      weak: getColorDark(index),
    },
  }), {});
console.log(obj);
export default obj;