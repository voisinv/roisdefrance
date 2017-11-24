//@flow

import type { Personage, PersonageNode, PersonageLink } from '../../types/personage';

const PersonageDefault = (): Personage => {
  return {
    value: '',
    children: []
  };
};

const PersonageNodeDefault = (): PersonageNode => {
  return {
    data: PersonageDefault(),
    x: 0,
    y: 0,
    children: [],
    depth: 0
  };
};

const PersonageLinkDefault = (): PersonageLink => {
  return {
    source: PersonageNodeDefault(),
    target: PersonageNodeDefault()
  }
};

export {
  PersonageDefault,
  PersonageNodeDefault,
  PersonageLinkDefault
};