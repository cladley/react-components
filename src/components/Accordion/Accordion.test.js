import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Accordion from './index';

Enzyme.configure({adapter: new Adapter()});

describe('<Accordion />', () => {
  let accordionWrapper;
  beforeEach(() => {
    accordionWrapper = mount(<Accordion>
        <Accordion.Item title="Toggle 1">
          Test Content 1
        </Accordion.Item>
        <Accordion.Item title="Toggle 2">
          Test Content 2
        </Accordion.Item>
      </Accordion>);
  });

  it('should create two divs with classNames of "accordion-item"', () => {
    expect(accordionWrapper.find('.accordion-item').length).toBe(2);
  });

  it('should add "Toggle 1" as the title of the first accordion item', () => {
    const button = accordionWrapper.find('.accordion-item button').first();
    expect(button.text()).toEqual('Toggle 1');
  });

  it('should add "Test Content 2" as the content of the last accordion item', () => {
    const content = accordionWrapper.find('.accordion-item__content .accordion-item__inner').last();
    expect(content.text()).toEqual('Test Content 2');
  });

  test('accordion items should not be open by default', () => {
    const accordionItems = accordionWrapper.find('.accordion-item');
    expect(accordionItems.first().hasClass('is-open')).toEqual(false);
    expect(accordionItems.last().hasClass('is-open')).toEqual(false);
  });

  test('each accordion item should an id set as a property', () => {
    const itemsWrapper = accordionWrapper.find('Item');
    expect(itemsWrapper.first().props().id).toBeDefined();
    expect(itemsWrapper.last().props().id).toBeDefined();
  });


  describe('User clicks first accordion item', () => {
    beforeEach(() => {
      const accordionToggle = accordionWrapper.find('.accordion-item__toggle').first();
      accordionToggle.simulate('click');
    });

    it('should add "is-open" class to "accordion-item"', () => {
      const itemWrapper = accordionWrapper.find('.accordion-item').first();
      expect(itemWrapper.hasClass('is-open')).toBe(true);
    });
  });
});