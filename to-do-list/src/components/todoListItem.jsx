import React from 'react'
import DeleteBtn from './deleteBtn';
import ImportantBtn from './importantBtn';


function TodoListItem(props){
  return( 
  <li className="task">
    {props.todo}
    <div className="li-btn">
      <DeleteBtn />
      <ImportantBtn />
    </div>
  </li>
    )
}

export default TodoListItem;