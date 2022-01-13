import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: "",
  };

  inputChangeHandler = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText:
          "We cannot find the city you are looking for. Please try another city",
      });
    } else {
      this.setState({ query: value, suggestions, infoText: "" });
    }
  };

  itemClickHandler = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <div>
          <input
            aria-label="search for a city"
            name="city-search"
            type="text"
            className="city"
            placeholder="search for a city"
            value={this.state.query}
            onChange={this.inputChangeHandler}
            onFocus={() => {
              this.setState({ showSuggestions: true });
            }}
          />
        </div>

        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion}>
              <button className="suggestion-btn" onClick={() => this.itemClickHandler(suggestion)}>
                {suggestion}
              </button>
            </li>
          ))}
          <li key="all"><button className='suggestion-btn' onClick={() => this.itemClickHandler("")}>See All Cities</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
