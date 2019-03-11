import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from '../src/common/Header';

describe('Test for Header component', () => {
  it('should render header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(true);
    expect(wrapper.is('.text-center')).toEqual(true);
  });
});
