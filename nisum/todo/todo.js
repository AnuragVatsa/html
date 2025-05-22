let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = todos.map((todo, index) => `
    <li>
      <span style="text-decoration: ${todo.completed ? "line-through" : "none"}">${todo.text}</span>
      <button onclick="toggleTodo(${index})">${todo.completed ? "Undo" : "Complete"}</button>
      <button onclick="deleteTodo(${index})">Delete</button>
    </li>
  `).join("");
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.getElementById("addTodoBtn").addEventListener("click", () => {
  const todoInput = document.getElementById("todoInput");
  if (todoInput.value.trim()) {
    todos.push({ text: todoInput.value, completed: false });
    todoInput.value = "";
    renderTodos();
  }
});

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

renderTodos();