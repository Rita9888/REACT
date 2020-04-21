import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import "./item-details.css";
import ErrorButton from "../error-button";
import ErrorBoundary from "../error-boundary";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
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
    const { name } = item;

    return (
      <ErrorBoundary>
        <div className="person-details card">
          <img className="person-image" src={getImageUrl(item)} />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(children, (child) => {
                return React.cloneElement(child, { item });
              })}
            </ul>

            <ErrorButton />
          </div>
        </div>
      </ErrorBoundary>
    );
    //return this.renderCard({ id, name, gender, birthYear, eyeColor });
  }
}
