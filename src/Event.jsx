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
    return (
      <div className="Event" onClick={() => this.onClickHandler()}>
        <h1 className="summary">{this.props.eventData.summary}</h1>
        {!this.state.isCollapsed && <ul className="eventDetails"></ul>}
      </div>
    );
  }
}

export default Event;
