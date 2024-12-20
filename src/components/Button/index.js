import React from 'react'

const Button = ({
    label,
    type = 'button',
    className = '',
    disabled = false,
    onClick
}) => {
  return (
    <button type={type} 
    disabled={disabled}
    onClick={onClick}
    className={`text-white bg-blue-500 hover:blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${className}`}>{label}</button>
  )
}

export default Button