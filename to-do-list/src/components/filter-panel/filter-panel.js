import React from "react";

import "./filter-panel.css";

class FilterPanel extends React.Component {
  render() {
    const handleClick = e => {
      let foo = document.querySelectorAll("button");

      for (let i = 0; i < foo.length; i++) {
        foo[i].classList.remove("active");
      }

      e.currentTarget.classList.add("active");
    };
    return (
      <div className="filter-panel">
        <button className="btn-all active" onClick={handleClick}>
          All
        </button>
        <button className="btn-active" onClick={handleClick}>
          Active
        </button>
        <button className="btn-done" onClick={handleClick}>
          Done
        </button>
      </div>
    );
  }
}

export default FilterPanel;
