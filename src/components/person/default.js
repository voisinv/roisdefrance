//@flow

import type { Person, PersonNode, PersonLink } from '../../types/person';

const PersonDefault = (): Person => {
  return {
    value: '',
    children: []
  };
};

const PersonNodeDefault = (): PersonNode => {
  return {
    data: PersonDefault(),
    x: 0,
    y: 0,
    children: [],
    depth: 0
  };
};

const PersonLinkDefault = ():PersonLink => {
  return {
    source: PersonNodeDefault(),
    target: PersonNodeDefault()
  }
};

export {
  PersonDefault,
  PersonNodeDefault,
  PersonLinkDefault
};