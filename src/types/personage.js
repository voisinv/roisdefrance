// @flow

export type Personage = {
  value: string,
  date?: [number, number],
  reign?: number,
  hasReigned?: boolean,
  children: Array<void | any>
};

export type PersonageNode = {
  data: Personage,
  x: number,
  y: number,
  children: Array<void | PersonageNode>,
  parent?: PersonageNode,
  depth: number
};

export type PersonageLink = {
  source: PersonageNode,
  target: PersonageNode
};