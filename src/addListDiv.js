import {deleteFunction} from './listVariables';




const addTodoList = (obj)  => {
    const listCreater = document.getElementById('listCreater')
    const todoList = document.getElementById('todoList')
    const todoDiv = document.createElement('div')
    const listButton = document.createElement('button')
    listButton.classList.add('todoListButton')
    listButton.setAttribute('id', 'button' + obj.name)
    listButton.textContent = 'Delete'
    todoDiv.setAttribute('id', obj.name)
    todoDiv.classList.add('addedTodoList')
    const todoTitle = document.createElement('h2')
    todoTitle.innerText = obj.name
    todoDiv.appendChild(todoTitle)
    todoList.appendChild(todoDiv)
    listCreater.appendChild(todoList)
    todoDiv.appendChild(listButton)
    deleteFunction(obj)
    localStorage.setItem(obj.name, obj.name)
    console.log(localStorage.getItem(obj.name))
  
  

}

export {addTodoList}