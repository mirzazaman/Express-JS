import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useForm from './useForm';
import TextField from '@material-ui/core/TextField';


export default function Form() {
  const [handleClickOpen, handleClose, openCloseState, setName, setStuClass, setRole, updateHandler, inputHandler, flagState] = useForm();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={handleClickOpen}>
        <AddCircleIcon />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={openCloseState}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {
          flagState ? <DialogTitle id="responsive-dialog-title">{"Update Attandent"}</DialogTitle> :
            <DialogTitle id="responsive-dialog-title">{"Add Attandent"}</DialogTitle>
        }
        <DialogContent>
          <form>
            <TextField id="standard-basic" label="Name" onChange={(e) => { setName(e.target.value) }} />
            <TextField id="standard-basic" label="Class" onChange={(e) => { setStuClass(e.target.value) }} />
            <select style={{
              background: "transparent",
              border: "none", fontSize: "15px",
              marginTop: "20px",
              borderBottom: "ridge",
              padding: "3px",
              color: "#3F51B5"
            }} onChange={(e) => { setRole(e.target.value) }}>
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
          {
            flagState ? <Button onClick={() => { updateHandler() }} color="primary" autoFocus> Update </Button> :
              <Button onClick={() => { inputHandler() }} color="primary" > Add </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}