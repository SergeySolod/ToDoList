import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({tasksList, removeTask, completeTask}) => (
    <ul className="todo-list">
        {tasksList.map(({id, text, isCompleted}) => (
            <TodoItem completeTask={completeTask} removeTask={removeTask} id={id} key={id} text={text} isCompleted={isCompleted}/>
        ))}
    </ul>
);

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func,
}

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
    completeTask: () => {},
}

export default ToDoList;
