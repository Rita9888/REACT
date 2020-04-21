import React from "react";
import Spinner from "../components/spinner";
import { SwapiServiceConsumer } from "../context";
import ErrorBoundary from "../components/error-boundary";

const withData = (View, getData) => {
  return class extends React.Component {
    state = {
      data: null,
    };
    componentDidMount() {
      getData().then((data) => {
        this.setState({ data });
      });
    }

    componentDidCatch() {
      this.setState({
        error: true,
      });
    }

    render() {
      const { data } = this.state;
      if (!data) {
        return <Spinner />;
      }
      return (
        <ErrorBoundary>
          <View {...this.props} data={data} />
        </ErrorBoundary>
      );
    }
  };
};

const withChildFunction = (Wrapped, fn) => {
  return (props) => <Wrapped {...props}>{fn}</Wrapped>;
};

const withService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          return <Wrapped {...props} swapiService={swapiService} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export { withData, withChildFunction, withService };
