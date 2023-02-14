
const localList = () => {
    const listStorage = document.getElementById('listCategoryContent')
    const listStorageHeader = document.createElement('h3')
    listStorageHeader.innerText = 'Past Storage'
    listStorage.appendChild(listStorageHeader)
    const getLocal = {...localStorage}
    const showLocal = document.createElement('p')
    showLocal.innerText = getLocal
    listStorage.appendChild(showLocal)
}


export {localList}