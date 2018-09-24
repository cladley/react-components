import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {throttle} from 'lodash';
import Indicator from './Indicator';
import Item from './Item';
import ScrollSpyContext from './Context';
import UrlHash from './UrlHash';


class ScrollSpy extends Component {
  static Indicator = Indicator;
  static Item = Item;

  state = {
    activeId: null
  };

  constructor(props) {
    super(props);
    this.activeId = null;
    this.initialMount = true;
    this.items = {};
    this.onWindowScroll = throttle(this.onWindowScroll.bind(this), 30);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll);
    this.onWindowScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  onWindowScroll(e) {
    for(let [key, value] of Object.entries(this.items)) {
      if (window.pageYOffset >= value.top && window.pageYOffset <= value.top + value.height) {
        this.itemInView(key);
      }
    }    
  }

  itemInView = (id) => {    
    if (id !== this.state.activeId) {
      this.setState({
        activeId: id
      });
    }
  }

  registerItem = (item) => {
    this.items[item.id] = item.position;
  };

  scrollToItem = (id) => {
    const {top} = this.items[id];
    window.scrollTo(0, top);
    this.itemInView(id);
  };

  render() {
    return (
      <ScrollSpyContext.Provider value={{activeId: this.state.activeId, registerItem: this.registerItem, scrollToItemOnClick: this.scrollToItem}}>
        <UrlHash hash={this.state.activeId} />
        {this.props.children}
      </ScrollSpyContext.Provider>
    );
  }
}

export default ScrollSpy;