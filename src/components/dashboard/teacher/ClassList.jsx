import React from 'react'
import NewClass from './NewClass'
import { Divider } from '@mui/material'

function ClassList() {
    return (
        <div dir='rtl'>
            <div>ClassList</div>
            <Divider/>
            <div>
                <NewClass/>
            </div>
        </div>
    )
}

export default ClassList