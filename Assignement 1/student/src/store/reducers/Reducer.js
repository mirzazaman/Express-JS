import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA, INPUT_FORM, UPDATE_FORM } from '../../constants/Types';

let initialState = {
    newState: [],
    flagState: false,
    updateOpenState: false,
    dataForUpdate:{}
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
            let updatedList = state.newState.map((item) => {
                if (action.payload.id === item.id) {
                    console.log(item.id);
                    return { ...action.payload }
                }
                else {
                    return item
                }
            })

            return {
                ...state,
                newState: updatedList
            };

        case DELETE_DATA:
            let filterList = state.newState.filter((item) => item.id !== action.payload)
            return {
                ...state,
                newState: filterList
            };

        case INPUT_FORM:
            return {
                ...state,
                updateOpenState: action.payload.formOpenState,
                flagState: action.payload.flagState
            };

        case UPDATE_FORM:
            return {
                ...state,
                dataForUpdate: action.payload.idItem,
                updateOpenState: action.payload.states.formOpenState,
                flagState: action.payload.states.flagState
            };

        default:
            return state
    }
}