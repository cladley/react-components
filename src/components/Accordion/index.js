import React, { Component } from 'react';
import { guid } from '../../utilities';
import './Accordion.css';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    if (this.props.open) {
      this.showItemContent(false);
    }
  }
  
  onToggle = () => {
    this.setState((prevState) => {

      if (!prevState.isOpen) {
        this.open();
      } else {
        this.close();
      }

      return {
        isOpen: !prevState.isOpen
      };
    });

    this.props.toggle(this.props.id);
  };

  open() {
    this.showItemContent();
  }

  close() {
    this.hideItemContent();
  }

  showItemContent(animate = true) {
    if (!animate) {
      this.contentElement.style.height = 'auto';
      this.setState({
        isOpen: true
      });
    } else {
      const height = this.contentElement.scrollHeight;
      this.contentElement.addEventListener('transitionend', this.onContentTransitioned);
      this.contentElement.style.height = `${height}px`;
    }
  }

  hideItemContent() {
    const height = this.contentElement.scrollHeight;
    this.contentElement.addEventListener('transitionend', this.onContentTransitioned);
    this.contentElement.style.height = `${height}px`;
    this.contentElement.getBoundingClientRect();
    this.contentElement.style.height = 0;
  }
 
  onContentTransitioned = () => {
    this.contentElement.removeEventListener('transitionend', this.onContentTransitioned);
    if (this.state.isOpen) {
      this.contentElement.style.height = 'auto';
    } else {
      this.contentElement.style.height = '';
    }
  };

  render() {
    return (
      <div className={this.state.isOpen ? "accordion-item is-open" : "accordion-item"}>
        <button type="button" className="accordion-item__toggle" onClick={this.onToggle}>
          {this.props.title}

          <svg className="accordion-item__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
        <div className="accordion-item__content" ref={element => this.contentElement = element}>
          <div className="accordion-item__inner">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default class Accordion extends Component {
  static Item = Item;

  state = {
    items: []
  };

  onItemToggle = (id) => {

  };

  render() {
    return (
      React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          toggle: this.onItemToggle,
          id: guid(),
          ref: (node) => this.state.items.push(node)
        });
      })
    );
  }
}