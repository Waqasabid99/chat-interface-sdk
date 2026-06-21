export type Role = 'user' | 'assistant'

export type Status = 'loading' | 'streaming' | 'done' | 'error'

export type Block =
  | 'ParagraphBlock'
  | 'ImageBlock'
  | 'TextBlock'
  | 'CodeBlock'
  | 'TableBlock'
  | 'ListBlock'
  | 'QuoteBlock'
  | 'LinkBlock'
  | 'VideoBlock'
  | 'AudioBlock'
  | 'FileBlock'
  | 'UnknownBlock'

export interface ChatConfig {
  theme: 'light' | 'dark' | 'auto'
  apiEndpoint: string
  maxMessages?: number
}

export interface Formatter {
  parse(content: string): Block[]
}

export interface Message {
  id: string
  role: Role
  content: string
  timestamp: Date
  status?: Status
}

export type OnMessageHandler = (
  message: string,
  history: Message[]
) => Promise<string | ReadableStream>

export interface UseChatOptions {
  onMessage: OnMessageHandler
  /** Optional welcome message shown as the first assistant message */
  welcomeMessage?: string
  /** Initial messages to populate the chat history */
  initialMessages?: Message[]
  /** Optional controlled messages */
  messages?: Message[]
  /** Optional callback when messages change in controlled mode */
  onMessagesChange?: (messages: Message[]) => void
}

export interface UseChatReturn {
  messages: Message[]
  sendMessage: (text: string) => Promise<void>
  isLoading: boolean
  error: string | null
  clearMessages: () => void
  retryLast: () => Promise<void>
}
