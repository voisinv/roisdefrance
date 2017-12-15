import React from 'react';
import renderer from 'react-test-renderer';

import Cursor from '../Cursor';

describe('Cursor', () => {
  it('renders correctly', () => {
    const element = renderer.create(<Cursor x={10}></Cursor>).toJSON();
    expect(element).toMatchSnapshot();
  });
});