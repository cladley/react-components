import React, { Component } from "react";
import PropTypes from "prop-types";
import ExpandedImage from "./ExpandedImage";
import Backdrop from "./Backdrop";
import "./popoutimage.css";


export default class PopoutImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    largeSrc: PropTypes.string,
    alt: PropTypes.string
  };

  static defaultProps = {
    alt: "",
    src: "",
    largeSrc: "",
    animationSpeed: 300
  };

  state = {
    isOpen: false,
    isClosing: false
  };

  expandImage = e => {
    this.setState({
      isOpen: true
    });
  };

  handleBackdropClick = () => {
    this.setState({
      isClosing: true
    });
  };

  handleImageClosed = () => {
    this.setState({
      isClosing: false,
      isOpen: false
    });
  };

  render() {
    const className = this.props.className
      ? `popout-image ${this.props.className}`
      : "popout-image";
    return (
      <React.Fragment>
        {this.state.isOpen ? (
          <Backdrop
            animationSpeed={this.props.animationSpeed}
            isClosing={this.state.isClosing}
            onBackdropClick={this.handleBackdropClick}
          />
        ) : null}
        {this.state.isOpen ? (
          <ExpandedImage
            animationSpeed={this.props.animationSpeed}
            isClosing={this.state.isClosing}
            image={this.image}
            onClosed={this.handleImageClosed}
            largeSrc={this.props.largeSrc}
          />
        ) : null}

        <img
          {...this.props}
          className={className}
          ref={instance => (this.image = instance)}
          onClick={this.expandImage}
          src={this.props.src}
          alt={this.props.alt}
        />
      </React.Fragment>
    );
  }
}
