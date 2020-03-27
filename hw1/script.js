const list = document.getElementById('list');
const input = document.getElementById('addInput');
const searchInput = document.getElementById("input-search");

function addToDo(toDo){
  const newLi = document.createElement('li');
  newLi.innerHTML = toDo;
  list.appendChild(newLi);
}

input.addEventListener('keypress', function(event){
  if(event.which == 13){
    const toDo = input.value;
    if(toDo){
      addToDo(toDo);
      input.value = "";
    }
    
  }
})

addBtn.addEventListener('click', function(){
    const toDo = input.value;
    if(toDo){
      addToDo(toDo);
      input.value = "";
    }
})

searchInput.addEventListener('input', function(){
    console.log(searchInput.value);
    const allTask = document.querySelectorAll('li');
    for(let li of allTask){
      if(!li.innerHTML.startsWith(searchInput.value))
        li.style.display = 'none';
      else if(li.innerHTML.startsWith(searchInput.value)) 
        li.style.display = 'block';  
    }
})

fetch(` https://rn-todo-app-c27d4.firebaseio.com/todos.json `)
.then((res) => res.json())
.then(function (data) {
  for (let key in data) {
      let title = data[key];
      for (let text in title) {
          addToDo(title[text]);
      }
  }
}); 





