import React from "react";

var LinkEditor = React.createClass({
  render() {
    return (<div>
      <input value={this.props.link.text}/>
      <input value={this.props.link.start}/>
      <input value={this.props.link.end}/>
      <input value={this.props.link.width}/>
      <input value={this.props.link.height}/>
      <input value={this.props.link.x}/>
      <input value={this.props.link.y}/>
      <input value={this.props.link.href}/>
    </div>);
  }
});

export default LinkEditor;
