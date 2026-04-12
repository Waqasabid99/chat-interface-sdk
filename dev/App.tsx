import React from 'react'
import { ChatWidget, Message } from '../src'

const App: React.FC = () => {
  const handleMessage = async (message: string, history: Message[]) => {
    const body = {
      model: "qwen3.5:0.8b",
      messages: [
        {
          role: "user",
          content: message
        },
      ],
      think: false,
      stream: true
    }
    console.log(body)
    const response = await fetch(`http://localhost:11434/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(`Chat API error: ${response.status} ${response.statusText} - ${text}`)
    }

    if (!response.body) {
      throw new Error('Streaming response body is not available.')
    }
    console.log(response.body)
    return response.body
  }

  return (
    <div>
      <h1>Chat Interface SDK Dev</h1>
      <ChatWidget onMessage={handleMessage} agentName='AA' placeholder='how can we help you' welcomeMessage='How are you' primaryColor='#000' />
    </div>
  )
}

export default App