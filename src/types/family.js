// @flow

export type FamilyConfiguration = {
  colors: {
    background?: string,
    strong?: string,
    weak?: string
  }
};

export type FamilyData = {
  dynasty: string,
  depth?: number,
  cumulatedDepth?: number,
  centuries: [string, string],
  children: Array<any>
};