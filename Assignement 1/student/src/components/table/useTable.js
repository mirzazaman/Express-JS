import { GetData } from "../../store/actions/Action"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"


export default function useTable() {
    const dispatch = useDispatch();
    const [tableLoading, setTableLoading] = useState(false)
    

    useEffect(() => {
        dispatch(
            GetData(setTableLoading)
        )
    }, [])
    
    return [tableLoading]
}