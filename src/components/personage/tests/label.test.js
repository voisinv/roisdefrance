// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import { Label } from '../label';

import type { PersonageNode } from '../../../types/personage';
import type { FamilyConfiguration } from '../../../types/family';

// @TODO inspect react + d3 test
xdescribe('Label', () => {
  it('renders correctly', () => {
    const personage: PersonageNode = {
      data: {
        id: '',
        value: '',
        dynasty: 'Valois',
        children: []
      },
      x: 16,
      y: 10,
      children: [],
      depth: 1
    };
    const configuration: FamilyConfiguration = {
      colors: {
        strong: '#345678',
        weak: '#987654',
        background: '#456780'
      }
    };
    const element = renderer
      .create(<Label personage={personage}
                     configuration={configuration}></Label>);
    //expect(element).toMatchSnapshot();
  });
});
