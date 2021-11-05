/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Task from './components/Task/Task';

function App() {
  const [toDoList, setToDoList] = useState(null);

  async function fetchAPI() {
    const response = await axios.get('https://lmartins-ebytr-todolistapi.herokuapp.com/tasks')
      .then((res) => res.data);
    setToDoList(response);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <div className="header" />
      <div className="main">
        <div className="tasks-container">
          <div className="button-filters" />
          <ul className="list-task">
            { toDoList && toDoList.map(
              (task) => <Task key={ task._id } taskPayload={ task } />,
            )}
          </ul>
        </div>
      </div>
      <div className="footer" />
    </div>
  );
}

export default App;
