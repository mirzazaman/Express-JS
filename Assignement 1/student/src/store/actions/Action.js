import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from "../../constants/Types"

export const GetData = (data) => async (dispatch) => {

    dispatch({
        type: GET_DATA,
        payload: data
    })
}

export const AddData = (data) => async (dispatch) => {

    dispatch({
        type: ADD_DATA,
        payload: data
    })
}

export const UpdateData = (data) => async (dispatch) => {

    dispatch({
        type: UPDATE_DATA,
        payload: data
    })
}

export const DeleteData = (data) => async (dispatch) => {

    dispatch({
        type: DELETE_DATA,
        payload: data
    })
}