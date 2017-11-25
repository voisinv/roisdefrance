// @flow

import React from 'react';
import { PersonageNodeDefault } from "../components/personage/default";
import PersonageCircle from '../components/personage/circle';
import PersonageLabel from '../components/personage/label';
import type { PersonageNode } from "../types/personage";
import type { FamilyConfiguration } from "../types/family";

const PersonageCard = (props: { personage: PersonageNode, configuration: FamilyConfiguration }) => {
  const personage: PersonageNode = props.personage || PersonageNodeDefault();
  const styles = getCircleStyles(personage, props.configuration);
  return <g>
    <PersonageLabel personage={personage} configuration={props.configuration}></PersonageLabel>
    <PersonageCircle personage={personage} styles={styles}></PersonageCircle>
  </g>
};

function getCircleStyles({data: {hasReigned}}: PersonageNode, configuration: FamilyConfiguration) {
  return {
    fill: '#9e9e9e',
    stroke: configuration.kingLink,
    strokeOpacity: 0.7,
    strokeWidth: 3
  };
}

export default PersonageCard;