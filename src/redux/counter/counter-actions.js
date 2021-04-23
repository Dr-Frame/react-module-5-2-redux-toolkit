import actionTypes from './counter-types';

/// всегда обьект

//action creater лучше функция что бы могли динамически менять знаения
/* export const myAction = value => ({
  //всегда указывать свойство type
  type: 'MY_ACTION',
  payload: value,
});
 */

export const increment = value => ({
  type: actionTypes.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: actionTypes.DECREMENT,
  payload: value,
});
