export default function addTodoList(obj) {
    const todoList = document.getElementById('todoList')
    const todoDiv = document.createElement('div')
    todoDiv.setAttribute('id', obj.name)
    todoDiv.classList.add('addedTodoList')
    const todoTitle = document.createElement('h2')
    todoTitle.innerText = obj.name
    const todoContent = document.createElement('p')
    todoContent.innerText = obj.content
    todoDiv.appendChild(todoTitle)
    todoDiv.appendChild(todoContent)
    todoList.appendChild(todoDiv)

}