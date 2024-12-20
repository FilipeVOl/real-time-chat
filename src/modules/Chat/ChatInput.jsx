import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const ChatInput = ({ setUserInput, userInput, sendMessage, clearChat }) => {
  return (
    <div className='flex flex-row items-center w-full gap-2'>
      <Input
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        label='Message'
        name='message'
        type='text'
        placeholder='Digite aqui...'
        className='flex-grow p-2 bg-white rounded-l-md w-[100%] sm:w-4/5'
      />
      <Button
        label="Enviar"
        onClick={() => sendMessage(userInput)}
        className='p-2 bg-blue-500 text-white rounded-r-md w-1/4 sm:w-1/5'
      />
      <Button
        label="Limpar"
        onClick={clearChat}
        className='p-2 bg-red-500 text-white rounded-r-md w-1/4 sm:w-1/5'
      />
    </div>
  )
}

export default ChatInput