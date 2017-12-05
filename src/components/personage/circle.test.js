import React from 'react';
import renderer from 'react-test-renderer';

import PersonageCircle from './circle';
import { PersonageNodeDefault } from './default';

test('should render a circle', () => {
  const p = Object.assign({}, PersonageNodeDefault(), {
    x: 150,
    y: 130
  });
  const circle = renderer.create(<PersonageCircle personage={p}/>).toJSON();
  expect(circle).toBeTruthy();
  expect(circle.type).toEqual('circle');
  
  expect(circle.props.cx).toBeDefined();
  expect(circle.props.cx).toEqual(150);
  
  expect(circle.props.cy).toBeDefined();
  expect(circle.props.cy).toEqual(130);
  
  expect(circle.props.r).toBeDefined();
  expect(circle.props.r).toEqual(30);
});

test('should render a default circle', () => {
  const circle = renderer.create(<PersonageCircle />).toJSON();
  expect(circle).toBeTruthy();
  expect(circle.type).toEqual('circle');
  
  expect(circle.props.cx).toBeDefined();
  expect(circle.props.cx).toEqual(0);
  
  expect(circle.props.cy).toBeDefined();
  expect(circle.props.cy).toEqual(0);
  
  expect(circle.props.r).toBeDefined();
  expect(circle.props.r).toEqual(30);
});

