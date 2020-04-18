import React from "react";
import ItemList from "../item-list";
import { withData, withChildFunction } from "../../hocs";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

//const renderFeature = (item) => `${item.name} | ${item.gender}`;

const renderFeature = ({ name }) => <span>{name}</span>;
const PersonList = withData(
  withChildFunction(ItemList, renderFeature),
  getAllPeople
);
const PlanetList = withData(
  withChildFunction(ItemList, renderFeature),
  getAllPlanets
);
const StarshipList = withData(
  withChildFunction(ItemList, renderFeature),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
