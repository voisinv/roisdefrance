
import React from 'react';
import renderer from 'react-test-renderer';

import PersonCircle from './person-circle';

test('should render a circle', () => {
  const Person = renderer.create(<PersonCircle/>).toJSON();
  expect(Person).toBeTruthy();
  expect(Person.type).toEqual('circle');
});