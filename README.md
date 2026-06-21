# ai-chat-interface

> Zero-config AI chat widget for React. Drop in `<ChatWidget />`, pass your message handler, get a fully functional streaming chat — themed, accessible, and ready for production. Own your chat history, or let the widget manage it for you.

[![npm version](https://img.shields.io/npm/v/ai-chat-interface?style=flat-square)](https://www.npmjs.com/package/ai-chat-interface)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ai-chat-interface?style=flat-square)](https://bundlephobia.com/package/ai-chat-interface)
[![license](https://img.shields.io/npm/l/ai-chat-interface?style=flat-square)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [ChatWidget Props](#chatwidget-props)
- [Streaming](#streaming)
- [Chat History: Controlled vs Uncontrolled](#chat-history-controlled-vs-uncontrolled)
- [useChat Hook](#usechat-hook)
- [Hooks Reference](#hooks-reference)
- [Types](#types)
- [Help Articles](#help-articles)
- [Theming & Customization](#theming--customization)
- [Controlled Open/Close State](#controlled-openclose-state)
- [Accessibility](#accessibility)
- [Project Structure](#project-structure)
- [Contributing / Development](#contributing--development)
- [License](#license)

---

## Features

- 🚀 **Plug-and-play** — one component, one required prop
- 🌊 **First-class streaming** — natively handles `ReadableStream` responses (SSE / NDJSON)
- 🗂️ **You own your history** — fully optional controlled mode; persist, sync, or transform messages however you want, with zero library lock-in
- 🎨 **Themeable** — `light`, `dark`, or `auto` (follows OS preference), with a single `primaryColor` accent
- 🏠 **Multi-view widget** — Home screen, Chat panel, Help centre, and Article view built-in
- 🔍 **Help articles** — searchable knowledge-base with client-side filtering
- ♿ **Accessible** — focus trap, `Escape` to close, full ARIA support
- 📦 **Tiny footprint** — `<25 KB` ESM (widget), `<12 KB` (hook only), tree-shakeable
- 🔒 **TypeScript-first** — full type declarations included
- ⚛️ **React 18+** — concurrent-mode safe

---

## Installation

```bash
npm install ai-chat-interface
# or
yarn add ai-chat-interface
# or
pnpm add ai-chat-interface
```

**Peer dependencies** (install if not already present):

```bash
npm install react react-dom
```

> Requires **React ≥ 18** and **Node ≥ 18**.

---

## Quick Start

### Import the widget

```tsx
import { ChatWidget } from 'ai-chat-interface'

function App() {
  const handleMessage = async (message: string) => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
    return res.body! // Return a ReadableStream for streaming, or a string for one-shot responses
  }

  return <ChatWidget onMessage={handleMessage} />
}
```

That's it. The floating trigger button will appear in the bottom-right corner of your page, and the widget manages its own chat history internally. No persistence, no setup.

If you want to **own** that history yourself — sync it to a database, restore a session, sync across tabs — see [Chat History: Controlled vs Uncontrolled](#chat-history-controlled-vs-uncontrolled).

---

## ChatWidget Props

`<ChatWidget />` is the top-level component. All props except `onMessage` are optional.

### Required

| Prop        | Type                | Description                                                                                              |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| `onMessage` | `OnMessageHandler`  | Called for every user message. Must return a `Promise<string \| ReadableStream>`. See [Streaming](#streaming). |

### Identity & Branding

| Prop          | Type                        | Default           | Description                                                    |
| ------------- | --------------------------- | ------------------ | --------------------------------------------------------------- |
| `agentName`   | `string`                    | `"AI Assistant"`  | Display name shown in the header and recent-message card.      |
| `agentAvatar` | `string \| React.ReactNode` | —                  | Agent avatar. URL string renders an `<img>`; ReactNode is used as-is. Falls back to initials. |
| `logo`        | `string \| React.ReactNode` | —                  | Brand logo shown in the widget header and home screen.         |
| `primaryColor`| `string`                    | `"#2563EB"`        | Hex accent color applied to buttons, indicators, and links.    |

### Content

| Prop               | Type     | Default                            | Description                                                                         |
| ------------------ | -------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| `welcomeMessage`   | `string` | `"Need support?\nHow can we help?"` | Large heading on the home screen. Use `\n` for line breaks. Also prepended as the first assistant message in the chat (uncontrolled mode only — see below). |
| `welcomeSubMessage`| `string` | —                                   | Smaller sub-heading on the home screen. Supports `\n` line breaks.                  |
| `placeholder`      | `string` | `"Type a message…"`                 | Input field placeholder text.                                                       |
| `recentMessage`    | `string` | —                                   | Preview text shown on the home screen card. Ignored if `showHistory` is `true` and history is non-empty — see [`showHistory`](#layout--behaviour) below. |
| `recentMessageTime`| `string` | —                                   | Human-readable time label, e.g. `"1m"`, `"Just now"`.                               |
| `statusText`       | `string` | —                                   | Status line shown on the home screen, e.g. `"All Systems Operational"`.             |
| `statusUpdated`    | `string` | —                                   | Last-updated label, e.g. `"Updated Apr 12, 08:14 UTC"`.                             |

### Help Articles

| Prop              | Type            | Default | Description                                                                          |
| ----------------- | --------------- | ------- | -------------------------------------------------------------------------------------- |
| `helpArticles`    | `HelpArticle[]` | —       | Array of help article objects, fully owned by you. See [Help Articles](#help-articles). |
| `showHelpArticles`| `boolean`       | `false` | When `true` and `helpArticles` is non-empty, renders the search section and Help tab.   |

### Chat History

| Prop               | Type                                   | Default | Description                                                                                          |
| ------------------ | --------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `messages`          | `Message[]`                            | —       | **Controlled mode.** When provided, the widget never owns chat state — it renders exactly this array and asks you to update it via `onMessagesChange`. See [below](#chat-history-controlled-vs-uncontrolled). |
| `onMessagesChange`   | `(messages: Message[]) => void`        | —       | Called whenever the message array would change (new message, streaming chunk, retry, clear). Required when `messages` is provided. |
| `initialMessages`    | `Message[]`                            | —       | **Uncontrolled mode only.** Seeds the widget's internal history once, on first render. Ignored (with a dev warning) if `messages` is also provided. |
| `showHistory`        | `boolean`                              | `false` | When `true`, the home screen's "recent message" card shows the last message from the live chat history instead of the static `recentMessage` prop. |

### Layout & Behaviour

| Prop          | Type                               | Default            | Description                                                              |
| ------------- | ------------------------------------ | -------------------- | -------------------------------------------------------------------------- |
| `theme`       | `'light' \| 'dark' \| 'auto'`       | `"auto"`            | Color mode. `"auto"` respects the user's OS preference and updates live. |
| `defaultView` | `'home' \| 'chat'`                  | `"home"`            | Which panel is shown when the widget opens.                              |
| `position`    | `'bottom-right' \| 'bottom-left'`   | `"bottom-right"`    | Anchor position of the floating widget.                                  |
| `isOpen`      | `boolean`                           | —                   | External open state (enables controlled open/close — separate from controlled history). |
| `onOpenChange`| `(open: boolean) => void`           | —                   | Called whenever open state changes. Use with `isOpen`.                   |
| `className`   | `string`                            | —                   | Extra CSS class added to the root container.                             |
| `style`       | `React.CSSProperties`               | —                   | Inline style override for the root container.                            |

---

## Streaming

The `onMessage` callback receives the current user message and conversation history, and must return either:

- A **`string`** — the assistant's full reply (non-streaming)
- A **`ReadableStream`** — the widget handles SSE / NDJSON chunked text automatically (streaming)

The widget always owns stream parsing (SSE line splitting, JSON chunk decoding) in both controlled and uncontrolled history modes — you never need to write that logic yourself.

### Non-streaming example

```tsx
const handleMessage = async (message: string) => {
  const res = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await res.json()
  return data.reply // string
}
```

### Streaming example (OpenAI-compatible)

```tsx
const handleMessage = async (message: string) => {
  const res = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message, stream: true }),
    headers: { 'Content-Type': 'application/json' },
  })

  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.body! // ReadableStream — the widget renders tokens as they arrive
}
```

### Using conversation history

The `onMessage` handler receives the full message history as its second argument — the snapshot taken **before** the new user message is appended, so you get a clean prior-turns view regardless of whether you're in controlled or uncontrolled mode:

```tsx
import type { Message } from 'ai-chat-interface'

const handleMessage = async (message: string, history: Message[]) => {
  const messages = [
    ...history.map(m => ({ role: m.role, content: m.content })),
    { role: 'user', content: message },
  ]

  const res = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ messages, stream: true }),
    headers: { 'Content-Type': 'application/json' },
  })

  return res.body!
}
```

---

## Chat History: Controlled vs Uncontrolled

`ai-chat-interface` never persists anything and never decides what "history" means for your app. You can let the widget manage chat state internally (**uncontrolled** — the default), or own it yourself (**controlled**) and just hand the widget an array to render. The pattern mirrors React's own controlled/uncontrolled input convention.

**Detection rule:** if you pass `messages`, the widget is controlled. If you omit it, the widget manages its own state — identical to pre-1.1.0 behavior.

### Uncontrolled (default)

```tsx
<ChatWidget onMessage={handleMessage} welcomeMessage="Hi! How can I help?" />
```

The widget owns the `Message[]` array internally. You can seed it once via `initialMessages`, but it isn't synced — `initialMessages` is read on first render only.

### Controlled — you own the history

Pass `messages` and `onMessagesChange`. The widget becomes a pure renderer of whatever array you give it; the mechanics of a chat turn (inserting a loading placeholder, transitioning to `'streaming'`, appending chunks, finalizing to `'done'`/`'error'`) are still computed by the widget, but every resulting array is handed to you via `onMessagesChange` instead of stored internally.

```tsx
import { useState, useEffect } from 'react'
import { ChatWidget, type Message } from 'ai-chat-interface'

function App() {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chat-history')
    return saved ? JSON.parse(saved) : []
  })

  // Debounce the I/O — keep the UI update synchronous, throttle the write
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('chat-history', JSON.stringify(messages))
    }, 500)
    return () => clearTimeout(timer)
  }, [messages])

  const handleMessage = async (message: string, history: Message[]) => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message, history }),
    })
    return res.body
  }

  return (
    <ChatWidget
      messages={messages}
      onMessagesChange={setMessages}
      onMessage={handleMessage}
    />
  )
}
```

| You provide | The widget does |
|---|---|
| `messages: Message[]` | Renders exactly what you give it |
| `onMessagesChange(next)` | Called whenever the array would change — new user message, assistant reply, streaming chunk, retry, clear |
| `onMessage(text, history)` | Called when the user sends a message; you return the reply (string or stream) |

Where the data lives, how long it lives, and what storage backs it is entirely up to you — `localStorage`, a database, Redux, React Query, nowhere at all.

### Restoring a previous session

Since you own the array, restoring history is just setting state before render — no special "restore" API exists or is needed:

```tsx
const [messages, setMessages] = useState<Message[]>(() =>
  loadFromMyDatabase(userId)
)
```

### `onMessagesChange` and streaming frequency

Streaming responses still call `onMessagesChange` **per chunk**, not just once at the end — this keeps the UI responsive (tokens appear as they stream) but means a naive `onMessagesChange` that writes to `localStorage` or fires a network request on every call will run very frequently, potentially 50+ times per response.

If your `onMessagesChange` does I/O, debounce or throttle it, but **keep your local state update synchronous**:

```tsx
const handleMessagesChange = (next: Message[]) => {
  setMessages(next)   // synchronous — keeps the chat feeling live
  persistDebounced(next) // only the I/O is throttled
}
```

### Mixing `messages` and `initialMessages`

These two props serve different modes and shouldn't be combined. If both are passed, the widget logs a one-time development warning and ignores `initialMessages` — `messages` always wins. This warning is stripped from production builds and has no runtime or bundle-size cost there.

### Help articles

`helpArticles` is a prop you fully own — fetch from a CMS, hardcode, generate at build time. There's no internal/external mode split here because the widget has never stored article state. See [Help Articles](#help-articles).

---

## useChat Hook

For building fully custom chat UIs, use the `useChat` hook directly — without any of the widget UI. It supports the exact same controlled/uncontrolled split as `ChatWidget`.

### Uncontrolled

```tsx
import { useChat } from 'ai-chat-interface'

function MyChatUI() {
  const { messages, sendMessage, isLoading, error, clearMessages, retryLast } =
    useChat({
      onMessage: async (msg) => {
        const res = await fetch('/api/chat', {
          method: 'POST',
          body: JSON.stringify({ message: msg }),
          headers: { 'Content-Type': 'application/json' },
        })
        return res.body!
      },
      welcomeMessage: 'Hello! How can I help you today?',
    })

  return (
    <div>
      {messages.map(m => (
        <p key={m.id}><strong>{m.role}:</strong> {m.content}</p>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={() => sendMessage('Hello')}>Send</button>
      <button onClick={retryLast} disabled={isLoading}>Retry</button>
      <button onClick={clearMessages}>Clear</button>
    </div>
  )
}
```

### Controlled

```tsx
import { useState } from 'react'
import { useChat, type Message } from 'ai-chat-interface'

function MyChatUI() {
  const [messages, setMessages] = useState<Message[]>([])

  const { sendMessage, isLoading, error, clearMessages, retryLast } = useChat({
    onMessage: handleMessage,
    messages,
    onMessagesChange: setMessages,
  })

  // render `messages` from your own state, same as above
}
```

In controlled mode, `useChat` never holds its own internal copy of the array — every transition (new message, stream chunk, retry, clear) is computed and reported via `onMessagesChange`. Combine freely with React Query, Zustand, Redux, or a server-synced store.

### `useChat` options

| Option              | Type                                       | Description                                                                            |
| ------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `onMessage`          | `OnMessageHandler`                         | **Required.** Called for every sent message.                                            |
| `welcomeMessage`     | `string`                                   | Pre-populates a single assistant message before any user input (uncontrolled mode, or as the basis for `clearMessages` in either mode). |
| `initialMessages`    | `Message[]`                                | Uncontrolled mode only — seeds initial state on first render.                           |
| `messages`           | `Message[]`                                | Controlled mode — when provided, the hook stops owning state.                           |
| `onMessagesChange`   | `(messages: Message[]) => void`            | Controlled mode — called with every resulting array.                                    |

### `useChat` return values

| Value           | Type                          | Description                                                                              |
| --------------- | ------------------------------ | ------------------------------------------------------------------------------------------- |
| `messages`      | `Message[]`                    | Current message history, including streaming placeholders.                               |
| `sendMessage`   | `(text: string) => Promise<void>` | Sends a user message. No-ops if `isLoading` is `true` or `text` is empty.            |
| `isLoading`     | `boolean`                       | `true` while waiting for or streaming a response.                                        |
| `error`         | `string \| null`                | Last error message, or `null` if none.                                                   |
| `clearMessages` | `() => void`                    | Resets the conversation to its initial state (preserving `welcomeMessage` if set).       |
| `retryLast`     | `() => Promise<void>`           | Strips the last assistant/user exchange (e.g. an error bubble) and re-sends the last user message. |

---

## Hooks Reference

Additional hooks exported for advanced use cases:

### `useTheme(theme)`

Resolves the effective theme string and reactively updates when `"auto"` is used.

```tsx
import { useTheme } from 'ai-chat-interface'

const resolved = useTheme('auto') // 'light' | 'dark'
```

### `useScrollAnchor()`

Returns a `ref` that keeps a scroll container pinned to the bottom as new content arrives.

### `useStreamDetection(value)`

Type-guard hook: returns `true` when `value` is a `ReadableStream`.

### `useFocusTrap(ref, active)`

Traps keyboard focus within `ref` when `active` is `true`. Used internally by `ChatPanel`.

---

## Types

All types are exported from the package root:

```tsx
import type {
  Message,
  OnMessageHandler,
  UseChatOptions,
  UseChatReturn,
  Role,
  Status,
  Block,
  ChatConfig,
  Formatter,
} from 'ai-chat-interface'
```

### `Message`

```ts
interface Message {
  id: string
  role: Role               // 'user' | 'assistant'
  content: string
  timestamp: Date
  status?: Status           // 'loading' | 'streaming' | 'done' | 'error'
}
```

### `OnMessageHandler`

```ts
type OnMessageHandler = (
  message: string,
  history: Message[]
) => Promise<string | ReadableStream>
```

### `UseChatOptions`

```ts
interface UseChatOptions {
  onMessage: OnMessageHandler
  /** Optional welcome message shown as the first assistant message */
  welcomeMessage?: string
  /** Initial messages to populate the chat history (uncontrolled mode only) */
  initialMessages?: Message[]
  /** Optional controlled messages */
  messages?: Message[]
  /** Optional callback when messages change in controlled mode */
  onMessagesChange?: (messages: Message[]) => void
}
```

### `UseChatReturn`

```ts
interface UseChatReturn {
  messages: Message[]
  sendMessage: (text: string) => Promise<void>
  isLoading: boolean
  error: string | null
  clearMessages: () => void
  retryLast: () => Promise<void>
}
```

### `HelpArticle`

```ts
interface HelpArticle {
  /** Article title displayed as a clickable link */
  title: string
  /** Optional external URL — opens in a new tab when provided */
  href?: string
  /** Short description shown in the article card */
  description?: React.ReactNode | string
  /** Full article body content */
  content?: React.ReactNode | string
  /** Human-readable last-updated label, e.g. "Apr 12, 2026" */
  updatedAt?: string
}
```

> **Note:** the article object must use `href`, not `url`, for external links — the widget looks for `href` specifically.

### `ChatConfig`

```ts
interface ChatConfig {
  theme: 'light' | 'dark' | 'auto'
  apiEndpoint: string
  maxMessages?: number
}
```

Used by the optional `AIInterfaceProvider` context as a shared config layer across multiple widget instances. Not consumed internally by `ChatWidget` or `useChat` directly.

### `Block` / `Formatter` (forward-looking, not yet wired in)

```ts
type Block =
  | 'ParagraphBlock' | 'ImageBlock' | 'TextBlock' | 'CodeBlock'
  | 'TableBlock' | 'ListBlock' | 'QuoteBlock' | 'LinkBlock'
  | 'VideoBlock' | 'AudioBlock' | 'FileBlock' | 'UnknownBlock'

interface Formatter {
  parse(content: string): Block[]
}
```

`Block` and `Formatter` exist for a future structured-content renderer and aren't currently used by any shipped component — `MarkdownRenderer` handles content today via `react-markdown`. Exported for forward compatibility; safe to ignore unless you're building against the future API.

---

## Help Articles

Pass an array of `HelpArticle` objects to enable the built-in knowledge base. As with chat history, this array is entirely yours — fetch it, hardcode it, or generate it however you like; the widget never stores or mutates it.

```tsx
const articles = [
  {
    title: 'Getting started',
    description: 'A quick overview of the platform.',
    content: 'Full article content here…',
    updatedAt: 'Apr 12, 2026',
  },
  {
    title: 'Billing FAQ',
    href: 'https://docs.example.com/billing', // opens in new tab
    description: 'Answers to common billing questions.',
  },
]

<ChatWidget
  onMessage={handleMessage}
  helpArticles={articles}
  showHelpArticles={true}
/>
```

- Articles **without** an `href` open inline in the widget's Article view.
- Articles **with** an `href` open in a new browser tab.
- The home screen includes a **live client-side search** input that filters articles by title.

---

## Theming & Customization

### Theme

```tsx
<ChatWidget theme="dark" onMessage={handleMessage} />
// or let it follow the OS:
<ChatWidget theme="auto" onMessage={handleMessage} />
```

### Primary color

```tsx
<ChatWidget primaryColor="#7c3aed" onMessage={handleMessage} />
```

Any valid CSS hex color works. The color is applied via CSS custom properties so the widget always respects the chosen accent without injecting global styles.

### CSS custom properties

The widget exposes these CSS variables on its root element, which you can override from your own styles if needed:

| Variable                    | Default       | Description                   |
| ---------------------------- | -------------- | -------------------------------- |
| `--aiw-primary`             | `#2563EB`     | Main accent color             |
| `--aiw-primary-hover`       | derived       | Hover state of primary color  |
| `--aiw-radius`              | `1rem`        | Border radius                 |
| `--aiw-font`                | system stack  | Widget font family            |

---

## Controlled Open/Close State

Separately from controlling chat *history*, you can also drive the widget's open/closed visibility externally:

```tsx
import { useState } from 'react'
import { ChatWidget } from 'ai-chat-interface'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open chat</button>
      <ChatWidget
        onMessage={handleMessage}
        isOpen={open}
        onOpenChange={setOpen}
      />
    </>
  )
}
```

This is independent of `messages`/`onMessagesChange` — you can mix and match controlled open-state with uncontrolled history, controlled history with uncontrolled open-state, or control both.

---

## Accessibility

- Full **keyboard navigation** — `Tab`, `Shift+Tab`, `Enter`, `Space`
- **`Escape`** closes the widget from any view
- **Focus trap** keeps focus inside the open panel
- Focus returns to the trigger button when the widget closes
- ARIA roles: `dialog`, `aria-modal`, `aria-labelledby`, `aria-label` on all interactive elements
- All SVG icons are `aria-hidden` with a text alternative on their parents

---

## Project Structure

```
Chat-interface-sdk/
├── src/
│   ├── index.ts                 # Public API — all exports
│   ├── components/               # UI components (ChatWidget, ChatPanel, MessageList, etc.)
│   ├── hooks/
│   │   ├── useChat.ts            # Core state machine — controlled + uncontrolled
│   │   ├── useChat.helpers.ts    # Pure message-mutation functions used by useChat
│   │   ├── useTheme.ts
│   │   ├── useFocusTrap.ts
│   │   ├── useScrollAnchor.ts
│   │   └── useStreamDetection.ts
│   ├── context/                   # AIInterfaceProvider (optional global config)
│   ├── types/                     # Shared TypeScript types (Message, UseChatOptions, etc.)
│   ├── utils/                     # generateId, cssVars, cn, isReadableStream
│   └── styles/                    # Global CSS + theme files
├── dev/                            # Local dev harness (not shipped)
├── tests/
│   ├── unit/
│   │   ├── useChat.test.ts            # Uncontrolled-mode tests
│   │   └── useChat.controlled.test.ts # Controlled-mode tests
│   └── integration/
├── dist/                           # Built output (gitignored, published to npm)
└── package.json
```

### `useChat.helpers.ts`

`useChat`'s message-mutation logic is implemented as pure functions — no state, no side effects, each taking a `Message[]` and returning the next `Message[]`. Both controlled and uncontrolled modes in `useChat` call the same helpers; only what happens to the result differs (`setState` internally vs. `onMessagesChange` externally). This keeps streaming, retry, and clear logic identical regardless of which mode you use.

| Function | Purpose |
|---|---|
| `buildInitialMessages(welcomeMessage?, initialMessages?)` | Computes the starting array |
| `addUserMessage(messages, text, id, timestamp?)` | Appends a user message |
| `insertPlaceholder(messages, assistantId, timestamp?)` | Appends a `'loading'` assistant placeholder |
| `startStreaming(messages, assistantId)` | Transitions a placeholder to `'streaming'` |
| `appendStreamChunk(messages, assistantId, text)` | Appends streamed text to the in-flight message |
| `finalizeMessage(messages, assistantId, content, status, timestamp?)` | Sets final content/status (`'done'`/`'error'`) |
| `finalizeStreamSuccess(messages, assistantId)` | Marks a streaming message `'done'` |
| `finalizeStreamError(messages, assistantId, errorText)` | Marks a streaming message `'error'`, preserving partial content if any was streamed |
| `prepareRetry(messages)` | Strips the last assistant + user exchange ahead of a retry |
| `clearChat(welcomeMessage?, initialMessages?)` | Resets to the initial array |

These are internal implementation details, not part of the public API — documented here for contributors, not consumers.

---

## Contributing / Development

```bash
# 1. Clone and install dependencies
git clone https://github.com/Waqasabid99/chat-interface-sdk.git
cd chat-interface-sdk
npm install

# 2. Start the dev sandbox (hot-reload)
npm run dev

# 3. Run all tests
npm test

# 4. Run tests in watch mode
npm run test:watch

# 5. Check types
npm run type-check

# 6. Lint
npm run lint

# 7. Format code
npm run format

# 8. Build the library
npm run build

# 9. Check bundle size
npm run size
```

## License

[MIT](./LICENSE) © Waqas Ali Abid