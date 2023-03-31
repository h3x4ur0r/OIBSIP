const taskInput = document.querySelector("#task-input");
const add = document.querySelector(".add");
const todoContainer = document.querySelector(".todo-container");
const empty = document.querySelector(".empty");

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    add.click();
  }
});

function newTodo() {
  if (taskInput.value === "") {
    alert("Invalid Input");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("read-mode");

  const span = document.createElement("span");
  span.innerText = taskInput.value;

  const editInput = document.createElement("input");
  editInput.className = "edit-input";

  const del = document.createElement("button");
  del.classList.add("del", "btn");
  del.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

  function delTodo() {
    del.addEventListener("click", () => {
      todoContainer.removeChild(li);
    });
  }

  delTodo();

  const edit = document.createElement("button");
  edit.classList.add("edit", "btn");
  edit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

  function editTodo() {
    edit.addEventListener("click", () => {
      containsClass = li.classList.contains("edit-mode");
      
      if (containsClass) {
        span.innerText = editInput.value;
      } else {
        editInput.value = span.innerText;
      }

      li.classList.toggle("edit-mode");
    });
  }

  li.appendChild(span);
  li.appendChild(editInput);
  li.appendChild(del);
  li.appendChild(edit);
  todoContainer.appendChild(li);

  taskInput.value = "";

  function taskDone() {
    let isDone = false;
    span.addEventListener("click", () => {
      isDone = !isDone;
      if (isDone) {
        span.style.textDecoration = "line-through";
      } else if (!isDone) {
        span.style.textDecoration = "none";
      }
    });
  }

  taskDone();
  editTodo();
}

add.addEventListener("click", () => {
  newTodo();
});

empty.addEventListener("click", () => {
  todoContainer.innerHTML = "";
});
