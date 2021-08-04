import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { List } from "../list/List"
import useEdit from './useEdit';

export default function Edit({ item }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [handleClickOpen, handleClose, open] = useEdit();       


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
                                <DialogContentText>Name: {item.name}</DialogContentText>
                                <DialogContentText>Class: {item.class}</DialogContentText>
                                <DialogContentText>Role: {item.role}</DialogContentText>
                                </>
                            )
                        }
                    })
                    }
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Delete
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Update
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}