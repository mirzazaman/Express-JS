import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DeleteData, Form } from '../../store/actions/Action'

export default function useEdit() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateForm = () => {
        let states = {
            formOpenState: true,
            flagState: true
        }
        dispatch(
            Form(states)
        )

        // alert(ID)
        handleClose()
    }

    const deleteHandler = (ID) => {
        dispatch(
            DeleteData(ID)
        )

        // alert(ID)
        handleClose()
    }


    return [handleClickOpen, handleClose, open, updateForm, deleteHandler]
}