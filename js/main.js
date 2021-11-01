// Selectors
const todoInput = document.querySelector('.todo-input'); 
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', AddTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);


// Functions
function AddTodo(e){
    e.preventDefault()
    // console.log('hello');

    // todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    // console.log(newTodo);
    todoDiv.appendChild(newTodo);

    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    
    //attach final Todo
    todoList.appendChild(todoDiv);

    // clear todoInput value
    todoInput.value = "";
}

function deleteTodo(e){
    // console.log(e.target);
    const item = e.target;
    //delete todo
    if (item.classList[0] === "trash-btn") {
            // e.target.parentElement.remove();
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        // todo.remove();
        todo.addEventListener('transitionend', function(e){
            todo.remove();
        });
    } 

    // check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        console.log(todo);
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
}