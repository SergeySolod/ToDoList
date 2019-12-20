import React, {PureComponent} from 'react';
import {connect} from 'react-redux'

import TodoInput from '../todo-input/todo-input';
import TodoList from '../todo-list/todo-list';
import Footer from '../footer/footer';

import './todo.css';
import {addTask, getTasks, removeTask, completeTask} from "../../../redux/ToDo-reducer";
import {changeFilter, getFilter} from "../../../redux/ToDoFilter-reducer";

class ToDo extends React.PureComponent {

    state = {
        taskText: ''
    }

    handleInputChange = ({target: {value}}) => {
        this.setState({
            taskText: value,
        })

    }

    addTask = ({ key }) => {
        const { taskText } = this.state;
        if (taskText.length > 0 && key === 'Enter') {
            const { addTask } = this.props;
            addTask((new Date()).getTime(), taskText, false);
            this.setState({
                taskText: ''
            })
        }
    }

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            case 'active':
                return tasks.filter(task => !task.isCompleted)
            break;
            default:
                return tasks;
        }
    }

    getActiveTasksCounter = tasks =>  tasks.filter(task => !task.isCompleted).length;

    render() {
        const {taskText} = this.state;
        const {tasks, removeTask, completeTask, filters, changeFilter} = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters);
        const taskCounter = this.getActiveTasksCounter(tasks);


            return (
            <div className="todo-wrapper">
                <TodoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText}/>
                {isTasksExist && <TodoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask}/>}
                {isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters}/>}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return (
        {
            tasks: getTasks(state),
            filters: getFilter(state),
        }
    )
}

export default connect(mapStateToProps, {addTask, removeTask, completeTask, changeFilter})(ToDo);
