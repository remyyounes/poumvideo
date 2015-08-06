import React from "react";
import VideoSource from "./VideoSource";
import Timeline from "./Timeline";
import LinkOverlay from "./LinkOverlay";

var VideoBox = React.createClass({
  getInitialState() {
    return {
      currentTime: 0,
      width: 0,
      height: 0,
      activeLinks: []
    };
  },

  getDefaultProps() {
    return {
      links: [
        {text: "", start: 0, end: 5, x: 100, y:100, width: 100, height: 20, href: 'http://surfline.com'},
        {text: "", start: 3, end: 8, x: 100, y:200, href: 'http://google.com'},
        {text: "", start: 10, end: 13, x: 100, y:200},
        {text: "", start: 13, end: 16, x: 100, y:200},
      ]
    };
  },

  render() {
    return (
      <div>
        <ul>{this.renderLinkOverlays()}</ul>
        <video ref='vid'
          id='video'
          className="commentBox"
          autoPlay='autoplay'
          controls='controls'>
          <VideoSource/>
        </video>
        <div className="currentTime">{this.state.currentTime}</div>
        <Timeline
          links={this.props.links}
          currentTime={this.state.currentTime}
          onLinksUpdated={this.onLinksUpdated}/>
      </div>
    );
  },

  renderLinkOverlays() {
    return this.state.activeLinks.map((link)=>{
      return (
        <LinkOverlay
          top={link.y}
          left={link.x}
          width={link.width}
          height={link.height}
          text={link.text}
          href={link.href}
        />
      );
    });
  },

  componentDidMount() {
    this.refs.vid.getDOMNode().addEventListener('timeupdate', this.onTimeUpdate);
    this.refs.vid.getDOMNode().addEventListener('loadedmetadata', this.onLoadedMetaData);
  },

  componentwillUnMount() {
    this.refs.vid.getDOMNode().removeEventListener('timeupdate', this.onTimeUpdate);
    this.refs.vid.getDOMNode().removeEventListener('loadedmetadata', this.onLoadedMetaData);
  },

  onTimeUpdate(e) {
    this.setState({currentTime: e.target.currentTime});
  },

  onLoadedMetaData(e) {
    this.setState({
      width: e.srcElement.clientWidth,
      height: e.srcElement.clientHeight
    });
  },

  onLinksUpdated(activeLinks) {
    this.setState({activeLinks});
  }

});

export default VideoBox;
