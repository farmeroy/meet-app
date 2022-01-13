import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberInputValue: 16,
  };

  onChangeHandler = (event) => {
    let num = event.target.value;
    if (num.length === 0) {
      num = 1;
    }
    if (num < 0) {
      this.setState({
        numberInputValue: 0,
        infoText: "Please enter a number greater than zero",
      });
      this.props.updateNumber(0);
    } else if (num > 32) {
      this.setState({
        numberInputValue: 32,
        infoText: "This app will display maximum 32 events",
      });
      this.props.updateNumber(32);
    } else {
      this.setState({
        numberInputValue: num,
        infoText: ""
      });
      this.props.updateNumber(num);
    }
  };

  render() {
    return (
      <>
      <label for="number-input">
        Events:
      </label>
        <input
          className="numberInput"
          id="number-input"
          name="number-input"
          type="number"
          value={this.state.numberInputValue}
          onChange={(event) => this.onChangeHandler(event)}
        />
      <ErrorAlert text={this.state.infoText} />
      </>
    );
  }
}

export default NumberOfEvents;
