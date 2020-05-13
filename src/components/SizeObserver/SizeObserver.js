import PropTypes from 'prop-types';
import React from 'react';

export default class SizeObserver extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  _rootNode;

  state = {
    height: 0,
    width: 0,
  };

  componentWillUnmount() {
    this._observer.disconnect();
  }

  render() {
    const { children, ...rest } = this.props;
    const { width, height } = this.state;
    return (
      <div ref={this._setRootNode} {...rest}>
        {children(width, height)}
      </div>
    );
  }

  _onResize = ({
    0: {
      contentRect: { width, height },
    },
  }) => {
    this.setState({ width, height });
  };

  _observer = new ResizeObserver(this._onResize);

  _setRootNode = (node) => {
    if (node) {
      if (node !== this._rootNode) {
        if (this._rootNode) {
          this._observer.disconnect();
        }
        this._rootNode = node;
        this._observer.observe(node);
      }
    }
  };
}
