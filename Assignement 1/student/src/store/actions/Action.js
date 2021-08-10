import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA, FORM} from "../../constants/Types"
import axios from "axios"

export const GetData = (setTableLoading) => async (dispatch) => {
    try {
        setTableLoading(true)
        let res = await axios.get('http://localhost:5000/')

        dispatch({
            type: GET_DATA,
            payload: res.data
        })

    } catch (error) {
        console.log("Error from GetData Action", error.message);

    } finally {
        setTableLoading(false)
    }
}

export const AddData = (data) => async (dispatch) => {
    try {
        await axios.post('http://localhost:5000/', { data })

        dispatch({
            type: ADD_DATA,
            payload: data
        })

    } catch (error) {
        console.log("Error from AddData Action", error.message);
    }

}

export const UpdateData = (data) => async (dispatch) => {

    try {
        await axios.put('http://localhost:5000/', { data })

        dispatch({
            type: UPDATE_DATA,
            payload: data
        })

    } catch (error) {
        console.log("Error in UpdateData Action", error.message);
    }
}

export const DeleteData = (ID) => async (dispatch) => {

    try {
        await axios.delete('http://localhost:5000/', { ID })

        dispatch({
            type: DELETE_DATA,
            payload: ID
        })

    } catch (error) {
        console.log("Error in DeleteData Action", error.message);
    }
}

export const Form = (states) => {

    return {
        type: FORM,
        payload: states
    }
}