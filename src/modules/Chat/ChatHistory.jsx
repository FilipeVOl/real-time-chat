import React from 'react'
import ReactMarkdown from "react-markdown"
const ChatHistory = ({chatHistory}) => {
  return (
    <>
        {chatHistory.map((chat, index) => (
            <div key={index}
            className={`flex items-start py-2 px-4 rounded-lg ${chat.type === "user" ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800"}`}
            >
                {chat.type === "user" && (
                    <span className='mr-2 font-bold text-gray-600'>Você:</span>
                )}
                <div>
                    <ReactMarkdown>{chat.message}</ReactMarkdown>
                </div>
            </div>
        ))}
    </>
  )
}

export default ChatHistory