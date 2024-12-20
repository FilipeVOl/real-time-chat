import React from 'react'

const User = ({profile}) => {
  return (
    <div>
         <div className='flex flex-row items-center gap-4 p-4 w-full h-full'>
            <img src={profile.icon} alt={profile.name} className='h-12 w-12 object-cover' />
            <h1 className='text-2xl'>{profile.name}</h1> 
        </div>
    </div>
  )
}

export default User