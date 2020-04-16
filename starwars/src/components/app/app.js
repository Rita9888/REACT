import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorComponent from "../error-component";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import "./app.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
    error: false,
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

  onSelectedItem = (selectedPerson) => {
    this.setState({
      selectedPerson,
    });
  };

  render() {
    const { getAllPeople, getPerson, getPersonImage } = this.swapiService;
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    if (this.state.error) {
      return <ErrorComponent />;
    }

    const peopleList = (
      <ItemList onSelectedItem={this.onSelectedItem} getData={getAllPeople}>
        {(item) => `${item.name} | ${item.gender}`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails
          itemId={this.state.selectedPerson}
          getData={getPerson}
          getImage={getPersonImage}
        >
          <Record label="Name" field="name" />
          <Record label="Gender" field="gender" />
          <Record label="Birth Year" field="birthYear" />
          <Record label="Eye Color" field="eyeColor" />
        </ItemDetails>
      </ErrorBoundary>
    );
    return (
      <div>
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />
        <Row left={peopleList} right={personDetails} />
        {/* <ItemList
          onSelectedItem={this.onSelectedItem}
          getData={this.swapiService.getAllPlanets}
          renderItem={(item) => `${item.name}`}
        />
        <ItemList
          onSelectedItem={this.onSelectedItem}
          getData={this.swapiService.getAllStarships}
          renderItem={(item) => `${item.name} | ${item.model} `}
        /> */}
      </div>
    );
  }
}

export default App;
