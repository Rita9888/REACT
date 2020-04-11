import React, { Component } from "react";
//import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";

import "./item-list.css";
//import ErrorComponent from "../error-component";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    items: [],
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((data) => {
      this.setState({ items: data });
    });
  }

  render() {
    const { items } = this.state;
    const { onSelectedItem } = this.props;
    return (
      <ul className="item-list list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => onSelectedItem(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}

/*  state = {
    person: [],
    loading: true,
    error: false,
  };

  constructor() {
    super();
    this.getPeople();
  }

  onPersonLoaded = (person) => {
    this.setState({
      person,
      loading: false,
      error: false,
    });
  };

  onError() {
    this.setState({
      loading: false,
      error: true,
    });
  }

  getPeople() {
    this.swapiService
      .getAllPeople()
      .then(this.onPersonLoaded)
      .catch((e) => console.log(e));
  }

  render() {
    const { person, loading, error } = this.state;

    const errorSetting = error ? <ErrorComponent /> : null;
    const content = !loading && !error ? <PersonView person={person} /> : null;
    const spinner = loading ? <Spinner /> : null;

    return (
      <div className="list-block">
        {errorSetting}
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  console.log(person);
  const elemets = person.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PersonItem {...itemProps} />
      </li>
    );
  });
  return <ul className="item-list list-group">{elemets}</ul>;
};

class PersonItem extends React.Component {
  render() {
    const { name } = this.props;
    return <span>{name}</span>;
  }
}
 */
