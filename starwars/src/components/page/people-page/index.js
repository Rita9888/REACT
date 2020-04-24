import React, { Component } from "react";
import { PersonList } from "../../sw-components/item-lists";
import { PersonDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class PeoplePage extends Component {
  render() {
    const { history } = this.props;
    return (
      <Row
        center={
          <PersonList
            onSelectedItem={(id) => {
              history.push(`/people/${id}`);
            }}
          />
        }
      />
    );
  }
}

export default withRouter(PeoplePage);
