import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA, FORM } from '../../constants/Types';

let initialState = {
    newState: [],
    updateOpenState: false,
    flagState: false
}


export default function Reducer(state = initialState, action) {
    switch (action.type) {

        case GET_DATA:
            return {
                ...state,
                newState: action.payload
            };

        case ADD_DATA:
            return {
                ...state,
                newState: [...state.newState, action.payload]
            };

        case UPDATE_DATA:
            return {
                ...state,
            };

        case DELETE_DATA:
            let filterList = state.newState.filter((item) => item.id !== action.payload)
            return {
                ...state,
                newState: filterList
            };

        case FORM:
            return {
                ...state,
                updateOpenState: action.payload.formOpenState,
                flagState: action.payload.flagState
            };

        default:
            return state
    }
}