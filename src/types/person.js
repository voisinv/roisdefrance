// @flow

export type Person = {
  value: string,
  date?: [number, number],
  reign?: number,
  hasReigned?: boolean,
  children: Array<void | any>
};

export type PersonNode = {
  data: Person,
  x: number,
  y: number,
  children: Array<void | PersonNode>,
  parent?: PersonNode,
  depth: number
};

export type PersonNode = {
  source: PersonNode,
  target: PersonNode
};