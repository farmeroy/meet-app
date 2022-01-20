import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from "./WelcomeScreen";
import { InfoAlert } from "./Alert";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import ScatterPlot from "./ScatterPlot.jsx";

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
    // for testing
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    // for live version
    // const accessToken = localStorage.getItem("access_token");
    // const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    // const searchParams = new URLSearchParams(window.location.search);
    // const code = searchParams.get("code");
    // this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    // if (code || (isTokenValid && this.mounted)) {
    //   getEvents().then((events) => {
    //     if (this.mounted) {
    //       this.setState({ events, locations: extractLocations(events) });
    //     }
    //   });
    // }
    //
    if (!navigator.onLine) {
      this.setState({
        isOnline: false,
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // extract data for the ScatterPlot
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

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
    // if (this.state.showWelcomeScreen === undefined) {
    //   return <div className="App" />;
    // }
    if (this.state.showWelcomeScreen !== true) {
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
          <div className="data-container">
            <ScatterPlot getData={this.getData} />
          </div>
          <EventList events={this.state.events} />
        </div>
      );
    }
    if (this.state.showWelcomeScreen === true) {
      return (
        <div className="App">
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
}

export default App;
