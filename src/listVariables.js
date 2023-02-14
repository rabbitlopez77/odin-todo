//here is where the variables are going to be created from the input fields
import createList from "./listClass"
import {addTodoList} from './addListDiv'

const getInput = () => {
let textInput = document.getElementById('inputField').value
    if(textInput == ''){
        document.getElementById('inputField').value = ''
        return alert('Please input somthing')
    }
let newTodoItem = createList(textInput)
addTodoList(newTodoItem)
document.getElementById('inputField').value = ''
}


const inputFunction = () => {
    const submitButton = document.getElementById('inputButton')
    submitButton.addEventListener('click', getInput)
}


const deleteFunction = (obj) => {
    const listButton = document.getElementById('button' + obj.name)
    listButton.addEventListener('click', obj.removeList)
}
export {getInput, inputFunction, deleteFunction}