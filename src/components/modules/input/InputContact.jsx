import React from 'react'

function InputContact({ type, title, placeholder, width, variable, setVariable, id }) {
    return (
        <div style={{display:'inline-flex', flexDirection:"column", gap:"0.5rem", width:width}}>
            <label htmlFor={id} style={{cursor:"pointer"}}>{title}</label>
            <input type={type} placeholder={placeholder} style={{
                padding:"1rem",
                fontSize:"1rem",
                borderRadius: '0.375rem',
                border: '1px solid  #D1D5DB',
                fontFamily:"inherit",
                display:"inline"
            }} 
                value={variable}
                onChange={(e) => setVariable(e.target.value)}
                id={id}
            />
        </div>
    )
}

export default InputContact