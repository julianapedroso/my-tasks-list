const taskList = document.getElementById('ul-item')

function addTask(){
  const task = document.getElementById('task')
  const taskValue = task.value
  if(taskValue) {
    taskList.innerHTML += `<div class=\"list-item-box\"><li class=\"list-item\">${taskValue}</li><a href=\"#\" class=\"delete-item\"><i class=\"fa fa-remove\"></i></a></div>`
  } else {
    alert('Insira uma tarefa!') 
  }
  task.value = ''
}

function clearTasks() {
  if(confirm('Tem certeza que deseja apagar todos os itens?')) {
    taskList.innerHTML = ''
  }
}

taskList.addEventListener('click', deleteItem)

function deleteItem(e) {
  
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Tem certeza que deseja remover a tarefa?')) {
      e.target.parentElement.parentElement.remove()
    }
  }
}

