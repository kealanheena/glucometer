import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Glucometer from '../Glucometer/Glucometer';


describe('App', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render Glucometer Component', () => {
    expect(wrapper.containsMatchingElement(<Glucometer />)).toEqual(true);
  });
});
