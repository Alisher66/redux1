
import {ADD_TASK, DELETE_TASK, CHANGE_TASK} from "./actions";

const initialNotes = {
    tasks:[]
};

const tasksReducer = (state = initialNotes, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {...state, tasks:[...state.tasks, action.payload]};
        case DELETE_TASK:
            return {...state, tasks:state.tasks.filter(task=> task.id !== action.payload.id)}
        case CHANGE_TASK:
            return {...state, tasks:state.tasks.map(task => (task.id === action.payload.id)? action.payload : task)}
        default :
            return state;
    }
}

export default tasksReducer;
