// @flow

import React from 'react';
import LinkContainer from '../components/personage/link';
import LabelContainer from '../components/personage/label';

function linksMap(actions) {
  return (p: any, i: number) =>
    (<LinkContainer
      link={p} actions={actions} key={i + 'link'}></LinkContainer>);
}

function descendantsMap(actions) {
  return (p: any, i: number) =>
    (<LabelContainer
      actions={actions} personage={p} key={i + 'personage'}>
    </LabelContainer>);
}

export default ({ links, descendants, actions }: { links: any, descendants: any, actions: any }) => (
  <g transform='translate(0, 100)'>
    {links.map(linksMap(actions))}
    {descendants.map(descendantsMap(actions))}
  </g>
);