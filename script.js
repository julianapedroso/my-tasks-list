// const Storage = {
//   get() {
//     return JSON.parse(localStorage.getItem("my-tasks:tasksList")) || [];
//   },

//   set(tasks) {
//     localStorage.setItem("my-tasks:tasksList", JSON.stringify(tasks));
//   },
// };

const taskList = document.getElementById("ul-item");

function addTask() {
  const task = document.getElementById("task");
  const taskValue = task.value;

  if (taskValue) {
    taskList.innerHTML += `<div class=\"list-item-box\"><li class=\"list-item\">${taskValue}</li><a href=\"#\" class=\"delete-item\"><img src="/assets/minus.svg" class=\"fa fa-remove\"></a></div>`;
  } else {
    alert("Insira uma tarefa!");
  }
  task.value = "";
}

function clearTasks() {
  if (confirm("Tem certeza que deseja apagar todos os itens?")) {
    taskList.innerHTML = "";
  }
}

taskList.addEventListener("click", deleteItem);

function deleteItem(event) {
  if (event.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Tem certeza que deseja remover a tarefa?")) {
      event.target.parentElement.parentElement.remove();
    }
  }
}
