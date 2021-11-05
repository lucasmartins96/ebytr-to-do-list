/* eslint-disable react/jsx-max-depth */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Task from './components/Task/Task';

function App() {
  const [toDoList, setToDoList] = useState(null);
  const [alphabeticalSortingType, setAlphabeticalSortingType] = useState(' ');

  async function fetchAPI() {
    const response = await axios.get('https://lmartins-ebytr-todolistapi.herokuapp.com/tasks')
      .then((res) => res.data);
    setToDoList(response);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    if (alphabeticalSortingType === 'A-Z') {
      const tasksToOrdered = [...toDoList];
      setToDoList(tasksToOrdered.sort((a, b) => a.name.localeCompare(b.name)));
    }
    if (alphabeticalSortingType === 'Z-A') {
      const tasksToOrdered = [...toDoList];
      setToDoList(tasksToOrdered.sort((a, b) => b.name.localeCompare(a.name)));
    }
  }, [alphabeticalSortingType]);

  return (
    <div className="App">
      <div className="header" />
      <div className="main">
        <div className="tasks-container">
          <div className="task-filters">
            <p>Ordenar tarefas por:</p>
            <div className="filters-group">
              <div className="order-name">
                <div className="label">
                  ordem alfabética
                </div>
                <div>
                  <select
                    value={ alphabeticalSortingType }
                    id="select-order-task-name"
                    name="select-order-task-name"
                    onChange={ (e) => setAlphabeticalSortingType(e.target.value) }
                  >
                    <option value=" "> </option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
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
