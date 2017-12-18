import React from 'react';
import renderer from 'react-test-renderer';

import CenturiesLabel from '../RomanCenturies';

describe('CenturiesLabel', () => {
  it('renders correctly', () => {
    const element = renderer
      .create(<CenturiesLabel width={100}></CenturiesLabel>).toJSON();
    expect(element).toMatchSnapshot();
  });
});