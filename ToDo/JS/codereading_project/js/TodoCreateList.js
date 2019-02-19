const todoForm = document.querySelector('.js-todo-form');
const todoInput = document.querySelector('.js-todo-input');
const todoUl = document.querySelector('.js-todo-ul');

let todos = [];
let completes = null;

saveCompletes = () => {
  localStorage.setItem("completes", JSON.stringify(completes));
}

handleSubmit = async (e) => {
  e.preventDefault();
  await addToDo();
  todoInput.value = "";
  console.log(todos)
  completes = todos;
  saveCompletes();
}

addToDo = () => {
  const li = document.createElement("li");
  const todoText = todoInput.value;
  li.innerText = todoText;
  todoUl.appendChild(li);
  pushToDos(todoText);
}

pushToDos = (text) => {
  todos.push(text);
  console.log(todos);
  saveLocalToDos();
}

saveLocalToDos = () => {
  const stringTodos = JSON.stringify(todos);
  localStorage.setItem("todos", stringTodos)
}

getLocalToDos = () => {
  const getData = JSON.parse(localStorage.getItem("todos"));
  if(getData !== null) {
    getData.forEach(list => {
      const li = document.createElement("li");
      li.innerText = list;
      todoUl.appendChild(li);
    })
  }

  // todos 에서 받아 complete에 저장하고 그 컴플리트 배열을 다시 로드시 todos 배열에 저장해주고 로컬스토리지에 저장
  const getCompletes = JSON.parse(localStorage.getItem("completes"));
  if(getCompletes !== null) {
    todos = getCompletes;
    saveLocalToDos();
  }
}

init = () => {
  getLocalToDos();
  todoForm.addEventListener("submit", handleSubmit);
  console.log(todos)
  console.log(completes)
}

init();