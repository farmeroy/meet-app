import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsNumber: 16,
    selectedLocation: "",
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventsNumber = this.state.eventsNumber) => {
    getEvents().then((events) => {
      const locationEvents =
        !location
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventsNumber),
        location: location,
        selectedLocation: location,
      });
    });
  };

  updateEventsNumber = (number) => {
    this.setState({
      eventsNumber: number,
    });
    this.updateEvents(this.state.selectedLocation, number);
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Meet</h1>
        <p>Find newbie developer events in your city and meet other learners!</p>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateNumber={this.updateEventsNumber} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
