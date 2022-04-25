
import {ADD_NOTE, DELETE_NOTE, CHANGE_NOTE} from "./actions";

const initialNotes = {
    notes:[]
};

const notesReducer = (state = initialNotes, action) => {
    switch(action.type) {
        case ADD_NOTE: 
            return {...state, notes:[...state.notes, action.payload]};
        case DELETE_NOTE:
            return {...state, notes:state.notes.filter(note=> note.id !== action.payload.id)}
        case CHANGE_NOTE:
            return {...state, notes:state.notes.map(note => (note.id === action.payload.id)? action.payload : note)}
        default :
            return state;
    }
}

export default notesReducer;
