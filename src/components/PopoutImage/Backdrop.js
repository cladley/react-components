import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./backdrop.css";

export default class Backdrop extends Component {
  static propTypes = {
    onBackdropClick: PropTypes.func
  };

  state = { 
    isClosing: false
  };

  componentDidMount() {
    // Force a reflow
    this.backdropElement.getBoundingClientRect();
    this.backdropElement.classList.add("fade-in");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isClosing !== nextProps.isClosing) {
      if (nextProps.isClosing) {
        this.backdropElement.classList.remove("fade-in");
      }
    }
  }

  handleClick = () => {
    this.props.onBackdropClick();
  };

  render() {
    return ReactDOM.createPortal(
      <div
        onClick={this.handleClick}
        className="backdrop"
        ref={instance => (this.backdropElement = instance)}
      />,
      document.body
    );
  }
}
