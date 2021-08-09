import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DeleteData } from '../../store/actions/Action'

export default function useEdit() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateHandler = (ID) => {
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


    return [handleClickOpen, handleClose, open, updateHandler, deleteHandler]
}