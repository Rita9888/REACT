import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import {
  PersonList,
  PersonDetails,
  PlanetList,
  PlanetDetails,
  StarshipList,
  StarshipDetails,
} from "../sw-components";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider, SwapiServiceConsumer } from "../../context";
import "./app.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
    selectedPlanet: null,
    selectedStarship: null,
    /* error: false, */
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson,
    });
  };

  onPlanetSelected = (selectedPlanet) => {
    this.setState({
      selectedPlanet,
    });
  };

  onStarshipSelected = (selectedStarship) => {
    this.setState({
      selectedStarship,
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const { selectedPerson, selectedPlanet, selectedStarship } = this.state;

    const peopleList = <PersonList onSelectedItem={this.onPersonSelected} />;

    const planetList = (
      <PlanetList onSelectedItem={this.onPlanetSelected}>
        {(item) => `${item.name}`}
      </PlanetList>
    );

    const starshipList = (
      <StarshipList onSelectedItem={this.onStarshipSelected} />
    );

    const personDetails = <PersonDetails itemId={selectedPerson} />;
    const planetDetails = <PlanetDetails itemId={selectedPlanet} />;
    const starshipDetails = <StarshipDetails itemId={selectedStarship} />;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div>
          <Header />
          {planet}

          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>
          <div>
            <Row left={peopleList} right={personDetails} />
            <Row left={planetList} right={planetDetails} />
            <Row left={starshipList} right={starshipDetails} />
          </div>
        </div>
      </SwapiServiceProvider>
    );
  }
}

export default App;
