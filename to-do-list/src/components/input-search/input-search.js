import React from "react";

import "./input-search.css";

class InputSearch extends React.Component {
  onSearch = ({ target: { value } }) => {
    this.props.searchValue(value);
  };
  render() {
    return (
      <input
        type="text"
        className="input-search"
        placeholder="Type to search"
        onChange={this.onSearch}
      />
    );
  }
}

export { InputSearch };
