// import PropTypes from 'prop-types';
import items from 'App';

const ToDoList = () => (
  <ul>
    {items.map(item => (
      <li></li>
    ))}
  </ul>
);

export default ToDoList;
