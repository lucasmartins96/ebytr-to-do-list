/* eslint-disable react/prop-types */
import React from 'react';

const insertBGColorByStatus = (status) => {
  switch (status) {
  case 'em andamento':
    return { backgroundColor: '#ffe44d' };
  case 'pronto':
    return { backgroundColor: '#2FC18C' };
  default:
    return { backgroundColor: '#ff9999' };
  }
};

function Task({ taskPayload: { name, createdAt, status } }) {
  return (
    <li className="task-component" style={ insertBGColorByStatus(status) }>
      <div className="task-data">
        <div className="task-name">{name}</div>
        <div className="task-createdAt">
          {new Date(createdAt).toLocaleString('pt-BR')}
        </div>
      </div>
      <div className="task-status">{status}</div>
    </li>
  );
}

export default Task;
