import React from 'react';
import renderer from 'react-test-renderer';

import PersonageLink from './link';
import { PersonageNodeDefault, PersonageLinkDefault } from './default';

test('should render a link', () => {
  const source = Object.assign({}, PersonageNodeDefault(), { x: 140, y: 150 });
  const target = Object.assign({}, PersonageNodeDefault(), { x: 160, y: 170 });
  const l = Object.assign({}, { source, target });
  
  const line = renderer.create(<PersonageLink link={l} />).toJSON();
  
  expect(line).toBeTruthy();
  expect(line.type).toEqual('line');
  
  expect(line.props.x1).toBeDefined();
  expect(line.props.x1).toEqual(140);
  
  expect(line.props.y1).toBeDefined();
  expect(line.props.y1).toEqual(150);
  
  expect(line.props.x2).toBeDefined();
  expect(line.props.x2).toEqual(160);
  
  expect(line.props.y2).toBeDefined();
  expect(line.props.y2).toEqual(170);
});

test('should render a default link', () => {
  const line = renderer.create(<PersonageLink />).toJSON();
  expect(line).toBeTruthy();
  expect(line.type).toEqual('line');
  
  expect(line.props.x1).toBeDefined();
  expect(line.props.x1).toEqual(0);
  
  expect(line.props.y1).toBeDefined();
  expect(line.props.y1).toEqual(0);
  
  expect(line.props.x2).toBeDefined();
  expect(line.props.x2).toEqual(0);
  
  expect(line.props.y2).toBeDefined();
  expect(line.props.y2).toEqual(0);
});

