import React from "react";

class TogglePlanetButton extends React.Component {
  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    return (
      <button
        className="toggle-planet btn btn-warning btn-lg"
        onClick={this.toggleRandomPlanet}
      >
        Toggle Random Planet
      </button>
    );
  }
}

export default TogglePlanetButton;
