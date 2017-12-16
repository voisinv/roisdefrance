import React from 'react';
import renderer from 'react-test-renderer';

import LinkContainer from '../link';
import {Link} from '../Link';
import { PersonageLinkDefault, PersonageNodeDefault } from '../default';
describe('Link', () => {
  it('renders correctly', () => {
    const props = {
      link: PersonageLinkDefault(),
      configuration: {
        colors: '#567899'
      }
    };
    const element = renderer.create(<Link {...props}></Link>);
    expect(element).toMatchSnapshot();
  });
});
describe('LinkContainer', () => {
  describe('', () => {
    let source, target, link, actions, element;
    beforeEach(() => {
      source = Object.assign({}, PersonageNodeDefault(), { x: 140, y: 150 });
      target = Object.assign({}, PersonageNodeDefault(), { x: 160, y: 170 });
      link = Object.assign({}, { source, target });
      actions = {colors: () => ''};
      element = renderer.create(<LinkContainer link={link} actions={actions}/>).toJSON();
    });

    it('renders correctly', () => {
      expect(element).toMatchSnapshot();
    });
    it('match properties', () => {
      expect(element).toBeTruthy();
      expect(element.type).toEqual('line');

      expect(element.props.x1).toBeDefined();
      expect(element.props.x1).toEqual(140);

      expect(element.props.y1).toBeDefined();
      expect(element.props.y1).toEqual(150);

      expect(element.props.x2).toBeDefined();
      expect(element.props.x2).toEqual(160);

      expect(element.props.y2).toBeDefined();
      expect(element.props.y2).toEqual(170);;
    });
  });

  it('renders a default link', () => {
    const actions = {colors: () => ''};
    const line = renderer.create(<LinkContainer actions={actions}/>).toJSON();

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
});
