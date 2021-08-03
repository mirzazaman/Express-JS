import React from 'react'
import useStudents from './useStudents'

export default function Students() {
    const [] = useStudents()
    
    return (
        <div>
            Hello World!
        </div>
    )
}
