import React from 'react';
import {mount} from 'enzyme';
import Backdrop from './Backdrop';

describe('<Backdrop />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<Backdrop />);
  });

  it('should render a div with a class of backdrop', () => {
    expect(wrapper.exists('.backdrop')).toEqual(true);
  });

  describe('backdrop is clicked', () => {
    let onBackdropClickMock;

    beforeEach(() => {
      onBackdropClickMock = jest.fn();
      wrapper = mount(<Backdrop onBackdropClick={onBackdropClickMock} />);
      const divElement = wrapper.find('.backdrop').first();
      divElement.simulate('click');
    });

    it('should call the prop onBackdropClick callback when the backdrop div is clicked', () => {
      expect(onBackdropClickMock.mock.calls.length).toBe(1);
    });
  });
});