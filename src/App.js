import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { InfoAlert } from './Alert';
import { getEvents, extractLocations } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsNumber: 16,
    selectedLocation: "",
    isOnline: true
  };

  componentDidMount() {
    this.mounted = true;
 if (!navigator.onLine) {
      this.setState({
        isOnline: false
      })
    }

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
    this.setState({isOnline: navigator.onLine ? true : false})
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
      {!this.state.isOnline && <InfoAlert text="You are offline. This event list is loaded from your cache" />}
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
