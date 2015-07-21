import React from "react";

var VideoSource = React.createClass({displayName: 'VideoSource',
  render: function() {
    debugger;
    return (
      <source ref='mp4' src='../mick_fanning.mp4' type='video/mp4'/>
    );
  },
});

export default VideoSource;
