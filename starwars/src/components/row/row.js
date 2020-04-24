import React from "react";

const Row = ({ left, right, center }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
      <div className="col-md-12">{center}</div>
    </div>
  );
};

export default Row;
