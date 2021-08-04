import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useInputForm from './useInputForm';
import TextField from '@material-ui/core/TextField';


export default function InputForm() {
  const [handleClickOpen, handleClose, open] = useInputForm();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={handleClickOpen}>
        <AddCircleIcon />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add Attandent"}</DialogTitle>
        <DialogContent>
          <form>
            <TextField id="standard-basic" label="Name" />
            <TextField id="standard-basic" label="Class" />
            <select style={{
              background: "transparent",
              border: "none", fontSize: "15px",
              marginTop: "20px",
              borderBottom: "ridge",
              padding: "3px",
              color:"#3F51B5"
            }}>
              <option>Select Role</option>
              <option>Lecturer</option>
              <option>Admin</option>
              <option>Moderate</option>
              <option>Student</option>
            </select>
          </form>
        </DialogContent>
        <DialogActions>

          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}