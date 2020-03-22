import React from 'react';
import { shallow } from 'enzyme';
import Glucometer from './Glucometer'

describe('Glucometer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Glucometer />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});