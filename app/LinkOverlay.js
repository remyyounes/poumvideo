import React from "react";

var LinkOverlay = React.createClass({

  render() {
    const {text, top, left, href, width=20, height=20} = this.props;
    const positionStyles = {
      display: 'block',
      position: 'absolute',
      padding: 4,
      top,
      left,
      width,
      height,
      color: 'white',
      backgroundColor: 'rgba(0,0,0, .5)',
      zIndex:999,
      textDecoration: 'none',
      border: '1px solid white'
    };
    return (
      <a style={positionStyles} href={href} target="_blank"> {text} </a>
    );
  },


});

export default LinkOverlay;
