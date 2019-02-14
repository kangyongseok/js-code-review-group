const todo_create_input = document.querySelector('.js-todo-create');
const todo_create_btn = document.querySelector('.js-create-btn');
const todo_list_div = document.querySelector('.js-todo-list');
const todo_list_ul = todo_list_div.children[0];
const todo_list_li = document.createElement('li');


resetInput = () => {
  todo_create_input.value = '';
}

setTodoList = (text) => {
  let create_li = todo_list_ul.appendChild(todo_list_li);
  text === '' ? false : create_li.innerText = text;
}

getTodoText = () => {
  return todo_create_input.value;
}

init = () => {
  todo_create_btn.addEventListener('click', (e) => {
    e.preventDefault();
    let getTodo = getTodoText();
    setTodoList(getTodo);
    resetInput();
  })
}

init()

// todo_create_btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   let todo_text = todo_create_input.value;
//   let create_li = todo_list_ul.appendChild(todo_list_li);
//   create_li.innerText = todo_text;
//   todo_create_input.value = '';
// })