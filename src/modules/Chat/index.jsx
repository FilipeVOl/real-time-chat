import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Profiles } from '../Dashboard/chat'
import { io } from 'socket.io-client';
import { GoogleGenerativeAI } from "@google/generative-ai";
import User from './User'
import ChatInput from './ChatInput';
import ChatHistory from './ChatHistory';
import Dashboard from '../Dashboard/chat'

const ChatComponent = () => {
  const { id } = useParams()
  const profile = Profiles[id] 
  const [userInput, setUserInput] = React.useState('') 
  const [chatHistories, setChatHistories] = React.useState({})
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    if (!chatHistories[id]) {
      setChatHistories(prev => ({ ...prev, [id]: [] })); // Inicializa o histórico de chat para o id atual se não existir
    }
    setUserInput('');
  }, [id])

  const genAI = new GoogleGenerativeAI("AIzaSyCFY3PeDUfvQp6A8Vv85assW0Ut71trQQY");
  const model = genAI.getGenerativeModel({model: "gemini-2.0-flash-exp"})

  const sendMessage = async (message) => {
    if (userInput.trim() === "") return;
    try {
      const result = await model.generateContent(userInput)
      const response = await result.response;
      console.log(response)
      setChatHistories(prev => ({
        ...prev,
        [id]: [...prev[id], {type: "user", message: userInput}, {type:"bot", message: response.text()}]
      }));
    } catch {
      console.error("Error sending message:")
    } finally {
      setUserInput("")
    }
  }

  const clearChat = () => {
    setChatHistories(prev => ({ ...prev, [id]: [] }));
  }

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  }

  return (
    <div className='w-full h-screen flex flex-col justify-between overflow-scroll'>
      <button className='sm:hidden p-2 bg-blue-500 text-white' onClick={toggleDashboard}>
        {showDashboard ? 'Esconder Sidebar' : 'Mostrar Sidebar'}
      </button>
      {showDashboard && <Dashboard toggleDashboard={toggleDashboard} />}
      {!showDashboard && (
        <>
          <div className='h-1/10 bg-blue-400 fixed top-0 w-full'>
            <User profile={profile} className="h-full" />
          </div>

          <div className='h-8/10 bg-blue-400 flex flex-col justify-end overflow-auto mt-16'>
            <ChatHistory chatHistory={chatHistories[id] || []} />
          </div>

          <div className='h-1/10 bg-blue-400 flex flex-col justify-end'>
            <div className='h-auto flex justify-center p-4'>
              <ChatInput setUserInput={setUserInput} userInput={userInput} sendMessage={sendMessage} clearChat={clearChat} />
            </div>
            <section className='flex-grow overflow-auto'>
            </section>
          </div>
        </>
      )}
    </div>
  )
}

export default ChatComponent