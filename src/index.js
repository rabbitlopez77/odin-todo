import _ from 'lodash';
import './styles.css';
import createList from './listClass';
//import createListElement from './createListElement';
import {createListCategory, createListCreater, inputListTitle, inputButton, doneButton} from './listPage'
import {addTodoList} from './addListDiv';
import {getInput, inputFunction, deleteFunction} from './listVariables'
import { localList } from './localStorage';


createListCategory()
createListCreater()
inputListTitle()
inputButton()
inputFunction()
localList()



