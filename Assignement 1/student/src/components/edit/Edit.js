import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useEdit from './useEdit';
import { useSelector } from 'react-redux';


export default function Edit({ item }) {
    const List = useSelector(store => store.newState)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [handleClickOpen, handleClose, open, updateForm, deleteHandler] = useEdit();


    return (
        <>
            <Button onClick={() => { handleClickOpen() }} color="primary">Edit</Button>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Attendent"}</DialogTitle>
                <DialogContent>
                    {List.map((idItem) => {
                        if (idItem.id === item.id) {
                            return (
                                <>
                                    <DialogContentText><b>Name: </b>{idItem.name}</DialogContentText>
                                    <DialogContentText><b>Class: </b>{idItem.stuClass}</DialogContentText>
                                    <DialogContentText><b>Role: </b>{idItem.role}</DialogContentText>
                                    <DialogActions>
                                        <Button autoFocus onClick={() => { deleteHandler(idItem.id) }} color="primary">
                                            Delete
                                        </Button>

                                        <Button autoFocus onClick={() => { updateForm(idItem) }} color="primary">
                                            Update
                                        </Button>

                                        <Button onClick={handleClose} color="primary" autoFocus>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </>
                            )
                        }
                    })
                    }
                </DialogContent>
            </Dialog>
        </>
    );
}