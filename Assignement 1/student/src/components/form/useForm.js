import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddData, InputForm, UpdateData } from "../../store/actions/Action";
import { useSelector } from 'react-redux'


export default function useForm() {
  const [name, setName] = useState("");
  const [stuClass, setStuClass] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch()
  const openCloseState = useSelector(store => store.updateOpenState)
  const flagState = useSelector(store => store.flagState)
  const dataForUpdate = useSelector(store => store.dataForUpdate)


  const handleClickOpen = () => {
    let states = {
      flagState: false,
      formOpenState: true
    }
    dispatch(
      InputForm(states)
    )
  };

  const handleClose = () => {
    let states = {
      flagState: false,
      formOpenState: false
    }
    dispatch(
      InputForm(states)
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
        id: dataForUpdate.id,
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