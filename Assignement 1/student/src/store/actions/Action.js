import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from "../../constants/Types"
import axios from "axios"

export const GetData = (setTableLoading) => async (dispatch) => {
    try {
        setTableLoading(true)
        let data = await axios.get('http://localhost:5000/')
        
        dispatch({
            type: GET_DATA,
            payload: data
        })

    } catch (error) {
        console.log("Error", error.message);        
    
    } finally{
        setTableLoading(false)
    }
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