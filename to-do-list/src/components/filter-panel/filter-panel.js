import React from "react";

import "./filter-panel.css";

class FilterPanel extends React.Component {
  handleClick = (e) => {
    let foo = document.querySelectorAll("button");

    for (let i = 0; i < foo.length; i++) {
      foo[i].classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };

  getKeyWord({ target: { innerHTML } }) {
    this.props.onGetKeyWord(innerHTML);
  }

  render() {
    return (
      <div className="filter-panel">
        <button
          className="btn-all active"
          onClick={(e) => {
            this.handleClick(e);
            this.getKeyWord(e);
          }}
        >
          All
        </button>
        <button
          className="btn-active"
          onClick={(e) => {
            this.handleClick(e);
            this.getKeyWord(e);
          }}
        >
          Active
        </button>
        <button
          className="btn-done"
          onClick={(e) => {
            this.handleClick(e);
            this.getKeyWord(e);
          }}
        >
          Done
        </button>
      </div>
    );
  }
}

export default FilterPanel;
