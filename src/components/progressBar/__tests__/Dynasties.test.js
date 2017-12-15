import React from 'react';
import renderer from 'react-test-renderer';

import { Dynasty } from '../Dynasties';
import Dynasties from '../Dynasties';

describe('Dynasty', () => {
  it('renders correctly', () => {
    const props = {
      x: 100,
      fill: '#123456',
      width: 200
    };
    const element = renderer.create(<Dynasty {...props}></Dynasty>).toJSON();
    expect(element).toMatchSnapshot();
  });
});

describe('Dynasties', () => {
  it('renders correctly', () => {
    const dynasties = [
      {
        dynasty: 'Merovingiens',
        yearsOfReign: 10,
        cumulatedYearsOfReign: 0
      },
      {
        dynasty: 'Carolingiens',
        yearsOfReign: 5,
        cumulatedYearsOfReign: 10
      }
    ];
    const element = renderer
      .create(<Dynasties dynasties={dynasties}></Dynasties>).toJSON();
    expect(element).toMatchSnapshot();
    expect(element.children.length).toEqual(2);
    expect(element.children[1].type).toEqual('rect');
  });
});