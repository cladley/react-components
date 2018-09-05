import React, { Component } from "react";
import ReactDOM from "react-dom";

const getWindowCentre = () => {
  const width = document.documentElement.clientWidth || document.body.clientWidth;

  return {
    x: width / 2,
    y: window.innerHeight / 2
  };
};

const calculateTranslate = dimensions => {
  const windowCentre = getWindowCentre();
  const targetCentre = {
    x: dimensions.left + (dimensions.width / 2),
    y: dimensions.top + (dimensions.height / 2)
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

export default class ExpandedImage extends Component {
  constructor(props) {
    super(props);

    const dimensions = props.image.getBoundingClientRect();
    this.state = {
      dimensions: dimensions,
      scrollPosition: window.pageYOffset,
      translate: calculateTranslate(dimensions),
      scale: calculateScale(dimensions, 0.8),
      isExpanded: false,
      imageLoaded: false
    };

    this.onWindowResized = this.onWindowResized.bind(this);

    this.loadImage(this.props.largeSrc).then(() => {
      this.setState({
        imageLoaded: true
      });
    });
  }

  loadImage(src) {
    return new Promise(res => {
      const img = new Image();
      img.addEventListener("load", () => {
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

    window.addEventListener('resize', this.onWindowResized);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResized);
  }

  onWindowResized() {
    this.setState({
      translate: calculateTranslate(this.state.dimensions),
      scale: calculateScale(this.state.dimensions, .8),
    }); 
  }

  getExpandedImageStyle() {
    const { dimensions, scrollPosition, translate, scale } = this.state;

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
  
    } else if (this.state.isExpanded) {
      styles = Object.assign({}, styles, {
        transition: `transform ${this.props.animationSpeed}ms ease`,
        transform: `translate(${translate.x}px, ${
          translate.y
        }px) scale(${scale})`     
      });
    }

    return styles;
  }

  render() {
    let styles = this.getExpandedImageStyle();

    if (this.props.isClosing) {
      setTimeout(() => {
        this.props.onClosed();
      }, this.props.animationSpeed);
    }

    const imageSrc = this.state.imageLoaded
      ? this.props.largeSrc
      : this.props.image.src;

    return ReactDOM.createPortal(
      <img
        ref={instance => (this.imageElement = instance)}
        src={imageSrc}
        style={styles}
      />,
      document.body
    );
  }
}
