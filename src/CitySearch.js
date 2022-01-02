import React, { Component } from "react";

class CitySearch extends Component {
  state = {
    query: "",
  };

  inputChangeHandler = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.inputChangeHandler}
        />
        <ul className="suggestions"></ul>
      </div>
    );
  }
}

export default CitySearch;
