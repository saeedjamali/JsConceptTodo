const todolist = document.querySelector(".todolist");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const selectedTodo = document.querySelector(".todos-filter");

const formSubmit = document.querySelector(".form-submit");

let currentlist = [],
  todoslist = [],
  completedlist = [],
  unCompletedlist = [];
let statusTodo = "all";

document.addEventListener("DOMContentLoaded", () => {
  todoslist = getTodos() ? getTodos() : [];
  if (todoslist) createTodo(todoslist);
});
formSubmit.addEventListener("submit", (e) => {
  let title = todoInput.value;
  e.preventDefault();
  resultDom = todolist.innerHTML;
  const todo = {
    title,
    id: new Date().getTime(),
    createAt: new Date().toLocaleDateString("fa-IR"),
    done: false,
  };
  currentlist = todoslist;
  selectedTodo.selectedIndex = 0;
  addTodo(todo, currentlist);
});

const addTodo = (todo, todoslist) => {
  todoslist.push(todo);
  currentlist = todoslist;
  savedTodos(currentlist);
  filterTodo(statusTodo);
};

const createTodo = (todosArray) => {
  let resultDom = "";
  // console.log(todoObj);

  todosArray.forEach((todoObj) => {
    resultDom += `
        <li class="todo">  
         <div class="title">
            <p class="todo__title">${todoObj.title}</p>
        </div>
        <div class="other">
         <span class="todo-createAt">${todoObj.createAt}</span>
         <button class="todo__check" data-todo-id=${todoObj.id}>
           <i class="fa ${todoObj.done ? `fa-check-square` : `fa-circle`}"> </i>
         </button>
         <button class="todo__remove" data-todo-id=${todoObj.id}>
         <i class="far fa-trash-alt"> </i>
        </button>
        </div>
       </li>
       `;
  });

  todolist.innerHTML = resultDom;
  todoInput.value = "";

  const todoRemove = document.querySelectorAll(".todo__remove");
  const todoCheck = document.querySelectorAll(".todo__check");
  todoRemove.forEach((e) => {
    e.addEventListener("click", () => {
      const removedId = e.dataset.todoId;
      console.log(removedId);
      const removedTodos = todoslist.filter((obj) => obj.id != removedId);
      console.log(todoslist);
      currentlist = removedTodos;
      todoslist = currentlist;
      savedTodos(currentlist);
      filterTodo(statusTodo);
    });
  });
  todoCheck.forEach((e) => {
    e.addEventListener("click", () => {
      const checkedId = e.dataset.todoId;
      const checkedTodo = currentlist.find((obj) => obj.id == checkedId);
      checkedTodo.done = !checkedTodo.done;
      savedTodos(currentlist);
      filterTodo(statusTodo);
      //   createTodo(currentlist);
    });
  });
};

selectedTodo.addEventListener("change", (e) => {
  statusTodo = e.target.value;
  filterTodo(statusTodo);
});

const filterTodo = (str) => {
  switch (str) {
    case "all":
      currentlist = todoslist;
      selectedTodo.options[0].label = ` همه (${currentlist.length})`;
      createTodo(currentlist);
      break;
    case "Completed":
      completedlist = todoslist.filter((obj) => obj.done);
      selectedTodo.options[1].label = ` كامل (${completedlist.length})`;
      currentlist = completedlist;
      createTodo(currentlist);
      break;
    case "UnCompleted":
      unCompletedlist = todoslist.filter((obj) => !obj.done);
      selectedTodo.options[2].label = ` ناقص (${unCompletedlist.length})`;
      currentlist = unCompletedlist;
      createTodo(currentlist);
  }
};

selectedTodo.addEventListener("click", () => {
  filterTodo(statusTodo);
});

let arr = [
  { id: 1, name: "saeed" },
  { id: 2, name: "eli" },
  { id: 3, name: "lia" },
];

const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

const savedTodos = (arr) => {
  localStorage.setItem("todos", JSON.stringify(arr));
};
