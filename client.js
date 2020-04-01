import {
  GetTodosRequest,
  AddTodoRequest,
  FinishTodoRequest
} from "./todo_pb.js";
import { TodoServiceClient } from "./todo_grpc_web_pb.js";

const client = new TodoServiceClient("http://localhost:8080");

function getTodosCallback(err, response) {
  if (err) {
    console.error(err);
    return;
  }
  const todos = response.toObject().todosList;
  console.log("LIST OF TODOS: ", todos);

  const todoListElement = document.querySelector("#todo-list");
  todoListElement.innerHTML = "";

  todos.forEach(todo => {
    const listItemElement = document.createElement("li");

    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("id", `todo-checkbox-${todo.id}`);
    checkboxElement.setAttribute("value", todo.id);
    if (todo.done) {
      checkboxElement.setAttribute("checked", "");
      checkboxElement.setAttribute("disabled", "");
    } else {
      checkboxElement.setAttribute("onchange", "finishTodo(event)");
    }
    listItemElement.appendChild(checkboxElement);

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", `todo-checkbox-${todo.id}`);
    if (todo.done) {
      const strikeElement = document.createElement("s");
      strikeElement.textContent = todo.text;
      labelElement.appendChild(strikeElement);
    } else {
      labelElement.textContent = todo.text;
    }
    listItemElement.appendChild(labelElement);

    todoListElement.appendChild(listItemElement);
  });
}
function getTodos() {
  const request = new GetTodosRequest();

  client.getTodos(request, {}, getTodosCallback);
}

function addTodoCallback(err, response) {
  if (err) {
    console.error(err.message);
    return;
  }
  const todo = response.toObject().todo;
  console.log("NEW TODO: ", todo);

  // Refresh List
  getTodos();
}
function addTodo() {
  // Build request
  const text = document.querySelector("#add-todo-input").value;
  if (!text) return;
  const request = new AddTodoRequest();
  request.setText(text);

  // Clear input
  document.querySelector("#add-todo-input").value = "";

  // Make request
  client.addTodo(request, {}, addTodoCallback);
}
// Make function globally available
window.addTodo = addTodo;

function finishTodoCallback(err, response) {
  if (err) {
    console.error(err);
    return;
  }

  const todo = response.toObject().todo;
  console.log("FINISHED TODO: ", todo);

  // Refresh List
  getTodos();
}
function finishTodo(event) {
  if (!event.target.checked) return;

  // Build request
  const id = event.target.value;
  const request = new FinishTodoRequest();
  request.setId(id);

  client.finishTodo(request, {}, finishTodoCallback);
}
// Make function globally available
window.finishTodo = finishTodo;

// Get initial list
getTodos();
