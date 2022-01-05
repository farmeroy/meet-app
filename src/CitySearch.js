import React, { Component } from "react";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
  };

  inputChangeHandler = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({ query: value, suggestions });
  };

  itemClickHandler = (suggestion) => {
    this.setState({
      query: suggestion,
    });
    this.props.updateEvents(suggestion);
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
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.itemClickHandler(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key="all">
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
