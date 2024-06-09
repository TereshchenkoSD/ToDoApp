// import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import todos from './todos.json';

const App = () => {
  return (
    <>
      <h1>Главный компонент-контейнер приложения</h1>

      <ToDoList todos={todos} />
    </>
  );
};

export default App;
