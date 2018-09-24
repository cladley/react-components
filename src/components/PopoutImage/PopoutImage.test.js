import React from 'react';
import {mount} from 'enzyme';
import PopoutImage from './index';

describe('<PopoutImage />', () => {
  const imgSrc = '../../../public/rinjani-small.jpeg';
  const largeImgSrc = '../../../public/rinjani.jpeg';
  const popoutClass = '.popout-image';
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PopoutImage src={imgSrc} largeSrc={largeImgSrc} />);
  });

  it('should create a component', () => {
    expect(wrapper).toBeDefined();
  });

  it("should create an img tag with a class of 'popout-image'", () => {
    const image = wrapper.find(popoutClass);
    expect(image.length).toEqual(1);
  });

  it('should create an img tag with custom class set', () => {
    const wrapper = mount(<PopoutImage src={imgSrc} className="test" />);
    const image = wrapper.find(popoutClass)
    expect(image.hasClass('test')).toBe(true);
  });

  it('should create and img tag with src and largeSrc attributes correctly set', () => {
    const image = wrapper.find('img');
    expect(image.prop('src')).toEqual(imgSrc);
    expect(image.prop('largeSrc')).toEqual(largeImgSrc);
  });

  it('should not render a ExpandedImage component on load', () => {
    const expandedImage = wrapper.find('Exapaned');
    expect(expandedImage.length).toEqual(0);
  });

  it('should not render a Backdrop component on load', () => {
    const backdrop = wrapper.find('Backdrop');
    expect(backdrop.length).toEqual(0);
  });

  describe('state of isOpen is set to true', () => {
    beforeEach(() => {
      wrapper.setState({isOpen: true});
      wrapper.update();
    });

    afterEach(() => {
      wrapper.setState({isOpen: false});
      wrapper.update();
    });

    it('should render a Backdrop component', () => {
      const backdrop = wrapper.find('Backdrop');
      expect(backdrop).toBeDefined();
    });

    it('should render an ExpandedImage component', () => {
      const expandedImage = wrapper.find('ExpandedImage');
      expect(expandedImage).toBeDefined();
    });
  });

  describe('user clicks the image', () => {
    beforeEach(() => {
      const image = wrapper.find('img').first();
      image.simulate('click');
    });

    it('should set isOpen state to true', () => {
      expect(wrapper.state().isOpen).toBe(true);
    });

    it('should show a Backdrop component', () => {
      const backdrop = wrapper.find('Backdrop');
      expect(backdrop).toBeDefined();
    });

    it('should render an ExpandedImage component', () => {
      const expandedImage = wrapper.find('ExpandedImage');
      expect(expandedImage).toBeDefined();
      // console.log(wrapper.debug());
    });

  });
});