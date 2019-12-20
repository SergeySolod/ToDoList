import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({text, isCompleted, removeTask, id, completeTask}) => (
    <li className="todo-item">
        <div onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'}>&#10004;</div>
        <span onClick={() => completeTask(id)} className={isCompleted ? 'completed text' : 'text'}>{text}</span>
        <div onClick={() => removeTask(id)} className="fas fa-times">&#10008;</div>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
    id: PropTypes.number,
}

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: () => {},
    id: 0,
}

export default ToDoItem;
