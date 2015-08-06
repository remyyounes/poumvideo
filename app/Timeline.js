import React from "react";
import LinkEditor from "./LinkEditor";

var Timeline = React.createClass({
  getInitialState() {
    return {
      activeLinks: []
    };
  },
  getDefaultProps() {
    return {
      currentTime: 0,
      links: [],
    };
  },
  render() {
    return (
      <div>{this.renderLinks()}</div>
    );
  },
  componentWillReceiveProps(nextProps) {
    var activeLinks = this.getActiveLinks();
    var oldLinks = JSON.stringify(this.state.activeLinks);
    var newLinks = JSON.stringify(activeLinks);
    if (oldLinks !== newLinks) {
      this.setState({activeLinks});
      this.props.onLinksUpdated(activeLinks);
    }
  },

  renderLinks() {
    var {links} = this.props;
    return links.map((link, i) => {
      return <LinkEditor link={link} index={i} onChange={this.props.onLinkChanged}/>
    });
  },

  getActiveLinks() {
    const {links, currentTime} = this.props;
    var activeLinks = links.filter( (link) => {
      return (link.start <= currentTime && link.end >= currentTime);
    });
    return activeLinks;
  }

});

export default Timeline;
