import React from "react";

import "./quantity-task.css";

function QuantityTask({ toDo, done }) {
  return (
    <p className="quant-task">
      {toDo} more to do, {done} done
    </p>
  );
}

export default QuantityTask;
