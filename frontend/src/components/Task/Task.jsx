/* eslint-disable react/prop-types */
import React from 'react';

function Task({ taskPayload: { name, createdAt, status } }) {
  return (
    <li className="task-component">
      <div className="task-data">
        <div>{name}</div>
        <div>{new Date(createdAt).toLocaleString('pt-BR')}</div>
      </div>
      <div className="task-status">{status}</div>
    </li>
  );
}

export default Task;
