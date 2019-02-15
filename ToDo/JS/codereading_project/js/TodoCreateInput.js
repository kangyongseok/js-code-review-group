// 스크립트에 필요한 엘리먼트 변수지정
// string 은 "", variable 은 ''
const todo_form = document.querySelector('.js-todo-form')
const todo_input = document.querySelector('.js-todo-input');
const todo_ul = document.querySelector('.js-todo-ul');
const todo_li = document.createElement('li');

let setLocalStorage = (text) => {
  localStorage.setItem(JSON.stringify("todos", text))
}


// input value reset
let resetInput = () => {
  todo_input.value = "";
}

// todo에 입력된값 가져오기
let getTodoText = () => {
  todo_form.addEventListener('submit', (e) => {
    e.preventDefault(); // 기본 이벤트 초기화
    console.log(todo_input.value);
    resetInput()
    setLocalStorage(todo_input.value)
  })
}

let init = () => {
  getTodoText()
}

init()