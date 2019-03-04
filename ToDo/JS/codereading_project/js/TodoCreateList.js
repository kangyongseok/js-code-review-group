const todoForm = document.querySelector('.js-todo-form');
const todoInput = document.querySelector('.js-todo-input');
const todoUl = document.querySelector('.js-todo-ul');

let todos = [];
let completes = [];
let id = 0;


// 클릭시 완료목록으로 표시 line-through
lineThrough = (li) => {
  li.addEventListener('click', (e) => {
    e.target.classList = "line-through"
  })
}


// 삭제 기능 추가
deleteToDo = (e) => {
  // 화면에서 지우기
  e.target.parentNode.remove();
  // 배열에서 지우고 로컬스토리지에 저장
  const deleteData = e.target.parentNode.firstChild.data;
  const delIndex = todos.indexOf(deleteData);
  todos.splice(delIndex, 1);
  saveLocalToDos();
  completes = todos;
  saveCompletes();
}


// common btn 추가
addBtn = (li) => {
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "❌";
  btnDelete.classList.add("delete");
  btnDelete.id = id;
  id += 1;
  li.appendChild(btnDelete);
  btnDelete.addEventListener("click", deleteToDo);
}

// LocalStorage 관련
saveCompletes = () => {
  localStorage.setItem("completes", JSON.stringify(completes));
}

// todos 배열변수를 로컬스토리지에 저장
saveLocalToDos = () => {
  const stringTodos = JSON.stringify(todos);
  localStorage.setItem("todos", stringTodos)
}

// 로컬스토리지에 저장된 todos 배열을 다시 가져와 리스트로 생성
getLocalToDos = () => {
  const getData = JSON.parse(localStorage.getItem("todos"));
  if(getData !== null) {
    getData.forEach(list => {
      const li = document.createElement("li");
      li.innerText = list;
      li.name=list;
      todoUl.appendChild(li);
      addBtn(li);
      lineThrough(li);
    })
  }

  // todos 에서 받아 complete에 저장하고 그 컴플리트 배열을 다시 로드시 todos 배열에 저장해주고 로컬스토리지에 저장
  const getCompletes = JSON.parse(localStorage.getItem("completes"));
  if(getCompletes !== null) {
    todos = getCompletes;
    saveLocalToDos();
  }
}

// 서브밋 이벤트가 발생했을때 실행할 함수 
handleSubmit = async (e) => {
  e.preventDefault();
  await addToDo();
  todoInput.value = "";
  completes = todos;
  saveCompletes();
}

addToDo = () => {
  const li = document.createElement("li");
  const todoText = todoInput.value;
  li.innerText = todoText;
  li.name=todoText;
  addBtn(li);
  lineThrough(li);
  todoUl.appendChild(li);
  pushToDos(todoText);
}

pushToDos = (text) => {
  todos.push(text);
  saveLocalToDos();
}


init = () => {
  getLocalToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();