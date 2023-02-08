import _ from 'lodash';
import './styles.css';
import createList from './listClass';
import createListElement from './createListElement';
import {createListCategory, createListCreater, inputListTitle, inputButton} from './listPage'
import addTodoList from './addListDiv';
import {getInput, inputFunction} from './listVariables'

let inputVar = ''

console.log('hello there')
//craete the variable that get the infro from text input and the content
let testList = createList('test', 'testing')
createListElement(testList)
createListCategory()
createListCreater()
inputListTitle()
inputButton()
inputFunction()
addTodoList(testList)

