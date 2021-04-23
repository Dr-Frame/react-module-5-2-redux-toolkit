import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import actionTypes from './todos-types';

//шортайди не вернет как над, поэтому второй аргумент функция
//которая покажет какой обьект нам нужно вернуть
//где шорт айди будте работаь

//типы прописываем сдесь!!!!!! 'todos/add' === actionTypes.ADD
const addTodo = createAction('todos/add', text => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  };
});

const deleteTodo = createAction('todos/delete');

deleteTodo(5);
//при віезове функции в пейлоад попадет значение аргумента функции
//type: actionTypes.DELETE,
//payload: 5,

/* const deleteTodo = todoId => ({
  type: actionTypes.DELETE,
  payload: todoId,
}); */

const changeFilter = createAction('todos/changeFilter');

export default { addTodo, deleteTodo, changeFilter };
