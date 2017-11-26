// @flow

import React from 'react';
import { PersonageNodeDefault } from "../components/personage/default";
import PersonageCircle from '../components/personage/circle';
import PersonageLabel from '../components/personage/label';
import type { PersonageNode } from "../types/personage";
import type { FamilyConfiguration } from "../types/family";

const PersonageCard = (props: { personage: PersonageNode, configuration: FamilyConfiguration }) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();
  return <g>
    <PersonageLabel personage={personage} configuration={props.configuration}></PersonageLabel>
  </g>
};

export default PersonageCard;