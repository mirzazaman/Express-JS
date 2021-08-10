import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddData, UpdateData } from "../../store/actions/Action";
import { useSelector } from 'react-redux'
import { Form } from "../../store/actions/Action";


export default function useForm() {
  const [name, setName] = useState("");
  const [stuClass, setStuClass] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch()
  const openCloseState = useSelector(store => store.updateOpenState)
  const flagState = useSelector(store => store.flagState)


  const handleClickOpen = () => {
    let states = {
      flagState: false,
      formOpenState: true
    }
    dispatch(
      Form(states)
    )
  };

  const handleClose = () => {
    let states = {
      flagState: false,
      formOpenState: false
    }
    dispatch(
      Form(states)
    )
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

      dispatch(
        AddData(data)
      )

      setName("")
      setStuClass("")
      setRole("Select Role")

      handleClose()
    }
  }

  const updateHandler = () => {
    handleClose()
    if (name.length === 0 || stuClass.length === 0 || role === "Select Role") {
      return

    } else {
      let data = {
        id: Math.random() * 6000,
        name: name,
        stuClass: stuClass,
        role: role
      }

      dispatch(
        UpdateData(data)
      )

      setName("")
      setStuClass("")
      setRole("Select Role")

    }
  }

  return [handleClickOpen, handleClose, openCloseState, setName, setStuClass, setRole, updateHandler, inputHandler, flagState]
}