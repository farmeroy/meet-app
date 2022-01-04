import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberInputValue: 32,
  };

  onChangeHandler = (event) => {
    this.setState({
      numberInputValue: event.target.value,
    });
  };

  render() {
    return (
      <input
        className="numberInput"
        type="number"
        value={this.state.numberInputValue}
        onChange={(event) => this.onChangeHandler(event)}
      />
    );
  }
}

export default NumberOfEvents;
