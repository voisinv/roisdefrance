//@flow

import type { Personage, PersonageNode, PersonageLink } from '../../types/personage';

const PersonageDefault = (): Personage => ({
  id: '',
  value: '',
  children: []
});

const PersonageNodeDefault = (): PersonageNode => ({
  data: PersonageDefault(),
  x: 0,
  y: 0,
  children: [],
  depth: 0
});

const PersonageLinkDefault = (): PersonageLink => ({
  source: PersonageNodeDefault(),
  target: PersonageNodeDefault()
});

export {
  PersonageDefault,
  PersonageNodeDefault,
  PersonageLinkDefault
};