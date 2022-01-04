import React, { Component } from "react";

class NumberOfEvents extends Component {

  state = {
    numberInputValue: 32
  }
  render() {
    return <input className="numberInput" type="number" value={this.state.numberInputValue} />;
  }
}

export default NumberOfEvents;
