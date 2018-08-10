import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Backdrop from './Backdrop';

const getWindowCentre = () => {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
};

const calculateTranslate = dimensions => {
  const windowCentre = getWindowCentre();
  const targetCentre = {
    x: dimensions.left + dimensions.width / 2,
    y: dimensions.top + dimensions.height / 2
  };

  // The vector to translate target to window centre
  return {
    x: windowCentre.x - targetCentre.x,
    y: windowCentre.y - targetCentre.y
  };
};

const calculateScale = (dimensions, scaleBase = 1.0) => {
  const windowCentre = getWindowCentre();
  const targetHalfWidth = dimensions.width / 2;
  const targetHalfHeight = dimensions.height / 2;

  const targetEdgeToWindowEdge = {
    x: windowCentre.x - targetHalfWidth,
    y: windowCentre.y - targetHalfHeight
  };

  const scaleHorizontally = targetEdgeToWindowEdge.x / targetHalfWidth;
  const scaleVertically = targetEdgeToWindowEdge.y / targetHalfHeight;

  // The additional scale is based on the smaller value of
  // scaling horizontally and scaling vertically
  return scaleBase + Math.min(scaleHorizontally, scaleVertically);
};


class ExpandedImage extends Component {
  constructor(props) {
    super(props);

    const dimensions = props.image.getBoundingClientRect();
    this.state = {
      dimensions: dimensions,
      scrollPosition: window.pageYOffset,
      src: props.image.src,
      translate: calculateTranslate(dimensions),
      scale: calculateScale(dimensions, .8),
      isExpanded: false,
      imageLoaded: false
    };

    this.loadImage(this.props.largeSrc).then(() => {
      this.setState({
        imageLoaded: true
      });
    });
  }

  loadImage(src) {
    return new Promise((res) => {
      const img = new Image();
      img.addEventListener('load', () => {
        res();
      });
      img.src = src;
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isExpanded: true
      });
    }, 10);
  }

  render() {
    const { dimensions, scrollPosition, src, translate, scale } = this.state;

    let styles = {
      position: "absolute",
      height: `${dimensions.height}px`,
      width: `${dimensions.width}px`,
      left: `${dimensions.left}px`,
      top: `${dimensions.top + scrollPosition}px`,
      zIndex: 10
    };

    if (this.props.isClosing) {
      styles = Object.assign({}, styles, {
        transition: `transform ${this.props.animationSpeed}ms ease`
      });

      setTimeout(() => {
        this.props.onClosed();
      }, this.props.animationSpeed);
    } else if(this.state.isExpanded) {
      styles = Object.assign({}, styles, {
        transition: `transform ${this.props.animationSpeed}ms ease`,
        transform: `translate(${translate.x}px, ${
          translate.y
        }px) scale(${scale})`
      });
    }

    const imageSrc = this.props.imageLoaded ? this.props.largeSrc : this.props.src;

    return ReactDOM.createPortal(
      <img ref={instance => this.imageElement = instance} src={this.props.largeSrc} style={styles} />,
      document.body
    );
  }
}

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
    isClosing: false,
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
    return (
      <React.Fragment>
        {this.state.isOpen ? <Backdrop animationSpeed={this.props.animationSpeed} isClosing={this.state.isClosing} onBackdropClick={this.handleBackdropClick} /> : null}
        {this.state.isOpen ? <ExpandedImage animationSpeed={this.props.animationSpeed} isClosing={this.state.isClosing} image={this.image} onClosed={this.handleImageClosed} largeSrc={this.props.largeSrc} /> : null}

        <img
          {...this.props}
          ref={instance => (this.image = instance)}
          onClick={this.expandImage}
          src={this.props.src}
          alt={this.props.alt}
        />
      </React.Fragment>
    );
  }
}
