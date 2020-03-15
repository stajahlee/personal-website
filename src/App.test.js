import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Home from './Home';

describe('AppComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
   });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Home component', () => {
    const home = <Home />;
    expect(wrapper.contains(home)).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});
