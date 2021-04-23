import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

//добавляем функцию логгерка в стек прослоек

const middleWare = [...getDefaultMiddleware(), logger];

//инициализация хранилища
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  //показывать тулзы тольо  в разработке
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleWare,
});

export default store;

//предидущий стейт + екшен = седующий стейт
