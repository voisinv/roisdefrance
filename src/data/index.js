//import bourbons from './bourbons';
//import valoisAngouleme from './valois-d-angouleme';
import merovingiens from './merovingiens.json';
import bourbons from './bourbons.json';
import capetiens from './capetiens.json';
import carolingiens from './carolingiens.json';
import { getFamilyDepth } from '../utils/depth';
import type { FamilyData } from '../types/family';

//bourbons.depth = getFamilyDepth(bourbons);
//valoisAngouleme.depth = getFamilyDepth(valoisAngouleme);
//merovingiens.depth = getFamilyDepth(merovingiens);

const romans = {
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  XI: 11,
  XII: 12,
  XIII: 13,
  XIV: 14,
  XV: 15,
  XVI: 16,
  XVII: 17,
  XVIII: 1800,
  XIX: 19
};
let cumulateDepth = 0;
let cumulatedYearOfReign = 0;
const data = [
  merovingiens,
  carolingiens,
  capetiens,
  bourbons
];

const familiesWithDepth = data.reduce((arr: Array<any>, f: FamilyData) => {
  const familyDepth = getFamilyDepth(f);
  const familyWithDepth = Object.assign({}, f, {
    depth: familyDepth,
    cumulatedDepth: cumulateDepth
  });
  cumulateDepth += familyDepth;
  return arr.concat(familyWithDepth);
}, []);
const families = data.map(({ dynasty }) => dynasty);

const dynasties = data.reduce((acc: [], family) => {
  const yearsOfReign = (romans[family.centuries[1]] - romans[family.centuries[0]]);
  const dynasty = {
    dynasty: family.dynasty,
    yearsOfReign: yearsOfReign,
    cumulatedYearsOfReign: cumulatedYearOfReign
  };
  cumulatedYearOfReign += yearsOfReign;
  return acc.concat(dynasty);
}, []);
export {
  families,
  dynasties
};
export default familiesWithDepth;