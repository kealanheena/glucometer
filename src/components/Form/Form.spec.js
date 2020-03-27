import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form'

describe('Form', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Form/>));

  it('should render a <form/>', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });
});