
import {getFamilyDepth, getSVGHeightFromDepth} from './depth';

import {FamilyData} from "../types/family";

test('getDepth should get depth of the family', () => {
  const family: FamilyData = {
    children: [{
      children: [{
        children: [{}]
      }]
    }]
  };
  const depth = getFamilyDepth(family);
  expect(depth).toBeTruthy();
  expect(depth).toEqual(3);
});

test('getSVGHeightFromDepth should return the height of a family svg', () => {
  expect(getSVGHeightFromDepth(5)).toEqual(5 * 175);
});

test('getSVGHeightFromDepth should return 0 if no value', () => {
  expect(getSVGHeightFromDepth()).toEqual(0);
});