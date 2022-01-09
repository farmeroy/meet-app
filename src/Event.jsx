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
    const eventData = this.props.event;
    return (
      <div className="Event">
        <h1 className="summary">{eventData.summary}</h1>
        <p className="location">{eventData.location}</p>
        <button className="details-btn" onClick={() => this.onClickHandler()}>
          Details
        </button>
        {!this.state.isCollapsed && (
          <ul className="eventDetails">
            <li className="description">{eventData.description}</li>
            <li className="startTime">{eventData.startTime}</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Event;
