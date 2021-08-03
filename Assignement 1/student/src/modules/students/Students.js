import React from 'react'
import Header from '../../components/header/Header'
import useStudents from './useStudents'


export default function Students() {
    const [] = useStudents()
    
    return (
        <div>
            <Header/>
        </div>
    )
}
