import React, { Component } from "react";
import { StarshipList } from "../../sw-components/item-lists";
import { StarshipDetails } from "../../sw-components/details";
import { withRouter } from "react-router-dom";
import Row from "../../row";

class StarshipsPage extends Component {
  render() {
    const { history } = this.props;
    return (
      <Row
        center={
          <StarshipList
            onSelectedItem={(id) => {
              history.push(`/starships/${id}`);
            }}
          />
        }
      />
    );
  }
}

export default withRouter(StarshipsPage);
