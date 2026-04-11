import React, { createContext, useContext } from 'react'

interface AIInterfaceConfig {
  theme: 'light' | 'dark' | 'auto'
  apiEndpoint: string
}

const AIInterfaceContext = createContext<AIInterfaceConfig | null>(null)

export const AIInterfaceProvider: React.FC<{
  config: AIInterfaceConfig
  children: React.ReactNode
}> = ({ config, children }) => {
  return (
    <AIInterfaceContext.Provider value={config}>
      {children}
    </AIInterfaceContext.Provider>
  )
}

export const useAIInterface = () => {
  const context = useContext(AIInterfaceContext)
  if (!context) {
    throw new Error('useAIInterface must be used within AIInterfaceProvider')
  }
  return context
}