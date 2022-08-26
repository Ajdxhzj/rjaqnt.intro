const toDoForm = document.querySelector(`#todo_form`);
const toDoInput = document.querySelector(`#todo_form input`);
const toDoList = document.querySelector(`#todo_list`);

const local_todos = `todos`;
let toDos = [];

function saveToDos() {
  localStorage.setItem(local_todos, JSON.stringify(toDos));
}

function remover(event) {
  const removeToDo = event.target.parentElement;
  removeToDo.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(removeToDo.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement(`li`);
  li.id = newToDo.id;
  const span = document.createElement(`span`);
  span.innerText = newToDo.text;
  const btn = document.createElement(`button`);
  btn.innerText = `❌`;
  btn.addEventListener(`click`, remover);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function ToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ``;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
    loginName: loginName,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener(`submit`, ToDoSubmit);

const localToDos = localStorage.getItem(local_todos);
const loginName = localStorage.getItem(`loginName`);

if (localToDos) {
  const parsedToDo = JSON.parse(localToDos);
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
