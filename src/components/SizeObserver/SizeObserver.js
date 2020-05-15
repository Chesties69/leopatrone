import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

export default class SizeObserver extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    innerHeight: PropTypes.number.isRequired,
    innerWidth: PropTypes.number.isRequired,
  };

  static defaultProps = {
    component: 'div',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { innerHeight: nextHeight, innerWidth: nextWidth } = nextProps;
    const { innerHeight: prevHeight, innerWidth: prevWidth } = prevState;

    if (nextWidth !== prevWidth || nextHeight !== prevHeight) {
      return {
        innerHeight: nextHeight,
        innerWidth: nextWidth,
      };
    }

    return null;
  }

  _rootNode;

  state = {
    height: 0,
    innerHeight: 0,
    innerWidth: 0,
    width: 0,
  };

  componentDidMount() {
    const { innerWidth, innerHeight } = this.props;
    if (innerWidth && innerHeight && this._rootNode) {
      this.setState({
        height: this._rootNode.offsetHeight,
        width: this._rootNode.offsetWidth,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { innerHeight: nextHeight, innerWidth: nextWidth } = this.props;
    const { innerHeight: prevHeight, innerWidth: prevWidth } = prevProps;
    if (this._rootNode && (nextWidth !== prevWidth || nextHeight !== prevHeight)) {
      this.setState({
        height: this._rootNode.offsetHeight,
        width: this._rootNode.offsetWidth,
      });
    }
  }

  render() {
    const { children, component: Component, innerWidth, innerHeight, ...rest } = this.props;
    const { height, width } = this.state;
    return (
      <Component
        ref={(node) => {
          this._rootNode = ReactDOM.findDOMNode(node);
        }}
        {...rest}
      >
        {children(width, height)}
      </Component>
    );
  }
}
