import React from "react";
import VideoSource from "./VideoSource";

var VideoBox = React.createClass({
  getInitialState() {
    return {
      currentTime: 0
    };
  },
  render() {
    return (
      <div>
        <video ref='vid'
          id='video'
          className="commentBox"
          width='600'
          height='450'
          autoPlay='autoplay'
          controls='controls'>

          <VideoSource/>

        </video>

        <div className="currentTime"> + {this.state.currentTime}</div>
      </div>
    );
  },
  componentDidMount: function() {
    this.refs.vid.getDOMNode().addEventListener('timeupdate', this.onTimeUpdate);
  },

  componentwillUnMount: function() {
    this.refs.vid.getDOMNode().removeEventListener('timeupdate', this.onTimeUpdate);
  },

  onTimeUpdate(e) {
    this.setState({currentTime: e.target.currentTime});
  },

});

export default VideoBox;
