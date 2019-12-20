const CHANGE_FILTER = 'my-app/ToDo-reducer/CHANGE_FILTER';

let initialState = 'all'

const ToDoFilterReducer = (state = initialState, { type, activeFilter }) => {
    switch (type) {
        case CHANGE_FILTER: {
            return activeFilter;
            break;
        }
        default:
            return state;
    }
}

export const changeFilter = (activeFilter) => ({type: CHANGE_FILTER, activeFilter});

export default ToDoFilterReducer

export const getFilter = (state) => {
    return state.ToDoFilter
}