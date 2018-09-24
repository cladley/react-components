import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScrollSpyContext from './Context';

export default class Indicator extends Component {
  render() {
    return (
      <ScrollSpyContext.Consumer>
        {value => {
          const isActive = value.activeId === this.props.id;
          return this.props.children({isActive, scrollToItemOnClick: () => value.scrollToItemOnClick(this.props.id)})}
        }
      </ScrollSpyContext.Consumer>
    );
  }
}

Indicator.propTypes = {
  id: PropTypes.string
};