var todoForm = document.querySelector('.js-todo-form');
var todoInput = document.querySelector('.js-todo-input');
var todoUl = document.querySelector('.js-todo-ul');
var todos = [];
var completes = [];
var id = 0;
// 클릭시 완료목록으로 표시 line-through
var lineThrough = function (li) {
    li.addEventListener('click', function (e) {
        e.currentTarget.classList = "line-through";
    });
};
// 삭제 기능 추가
var deleteToDo = function (e) {
    // 화면에서 지우기
    e.target.parentNode.remove();
    // 배열에서 지우고 로컬스토리지에 저장
    var deleteData = e.target.parentNode.firstChild.data;
    var delIndex = todos.indexOf(deleteData);
    todos.splice(delIndex, 1);
    saveLocalToDos();
    completes = todos;
    saveCompletes();
};
// common btn 추가
var addBtn = function (li) {
    var btnDelete = document.createElement("button");
    var btnModify = document.createElement("button");
    btnDelete.innerText = "❌";
    btnModify.innerText = "🖊";
    btnDelete.classList.add("delete");
    btnDelete.id = id;
    btnModify.classList.add("modify");
    id += 1;
    li.appendChild(btnModify);
    li.appendChild(btnDelete);
    btnDelete.addEventListener("click", deleteToDo);
};
// LocalStorage 관련
var saveCompletes = function () {
    localStorage.setItem("completes", JSON.stringify(completes));
};
// todos 배열변수를 로컬스토리지에 저장
var saveLocalToDos = function () {
    var stringTodos = JSON.stringify(todos);
    localStorage.setItem("todos", stringTodos);
};
// 로컬스토리지에 저장된 todos 배열을 다시 가져와 리스트로 생성
var getLocalToDos = function () {
    var getData = JSON.parse(localStorage.getItem("todos"));
    if (getData !== null) {
        getData.forEach(function (list) {
            var li = document.createElement("li");
            li.innerText = list;
            li.name = list;
            todoUl.appendChild(li);
            addBtn(li);
            lineThrough(li);
        });
    }
    // todos 에서 받아 complete에 저장하고 그 컴플리트 배열을 다시 로드시 todos 배열에 저장해주고 로컬스토리지에 저장
    var getCompletes = JSON.parse(localStorage.getItem("completes"));
    if (getCompletes !== null) {
        todos = getCompletes;
        saveLocalToDos();
    }
};
// 서브밋 이벤트가 발생했을때 실행할 함수 
var handleSubmit = function (e) {
    e.preventDefault();
    addToDo();
    todoInput.value = "";
    completes = todos;
    saveCompletes();
};
var addToDo = function () {
    var li = document.createElement("li");
    var todoText = todoInput.value;
    li.innerText = todoText;
    li.name = todoText;
    addBtn(li);
    lineThrough(li);
    todoUl.appendChild(li);
    pushToDos(todoText);
};
var pushToDos = function (text) {
    todos.push(text);
    saveLocalToDos();
};
var init = function () {
    getLocalToDos();
    todoForm.addEventListener("submit", handleSubmit);
};
init();
