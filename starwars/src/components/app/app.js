import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import {
  PersonList,
  PersonDetails,
  PlanetList,
  PlanetDetails,
} from "../sw-components";
/* import ItemDetails from "../item-details"; */
import ErrorComponent from "../error-component";
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
    /* error: false, */
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

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

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const { selectedPerson, selectedPlanet } = this.state;
    /* if (this.state.error) {
      return <ErrorComponent />;
    } */

    const peopleList = <PersonList onSelectedItem={this.onPersonSelected} />;

    const planetList = (
      <PlanetList onSelectedItem={this.onPlanetSelected}>
        {(item) => `${item.name}`}
      </PlanetList>
    );

    const personDetails = <PersonDetails itemId={selectedPerson} />;
    const planetDetails = <PlanetDetails itemId={selectedPlanet} />;

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
          </div>
        </div>
      </SwapiServiceProvider>
    );
  }
}

export default App;
