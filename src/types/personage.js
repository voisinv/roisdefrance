// @flow

export type Personage = {
  id: string,
  value: string,
  date?: [number, number],
  reign?: number,
  dynasty: string,
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