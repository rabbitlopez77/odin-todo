export default function createListElement(obj){
    const listCreaterDiv = document.getElementById('listCreater')
    const listElement = document.createElement('div')
    listElement.setAttribute('id', obj.name)
    listCreaterDiv.appendChild(listElement)
    
}