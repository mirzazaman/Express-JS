import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddData } from "../../store/actions/Action";

export default function useInputForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [stuClass, setStuClass] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch()


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputHandler = () => {
    if (name.length === 0 || stuClass.length === 0 || role === "Select Role") {
      return
    } else {
      let data = {
        id: Math.random() * 6000,
        name: name,
        stuClass: stuClass,
        role: role
      }
      // alert(`Name: ${data.name} Class: ${data.stuClass} Role: ${data.role}`)
      dispatch(
        AddData(data)
      )

      setName("")
      setStuClass("")
      setRole("Select Role")

      handleClose()
    }
  }

  return [handleClickOpen, handleClose, open, setName, setStuClass, setRole, inputHandler]
}