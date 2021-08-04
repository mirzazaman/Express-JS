import { useState } from 'react'

export default function useEdit() {
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return [handleClickOpen, handleClose, open]
}