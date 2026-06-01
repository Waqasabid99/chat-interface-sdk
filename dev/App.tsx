import React, { useEffect, useState } from 'react'
import { ChatWidget, type Message } from '../src'

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessage = async (message: string, history: Message[]) => {
    localStorage.setItem("messages", JSON.stringify(history));

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

    return response.body
  }

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

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
      <ChatWidget recentMessage={messages[messages.length - 1]?.content} onMessage={handleMessage} agentName='Pagal' primaryColor='#393939' placeholder='how can we help you' welcomeMessage='Need Support?' welcomeSubMessage='How can we help?'
        theme='light' showHistory={false} initialMessages={messages} helpArticles={helpArticles} showHelpArticles={true} />
    </div>
  )
}

export default App