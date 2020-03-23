import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Keypad buttons={[]}/>
    )
  });

  it('should render 2 <div/>\'s', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('renders the values of the buttons', () => {
    wrapper.setProps({buttons: ['test_one', 'test_two']});
    expect(wrapper.find('.buttons-container').text()).toEqual('test_onetest_two');
  });
});