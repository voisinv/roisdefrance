// @flow

import React from 'react';
import type { PersonageNode } from "../types/personage";
import { PersonageNodeDefault } from "../components/personage/default";
import PersonageCircle from '../components/personage/circle';
import PersonageLabel from '../components/personage/label';

const PersonageCard = (props: { personage: PersonageNode }) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();
  return <g>
    <PersonageLabel personage={personage}></PersonageLabel>
    <PersonageCircle personage={personage}></PersonageCircle>
  </g>
};

export default PersonageCard;