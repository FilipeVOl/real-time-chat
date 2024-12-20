import { Avatar } from '@mui/material'
import React from 'react'
import Icon from '../../assets/avatar.svg'
import Icon2 from '../../assets/avatar2.svg'
import Icon3 from '../../assets/avatar3.svg'
import Icon4 from '../../assets/avatar4.svg'
import Icon5 from '../../assets/avatar5.svg'
import Icon6 from '../../assets/avatar6.svg'
import Offline from '../../assets/offline.svg'
import Online from '../../assets/green.svg'
import FormComponent from '../Form/index'
import { Outlet, useNavigate } from 'react-router-dom'

export const Profiles = {
  1: {
    name: "Filipe Gideão",
    icon: Icon
  },
  2: {
    name: "Adalberto Jesus",
    icon: Icon2
  },
  3: {
    name: "Giuliano Borchetti",
    icon: Icon3
  },
  4: {
    name: "José Queiroz",
    icon: Icon4
  },
  5: {
    name:"Euzéquio Damires",
    icon: Icon5
  },
  6: {
    name: "Quentum Dias",
    icon: Icon6
  }
}

const Chat = () => {

  const [selectedChat, setSelectedChat] = React.useState(null);

  const profilesArray = Object.keys(Profiles).map(key => ({
    id: key,
    ...Profiles[key],
    status: Math.random() > 0.5 ? "Available" : "Offline" // Added line
  }));

  const navigate = useNavigate();

  return (
    <div className='w-72 '>
      <div className='border-2 border-blue-400 outline-[#accffe] bg-[#accffe] divide-blue-400'>
      <div className='flex flex-col items-center p-4 border-b-2 border-blue-400 mb-8'>
            <Avatar alt="icon" src={Icon} sx={{ width: 100, height: 100 }} />
            <h1 className='text-2xl font-bold'>Jorginho</h1>
            <h1 className='text-xl font-semibold'>My account</h1>
          </div>
        <h1 className='text-blue-900 font-extrabold text-2xl justify-self-center mb-8'>Messages</h1>

        {profilesArray.map((profile) => (
          <div 
            key={profile.id} 
            className='flex flex-col gap-4 cursor-pointer border-b-2 hover:border-2 rounded-lg'
            onClick={() => navigate(`/chat/${profile.id}`)} // Modified line
          > 
          <div className='flex flex-row gap-4 items-center p-4 hover:scale-105'>
            <Avatar alt="icon" src={profile.icon} sx={{ width: 100, height: 100 }} />
            <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>{profile.name}</h1>
            <div className='flex flex-row gap-2'>
            <img className="w-4 h-4" src={profile.status === "Available" ? Online : Offline} alt="status" />
            <h1 className='text-xl font-semibold'>{profile.status}</h1>
            </div>
            </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Chat