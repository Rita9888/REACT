import React from "react";
import ErrorComponent from "../error-component";

export default class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorComponent />;
    }
    return this.props.children;
  }
}
