import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from '../../constants/Types';

let initialState = {
    newState=[]
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
                newState:[...state, action.payload]
            };
        case UPDATE_DATA:
            return {
                ...state,
            };
        case DELETE_DATA:
            return {
                ...state,

            };

        default:
            return state
    }
}