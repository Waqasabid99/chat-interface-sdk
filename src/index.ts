// Public API exports
export { ChatWidget } from './components/ChatWidget'
export { ChatPanel } from './components/ChatPanel'
export { ChatHeader } from './components/ChatHeader'
export { MessageList } from './components/MessageList'
export { MessageBubble } from './components/MessageBubble'
export { TypingIndicator } from './components/TypingIndicator'
export { InputBar } from './components/InputBar'
export { TriggerButton } from './components/TriggerButton'
export { WidgetHome } from './components/WidgetHome'
export { WidgetHelp } from './components/WidgetHelp'

export { useChat } from './hooks/useChat'
export { useScrollAnchor } from './hooks/useScrollAnchor'
export { useStreamDetection } from './hooks/useStreamDetection'
export { useTheme } from './hooks/useTheme'
export { useFocusTrap } from './hooks/useFocusTrap'

export { AIInterfaceProvider } from './context/AIInterfaceContext'

export type * from './types'