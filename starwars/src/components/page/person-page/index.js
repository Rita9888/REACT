import React, { Component } from "react";

import { PersonDetails } from "../../sw-components/details";
import { withRouter } from "react-router-dom";

class PersonPage extends Component {
  render() {
    const { match, location, history } = this.props;
    const { id } = match.params;

    return <PersonDetails itemId={id} />;
  }
}

export default withRouter(PersonPage);
