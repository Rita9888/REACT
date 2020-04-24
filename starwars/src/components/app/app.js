import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import PeoplePage from "../page/people-page";
import PersonPage from "../page/person-page";
import PlanetPage from "../page/planet-page";
import StarshipPage from "../page/starship-page";
import StarshipsPage from "../page/starships-page";
import { SwapiServiceProvider, SwapiServiceConsumer } from "../../context";
import "./app.css";

class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: 1,
    selectedPlanet: 1,
    selectedStarship: null,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <ErrorBoundary>
          <div>
            <Router>
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
                <Switch>
                  <Route path="/" render={() => <h1>Welcome!</h1>} exact />
                  <Route path="/people" component={PeoplePage} exact />
                  <Route path="/people/:id" component={PersonPage} />
                  <Route path="/planets/:id?" component={PlanetPage} />
                  <Route path="/starships" component={StarshipsPage} exact />
                  <Route path="/starships/:id" component={StarshipPage} />
                  <Route render={() => <h3>Page not found!</h3>} exact />
                </Switch>
              </div>
            </Router>
          </div>
        </ErrorBoundary>
      </SwapiServiceProvider>
    );
  }
}

export default App;
