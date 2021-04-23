import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//что бы связать типы екшенов с редюсером и не прописывать отдельно в файле
import actions from './todos-actions';

const items = createReducer([], {
  [actionTypes.ADD]: (state, { payload }) => [...state, payload],
  [actionTypes.DELETE]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
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

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
