import React, { Component } from "react";

class Event extends Component {
  render() {
    return <div>
      <h1 className='summary'>{this.props.eventData.summary}</h1></div>;
  }
}

export default Event;
