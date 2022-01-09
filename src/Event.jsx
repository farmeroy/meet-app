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
    const {
      summary,
      location,
      start: startTime,
      description,
    } = this.props.event;
    const eventDate = new Date(startTime.dateTime);
    const time = eventDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = eventDate.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return (
      <div className="Event">
        <div>
        <h1 className="summary">{summary}</h1>
        <p className="location">{location}</p>
        <p className="startTime">
          {time} {date}
        </p>
        {!this.state.isCollapsed && (
          <ul className="eventDetails">
            <li className="description">{description}</li>
          </ul>
        )}
        </div>
        <button className="details-btn" onClick={() => this.onClickHandler()}>
          Details
        </button>
      </div>
    );
  }
}

export default Event;
