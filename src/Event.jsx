import React, { Component } from "react";

class Event extends Component {
  state = {
    isCollapsed: true,
  };

  onClickHandler = () => {
    this.setState((state) => {
      const isCollapsed = !state.isCollapsed;
      return { isCollapsed: isCollapsed };
    });
  };

  render() {
    const eventData = this.props.eventData;
    return (
      <div className="Event" onClick={() => this.onClickHandler()}>
        <h1 className="summary">{eventData.summary}</h1>
        {!this.state.isCollapsed && <ul className="eventDetails">
          <li className="description">{eventData.description}</li><li className="location">{eventData.location}</li><li className="startTime">{eventData.startTime}</li>
        </ul>}
      </div>
    );
  }
}

export default Event;
