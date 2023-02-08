const createListCategory = () => {
    const categoryDiv = document.getElementById('listCategory')
    const newCategoryDiv = document.createElement('div')
    newCategoryDiv.setAttribute('id', 'listCategoryContent')
    const categoryHeader = document.createElement('h1')
    categoryHeader.innerText = 'List Categories'
    categoryDiv.appendChild(newCategoryDiv)
    newCategoryDiv.appendChild(categoryHeader)
}

const createListCreater = () => {
    const createrDiv = document.getElementById('listCreater')
    const newCreaterDiv = document.createElement('div')
    newCreaterDiv.setAttribute('id', 'listCreaterContent')
    const createrHeader = document.createElement('h1')
    createrHeader.innerText = 'ToDo List'
    createrDiv.appendChild(newCreaterDiv)
    newCreaterDiv.appendChild(createrHeader)
}
const inputListTitle = () => {
    const createrDiv = document.getElementById('listCreater')
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'text')
    inputElement.setAttribute('id', 'inputField')
    inputElement.setAttribute('placeholder', 'Title of the todo errand')
    createrDiv.appendChild(inputElement)
}
const inputButton = () => {
    const createrDiv = document.getElementById('listCreater')
    const inputButton = document.createElement('button')
    inputButton.setAttribute('id', 'inputButton')
    inputButton.innerText = 'Submit'
    createrDiv.appendChild(inputButton)
}




export {createListCategory, createListCreater, inputListTitle, inputButton}