import React from 'react'
import { InputAdornment, Input as InputMui } from '@mui/material'
import Email from "../../assets/email.svg"


const Input = ({
    label = '',
    name = '',
    type = '',
    className = '',
    isRequired = false,
    placeholder = '',
    value = '',
    onChange = () => {},
    icon=null

}) => {


  return (
    <div>
        <label htmlFor={name} className='block mb2 text-sm font-medium text-gray-900 dark:text-gray-300'>{label}</label>
        <InputMui type={type} 
        id={name}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 ${className}`}>
        </InputMui>
    </div>
  )
}

export default Input