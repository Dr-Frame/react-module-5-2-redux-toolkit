import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
//для работі с локалсторадж
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
///
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

//работа с локалсторадж
const persistConfig = {
  key: 'hello',
  storage,
};
//добавляем функцию логгерка в стек прослоек

const middleWare = [
  //ЧТО БЫ  не было ошибки с локалсторадж
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

/* //localstorage reduecer
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
}); */

//исключаем из локалстораджа ненужные вещи
const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

//инициализация хранилища
const store = configureStore({
  reducer: {
    todos: persistReducer(todosPersistConfig),
  },
  //показывать тулзы тольо  в разработке
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleWare,
});

const persistor = persistStore(store);

export default { store, persistor };

//предидущий стейт + екшен = седующий стейт
