import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../app/app";
import { withData, withService } from "../../hocs";

const personDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="name" label="Name: " />
      <Record field="gender" label="Gender: " />
      <Record field="yey-color" label="Yey color: " />
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
      <Record field="name" label="Name: " />
      <Record field="population" label="Population: " />
      <Record field="diameter" label="Diameter: " />
    </ItemDetails>
  );
};

const PlanetDetails = withService(planetDetails);

const starshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="name" label="Name: " />
      <Record field="model" label="Model: " />
      <Record field="length" label="Length: " />
    </ItemDetails>
  );
};

const StarshipDetails = withService(starshipDetails);

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
