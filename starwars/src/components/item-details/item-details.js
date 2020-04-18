import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./item-details.css";
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }

    this.props.getData(itemId).then((item) => {
      this.setState({ item });
    });
  }

  render() {
    const { item } = this.state;
    const { getImageUrl, children } = this.props;
    if (!item) {
      return <span> Select a person froma list</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = item;

    /*   if (this.state.loading) {
      return <Spinner />;
    } */

    return (
      <div className="person-details card">
        <img className="person-image" src={getImageUrl(item)} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {/*  <li className="list-group-item">
              <span className="term">Gender: </span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year: </span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color: </span>
              <span>{eyeColor}</span>
            </li> */}
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>

          <ErrorButton />
        </div>
      </div>
    );
    //return this.renderCard({ id, name, gender, birthYear, eyeColor });
  }
}
