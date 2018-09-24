import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScrollSpyContext from './Context';


export default class Item extends Component {
  componentDidMount() {    
    const bounds = this.wrapper.getBoundingClientRect();
    this.registerWithScrollSpy({id: this.props.id, position: {
      top: bounds.top + window.pageYOffset,
      height: bounds.height
    }});
  }

  render() {
    return (
      <ScrollSpyContext.Consumer>
        {value => {
          this.registerWithScrollSpy = value.registerItem;
          return (
            <div id={this.props.id} ref={element => this.wrapper = element}>
              {this.props.children}
            </div>
          );
        }}
      </ScrollSpyContext.Consumer>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string
};