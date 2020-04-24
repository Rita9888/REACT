import React from "react";

import { withRouter } from "react-router-dom";
import { StarshipDetails } from "../../sw-components/details";

class StarshipPage extends React.Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    return <StarshipDetails itemId={id} />;
  }
}

export default withRouter(StarshipPage);
