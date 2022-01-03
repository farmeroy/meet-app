import React, { Component } from "react";

class Event extends Component {
  render() {
    return <div>
      <h1 className='summary'>{this.props.event.summary}</h1></div>;
  }
}

export default Event;
