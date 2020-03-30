import React from 'react'

function InputAdd(){
  return (
    <div className="addItem">
      <input className="inputAdd" id='add'/>
      <label className="addBtn" htmlFor='search'>
        Add
      </label>
    </div>
  )
}

export { InputAdd };