//here is where the variables are going to be created from the input fields
import createList from "./listClass"
import addTodoList from './addListDiv'

const getInput = () => {
let textInput = document.getElementById('inputField').value
    if(textInput == ''){
        return alert('Please input somthing')
    }
let newTodoItem = createList(textInput, 'test')
addTodoList(newTodoItem)
console.log(newTodoItem)
document.getElementById('inputField').value = ''





}
const inputFunction = () => {
    const submitButton = document.getElementById('inputButton')
    submitButton.addEventListener('click', getInput)
}

export {getInput, inputFunction}