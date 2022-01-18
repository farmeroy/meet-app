import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from "./WelcomeScreen";
import { InfoAlert } from "./Alert";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsNumber: 32,
    selectedLocation: "",
    isOnline: true,
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if (code || (isTokenValid && this.mounted)) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
    if (!navigator.onLine) {
      this.setState({
        isOnline: false,
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventsNumber = this.state.eventsNumber) => {
    this.setState({ isOnline: navigator.onLine ? true : false });
    getEvents().then((events) => {
      const locationEvents = !location
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
    if (this.state.showWelcomeScreen === undefined) {
      return <div className="App" />;
    }
    return (
      <div className="App">
        <h1 className="title">Meet</h1>
        <p>
          Find newbie developer events in your city and meet other learners!
        </p>
        {!this.state.isOnline && (
          <InfoAlert text="You are offline. This event list is loaded from your cache" />
        )}
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateNumber={this.updateEventsNumber} />
        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
