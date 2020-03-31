import React from 'react';

function FilterPanel(){
  return(
    <div className="filter-panel">
      <button className = 'btn-all'>All</button>
      <button className = 'btn-active'>Active</button>
      <button className = 'btn-done'>Done</button>
    </div>
  )
}

export default FilterPanel;