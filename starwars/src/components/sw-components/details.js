import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../app/app";
import { withData, withService } from "../../hocs";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceConsumer } from "../../context";

const {
  getPlanet,
  getStarship,
  getPlanetImage,
  getStarshipImage,
} = new SwapiService();

const personDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="name" label="Name" />
    </ItemDetails>
  );
};

const PersonDetails = withService(personDetails);

const planetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="name" label="Name" />
    </ItemDetails>
  );
};

const PlanetDetails = withService(planetDetails);

const StarshipDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getStarship}
    getImageUrl={getStarshipImage}
  >
    <Record field="model" label="Model" />
  </ItemDetails>
);

export { PersonDetails, PlanetDetails, StarshipDetails };

{
  /* <ErrorBoundary>
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
</ErrorBoundary>; */
}
