/* eslint-disable react/jsx-max-depth */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Task from './components/Task/Task';

function App() {
  const [toDoList, setToDoList] = useState(null);
  const [alphabeticalSortingType, setAlphabeticalSortingType] = useState(' ');
  const [creationDateSortingType, setCreationDateSortingType] = useState(' ');
  const [statusSortingType, setStatusSortingType] = useState(' ');

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

  useEffect(() => {
    if (creationDateSortingType === 'recent') {
      const tasksToOrdered = [...toDoList];
      setToDoList(tasksToOrdered.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      ));
    }
    if (creationDateSortingType === 'older') {
      const tasksToOrdered = [...toDoList];
      setToDoList(tasksToOrdered.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      ));
    }
  }, [creationDateSortingType]);

  const splitTasksByStatus = (tasksArr = []) => {
    const tasksToOrdered = [...tasksArr];
    const tasksByStatus = { pending: [], progress: [], completed: [] };

    tasksToOrdered.forEach((task) => {
      const { status } = task;
      if (status === 'pendente') tasksByStatus.pending = [...tasksByStatus.pending, task];
      if (status === 'em andamento') {
        tasksByStatus.progress = [...tasksByStatus.progress, task];
      }
      if (status === 'pronto') {
        tasksByStatus.completed = [...tasksByStatus.completed, task];
      }
    });

    return tasksByStatus;
  };

  useEffect(() => {
    if (!toDoList) {
      return null;
    }

    const tasksByStatus = splitTasksByStatus(toDoList);
    const { pending, progress, completed } = tasksByStatus;

    switch (statusSortingType) {
    case 'pending':
      setToDoList([...pending, ...progress, ...completed]);
      break;
    case 'progress':
      setToDoList([...progress, ...completed, ...pending]);
      break;
    default:
      setToDoList([...completed, ...pending, ...progress]);
      break;
    }
  }, [statusSortingType]);

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
                  ordem alfab??tica
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
              <div className="order-creation-date">
                <div className="label">
                  data de cria????o
                </div>
                <div>
                  <select
                    value={ creationDateSortingType }
                    id="select-order-creation-date"
                    name="select-order-creation-date"
                    onChange={ (e) => setCreationDateSortingType(e.target.value) }
                  >
                    <option value=" "> </option>
                    <option value="recent">mais recentes</option>
                    <option value="older">mais antigas</option>
                  </select>
                </div>
              </div>
              <div className="order-creation-date">
                <div className="label">
                  status
                </div>
                <div className="order-status">
                  <select
                    value={ statusSortingType }
                    id="select-order-status"
                    name="select-order-status"
                    onChange={ (e) => setStatusSortingType(e.target.value) }
                  >
                    <option value=" "> </option>
                    <option value="pending">pendente</option>
                    <option value="progress">em andamento</option>
                    <option value="completed">pronto</option>
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
