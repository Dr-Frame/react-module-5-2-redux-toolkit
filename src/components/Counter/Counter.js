import React from 'react';
//что бы привязать пропы к компонентам
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';
//забираю все экспорты файла как екшнс
import * as actions from '../../redux/counter/counter-actions';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value startValue={value} />

      <Controls
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
        step={step}
      />
    </div>
  );
};

//замепить стейт редакса в пропсы компонента
//приходит весь стейт приложения, возвращаем внутри то, что будет в пропах ЭТОГО компонента
const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

//функция позволяет передать методы для отправки екшена
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
