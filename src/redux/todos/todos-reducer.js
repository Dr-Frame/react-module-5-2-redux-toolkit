import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//что бы связать типы екшенов с редюсером и не прописывать отдельно в файле
import actions from './todos-actions';

const items = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
  [actions.toggleCompleted]: (state, { payload }) => {
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    );
  },
});

/* const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(todo => todo.id !== payload);

    default:
      return state;
  }
}; */

const filter = createReducer('', {
  //если не нужен стейт то ставим _ что бы линтер не ругался
  [actions.changeFilter]: (_, { payload }) => payload,
});

/* const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}; */

export default combineReducers({
  items,
  filter,
});
