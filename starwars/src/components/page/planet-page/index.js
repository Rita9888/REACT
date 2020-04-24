import React, { Component } from "react";
import { PlanetList } from "../../sw-components/item-lists";
import { PlanetDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class PlanetPage extends Component {
  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };
  render() {
    const { match, location, history } = this.props;
    const id = match.params.id;
    return (
      <Row
        left={
          <PlanetList
            onSelectedItem={(id) => {
              this.onSelectedItem(id);
              history.push(`/planets/${id}`);
            }}
          />
        }
        right={<PlanetDetails itemId={id} />}
      />
    );
  }
}

export default withRouter(PlanetPage);
