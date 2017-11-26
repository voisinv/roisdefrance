//import bourbons from './bourbons';
//import valoisAngouleme from './valois-d-angouleme';
import merovingiens from './merovingiens.json';
import carolingiens from './carolingiens.json';
import { getFamilyDepth } from "../utils/depth";
import type { FamilyData } from "../types/family";

//bourbons.depth = getFamilyDepth(bourbons);
//valoisAngouleme.depth = getFamilyDepth(valoisAngouleme);
//merovingiens.depth = getFamilyDepth(merovingiens);


let cumulateDepth = 0;
const data = [
  merovingiens,
  carolingiens,
  //valoisAngouleme,
  //bourbons
].reduce((arr: Array<any>, f: FamilyData) => {
  const familyDepth = getFamilyDepth(f);
  const familyWithDepth = Object.assign({}, f, {
    depth: familyDepth,
    cumulatedDepth: cumulateDepth
  });
  cumulateDepth += familyDepth;
  return arr.concat(familyWithDepth);
}, []);
export default data;