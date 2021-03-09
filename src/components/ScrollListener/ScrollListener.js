import PropTypes from 'prop-types';
import React from 'react';

const PLACEHOLDER_WINDOW = {
  addEventListener() {},
  pageXOffset: 0,
  pageYOffset: 0,
  removeEventListener() {},
};

export default class ScrollListener extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    win: PropTypes.object,
  };

  static defaultProps = {
    win: typeof window !== 'undefined' ? window : PLACEHOLDER_WINDOW,
  };

  constructor(props) {
    super(props);
    const { win } = props;
    this.state = {
      scrollX: win.pageXOffset,
      scrollY: win.pageYOffset,
    };
  }

  componentDidMount() {
    const { win } = this.props;
    win.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount() {
    const { win } = this.props;
    win.removeEventListener('scroll', this._onScroll);
  }

  _onScroll = () => {
    const {
      win: { pageXOffset: scrollX, pageYOffset: scrollY },
    } = this.props;

    this.setState({
      scrollX,
      scrollY,
    });
  };

  render() {
    const { scrollX, scrollY } = this.state;
    const { children } = this.props;
    return children(scrollX, scrollY);
  }
}
