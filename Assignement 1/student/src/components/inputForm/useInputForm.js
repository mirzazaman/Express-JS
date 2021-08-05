import { useState } from "react";

export default function useInputForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [stuClass, setStuClass] = useState("");
  const [role, setRole] = useState("");


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
      alert(`Name:${name} Class:${stuClass} Role:${role}`)
      
      setName("")
      setStuClass("")
      setRole("Select Role")

      handleClose()
    }
  }

  return [handleClickOpen, handleClose, open, setName, setStuClass, setRole, inputHandler]
}