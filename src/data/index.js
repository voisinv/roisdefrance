import bourbons from './bourbons';
import valoisAngouleme from './valois-d-angouleme';
import { getFamilyDepth } from "../utils/depth";
import type { FamilyData } from "../types/family";

bourbons.depth = getFamilyDepth(bourbons);
valoisAngouleme.depth = getFamilyDepth(valoisAngouleme);


let cumulateDepth = 0;
const data = [valoisAngouleme, bourbons].reduce((arr: Array<any>, f: FamilyData) => {
  const familyDepth = getFamilyDepth(f);
  const familyWithDepth = Object.assign({}, f, {
    depth: familyDepth,
    cumulatedDepth: cumulateDepth
  });
  cumulateDepth += familyDepth;
  return arr.concat(familyWithDepth);
}, []);
export default data;