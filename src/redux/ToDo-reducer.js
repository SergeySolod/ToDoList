const ADD_TASK = 'my-app/ToDo-reducer/ADD_TASK';
const REMOVE_TASK = 'my-app/ToDo-reducer/REMOVE_TASK';
const COMPLETE_TASK = 'my-app/ToDo-reducer/COMPLETE_TASK';

let initialState = [
    {
        id: 1,
        text: 'Посмотреть и законспектировать 97 урок по React/Redux',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Прочитать книгу "Функциональная веб-разработка"',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Написать проект на React/Redux',
        isCompleted: false,
    },
    {
        id: 4,
        text: 'Сделать главную страницу проекта на работе',
        isCompleted: true,
    },
    {
        id: 5,
        text: 'Оживить свой github профиль',
        isCompleted: false,
    }
];

const ToDoReducer = (state = initialState, {id, text, isCompleted, type}) => {
    switch (type) {
        case ADD_TASK: {
            return [...state, {id, text, isCompleted }]
        }
        case REMOVE_TASK: {
            return [...state].filter(task => task.id !== id);
        }
        case COMPLETE_TASK: {
            return [...state].map(task => {
                if(task.id === id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        }
        default:
            return state;
    }
}

export const addTask = (id, text, isCompleted) => ({type: ADD_TASK, id, text, isCompleted});
export const removeTask = (id) => ({type: REMOVE_TASK, id});
export const completeTask = (id) => ({type: COMPLETE_TASK, id});

export default ToDoReducer

export const getTasks = (state) => {
    return state.ToDo
}