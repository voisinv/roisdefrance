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
  centuries: [string, string],
  children: Array<any>
};