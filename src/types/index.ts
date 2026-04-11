export type Role = "user" | "assistant"
export type Status = "loading" | "streaming" | "done" | "error"

export interface ChatConfig {
  theme: 'light' | 'dark' | 'auto'
  apiEndpoint: string
  maxMessages?: number
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
  status?: Status;
}

export type OnMessageHandler = (
  message: string,
  history: Message[]
) => Promise<string | ReadableStream>;

export interface UseChatOptions {
  onMessage: OnMessageHandler;
  /** Optional welcome message shown as the first assistant message */
  welcomeMessage?: string;
}

export interface UseChatReturn {
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  clearMessages: () => void;
  retryLast: () => Promise<void>;
}