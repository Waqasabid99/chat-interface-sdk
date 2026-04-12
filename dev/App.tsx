import React from 'react'
import type { Message } from '../src'

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

  const helpArticles = [
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account.",
      url: "https://google.com"
    },
    {
      title: "How to create an account",
      content: "To create an account, please visit our website and click on the 'Sign Up' button. Follow the registration process to create your account. We can also help you with that. Follow these steps to create an account: 1. Visit our website at https://google.com 2. Click on the 'Sign Up' button. 3. Fill in the registration form. 4. Submit the form. 5. You will receive a confirmation email. 6. Click on the confirmation link to verify your account. 7. Your account will be activated within 24 hours.",
      url: "https://goofle.com"
    }
  ]

  return (
    <div className='w-screen h-screen'>
      <h1>Chat Interface SDK Dev</h1>
      {/* <ChatWidget onMessage={handleMessage} agentName='AA' placeholder='how can we help you' welcomeMessage='Need Support?' welcomeSubMessage='How can we help?' primaryColor='#000'
        theme='light' helpArticles={helpArticles} showHelpArticles={true} /> */}
    </div>
  )
}

export default App