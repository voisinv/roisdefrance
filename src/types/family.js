// @flow

export type FamilyConfiguration = {
  background: string,
  childLink: string,
  kingLink: string
};

export type FamilyData = {
  familyName: string,
  depth?: number,
  cumulatedDepth?: number,
  children: Array<any>
};