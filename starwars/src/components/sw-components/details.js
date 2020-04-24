import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
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
      <Record field="eyeColor" label="Eye color: " />
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
