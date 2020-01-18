import React from 'react';
import { shallow, mount } from 'enzyme';
import Todos from './Todos';

describe('Todos', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Todos />);
  });

  it('should render Todos component', () => {
    shallow(<Todos />);
  });

  describe('List', () => {
    it('should display 2 initial to-dos', () => {
      expect(wrapper.find('li')).toHaveLength(2);
    });
  });

  describe('Form', () => {
    it('should NOT add to-do if input is empty', () => {
      wrapper.find('input').instance().value = '';
      expect(wrapper.find('input').instance().value).toEqual('');

      wrapper.find('[type="submit"]').simulate('click');
      expect(wrapper.find('li')).toHaveLength(2);
    });

    it('should a new item by typing item name and clicking button', () => {
      wrapper.find('input').instance().value = 'Visit a drug store';
      expect(wrapper.find('input').instance().value).toEqual(
        'Visit a drug store'
      );
      wrapper.find('[type="submit"]').simulate('click');
      expect(wrapper.find('li')).toHaveLength(3);
      expect(
        wrapper
          .find('li div span')
          .last()
          .text()
      ).toEqual('Visit a drug store');
    });

    it('should remove item by clicking remove button', () => {
      wrapper
        .find('li button')
        .first()
        .simulate('click');
      expect(wrapper.find('li')).toHaveLength(1);
      expect(wrapper.find('li span').map(item => item.text())).toEqual([
        'Take out the trash'
      ]);
    });
  });
});
