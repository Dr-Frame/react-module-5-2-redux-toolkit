import React from 'react';
import { connect } from 'react-redux';
import todosAction from '../../redux/todos/todos-actions';
import classNames from 'classnames';
import Todo from '../Todo';

import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  //todos это проп сверху
  todos: state.todos.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosAction.deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

//тип-екшн креетор редюсер законект меддиспатч меп стейт
