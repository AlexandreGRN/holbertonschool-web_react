import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders App-body', () => {
  expect(wrapper.find('main.App-body').exists()).toEqual(true);
});
it('renders App-footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});
