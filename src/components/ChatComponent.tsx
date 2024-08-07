// components/ChatComponent.tsx
'use client'

import { ScrollArea } from '@radix-ui/react-scroll-area'
import { useState, useEffect, useCallback } from 'react'
import io from 'socket.io-client'
import { Input } from './ui/input'
import { Button } from './ui/button'

const socket = io('http://localhost:3000')

export default function ChatComponent() {
  const [messages, setMessages] = useState<{ username: string, message: string }[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [username, setUsername] = useState('')
  const [showName, setShowName] = useState(true)

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      socket.off('message')
    }
  }, [])



  const sendMessage = () => {
    if(showName === true){
      setShowName(false)
    }
    if (inputMessage.trim() && username.trim()) {
      socket.emit('message', { username, message: inputMessage })
      setInputMessage('')
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="mb-4">
        {showName ? (
          <>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <Input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        ) : (
          <div className="mb-2 text-gray-700 font-medium">
            Username: {username}
          </div>
        )}
      </div>
      <ScrollArea className="h-[400px] border border-gray-300 rounded-md p-4 bg-gray-100 overflow-auto">
        <div className="space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.username === username ? 'justify-end' : 'justify-start'} mb-2`}
            >
              <div className={`flex flex-col ${msg.username === username ? 'items-end' : 'items-start'}`}>
                {msg.username !== username && (
                  <div className="text-gray-600 text-sm mb-1">{msg.username}</div>
                )}
                  {msg.username === username && (
                  <div className="text-gray-600 text-sm mt-1">{msg.username}</div>
                )}
                <div className={`bg-white p-3 rounded-md shadow-sm ${msg.username === username ? 'bg-blue-100' : 'bg-gray-200'}`}>
                  {msg.message}
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex mt-4 space-x-2">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button onClick={sendMessage} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Send
        </Button>
      </div>
    </div>
  )
}
