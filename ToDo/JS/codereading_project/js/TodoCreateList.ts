const todoForm: any = document.querySelector('.js-todo-form');
const todoInput: any = document.querySelector('.js-todo-input');
const todoUl: any = document.querySelector('.js-todo-ul');

let todos: Array<string> = [];
let completes: Array<string> = [];
let id: any= 0;


// 클릭시 완료목록으로 표시 line-through
const lineThrough: any = (li: any) => {
  li.addEventListener('click', (e: any) => {
    e.currentTarget.classList = "line-through"
  })
}


// 삭제 기능 추가
const deleteToDo: any = (e: any) => {
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
const addBtn: any = (li:any) => {
  const btnDelete: HTMLElement = document.createElement("button");
  const btnModify: HTMLElement = document.createElement("button");
  btnDelete.innerText = "❌";
  btnModify.innerText = "🖊";
  btnDelete.classList.add("delete");
  btnDelete.id = id;
  btnModify.classList.add("modify");
  id += 1;
  li.appendChild(btnModify);
  li.appendChild(btnDelete);
  btnDelete.addEventListener("click", deleteToDo);
}

// LocalStorage 관련
const saveCompletes: any = () => {
  localStorage.setItem("completes", JSON.stringify(completes));
}

// todos 배열변수를 로컬스토리지에 저장
const saveLocalToDos: any = () => {
  const stringTodos = JSON.stringify(todos);
  localStorage.setItem("todos", stringTodos)
}

// 로컬스토리지에 저장된 todos 배열을 다시 가져와 리스트로 생성
const getLocalToDos: any = () => {
  const getData = JSON.parse(localStorage.getItem("todos"));
  if(getData !== null) {
    getData.forEach(list => {
      const li: any = document.createElement("li");
      li.innerText = list;
      li.name = list;
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
const handleSubmit = (e: any) => {
  e.preventDefault();
  addToDo();
  todoInput.value = "";
  completes = todos;
  saveCompletes();
}

const addToDo = () => {
  const li: any = document.createElement("li");
  const todoText = todoInput.value;
  li.innerText = todoText;
  li.name=todoText;
  addBtn(li);
  lineThrough(li);
  todoUl.appendChild(li);
  pushToDos(todoText);
}

const pushToDos = (text: string) => {
  todos.push(text);
  saveLocalToDos();
}


const init: any = () => {
  getLocalToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();