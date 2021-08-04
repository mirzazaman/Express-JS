import { useState } from "react";

export default function useInputForm() {
  const [open, setOpen] = useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    return [handleClickOpen, handleClose, open]
}
