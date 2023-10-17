const todo = {
  title: "ReactJs",
  id: 132654684684,
  createAt: "1402.07.09",
  done: true,
};
let todoslist = [],
  completelist = [],
  unCompletelist = [];

const todolist = document.querySelector(".todolist");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const selectedTodo = document.querySelector(".todos-filter"); 
const todoRemove = document.querySelectorAll(".todo__remove");


const createTodo = (list) => {
  console.log(list);
  let result = "";
  list.forEach((todoObj) => {
    result += `
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
      list.innerHTML = result;
    todoInput.value = "";
  });
 
  //   console.log(todoRemove);
  todoRemove.forEach((e) => {
    e.addEventListener("click", () => {
      console.log(e.dataset.todoId);
      const [idAttr] = [...e.attributes].slice(-1);
      todoslist = todoslist.filter((obj) => obj.id != idAttr.value);
      //   console.log(todoslist);
      createTodo(list);
    });
  });
};

const addTodo = (str) => {
  let id = new Date().getTime();
  let createAt = new Date().toLocaleDateString("fa-IR");
  if (str != "") {
    const obj = {
      title: str,
      id,
      createAt,
      done: true,
    };
    todoslist.push(obj);
    createTodo(todoslist);
  }
};





todoInput.addEventListener("input", (e) => {
  //   let strFilter = e.target.value;
  //   todoslist=todoslist.filter((obj) => obj.title.contains(strFilter));
  //   createTodo(todoslist);
});




todoButton.addEventListener("click", () => {
  const strTodo = todoInput.value;
  addTodo(strTodo);
  console.log(todoslist);
});


selectedTodo.addEventListener("change", (e) => {
  let status = e.target.value;
  if (status == "all") {
    createTodo(todoslist);
  } else if (status == "Completed") {
    completelist = todoslist.filter((obj) => obj.done);
    console.log(completelist);
    createTodo(completelist);
  } else {
    unCompletelist = todoslist.filter((obj) => !obj.done);
    console.log(unCompletelist);
    createTodo(unCompletelist);
  }
});
