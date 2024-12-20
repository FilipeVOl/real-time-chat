import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const ChatInput = ({setUserInput, userInput, sendMessage, clearChat}) => {
  return (
    <div className='flex gap-4 '>
        <Button
        label="Clear Chat"
        onClick={() => clearChat()}
        />

        <Input onChange={(e) => { setUserInput(e.target.value) }} 
        value={userInput}
        label='Message' 
        name='message' 
        type='text' 
        placeholder='Type your message here'
        className='bg-white' />

        <Button 
        label="Send"
        onClick={() => sendMessage(userInput)}></Button>
    </div>
  )
}

export default ChatInput